<!-- ----------------------------------------------------------------垃圾種類圖 -->
<template>
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
    <!-- ---------------------------------------------------------------------------------------全台灣沿海廢棄數據 -->
    <section class="section section-data">
    <div class="container">
      <div>
        <h2>各縣市海洋廢棄物清理次數與參與人數</h2>
        <div id="scatter-plot"></div>
      </div>
      <h3>全台灣沿海廢棄數據</h3>
      <div class="row">
          <!-- 台灣地圖 -->
        <div class="col-12 col-md-6">
          <button @click="ShowAll">全台灣總計</button>
          <div id="map" ref="myMap" style="width: 100%; height: 500px"></div>
        </div>
            <!-- 垃圾種類 -->
        <div class="col-12 col-md-6">
          <div class="row" style="width: 50%;">
            <div class="col-12">
              <div class="box" style="width: 100%;">
                <canvas id="twChart"></canvas>
              </div>
            </div>
            <!-- 淨灘人數與次數 -->
            <div class="col-12">
              <div class="box">
                <canvas id="attendChart"></canvas>
              </div>
            </div>
            <!-- 垃圾處理分類 -->
            <div class="col-12">
              <div class="box">
                <canvas id="trash"></canvas>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 新增的 Canvas 元素 -->
        <!-- <div class="col-12 col-md-6">
          <div class="box" style="height: 300px;width: 100%;">
            <canvas id="twChart3"></canvas>
          </div>
        </div> -->
        <!-- 海水汙染指標 -->
        <div class="col-12 col-md-6">
          <div class="news-filter">
            <select name="name" id="" @change="changeIndicator">
              <option value="0">請選擇類型</option>
              <option v-for="indicator in indicators" :key="indicator.value" :value="indicator.value">{{ indicator.label }}</option>
            </select>
            <canvas id="myChart" width="400px" height="200px"></canvas>
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 image-container" v-for="(card, index) in cards"
            :key="card.imgSrc" @click="showLightbox(index)">
            <!-- <div class="card-c">
            <div class="pic-card">
              <img :src="card.imgSrc" class="card-img-top" alt="" />
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div> -->
            <!-- 測試卡片 -->
            <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h1 class="animate slide-left pop delay-4">海洋動物調查</h1>
                  <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">Kingdom: 海洋保護會
                  </p>
                </div>
                <div class="image-content animate slide delay-5"></div>
              </div>
              <div class="text">
                <img class="inset" src="../../public/img/knowledge/1.png">
              </div>
            </div>
            <!-- 測試卡片 -->
          </div>

          <div v-if="showLightboxModal" class="lightbox">
            <div class="lightbox-content">
              <span class="close" @click="closeLightbox"><i class="fa-regular fa-circle-xmark"></i></span>
              <img :src="cards[currentIndex].imgSrc" :alt="cards[currentIndex].title" />
              <div class="image-caption">
                <h3>{{ cards[currentIndex].title }}</h3>
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
              <button>
                <RouterLink to="/Beachgame">立即前往</RouterLink>
              </button>
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
              <button>
                <RouterLink to="./MbtiView.vue">立即前往</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import jsonData from '../../public/json/海域水質.json';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

// 使用 ref 定義響應式數據變量
const apiData = ref(null);  // 儲存水質數據
const selectedIndicator = ref('SS');  // 預設選中的指標
let myChart = null;  // 定義圖表實例
let twChart = null;  // 定義台灣地區圖表實例
let attendChart = null;
let trash = null;
// let twChart3 = null;
const myMap = ref(null);  // 地圖容器引用



// 定義指標描述信息
// const indicatorDescriptions = {
//   SS: {
//     ranges: [
//       { level: '正常', value: '< 10 mg/L' },
//       { level: '輕度污染', value: '10 - 20 mg/L' },
//       { level: '中度污染', value: '20 - 50 mg/L' },
//       { level: '重度污染', value: '> 50 mg/L' },
//     ],
//   },
//   // 其他指標省略...
// };

// 定義指標選項
const indicators = [
  { value: 'SS', label: '懸浮固體(mg/L)' },
  { value: 'CHL_a', label: '葉綠素a(μg/L)' },
  { value: 'NO3_N', label: '硝酸鹽氮(mg/L)' },
  { value: 'NO2_N', label: '亞硝酸鹽氮(mg/L)' },
  { value: 'MI3PO4', label: '正磷酸鹽(mg/L)' },
  { value: 'Cr', label: '鉻(mg/L)' },
  { value: 'Zn', label: '鋅(mg/L)' },
  { value: 'DO_ELE', label: '溶氧(電極)(mg/L)' },
  { value: 'DO_S', label: '溶氧飽和度(%)' },
  { value: 'PH', label: '酸鹼值' },
];

