<script setup>
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { CountUp } from 'countup.js';
import { Chart } from 'chart.js/auto';
import { RouterLink } from 'vue-router';

// banner 動畫
gsap.registerPlugin(ScrollTrigger);

const banner = ref(null);
const smokeLeft = ref(null);
const smokeRight = ref(null);
const trashLeft = ref(null);
const trashRight = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: banner.value,
      start: 'top top',
      end: '+=200%',
      scrub: true,
      pin: true,
    },
  });

  tl.to(trashLeft.value, { x: '-100%', duration: 1 }, 0)
    .to(trashRight.value, { x: '100%', duration: 1 }, 0)
    .to(smokeLeft.value, { x: '-100%', duration: 1 }, 1)
    .to(smokeRight.value, { x: '100%', duration: 1 }, 1)
})

// 對比照動畫
const comparationArea = ref(null);
const control = ref(null);
const dirty = ref(null);

const startDrag = (event) => {
  event.preventDefault();
  const startX = event.clientX || event.touches[0].clientX;
  const startLeft = control.value.offsetLeft;

  const handleDrag = (event) => {
    const deltaX = (event.clientX || event.touches[0].clientX) - startX;
    const newLeft = startLeft + deltaX;
    const progress = Math.max(0, Math.min(1, newLeft / comparationArea.value.offsetWidth));

    control.value.style.left = `${progress * 100}%`;
    dirty.value.style.width = `${progress * 100}%`;
  };

  const stopDrag = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', stopDrag);
  };

  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchmove', handleDrag);
  document.addEventListener('touchend', stopDrag);
};

onMounted(() => {
  control.value.addEventListener('mousedown', startDrag);
  control.value.addEventListener('touchstart', startDrag);
})

onBeforeUnmount(() => {
  control.value.removeEventListener('mousedown', startDrag);
  control.value.removeEventListener('touchstart', startDrag);
});


// survey
const isSurveyPopUp = ref(false)

const SurveyPopUp = () => {
  isSurveyPopUp.value = !isSurveyPopUp.value
}

// 海廢數據
const hebrisSort = [
  { id: 1, area: '總計', selectArea: '全台灣' },
  { id: 2, area: '北部地區', selectArea: '北部地區' },
  { id: 3, area: '中部地區', selectArea: '中部地區' },
  { id: 4, area: '南部地區', selectArea: '南部地區' },
  { id: 5, area: '東部地區', selectArea: '東部地區' },
  { id: 6, area: '離島地區', selectArea: '離島地區' }
];

const hebrisData = ref(null);
const selectedArea = ref('總計');
const totalWeight = ref(null);
const totalParticipants = ref(null);
const totalSessions = ref(null);

let weightCountUp = null;
let participantsCountUp = null;
let sessionsCountUp = null;

onMounted(() => {
  fetch('../../public/json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json')
    .then(res => res.json())
    .then(jsonData => {
      hebrisData.value = jsonData;
    });

  weightCountUp = createCountUp(totalWeight.value);
  participantsCountUp = createCountUp(totalParticipants.value);
  sessionsCountUp = createCountUp(totalSessions.value);
});

const filteredData = computed(() => {
  if (hebrisData.value) {
    return hebrisData.value.find(data => data['縣市別'] === selectedArea.value) || {};
  }
  return {};
});

watch(filteredData, () => {
  const weightValue = parseFloat(filteredData.value['清理數量分類(噸)_總計'] || '0');
  const participantsValue = parseFloat(removeCommas(filteredData.value['參與人數(人次)'] || '0'));
  const sessionsValue = parseFloat(removeCommas(filteredData.value['清理次數(次)'] || '0'));

  weightCountUp.update(weightValue);
  participantsCountUp.update(participantsValue);
  sessionsCountUp.update(sessionsValue);
});

function removeCommas(value) {
  return value.replace(/,/g, '');
}

function createCountUp(element) {
  return new CountUp(element, 0, {
    duration: 1,
    formattingFn: formatNumber,
  });
}

function formatNumber(value) {
  return value.toLocaleString();
}

// 捐款
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

const mapContainer = ref(null);
const donateChart = ref(null);

onMounted(() => {
  initMap();
  window.addEventListener('resize', resizeMap);

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
const counties = {
  北部地區: ['台北縣', '桃園縣', '宜蘭縣', '新竹縣', '基隆市', '新竹市'],
  中部地區: ['台中縣', '台中市', '苗栗縣', '彰化縣', '雲林縣'],
  南部地區: ['嘉義縣', '台南縣', '台南市', '高雄縣', '高雄市', '屏東縣'],
  東部地區: ['台東縣', '花蓮縣'],
  離島地區: ['澎湖縣', '金門縣', '連江縣']
};

let svg;

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeMap);
});

async function initMap() {
  const container = mapContainer.value;

  const width = container.clientWidth;
  const height = container.clientHeight;

  svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const projection = d3.geoMercator()
    .center([120, 23.5])
    .scale(6000)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);
  const topoData = await d3.json('../../public/localjson/map/twCounty2010.topo.json');
  const geoData = topojson.feature(topoData, topoData.objects.layer1);

  svg.selectAll('path')
    .data(geoData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', '#005FA1')
    .attr('stroke', 'white');
}

function updateMapColor(area) {
  if (area === '總計') {
    // 如果选择了"总计",让所有地区都高亮
    svg.selectAll('path')
      .attr('fill', '#E7A600');
  } else {
    const selectedRegions = counties[area];

    svg.selectAll('path')
      .attr('fill', (d) => {
        if (selectedRegions && selectedRegions.includes(d.properties.COUNTYNAME)) {
          return '#E7A600';
        } else {
          return '#005FA1';
        }
      });
  }
}

