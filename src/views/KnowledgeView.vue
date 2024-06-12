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
      <div class="row">
          <!-- 台灣地圖 -->
        <div class="col-12 col-md-6 bgTwMap">
          <div class="datah2">
            <h2>各縣市海洋廢棄物清理數據</h2>
            <h3>全台灣沿海廢棄數據</h3>
          </div>
          <button  @click="ShowAll">全台灣總計</button>
          <div id="map" ref="myMap" class="map-container" style="width: 100%; height: 500px"></div>
          <p>請<span>點擊</span><i class="fa-regular fa-hand-point-up"></i>地圖進行操作</p>
          <!-- 海廢來源 -->
            <div class="col-12 col-md-12">
              <div class="box chart-allbox" style="width: 100%;">
                <canvas id="source"></canvas>
              </div>
            </div>
          </div>
            <!-- 垃圾種類 -->
        <div class="col-12 col-md-6 chart-allbox">
          <div class="row" style="width: 100%;">
            <div class="col-12">
              <div class="box-chart" style="width: 100%;">
                <canvas id="twChart"></canvas>
              </div>
            </div>
            <!-- 淨灘人數與次數 -->
            <div class="col-12">
              <div class="box-chart">
                <canvas id="attendChart"></canvas>
              </div>
            </div>
            <!-- 垃圾處理分類 -->
            <div class="col-12">
              <div class="box-chart">
                <canvas id="trash"></canvas>
              </div>
            </div>
          </div>
        </div>
        <!-- 海水汙染指標 -->
        <div class="col-12 col-md-12 indicatorsea">
          <div class="news-filter">
            <select name="name" id="" @change="changeIndicator">
              <option v-for="indicator in indicators" :key="indicator.value" :value="indicator.value">{{ indicator.label }}</option>
            </select>
            <canvas id="myChart" class="myChartbg"></canvas>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <h3>{{ indicators.find(item => item.value === selectedIndicator).label }}</h3>
          <p>{{ indicatorDescriptions[selectedIndicator].description }}</p>
        </div>
        <div class="col-12 col-md-3">
          <table class="tableChart">
            <tr>
              <th>污染程度</th>
              <th>範圍</th>
            </tr>
            <tr v-for="range in indicatorDescriptions[selectedIndicator].ranges" :key="range.level">
              <td>{{ range.level }}</td>
              <td>{{ range.value }}</td>
            </tr>
          </table>
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
            <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h4 class="animate slide-left pop delay-4">海洋動物調查</h4>
                  <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">
                    Kingdom: 海洋保護會
                  </p>
                </div>
              </div>
              <div class="text">
                <img class="inset" src="../../public/img/knowledge/1.png">
                <p></p>
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
              <img src="/public/img/beachgame/beachgame-background.png" width="250px" height="250px">
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
              <img src="/public/img/mbti/carton.png" width="250px" height="250px">
            </div>
            <div class="card-content col-12 col-md-6">
              <h3>海廢Q&A</h3>
              <p>
                我們設計了一個有趣且有教育意義的問卷，讓您通過回答一系列問題來了解自己屬於什麼樣的海洋人格。這個問卷不僅可以幫助您更深入地認識海洋垃圾問題，還能增加您對海洋保護的興趣和參與度。
              </p>
            </div>
            <div class="card-content col-12 col-md-3">
              <button>
                <RouterLink to="./Mbti">立即前往</RouterLink>
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
import { _vertical } from 'gsap/Observer';

// 使用 ref 定義響應式數據變量
const apiData = ref(null);  // 儲存水質數據
const selectedIndicator = ref('SS');  // 預設選中的指標
let myChart = null;  // 定義圖表實例
let twChart = null;  // 定義台灣地區圖表實例
let attendChart = null;
let trash = null;
let source = null;
const myMap = ref(null);  // 地圖容器引用



