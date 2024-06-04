<canvas ref="doughnutChartCanvas"></canvas>
<canvas ref="lineChartCanvas"></canvas>
<!-- ----------------------------------------------------------------垃圾種類圖 -->
<template>
<!-- 图表 -->

<div id="app">
<!-- ----------------------------------------------------------------banner -->
  <section class="section section-knowledge-banner">
    <div class="container">
      <h1 class="section">教育中心</h1>
      <h2 class="subtitle">守護海洋，從知識開始</h2>
      <p>
        在我們的教育中心，您可以找到豐富的資源和互動內容，幫助您了解海洋污染問題並參與保護行動。我們提供多樣化的學習工具，讓每一位訪客都能輕鬆獲取相關知識，並在趣味中學習環保的重要性。
      </p>
    </div>
  </section>
<!-- ----------------------------------------------------------------什麼是海洋廢棄物？ -->
  <section class="section section-bg">
    <div class="container">
      <div class="row">
        <div class="trash-txt col-12 col-lg-6 col-md-12">
          <h3>什麼是海洋廢棄物？</h3>
          <p>
            海洋廢棄物是指人類活動產生的廢棄物進入海洋環境後，對海洋生態系統造成的污染物。這些廢棄物包括塑膠製品、金屬、玻璃、紙張、橡膠和化學物質等。海洋廢棄物來源廣泛，主要來自於陸地上的垃圾、海上活動（如漁業和航運業）、工業排放以及自然災害。
          </p>
          <p>
            覺得旁邊的圖美嗎？是的，我也覺得很漂亮，但美麗是主觀的，事實上這正是我們想要強調的一點，海洋的美麗不僅僅在於它的外觀，而是在於它內在的健康和生命力。海洋廢棄物的污染，無論再怎麼美麗的景色，也會變得令人擔憂。我們希望通過提高公眾對海洋污染問題的認識，讓更多人參與到海洋保護的行動中來，共同守護這片藍色的美麗。
          </p>
        </div>
        <div class=" tr-pic col-12 col-lg-6 col-md-12">
          <img src="../../public/img/knowledge/banner2.png">
        </div>
      </div>
    </div>
  </section>
<!-- ----------------------------------------------------------------全台灣沿海廢棄數據 -->
  <section class="section section-data">
    <div class="container">
      <h3>全台灣沿海廢棄數據</h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
            <img src="https://picsum.photos/562/528/?random=19" width="100%">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="button button-area">
            <button>水質</button>
            <button>懸浮粒子</button>
            <button>垃圾總量</button>
            <button>還在找</button>
          </div>
          <div class="news-filter">
            <select name="name" id="">
              <option value="0">請選擇地區</option>
              <option value="1">台北市</option>
              <option value="2">新北市</option>
              <option value="3">桃園市</option>
              <option value="4">桃園縣</option>
            </select>
          </div>
          <div class="card-data">
            <h3>基隆市海廢月份圖表</h3>
            <div class="span-flex">
              <!-- <span>
                <div class="red-box"></div>
                <p>海廢頓數</p>
              </span>
              <span>
                <div class="blue-box"></div>
                <p>淨灘人數統計</p>
              </span> -->
            </div>
            <!-- <img src="https://picsum.photos/550/250/?random=10"> -->
            <canvas ref="lineChartCanvas"></canvas>
          </div>
          <p>
            塑料是最常見的海洋廢棄物之一，尤其是一次性塑料製品，如吸管、塑料袋和瓶子。這些塑料製品長期漂浮在海洋中，分解成微小的塑料碎片，危害海洋生物的健康，甚至進入了人類的食物鏈。
          </p>
        </div>
      </div>
    </div>
  </section>
