<template>
  <!-- 主頁面模板 -->
  <section class="section section-data">
    <div class="container">
      <div>
        <!-- 主標題 -->
        <h2>各縣市海洋廢棄物清理次數與參與人數</h2>
        <!-- 散點圖容器 -->
        <div id="scatter-plot"></div>
      </div>
      <!-- 副標題 -->
      <h3>全台灣沿海廢棄數據</h3>
      <div class="row">
        
        <div class="col-12 col-md-6">
          <!-- 顯示全台灣總計按鈕 -->
          <button @click="ShowAll">全台灣總計</button>
          <!-- 地圖容器 -->
          <div id="map" ref="myMap" style="width: 100%; height: 400px"></div>
        </div>

        <div class="col-12 col-md-6">
          <!-- 主圖表的 Canvas 容器 -->
          <div class="box" style="height: 300px;width: 100%;">
            <canvas id="twChart"></canvas>
          </div>
        </div>

        <!-- 新增的 Canvas 元素 -->
        <div class="col-12 col-md-6">
          <div class="box" style="height: 300px;width: 100%;">
            <canvas id="twChart1"></canvas>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="box" style="height: 300px;width: 100%;">
            <canvas id="twChart2"></canvas>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="box" style="height: 300px;width: 100%;">
            <canvas id="twChart3"></canvas>
          </div>
        </div>
        
        <div class="col-12 col-md-6">
          <!-- 篩選按鈕區域 -->
          <div class="button button-area">
            <button>水質</button>
            <button>懸浮粒子</button>
            <button>垃圾總量</button>
            <button>還在找</button>
          </div>
          <!-- 基隆市海廢月份圖表標題 -->
          <div class="card-data">
            <h3>基隆市海廢月份圖表</h3>
          </div>
          <!-- 塑料廢棄物介紹 -->
          <p>
            塑料是最常見的海洋廢棄物之一，尤其是一次性塑料製品，如吸管、塑料袋和瓶子。這些塑料製品長期漂浮在海洋中，分解成微小的塑料碎片，危害海洋生物的健康，甚至進入了人類的食物鏈。
          </p>
          <!-- 指標篩選器和圖表容器 -->
          <div class="col-12">
            <div class="news-filter">
              <select name="name" id="" @change="changeIndicator">
                <option value="0">請選擇類型</option>
                <option v-for="indicator in indicators" :key="indicator.value" :value="indicator.value">
                  {{ indicator.label }}
                </option>
              </select>
              <canvas id="myChart" width="400px" height="200px"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 引入 Vue 的 ref, onMounted, onBeforeUnmount 和 watch 函數
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
// 引入 Chart.js 和 D3.js 的相關模塊
import { Chart, registerables } from 'chart.js';
// 引入 JSON 資料
import jsonData from '../../public/json/海域水質.json';
import wasteData from '../../public/json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json';
// 引入 D3 和 topojson 模塊
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

// 定義 ref 變量以儲存數據和狀態
const apiData = ref(null);
const wasteDataRef = ref(null);
const selectedIndicator = ref('SS');
let myChart = null;
let twChart = null;
let twChart1 = null;
let twChart2 = null;
let twChart3 = null;
const myMap = ref(null);

// 指標描述，用於展示不同指標的污染等級
const indicatorDescriptions = {
  SS: {
    ranges: [
      { level: '正常', value: '< 10 mg/L' },
      { level: '輕度污染', value: '10 - 20 mg/L' },
      { level: '中度污染', value: '20 - 50 mg/L' },
      { level: '重度污染', value: '> 50 mg/L' },
    ],
  },
};

// 定義可選指標的列表
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

// 初始化數據和圖表
function setupData() {
  // 將數據按更新時間排序
  const sortedData = jsonData.sort((a, b) => new Date(b.UPDATE_TIME) - new Date(a.UPDATE_TIME));
  apiData.value = sortedData;
  wasteDataRef.value = wasteData;
  setupChart();
}

// 當組件掛載時執行
onMounted(() => {
  // 註冊 Chart.js 的所有組件
  Chart.register(...registerables);
  setupData();
});

// 設置圖表函數
function setupChart() {
  // 獲取圖表的畫布上下文
  const ctx = document.getElementById('myChart');
  // 過濾數據，僅保留丙類數據
  const filteredData = apiData.value.filter(item => item.BODY_LEVEL === "丙類");
  // 獲取標籤和指標值
  const labels = filteredData.map(item => item.STATION_NAME);
  const indicatorValues = filteredData.map(item => item[selectedIndicator.value]);
  // 獲取樣本日期
  const sampleDate = filteredData.length > 0 ? filteredData[0].SAMPLE_DATE : '無資料';

  // 如果圖表已存在，先銷毀
  if (myChart) {
    myChart.destroy();
  }

  // 創建新圖表
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: indicators.find(item => item.value === selectedIndicator.value).label,
        data: indicatorValues,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
        pointBackgroundColor: 'blue',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: '海水污染指標',
          font: {
            size: 20
          }
        },
        legend: {
          position: 'top',
        },
        annotation: {
          annotations: [{
            type: 'label',
            xValue: labels[labels.length - 1],
            yValue: indicatorValues[indicatorValues.length - 1],
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            content: ['採樣時間: ' + sampleDate],
            font: {
              style: 'italic',
              color: 'white'
            }
          }]
        }
      }
    }
  });
}