// 定義指標描述信息
const indicatorDescriptions = {
  SS: {
    description: '懸浮固體是指水中未溶解的固體顆粒。懸浮固體濃度過高可能來自土壤侵蝕、建築工地的徑流、污水排放等。高濃度的懸浮固體會影響水的透明度,阻礙光線穿透,影響水生植物的光合作用。',
    ranges: [
      { level: '正常', value: '< 10 mg/L' },
      { level: '輕度污染', value: '10 - 20 mg/L' },
      { level: '中度污染', value: '20 - 50 mg/L' },
      { level: '重度污染', value: '> 50 mg/L' },
    ],
  },
  CHL_a: {
    description: '葉綠素a是衡量水體中藻類數量的重要指標。藻類是水生生態系統的基礎,但過量的藻類可能表明水體富營養化。富營養化會導致藻類大量繁殖,消耗水中的溶解氧,影響其他水生生物。',
    ranges: [
      { level: '正常', value: '< 2 μg/L' },
      { level: '輕度污染', value: '2 - 5 μg/L' },
      { level: '中度污染', value: '5 - 20 μg/L' },
      { level: '重度污染', value: '> 20 μg/L' },
    ],
  },
  NO3_N: {
    description: '硝酸鹽氮是水中氮的一種形式。高濃度的硝酸鹽氮通常來自農業肥料的徑流,或者生活和工業污水。過量的氮會導致藻類過度生長,引起富營養化。',
    ranges: [
      { level: '正常', value: '< 0.2 mg/L' },
      { level: '輕度污染', value: '0.2 - 0.5 mg/L' },
      { level: '中度污染', value: '0.5 - 1.0 mg/L' },
      { level: '重度污染', value: '> 1.0 mg/L' },
    ],
  },
  NO2_N: {
    description: '亞硝酸鹽氮是水中氮的另一種形式。它通常是硝酸鹽還原的中間產物,高濃度可能表明水體受到污染。亞硝酸鹽氮也可以被藻類和其他植物利用,因此也會促進富營養化。',
    ranges: [
      { level: '正常', value: '< 0.02 mg/L' },
      { level: '輕度污染', value: '0.02 - 0.05 mg/L' },
      { level: '中度污染', value: '0.05 - 0.10 mg/L' },
      { level: '重度污染', value: '> 0.10 mg/L' },
    ],
  },
  MI3PO4: {
    description: '磷酸鹽是水中磷的一種形式。像氮一樣,磷是植物生長的重要營養素。高濃度的磷酸鹽通常來自農業徑流(化肥)和生活污水(如洗滌劑)。過量的磷也會導致富營養化。',
    ranges: [
      { level: '正常', value: '< 0.02 mg/L' },
      { level: '輕度污染', value: '0.02 - 0.05 mg/L' },
      { level: '中度污染', value: '0.05 - 0.10 mg/L' },
      { level: '重度污染', value: '> 0.10 mg/L' },
    ],
  },
  Cr: {
    description: '鉻是一種重金屬,通常來自工業污染,如電鍍、製革等。六價鉻對人體和水生生物都有毒性。',
    ranges: [
      { level: '正常', value: '< 0.01 mg/L' },
      { level: '輕度污染', value: '0.01 - 0.05 mg/L' },
      { level: '中度污染', value: '0.05 - 0.10 mg/L' },
      { level: '重度污染', value: '> 0.10 mg/L' },
    ],
  },
  Zn: {
    description: '鋅是另一種重金屬,可能來自工業污染或生活污水。高濃度的鋅對水生生物有毒性。',
    ranges: [
      { level: '正常', value: '< 0.05 mg/L' },
      { level: '輕度污染', value: '0.05 - 0.20 mg/L' },
      { level: '中度污染', value: '0.20 - 0.50 mg/L' },
      { level: '重度污染', value: '> 0.50 mg/L' },
    ],
  },
  DO_ELE: {
    description: '溶解氧是水中溶解的氧氣量。它對水生生物至關重要。溶解氧濃度過低,可能表明水體受到有機污染,因為微生物分解有機物會消耗氧氣。低溶解氧會對魚類和其他水生生物造成壓力。',
    ranges: [
      { level: '正常', value: '> 6.5 mg/L' },
      { level: '輕度污染', value: '4.6 - 6.5 mg/L' },
      { level: '中度污染', value: '2.0 - 4.5 mg/L' },
      { level: '重度污染', value: '< 2.0 mg/L' },
    ],
  },
  DO_S: {
    description: '溶解氧飽和度是水中實際溶解氧量與該溫度下水所能容納的最大氧量之比。它類似於溶解氧濃度,表示水體中可用於水生生物的氧氣量。',
    ranges: [
      { level: '正常', value: '> 90%' },
      { level: '輕度污染', value: '75% - 90%' },
      { level: '中度污染', value: '50% - 75%' },
      { level: '重度污染', value: '< 50%' },
    ],
  },
  PH: {
    description: 'pH表示水的酸鹼度。大多數水生生物適應在pH 6.5到8.5之間的水體。異常的pH值(過酸或過鹼)可能表明水體受到污染,會對水生生物造成壓力。',
    ranges: [
      { level: '正常', value: '6.5 - 8.5' },
      { level: '輕度污染', value: '6.0 - 6.4 或 8.6 - 9.0' },
      { level: '中度污染', value: '5.5 - 5.9 或 9.1 - 9.5' },
      { level: '重度污染', value: '< 5.5 或 > 9.5' },
    ],
  },
};

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

