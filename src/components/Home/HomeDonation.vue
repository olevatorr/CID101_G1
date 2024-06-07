<script setup>
import { RouterLink } from 'vue-router';
import { Chart } from 'chart.js/auto';
import { ref, onMounted, } from 'vue';

const donateList = [
    {
        "id": 1,
        "sort": "海洋生態保育專案",
        "title": "珊瑚礁復育計畫資助",
        "amount": 300000,
        "date": "2023/7/1"
    },
    {
        "id": 2,
        "sort": "相關研究計畫",
        "title": "海洋塑膠污染研究項目",
        "amount": 200000,
        "date": "2023/8/15"
    },
    {
        "id": 3,
        "sort": "淨灘活動",
        "title": "全國淨灘日活動經費",
        "amount": 180000,
        "date": "2023/9/20"
    },
    {
        "id": 4,
        "sort": "教育宣導活動",
        "title": "校園海洋環保講座系列",
        "amount": 150000,
        "date": "2023/10/5"
    },
    {
        "id": 5,
        "sort": "行政及人事開支",
        "title": "海洋保護組織運營費用",
        "amount": 150000,
        "date": "2023/11/10"
    },
    {
        "id": 6,
        "sort": "網站維運及更新",
        "title": "海洋環保資料庫建設",
        "amount": 20000,
        "date": "2023/12/1"
    }
]

const donateDistribution = [
    { id: 1, sort: '海洋生態保育專案', data: 30, color: '#6CE5E8' },
    { id: 2, sort: '相關研究計畫', data: 20, color: '#41B8D5' },
    { id: 3, sort: '淨攤活動', data: 18, color: '#2D8BBA' },
    { id: 4, sort: '教育宣導活動', data: 15, color: '#2F5F98' },
    { id: 5, sort: '行政及人事開支', data: 15, color: '#31356E' },
    { id: 6, sort: '網站維護', data: 5, color: '5E17EB' },
];

const donateChart = ref(null);

onMounted(() => {
    const dataNum = donateDistribution.map(item => item.data);
    const labels = donateDistribution.map(item => item.sort + ' ' + item.data + '%');
    const colors = donateDistribution.map(item => item.color);

    const ctx = donateChart.value.getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: dataNum,
                backgroundColor: colors,
                borderColor: 'rgba(0,0,0,0.1)'
            }]
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
                },
            },
            layout: {
                padding: 0
            }
        }
    });
});
</script>

<template>
    <section class="section section-donation-summary">
        <div class="container">
            <h3>
                DONATION<br>
                捐款總攬
            </h3>
            <div class="row">
                <div class="col-12 col-lg-6 donate-num">
                    <div class="clean-tons">
                        <span class="debris-word">總金額</span>
                        <span class="debris-num">9,309,090</span>
                        <span class="debris-word">元</span>
                    </div>
                </div>
                <div class="col-12 col-lg-6 donate-num">
                    <div class="clean-tons donate-balance">
                        <span class="debris-word">剩餘</span>
                        <span class="debris-num">920,090</span>
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
                            <tr v-for="item in donateList" :key="item.id">
                                <th>{{ item.sort }}</th>
                                <td>{{ item.title }}</td>
                                <td>{{ item.amount }}</td>
                                <td>{{ item.date }}</td>
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
                            <div class="donate-txt">
                                立即捐款
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>