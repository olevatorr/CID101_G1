<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Chart from 'chart.js/auto';

const isMenuOpen = ref(false);
const isSubmenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleSubmenu = () => {
  isSubmenuOpen.value = !isSubmenuOpen.value;
};

const data = [
  { label: "捐款", data: 30, color: '#6CE5E8' },
  { label: "教育中心", data: 15, color: '#41B8D5' },
  { label: "淨攤活動", data: 30, color: '#2D8BBA' },
  { label: "商城", data: 20, color: '#2F5F98' },
  { label: "小遊戲", data: 5, color: '#31356E' }
];

const myChart = ref(null);

onMounted(() => {
  const dataNum = data.map(item => item.data);
  const labels = data.map(item => item.label + ' ' + item.data + '%');
  const colors = data.map(item => item.color);

  const ctx = myChart.value.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
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
          position: 'right',
          labels: {
            usePointStyle: true,
            color: '#fff'
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
  <header :class="{ 'blend-unset': isMenuOpen }">
    <nav>
      <RouterLink to="/">
        <div class="nav-logo">
          <img src="../public/img/LOGO-white.png" alt="BLUE ALER 藍色警戒">
        </div>
      </RouterLink>
      <div class="hb" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="navbar" :class="{ 'active': isMenuOpen }">
        <li>
          <RouterLink to="/about">關於我們</RouterLink>
        </li>
        <li class="subnav-toggle" @click="toggleSubmenu">
          <RouterLink to="/KnowledgeView">教育中心</RouterLink>
          <i class="fa-solid" :class="{ 'fa-caret-down': !isSubmenuOpen, 'fa-caret-up': isSubmenuOpen }"></i>
          <ul class="subnav" :class="{ 'active': isSubmenuOpen }">
            <li><a href="">教育</a></li>
            <li><RouterLink to="/BeachgameView">淨灘大作戰</RouterLink></li>
            <li><a href="">海廢人格測驗</a></li>
          </ul>
        </li>
        <li><a href="#">捐款</a></li>
        <li><RouterLink to="/shop">商品</RouterLink></li>
        <li>
          <RouterLink to="/events">活動</RouterLink>
        </li>
        <li><RouterLink to="/news">最新消息</RouterLink></li>
        <li class="nav-member"><RouterLink to="/Member">會員登入</RouterLink></li>
      </ul>
    </nav>
  </header>
  <RouterView />
  <footer>
    <div class="wrapper">
      <div class="footer-contact">
        <div>
          <h3>聯絡資訊</h3>
          <p>緯育TibaMe附設中壢職訓中心<br>320桃園市中壢區復興路46號9樓<br>(03) - 4251108</p>
          <div class="footer-media">
            <a href="#"><img src="../public/img/footer/fb.svg" alt=""></a>
            <a href="#"><img src="../public/img/footer/X.svg" alt=""></a>
            <a href="#"><img src="../public/img/footer/ig.svg" alt=""></a>
          </div>
        </div>
      </div>
      <div class="footer-structure">
        <div>
          <h3>網站內容</h3>
          <div class="piechart">
            <canvas ref="myChart" width="250" height="150"></canvas>
          </div>
          <div class="structure-sign">
            <img src="../public/img/footer/pie1.png" alt="">
            <img src="../public/img/footer/pie2.png" alt="">
            <img src="../public/img/footer/pie3.png" alt="">
          </div>
        </div>
      </div>
      <div class="footer-subscribe">
        <div class="footer-subscribe-wrap">
          <h3>訂閱電子報</h3>
          <p>馬上訂閱讓您不錯過任何最新活動與其他資訊</p>
          <div class="sub-input" placeholder="請輸入電子信箱">
            <input type="text">
            <button>立即訂閱</button>
          </div>
          <h3 class="footer-h3">為大家的海洋</h3>
          <p>小額捐款</p>
          <button>立即捐款</button>
        </div>
      </div>
      <div class="footer-guide">
        <div>
          <h3>快速導覽</h3>
          <ul class="guide">
            <li><a href="">首頁</a></li>
            <li><a href="">教育中心</a></li>
            <li><a href="">最新消息</a></li>
            <li><a href="">商城</a></li>
            <li><a href="">捐款</a></li>
            <li><a href="">活動</a></li>
            <li><a href="">關於我們&聯絡我們</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="announce">
      本網站為緯育TibaMe前端工程師班第90期學員專題作品，本網站僅供學習、展示之用。若有侵權將立刻下架，請聯絡@wiedu.com <br>
      The website is a project work of the 90th batch of front-end engineer students from TibaMe. This website
      is
      for learning and demonstration purposes only. If any infringement occurs, it will be taken down
      immediately.
      Please contact @wiedu.com
    </div>
  </footer>
</template>


<style lang="scss">
@import './assets/sass/style.scss';
</style>