const labels  = [
"阿公店溪口","大林火力發電廠堤外","曾文溪口","鹿耳門溪口","鹽水溪口","線西水道口","後龍溪口","大崛溪口","老街溪口"
]


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
  const indicatorValues = filteredData.map(item => item[selectedIndicator.value]); // 獲取樣本日期
  const sampleDate = filteredData.length > 0 ? filteredData[0].SAMPLE_DATE : '無資料';

  if (myChart) {
    myChart.destroy();  // 如果圖表已存在，先銷毀舊圖表
  }

    // 創建漸變色
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.height);
      gradient.addColorStop(0, 'rgba(10, 0, 255, 0.5)');  // 淡藍色
      gradient.addColorStop(0.5, 'rgba(80, 0, 0, 0.5)');  // 淡藍色
      gradient.addColorStop(1, 'rgba(64, 145, 160, 0.5)');  // 淡綠色

  myChart = new Chart(ctx, {
    type: 'line',  // 設置圖表類型為折線圖
    data: {
      labels: labels,  // 設置圖表標籤為 oceanlabel
      datasets: [{
        label: indicators.find(item => item.value === selectedIndicator.value).label,  // 設置數據集標籤
        data: indicatorValues,  // 設置數據集數據
        backgroundColor: gradient,  // 設置漸變背景顏色
        borderColor: '#00AFB9',  // 設置邊框顏色
        borderWidth: 1,  // 設置邊框寬度
        pointBackgroundColor: 'rgba(80, 0, 0, 0.5)',  // 設置數據點背景顏色
        pointBorderColor: '#fff',  // 設置數據點邊框顏色
        pointHitRadius:100,
        pointRadius:5,
        overBackgroundColor: '#fff',  // 設置數據點懸停背景顏色
        fill: true  // 設置填充
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
            maxwidth:10,
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
// -----------------------------------------------------------------------------------------------------------------地圖
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
    .attr('fill', function(d) {
      // 設定嘉義市、台北市、南投縣的顏色為灰色，其餘為黃色
      if (d.properties.COUNTYNAME === '嘉義市' || d.properties.COUNTYNAME === '臺北市' || d.properties.COUNTYNAME === '南投縣') {
        return 'gray';
      }
      return '#E7A600';
    })
    .attr('stroke', 'white')
    .style('cursor', function(d) {
      // 只有非禁用區塊才設置鼠標樣式為點擊手勢
      if (d.properties.COUNTYNAME !== '嘉義市' && d.properties.COUNTYNAME !== '臺北市' && d.properties.COUNTYNAME !== '南投縣') {
        return 'pointer';
      }
      return 'default';
    })
    .on('click', function(event, d) {
      // 如果是嘉義市、台北市、南投縣，則不觸發 click 事件
      if (d.properties.COUNTYNAME === '嘉義市' || d.properties.COUNTYNAME === '臺北市' || d.properties.COUNTYNAME === '南投縣') {
        return;
      }

      // 重置所有路徑的顏色
      svg.selectAll('path').attr('fill', function(d) {
        if (d.properties.COUNTYNAME === '嘉義市' || d.properties.COUNTYNAME === '臺北市' || d.properties.COUNTYNAME === '南投縣') {
          return 'gray';
        }
        return '#E7A600';
      });

      // 改變選中路徑的顏色
      d3.select(this).attr('fill', '#48BFE3');

      // 根據選中地區更新圖表數據
      const regionName = d.properties.COUNTYNAME;
      updateChartForRegion(regionName);
    })
    .on('mouseover', function(event, d) {
      if (d.properties.COUNTYNAME !== '嘉義市' && d.properties.COUNTYNAME !== '臺北市' && d.properties.COUNTYNAME !== '南投縣') {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('transform', 'translate(0, -5) ');  // 向上移动 5px
      }
    })
    .on('mouseout', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('transform', 'translate(0, 0)');  // 复位
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

//----------------------------------------------------------------------------------------------------------------垃圾數據
// 顯示全台灣總計數據
const ShowAll = function (){
  // 重置所有路徑的顏色
  svg.selectAll('path').attr('fill', function(d) {
    if (d.properties.COUNTYNAME === '嘉義市' || d.properties.COUNTYNAME === '臺北市' || d.properties.COUNTYNAME === '南投縣') {
      return 'gray';
    }
    return '#E7A600';
  });


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

// 定義垃圾來源標籤
const hebrissourceLabels = [
  "海洋廢棄物來源(噸)_海漂",
  "海洋廢棄物來源(噸)_海底",
  "海洋廢棄物來源(噸)_淨灘",
  "海洋廢棄物來源(噸)_船舶人員產出",
  "海洋廢棄物來源(噸)_岸上定點設置垃圾桶",
];


// 定義垃圾來源標籤
const hebrissource = [
  "海洋漂流物",
  "深海底",
  "沙灘",
  "船舶人員產出",
  "海邊垃圾桶",
];


// 組件掛載時加載垃圾數據
onMounted(() => {
  fetch('../../public/json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json')
    .then(res => res.json())
    .then(jsonData => {
      hebrisData.value = jsonData;
      // console.log(hebrisData.value);
    });
});

// 監視垃圾數據變化
watch(hebrisData, () => {
  if (hebrisData.value) {
    ShowAll();
  }
});
// 更新圖表數據根據選中地區
// function updateChartForRegion(regionName) {
//   const filteredData = hebrisData.value.find(item => item["縣市別"] === regionName);
//   const displayData = hebrisSortLabels.map(key => filteredData[key]);

function updateChartForRegion(regionName) {
  const filteredData = hebrisData.value.find(item => {
    const region = item["縣市別"];
    return region === regionName;
  });

  const displayData = hebrisSortLabels.map(key => filteredData[key]);

  if (twChart) {
    twChart.destroy();
  }

  const ctx = document.getElementById('twChart');
const isMobile = window.innerWidth <= 768; // 检测是否是移动设备

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
    maintainAspectRatio: false, // 關閉自動調整長寬比
    aspectRatio: 1.4, // 設定長寬比
    responsive: true,
    scales: {
      y: {
        display: false,
      }
    },
    maintainAspectRatio: false, // 關閉自動調整長寬比
    aspectRatio: isMobile ? 1 : 1.4, // 移动设备上使用1:1的长宽比，桌面设备上使用1.4:1的长宽比
    plugins: {
      title: {
        display: true,
        text: `海洋廢棄物分類 - ${regionName}`,
        font: {
          size: 20  // 設置標題字體大小
        },
        padding: {
          top: isMobile ? 20 : 0,
          bottom: isMobile ? 10 : 0,
        }
      },
      legend: {
        position: isMobile ? 'bottom' : 'right',  // 移动设备上将图例放在底部，桌面设备上放在右侧
        labels: {
          PointStyle: 'rect',
          boxWidth: 10,
          font: {
            size: 12 // 设置图例文字的字体大小
          }
        },
        padding: isMobile ? 30 : 0 // 移动设备上增加图例的顶部填充
      },
      animation: {
        animateRotate: true,
        duration: 2000
      },
    },
    layout: {
      padding: {
        top: isMobile ? 30 : 0, // 手機設備增加上面填充
        bottom: isMobile ? 30 : 0, // 手機設備增加下面填充
      }
    }
  }
});


// -------------------------------------------------------------------------------------------------------淨灘人數與次數

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
      aspectRatio: 1.4, // 設定長寬比
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
            PointStyle: 'rect',
            boxWidth: 10,
            font: {
            size: 12 // 设置图例文字的字体大小
            }
          },
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
      aspectRatio: 1.4, // 設定長寬比為 2:1
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
            PointStyle: 'rect',
            boxWidth: 10,
            font: {
            size: 12 // 设置图例文字的字体大小
            }
          },
        },
        animation: {
          animateRotate: true,
          duration: 2000
        },
      }
    }
  });




