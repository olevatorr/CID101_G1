<template>
  <div>
    <h2>海洋廢棄物分類統計</h2>
    <canvas id="wasteTypesChart"></canvas>
    <h2>清理活動統計</h2>
    <canvas id="cleaningActivitiesChart"></canvas>
    <h2>清理後處理方式和無法分類廢棄物統計</h2>
    <canvas id="disposalChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'MyCharts',
  data() {
    return {
      wasteData: null,
      cleaningData: null,
      disposalData: null
    }
  },
  mounted() {
    // 從 JSON 數據中提取所需的數據
    const wasteTypes = [
      { label: '寶特瓶', value: 54.612 },
      { label: '鐵罐', value: 13.013 },
      { label: '鋁罐', value: 5.844 },
      { label: '玻璃瓶', value: 16.304 }
    ]

    const cleaningActivities = [
      { label: '清理次數', value: 3201 },
      { label: '參與人數', value: 16789 }
    ]

    const disposalData = [
      { label: '掩埋', value: 68.024 },
      { label: '回收再利用', value: 273.908 },
      { label: '焚化', value: 689.401 },
      { label: '無法分類廢棄物', value: 763.846 }
    ]

    this.wasteData = {
      labels: wasteTypes.map(type => type.label),
      datasets: [
        {
          data: wasteTypes.map(type => type.value),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8C489F'
          ]
        }
      ]
    }

    this.cleaningData = {
      labels: cleaningActivities.map(activity => activity.label),
      datasets: [
        {
          data: cleaningActivities.map(activity => activity.value),
          backgroundColor: [
            '#FF6384',
            '#36A2EB'
          ]
        }
      ]
    }

    this.disposalData = {
      labels: disposalData.map(item => item.label),
      datasets: [
        {
          data: disposalData.map(item => item.value),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8C489F'
          ]
        }
      ]
    }

    this.createCharts()
  },
  methods: {
    createCharts() {
      const wasteTypesCtx = document.getElementById('wasteTypesChart').getContext('2d')
      const cleaningActivitiesCtx = document.getElementById('cleaningActivitiesChart').getContext('2d')
      const disposalCtx = document.getElementById('disposalChart').getContext('2d')

      new Chart(wasteTypesCtx, {
        type: 'pie',
        data: this.wasteData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '海洋廢棄物分類統計'
            }
          }
        }
      })

      new Chart(cleaningActivitiesCtx, {
        type: 'pie',
        data: this.cleaningData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '清理活動統計'
            }
          }
        }
      })

      new Chart(disposalCtx, {
        type: 'pie',
        data: this.disposalData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '清理後處理方式和無法分類廢棄物統計'
            }
          }
        }
      })
    }
  }
}
</script>