// 設置數據並初始化圖表
function setupData() {
  // 將數據按時間排序
  const sortedData = jsonData.sort((a, b) => new Date(b.UPDATE_TIME) - new Date(a.UPDATE_TIME));
  apiData.value = sortedData;  // 設置 API 數據
  setupChart();  // 初始化圖表
}

// Vue 組件掛載時執行
onMounted(() => {
  Chart.register(...registerables);  // 註冊 Chart.js 組件
  setupData();  // 設置數據
});

// 設置圖表
function setupChart() {
  const ctx = document.getElementById('myChart');

  // 過濾數據，只顯示丙類水質數據
  const filteredData = apiData.value.filter(item => item.BODY_LEVEL === "丙類");// 獲取標籤和指標值
  const labels = filteredData.map(item => item.STATION_NAME);
  const indicatorValues = filteredData.map(item => item[selectedIndicator.value]); // 獲取樣本日期
  const sampleDate = filteredData.length > 0 ? filteredData[0].SAMPLE_DATE : '無資料';

  if (myChart) {
    myChart.destroy();  // 如果圖表已存在，先銷毀舊圖表
  }

  myChart = new Chart(ctx, {
    type: 'line',  // 設置圖表類型為折線圖
    data: {
      labels: labels,  // 設置圖表標籤
      datasets: [{
        label: indicators.find(item => item.value === selectedIndicator.value).label,  // 設置數據集標籤
        data: indicatorValues,  // 設置數據集數據
        backgroundColor: '#00AFB9',  // 設置背景顏色
        borderColor: '#00AFB9',  // 設置邊框顏色
        borderWidth: 1,  // 設置邊框寬度
        pointBackgroundColor: '#40916C',  // 設置數據點背景顏色
        pointBorderColor: '#fff',  // 設置數據點邊框顏色
        pointHoverBackgroundColor: '#fff',  // 設置數據點懸停背景顏色
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true  // 設置 y 軸從 0 開始
        }
      },
      plugins: {
        title: {
          display: true,
          text: '海水污染指標',
          font: {
            size: 20  // 設置標題字體大小
          }
        },
        legend: {
          position: 'top',  // 設置圖例位置
        },
        annotation: {
          annotations: [{
            type: 'label',
            xValue: labels[labels.length - 1],  // 設置標註 x 軸值
            yValue: indicatorValues[indicatorValues.length - 1],  // 設置標註 y 軸值
            backgroundColor: 'rgba(0, 0, 0, 0.8)',  // 設置標註背景顏色
            content: ['採樣時間: ' + sampleDate],  // 設置標註內容
            font: {
              style: 'italic',
              color: 'white'  // 設置標註字體顏色
            }
          }]
        }
      }
    }
  });
}

// 切換指標
function changeIndicator(event) {
  selectedIndicator.value = event.target.value;  // 更新選中指標
  setupChart();  // 重新設置圖表
}
// ---------------------------------------------------------------------------------------------------------------------地圖
let svg;

// 組件卸載前移除事件監聽器
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeMap);  // 移除調整地圖大小事件監聽器
});

// 初始化地圖
async function initMap() {
  const container = myMap.value;

  const width = container.clientWidth;  // 獲取容器寬度 父層的content+padding
  const height = container.clientHeight;  // 獲取容器高度

  svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const projection = d3.geoMercator()
    .center([120, 23.5])  // 設置投影中心
    .scale(5000)  // 設置投影縮放
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);
  const topoData = await d3.json('../../public/localjson/map/COUNTY_tw.topo.json');  // 加載地圖數據
  const geoData = topojson.feature(topoData, topoData.objects.COUNTY_MOI_1090820);

  // 將地理數據附加到 SVG 元素中並設定屬性
  svg.selectAll('path')
    .data(geoData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', '#E7A600')
    .attr('stroke', 'white')
    .on('click', function(event, d) {
      // 重置所有路徑的顏色
      svg.selectAll('path').attr('fill', '#E7A600');
      // 改變選中路徑的顏色
      d3.select(this).attr('fill', '#48BFE3');
      
      // 根據選中地區更新圖表數據
      const regionName = d.properties.COUNTYNAME;
      updateChartForRegion(regionName);
    });
}
// Vue 組件掛載時初始化地圖並設置調整地圖大小事件
onMounted(() => {
  initMap();
  window.addEventListener('resize', resizeMap);
});

