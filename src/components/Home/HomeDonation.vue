<script setup>
import { RouterLink } from 'vue-router'
import { Chart } from 'chart.js/auto'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const error = ref(false)
const errorMsg = ref('')
const donateList = ref(null)
const expenditure = ref(null)
const expenditureAmount = ref(null)
const expenditureList = ref(null)
const donateAmount = ref('')

const fetchDonateData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/Donate.php`)
    if (!response.data.error) {
      donateAmount.value = response.data.data.reduce((acc, cur) => acc + Number(cur.DO_AMOUNT), 0)
      donateList.value = response.data.data.sort((a, b) => b.DO_ID - a.DO_ID).slice(0, 6)
    } else {
      error.value = true
      errorMsg.value = response.data.msg
    }
  } catch (error) {
    console.error(error)
    error.value = true
    errorMsg.value = error.message
  }
}


const fetchExpenditureData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/Expenditure.php`)
    if (!response.data.error) {
      expenditureAmount.value = response.data.reduce((acc, cur) => acc + Number(cur.EL_OUTLAY), 0)
      expenditure.value = response.data.sort((a, b) => b.EL_ID - a.EL_ID).slice(0, 6)
      expenditureList.value = response.data
      console.log('expenditure:', expenditureList.value)
    } else {
      error.value = true
      errorMsg.value = response.data.msg
    }
  } catch (error) {
    console.error(error)
    error.value = true
    errorMsg.value = error.message
  }
}

const formatNumber = (num) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const converDate = (date) => {
  return date.slice(0, 10).replace(/-/g, '/')
}

const colors = ['#6CE5E8', '#41B8D5', '#2D8BBA', '#2F5F98', '#31356E', '#5E17EB']

const donateDistribution = computed(() => {
  if (!expenditureList.value) return []

  const groupedData = expenditureList.value.reduce((acc, curr) => {
    if (!acc[curr.EL_NAME]) {
      acc[curr.EL_NAME] = 0
    }
    acc[curr.EL_NAME] += Number(curr.EL_OUTLAY)
    return acc
  }, {})

  const totalOutlay = Object.values(groupedData).reduce((sum, value) => sum + value, 0)

  const result = Object.entries(groupedData).map(([sort, outlay], index) => ({
    id: index + 1,
    sort,
    data: Math.round((outlay / totalOutlay) * 100),
    color: colors[index % colors.length]
  }))

  return result.sort((a, b) => b.data - a.data)
})

const donateChart = ref(null)

onMounted(async () => {
  await fetchDonateData()
  await fetchExpenditureData()

  const dataNum = donateDistribution.value.map((item) => item.data)
  const labels = donateDistribution.value.map((item) => item.sort + ' ' + item.data + '%')
  const chartColors = donateDistribution.value.map((item) => item.color)

  const ctx = donateChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [
        {
          data: dataNum,
          backgroundColor: chartColors,
          borderColor: 'rgba(0,0,0,0.1)'
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            color: '#000'
          },
          padding: 20
        }
      },
      layout: {
        padding: 0
      }
    }
  })
})
</script>

<template>
  <section class="section section-donation-summary">
    <div class="container">
      <h3>
        DONATION<br />
        捐款總攬
      </h3>
      <div class="row">
        <div class="col-12 col-lg-6 donate-num">
          <div class="clean-tons">
            <span class="debris-word">總金額</span>
            <span class="debris-num">{{ formatNumber(donateAmount) }}</span>
            <span class="debris-word">元</span>
          </div>
        </div>
        <div class="col-12 col-lg-6 donate-num">
          <div class="clean-tons donate-balance">
            <span class="debris-word">剩餘</span>
            <span class="debris-num">{{formatNumber(donateAmount-expenditureAmount)}}</span>
            <span class="debris-word">元</span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <canvas ref="donateChart" width="100%" height="500"></canvas>
        </div>
        <div class="col-12 col-lg-6">
          <table>
            <thead>
              <tr>
                <th class="donate-col">類別</th>
                <th class="donate-col">名目</th>
                <th class="donate-col">金額</th>
                <th class="donate-col">日期</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in expenditure" :key="item.id">
                <th>{{ item.EL_NAME }}</th>
                <td>{{ item.EL_TITLE }}</td>
                <td>{{ item.EL_OUTLAY }}</td>
                <td>{{ converDate(item.EL_DATE) }}</td>
              </tr>
            </tbody>
          </table>
          <p>*最新的六筆支出</p>
        </div>
      </div>
      <div class="col-12 donate-link">
        <div class="hover-zone">
          <router-link to="/donate">
            <div class="donate-btn">
              <div class="donate-btn-circle">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div class="donate-txt">立即捐款</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