// 當指標改變時更新圖表
function changeIndicator(event) {
  // 更新選擇的指標
  selectedIndicator.value = event.target.value;
  setupChart();
}

// 地圖 SVG 元素變量
let svg;

// 當組件卸載時移除調整地圖大小事件
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeMap);
});

// 初始化地圖函數
async function initMap() {
  // 創建 D3 投影和地理路徑生成器
  const projection = d3.geoMercator()
    .center([122, 23.5])
    .scale(5000)
    .translate([myMap.value.clientWidth / 2, myMap.value.clientHeight / 2]);
  const path = d3.geoPath().projection(projection);

  // 加載臺灣地圖拓撲數據
  const topoData = await d3.json('/json/taiwan.topo.json');
  const geoData = topojson.feature(topoData, topoData.objects.COUNTY_MOI_1090820);

  // 創建 D3 SVG 元素
  svg = d3.select(myMap.value)
    .append('svg')
    .attr('width', myMap.value.clientWidth)
    .attr('height', myMap.value.clientHeight);

  // 將地理數據附加到 SVG 元素中並設定屬性
  svg.selectAll('path')
    .data(geoData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('stroke', '#000')
    .attr('stroke-width', 0.5)
    .attr('fill', '#6baed6')
    .attr('class', 'county');

  // 解析廢棄物數據並按縣市匯總
  const wasteData = wasteDataRef.value;
  const wasteDataByCounty = d3.rollup(wasteData, v => ({
    times: d3.sum(v, d => d['清理次數(次)']),
    people: d3.sum(v, d => d['參與人數(人)'])
  }), d => d['縣市']);

  // 創建顏色比例尺
  const color = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, d3.max(Array.from(wasteDataByCounty.values()), d => d.times)]);

  // 設定地圖縣市區塊的填充顏色
  svg.selectAll('.county')
    .style('fill', d => {
      const countyData = wasteDataByCounty.get(d.properties.COUNTYNAME);
      return countyData ? color(countyData.times) : '#6baed6';
    });

  // 添加縣市區塊的鼠標事件
  svg.selectAll('.county')
    .on('mouseover', function (event, d) {
      const countyData = wasteDataByCounty.get(d.properties.COUNTYNAME);
      d3.select(this).attr('fill', 'orange');
      if (countyData) {
        const tooltip = svg.append('text')
          .attr('x', event.pageX + 5)
          .attr('y', event.pageY - 5)
          .attr('class', 'tooltip')
          .text(`清理次數: ${countyData.times}, 參與人數: ${countyData.people}`);
      }
    })
    .on('mouseout', function (d) {
      d3.select(this).attr('fill', '#6baed6');
    });
}

// 縮放地圖以適應窗口大小
function resizeMap() {
  if (svg) {
    const width = myMap.value.clientWidth;
    const height = myMap.value.clientHeight;
    svg.attr('width', width).attr('height', height);
    initMap();
  }
}

// 當地圖容器初始化後設置地圖
onMounted(() => {
  initMap();
  window.addEventListener('resize', resizeMap);
});

// 展示全台灣總計數據
function ShowAll() {
  // 創建並顯示全台灣總計數據的圖表
  const ctx = document.getElementById('twChart').getContext('2d');
  const filteredData = wasteDataRef.value.filter(item => item['縣市'] === "全台灣");
  const labels = filteredData.map(item => item['月份']);
  const data = {
    labels: labels,
    datasets: [{
      label: '清理次數',
      data: filteredData.map(item => item['清理次數(次)']),
      borderColor: 'blue',
      fill: false,
    }, {
      label: '參與人數',
      data: filteredData.map(item => item['參與人數(人)']),
      borderColor: 'red',
      fill: false,
    }]
  };

  if (twChart) {
    twChart.destroy();
  }

  twChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: '月份'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: '數量'
          }
        }
      }
    }
  });
}
</script>

<style>
/* 設置各種元素的 CSS 樣式 */
#myChart {
  margin-top: 20px;
}
.tooltip {
  background-color: white;
  border: 1px solid black;
  padding: 5px;
}
.county {
  cursor: pointer;
}
</style>