// 調整地圖大小
function resizeMap() {
  const container = myMap.value;
  d3.select(container).select('svg').remove();  // 移除舊的 svg 元素
  initMap();  // 重新初始化地圖
}
//------------------------------------------------------------------------------------------------------------------------垃圾數據
// 顯示全台灣總計數據
const ShowAll = function (){
  const regionName = '總計';
  updateChartForRegion(regionName);
}

const hebrisData = ref(null);  // 儲存垃圾數據

// 定義垃圾分類標籤
const hebrisSortLabels = [
  "清理數量分類(噸)_寶特瓶",
  "清理數量分類(噸)_鐵罐",
  "清理數量分類(噸)_鋁罐",
  "清理數量分類(噸)_玻璃瓶",
  "清理數量分類(噸)_廢紙",
  "清理數量分類(噸)_竹木",
  "清理數量分類(噸)_保麗龍",
  "清理數量分類(噸)_廢漁具漁網",
  "清理數量分類(噸)_無法分類廢棄物",
];

// 定義垃圾分類名稱
const hebrisLabels = [
  "寶特瓶",
  "鐵罐",
  "鋁罐",
  "玻璃瓶",
  "廢紙",
  "竹木",
  "保麗龍",
  "漁網、釣具...等",
  "無法分類廢棄物",
];

// 定義垃圾分類標籤
const hebrisAttendLabels = [
  "清理次數(次)",
  "參與人數(人次)",
];

// 定義垃圾處理方式標籤
const hebristrashLabels = [
  "清理後處理方式(噸)_焚化",
  "清理後處理方式(噸)_掩埋",
  "清理後處理方式(噸)_回收再利用",
];

// 定義垃圾處理名稱
const hebristrash = [
  "焚化(噸)",
  "掩埋(噸)",
  "回收再利用(噸)",
];



// 組件掛載時加載垃圾數據
onMounted(() => {
  fetch('../../public/json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json')
    .then(res => res.json())
    .then(jsonData => {
      hebrisData.value = jsonData;
      console.log(hebrisData.value);
    });
});