<!-- ----------------------------------------------------------------垃圾種類 -->
  <section class="section">
    <div class="container">
      <div class="row">
      <div  class="flex col-12 col-md-6">
        <div class="trash-type">
          <h3>垃圾種類</h3>
          <div class="piechart">
            <canvas ref="doughnutChartCanvas"></canvas>
          </div>
        </div>
        <div class="card-type">
          <div class="p-type">
          <div class="color-box">
            <div class="blue-box"></div>
            <p>塑膠垃圾</p>
          </div>
          <div class="color-box">
            <div class="yellow-box"></div>
            <p>捕魚漁網</p>
          </div>
          <div class="color-box">
            <div class="red-box"></div>
            <p>漂流木</p>
          </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="trash-card">
          <h3>基隆垃圾處理方式</h3>
          <div>
            <img src="https://picsum.photos/535/232/?random=10" width="100%">
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
<!-- ----------------------------------------------------------------海廢知識庫 -->
  <section class="section section-knowledge">
    <div class="container">
      <h2>海廢知識庫</h2>
      <div class="row">
        <div
          class="card-c col-12 col-sm-6 col-md-4 col-lg-3 image-container"
          v-for="(card, index) in cards"
          :key="card.imgSrc"
          @click="showLightbox(index)"
        >
          <div class="card">
            <div class="pic-card">
              <img :src="card.imgSrc" class="card-img-top" alt="" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
        </div>

        <div v-if="showLightboxModal" class="lightbox">
          <div class="lightbox-content">
            <span class="close" @click="closeLightbox"><i class="fa-regular fa-circle-xmark"></i></span>
            <img :src="cards[currentIndex].imgSrc" :alt="cards[currentIndex].title" />
            <div class="image-caption">
              <h5>{{ cards[currentIndex].title }}</h5>
              <p>{{ cards[currentIndex].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- ----------------------------------------------------------------小遊戲 -->
  <section class="section section-game">
    <div class="container">
      <h2>放鬆之餘，也能用有趣的方式更了解海廢</h2>
        <div class="card">
            <div class="row">
              <div class="card-content col-12 col-md-3">
                      <img src="https://picsum.photos/208/208/?random=15" width="100%">
              </div>
              <div class="card-content col-12 col-md-6">
                <h3>海廢小遊戲</h3>
                <p>
                  通過我們設計的海廢小遊戲，您可以在遊戲中學習如何識別和處理海洋垃圾，並體驗保護海洋的樂趣。這些遊戲不僅適合兒童，也能吸引成年人參與其中。
                </p>
              </div>
              <div class="card-content col-12 col-md-3">
                  <button><RouterLink to="/Beachgame">立即前往</RouterLink></button>
              </div>
            </div>
        </div>
      

      <div class="card">
            <div class="row">
              <div class="card-content col-12 col-md-3">
                      <img src="https://picsum.photos/208/208/?random=10" width="100%">
              </div>
              <div class="card-content col-12 col-md-6">
                <h3>海廢Q&A</h3>
                <p>
                  我們設計了一個有趣且有教育意義的問卷，讓您通過回答一系列問題來了解自己屬於什麼樣的海洋人格。這個問卷不僅可以幫助您更深入地認識海洋垃圾問題，還能增加您對海洋保護的興趣和參與度。
                </p>
              </div>
              <div class="card-content col-12 col-md-3">
                  <button><RouterLink to="/MbtiView">立即前往</RouterLink></button>
              </div>
            </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// // 导航菜单状态
// const isMenuOpen = ref(false);
// const isSubmenuOpen = ref(false);

// 导航菜单控制方法
// const toggleMenu = () => {
//   isMenuOpen.value = !isMenuOpen.value;
// };

// const toggleSubmenu = () => {
//   isSubmenuOpen.value = !isSubmenuOpen.value;
// };

// 甜甜圈图表数据
const doughnutData = [
  { label: '塑膠垃圾', data: 30, color: '#00ADF3' },
  { label: '捕魚漁網', data: 15, color: '#E7A600' },
  { label: '漂流木', data: 30, color: '#D35656' }
];

const doughnutChartCanvas = ref(null);
const lineChartCanvas = ref(null);

// 折线图表数据
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const mixedData = {
  labels: months,
  datasets: [
    {
      type: 'bar', // 垃圾總量使用柱狀圖
      label: '海費噸數',
      data: [23, 18, 25, 19, 20, 21, 22, 19, 18, 17, 16, 15],
      backgroundColor: '#D35656',
      borderColor: '#D35656',
      borderWidth: 1,
      fill: true
    },
    {
      type: 'line', // 淨灘人數統計使用折線圖
      label: '淨灘人數統計',
      data: [30, 25, 28, 22, 24, 23, 26, 21, 20, 19, 18, 17],
      backgroundColor:'rgba(255,255,255,0)',
      borderColor: '#2F80DE', 
      borderWidth: 1,
      fill: true
    }
  ]
};

const mixedOptions = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: '數量'
      }
    },
    x: {
      title: {
        display: true,
        text: '月份'
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  }
};

// 绘制图表
onMounted(() => {
  // 绘制甜甜圈图表
  const doughnutCtx = doughnutChartCanvas.value.getContext('2d');
  const doughnutDataNum = doughnutData.map((item) => item.data);
  const doughnutLabels = doughnutData.map((item) => item.label + ' ' + item.data + '%');
  const doughnutColors = doughnutData.map((item) => item.color);

  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: doughnutLabels,
      datasets: [
        {
          data: doughnutDataNum,
          backgroundColor: doughnutColors,
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false // 隐藏图例标签
        }
      }
    }
  });

  // 绘制混合图表
  const lineCtx = lineChartCanvas.value.getContext('2d');
  new Chart(lineCtx, {
    type: 'bar', // 预设类型为柱状图，混合图表会根据每个数据集的类型分别渲染
    data: mixedData,
    options: mixedOptions
  });
});

// 卡片数据
const cards = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  imgSrc: `https://picsum.photos/300/150/?random=${index + 1}`,
  title: '海洋動物調查',
  description: '鯨魚是世界上最大的動物，最大的藍鯨可以達到30米長，重達180噸。鯨魚分為齒鯨和鬚鯨兩類，齒鯨如虎鯨，捕食魚類和其他海洋動物；鬚鯨則過濾大量浮游生物和小魚來獲取食物。'.slice(0, 14) + '...' // 只顯示前14個字+...
}));

// Lightbox 模态框状态
const showLightboxModal = ref(false);
const currentIndex = ref(null);

const showLightbox = (index) => {
  showLightboxModal.value = true;
  currentIndex.value = index;
};

const closeLightbox = () => {
  showLightboxModal.value = false;
};

</script>