//------------------------------------------------------------------------------------------------------垃圾來源數據
const displaysourceData = hebrissourceLabels.map(key => {
    const value = filteredData[key];
    if (typeof value === 'string') {
      // 移除逗號並轉換為數值
      return Number(value.replace(/,/g, ''));
    }
    return value;
  });

  if (source) {
    source.destroy();
  }

  const ctx3 = document.getElementById('source');
  source = new Chart(ctx3, {
    type: 'bar',
      data: {
        labels: hebrissource,
        datasets: [{
          data: displaysourceData,
          backgroundColor: [
          '#00AFB9', '#5390D9', '#48BFE3', '#64DFDF',
          '#008F66',
        ],
          borderColor: '#4D97FF',
          borderWidth: 3
        },]
      },
      options: {
        maintainAspectRatio: false, // 關閉自動調整長寬比
        aspectRatio: 1.4, // 設定長寬比
        scales: {
          y: {
            beginAtZero: true
          }
        },
      plugins: {
        title: {
          display: true,
          text: '垃圾來源數據 - ' + regionName,
          font: {
            size: 20  // 設置標題字體大小
          }
      },
      legend:{
          display:false
        }
    }
      },
      animation: {
          animateRotate: true,
          duration: 2000
      },
    });


}



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
.map-path:hover {
  transform: scale(1.5); /* 調整放大倍率 */
  transition: transform 0.3s ease; /* 添加平滑過渡效果 */
}
</style>