// 監視垃圾數據變化
watch(hebrisData, () => {
  if (hebrisData.value) {
    ShowAll();
  }
});
// 更新圖表數據根據選中地區
function updateChartForRegion(regionName) {
  const filteredData = hebrisData.value.find(item => item["縣市別"] === regionName);
  const displayData = hebrisSortLabels.map(key => filteredData[key]);

  if (twChart) {
    twChart.destroy();
  }

  const ctx = document.getElementById('twChart');
  twChart = new Chart(ctx, {
    type: 'doughnut',  // 設置圖表類型為甜甜圈圖
    data: {
      labels: hebrisLabels,  // 設置圖表標籤
      datasets: [{
        label: "噸數",
        data: displayData,  // 設置圖表數據
        backgroundColor: [
          '#00AFB9', '#5390D9', '#48BFE3', '#64DFDF',
          '#008F66', '#4D908E', '#B7E4C7', '#74C69D',
          '#40916C', '#1B4332', '#081C15', '#00AFB9'
        ],
        borderColor: 'white',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
        }
      },
      maintainAspectRatio: false, // 關閉自動調整長寬比
      aspectRatio: 1, // 設定長寬比為 2:1
      plugins: {
        title: {
          display: true,
          text: '海洋廢棄物分類 - ' + regionName,
          font: {
            size: 20  // 設置標題字體大小
          }
        },
        legend: {
          position: 'right',  // 設置圖例位置
          // align: 'end',
          // fullSize: false,
          labels: {
            usePointStyle: true,
            font: {
            size: 12 // 设置图例文字的字体大小
            }
          }
        },
        animation: {
          animateRotate: true,
          duration: 2000
        },
      }
    }
  });


// -----------------------------------------------------------------------------------------淨灘人數與次數

  const displayAttendData = hebrisAttendLabels.map(key => {
    const value = filteredData[key];
    if (typeof value === 'string') {
      // 移除逗號並轉換為數值
      return Number(value.replace(/,/g, ''));
    }
    return value;
  });

  if (attendChart) {
    attendChart.destroy();
  }

  const ctx1 = document.getElementById('attendChart');
  attendChart = new Chart(ctx1, {
    type: 'doughnut',  // 設置圖表類型為甜甜圈圖
    data: {
      labels: hebrisAttendLabels,  // 設置圖表標籤
      datasets: [{
        data: displayAttendData,  // 設置圖表數據
        backgroundColor: [
          '#00AFB9', '#5390D9'
        ],
        borderColor: 'white',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
        }
      },
      maintainAspectRatio: false, // 關閉自動調整長寬比
      aspectRatio: 1, // 設定長寬比為 2:1
      plugins: {
        title: {
          display: true,
          text: '淨灘各縣市人數與次數 - ' + regionName,
          font: {
            size: 20  // 設置標題字體大小
          }
        },
        legend: {
          position: 'right',  // 設置圖例位置
          labels: {
          boxWidth: 10,
          font: {
            size: 12 // 设置图例文字的字体大小
          }
        }
        },
        animation: {
          animateRotate: true,
          duration: 2000
        },
      }
    }
  });




// -----------------------------------------------------------------------------------------垃圾處理方式
  const displaytrashdData = hebristrashLabels.map(key => {
    const value = filteredData[key];
    if (typeof value === 'string') {
      // 移除逗號並轉換為數值
      return Number(value.replace(/,/g, ''));
    }
    return value;
  });
  if (trash) {
    trash.destroy();
  }
  const ctx2 = document.getElementById('trash');
  trash = new Chart(ctx2, {
    type: 'doughnut',  // 設置圖表類型為甜甜圈圖
    data: {
      labels: hebristrash,  // 設置圖表標籤
      datasets: [{
        data: displaytrashdData,  // 設置圖表數據
        backgroundColor: [
          '#00AFB9', '#5390D9', '#48BFE3', '#64DFDF',
        ],
        borderColor: 'white',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
        }
      },
      maintainAspectRatio: false, // 關閉自動調整長寬比
      aspectRatio: 1, // 設定長寬比為 2:1
      plugins: {
        title: {
          display: true,
          text: '垃圾處理方法 - ' + regionName,
          font: {
            size: 20  // 設置標題字體大小
          }
        },
        legend: {
          position: 'right',  // 設置圖例位置
          labels: {
          boxWidth: 10,
          font: {
            size: 12 // 設置圖形文字大小
          }
        }
        },
        animation: {
          animateRotate: true,
          duration: 2000
        },
      }
    }
  });
}



//------------------------------------------------------------------------------------------------------------------------垃圾數據

// 更新圖表數據根據選中地區









//------------------------------------------------------------------------------------------------------ 卡片數據
const cards = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  imgSrc: `https://picsum.photos/300/150/?random=${index + 1}`,
  title: '海洋動物調查',
  description: '鯨魚是世界上最大的動物，最大的藍鯨可以達到30米長，重達180噸。鯨魚分為齒鯨和鬚鯨兩類，齒鯨如虎鯨，捕食魚類和其他海洋動物；鬚鯨則過濾大量浮游生物和小魚來獲取食物。'
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

<style scoped>
#scatter-plot {
  border: 1px solid #ccc;
  margin-top: 20px;
}
</style>


<!-- ---------------------------------------------------------------------------------------------------------------- -->
<!-- <template>
    <div>
      <canvas id="bar-chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import wasteData from '../../public/json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json';
  
  // 移除北部地區、中部地區和南部地區的資料
  const filteredData = wasteData.filter(item => !['北部地區', '中部地區', '南部地區'].includes(item['縣市別']));
  
  const data = ref(filteredData);
  
  onMounted(() => {
    drawBarChart(data.value);
  });
  
  function drawBarChart(data) {
    const labels = data.map(item => item['縣市別']);
    const cleanTimes = data.map(item => item['清理次數(次)']);
    const participantCounts = data.map(item => item['參與人數(人次)']);
    const marineDebris = data.map(item => item['海洋廢棄物來源(噸)_海漂']);
  
    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '清理次數(次)',
          data: cleanTimes,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }, {
          label: '參與人數(人次)',
          data: participantCounts,
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1
        }, {
          label: '海洋廢棄物來源(噸)_海漂',
          data: marineDebris,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  </script>
  
  <style scoped>
  #bar-chart {
    padding: 100px;
    width: 600px;
    height: 400px;
    margin-top: 20px;
  }
  </style> -->