function handleAreaClick(sort) {
  if (sort) {
    selectedArea.value = sort.area;
    updateMapColor(sort.area);
  }
}

function resizeMap() {
  const container = mapContainer.value;
  d3.select(container).select('svg').remove();
  initMap();
}

initMap();
window.addEventListener('resize', resizeMap);
</script>

<template>
  <main>
    <section ref="banner" class="section section-index-banner">
      <div class="container">
        <div class="img">
          <img src="../../public/img/LOGO-white.png" alt="">
        </div>
        <h1>潔淨海洋 綠色明天</h1>
        <h2>Clean Ocean, Green tomorrow</h2>
      </div>
      <div ref="smokeLeft" class="smoke-left">
        <img src="../../public/img/index/smoke-left.png" alt="">
      </div>
      <div ref="smokeRight" class="smoke-right">
        <img src="../../public/img/index/smoke-right.png" alt="">
      </div>
      <div ref="trashLeft" class="trash-left">
        <img src="../../public/img/index/trash-left.png" alt="">
      </div>
      <div ref="trashRight" class="trash-right">
        <img src="../../public/img/index/trash-right.png" alt="">
      </div>
    </section>
    <section class="section section-intro">
      <div class="container">
        <h3>用數據和行動,<br>創造海洋的微笑</h3>
        <p>
          海洋是人類賴以生存的寶貴資源。<br>
          我們希望通過全面的海洋垃圾數據整合與分析,以及積極的教育宣導和環境行動, <br>
          讓世界各地的人們都能展現笑顔,享受健康且永續的海洋環境。<br>
          <br>
          要達成這個目標,首先我們自己要充滿熱情,樂在海洋保護的工作中。<br>
          在一個開放透明的氛圍裡,與所有志同道合的夥伴攜手並進,共同茁壯。<br>
          如此一來,我們將能引導改變的風潮,成為世界海洋環保的領航者。
        </p>
      </div>
    </section>
    <section class="section section-debris">
    <div class="container">
      <h3>
        OVERVIEW OF MARINE DEBRIS<br>
        海洋垃圾一覽
      </h3>
      <div class="row">
        <div class="col-12 col-lg-6">
          <ul class="debris-sort">
            <li v-for="sort in hebrisSort" :key="sort.area" @click="handleAreaClick(sort)" :class="{ 'select': selectedArea === sort.area }">
              <span class="material-symbols-outlined">line_end</span> {{ sort.selectArea }}
            </li>
          </ul>
          <div ref="mapContainer" class="map-container"></div>
        </div>
        <div class="debris-data col-12 col-lg-6">
          <div class="clean-tons">
            <span class="debris-word">已清理</span>
            <span class="debris-num" ref="totalWeight"></span>
            <span class="debris-word">噸海廢</span>
          </div>
          <div class="clean-attend">
            <span class="debris-word">參與人數</span>
            <span class="debris-num" ref="totalParticipants"></span>
            <span class="debris-word">人次</span>
          </div>
          <div class="clean-session">
            <span class="debris-word">總共</span>
            <span class="debris-num" ref="totalSessions"></span>
            <span class="debris-word">場次</span>
          </div>
          <p>*皆為本年度資訊,與海洋委員會海洋保育署資料同步</p>
        </div>
      </div>
    </div>
  </section>
    <section class="section section-comparation">
      <div class="container">
        <h3>
          COMPARATION<br>
          對比照
        </h3>
      </div>
      <div ref="comparationArea" class="comparation-area">
        <div ref="control" class="control" @mousedown="startDrag"></div>
        <div ref="dirty" class="dirty">
          <img src="../../public/img/index/compare-dirty.png" alt="垃圾海洋" @dragstart.prevent>
        </div>
        <div class="clean">
          <img src="../../public/img/index/compare-clean.png" alt="乾淨海洋" @dragstart.prevent>
        </div>
      </div>
    </section>
    <section class="section section-survey">
      <div class="container">
        <div class="survey-card">
          <h3>海廢知多少</h3>
          <p>透過回答以下5個問題,讓我們一起檢視您對海洋環保的了解程度。這個測驗旨在幫助您:</p>
          <ul>
            <li><i class="fa-solid fa-earth-asia"></i>
              若得分低於80分,建議您先前往我們的教育中心,深入學習海洋環保知識,充實自己的環保知識基礎,再參與實際的環保行動,讓您的每一份努力都更有意義。</li>
            <li><i class="fa-solid fa-earth-asia"></i> 若得分高於或等於80分,歡迎您前往我們的活動頁面,尋找適合您的海洋保護行動,用實際行動為海洋盡一份心力。</li>
          </ul>
          <p>
            無論結果如何,我們都感謝您對海洋環保的關注和努力。了解自己的知識水平,是成為一個負責任的環保行動者的第一步。讓我們攜手,以知識和行動,共創潔淨、永續的海洋環境!<br>
            準備好開始這趟自我探索之旅了嗎?現在就開始測驗吧!
          </p>
          <button @click="SurveyPopUp">立即測驗</button>
        </div>
        <div class="survey-box" :class="{ show: isSurveyPopUp }">
          <div class="wrapper">
            <h2>是否開始測驗</h2>
            <div class="buttons">
              <button @click="SurveyPopUp">取消測驗</button>
              <button>開始測驗</button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    </section>
    <section class="section section-index-event">
      <div class="container">
        <h3>
          EVENT<br>
          活動
        </h3>
      </div>
    </section>
    <section class="section section-index-news">
      <div class="container">
        <h3>
          NEWS<br>
          最新消息
        </h3>
      </div>
    </section>
    <section class="section section-index-event-feedback">
      <div class="container">
        <h3>
          FEEDBACK OF EVENT<br>
          活動分享
        </h3>
      </div>
    </section>
  </main>
</template>
