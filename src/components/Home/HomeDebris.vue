<script setup>
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

// 卷軸動畫
gsap.registerPlugin(ScrollTrigger)
const debris = ref(null)

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: debris.value,
            start: 'top 95%',
            end: '0',
        },
    })

    tl.fromTo(debris.value, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        .fromTo(debris.value, { y: '20%' }, { y: '0%', duration: 1 }, 0)
})

// 篩選對照
const hebrisSort = [
    { area: '總計', selectArea: '全台灣' },
    { area: '北部地區', selectArea: '北部地區' },
    { area: '中部地區', selectArea: '中部地區' },
    { area: '南部地區', selectArea: '南部地區' },
    { area: '東部地區', selectArea: '東部地區' },
    { area: '離島地區', selectArea: '離島地區' }
]

const hebrisData = ref(null)
const selectedArea = ref('總計')
const totalWeight = ref(null)
const totalParticipants = ref(null)
const totalSessions = ref(null)

onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}json/海洋委員會公務統計報表-海洋廢棄物清理-113.01.json`)
        .then(res => res.json())
        .then(jsonData => {
            hebrisData.value = jsonData
        })
})

const filteredData = computed(() => {
    if (hebrisData.value) {
        return hebrisData.value.find(data => data['縣市別'] === selectedArea.value) || {}
    }
    return {}
})
watch(filteredData, () => {
    const weightValue = filteredData.value['清理數量分類(噸)_總計'] || '0';
    const participantsValue = removeCommas(filteredData.value['參與人數(人次)'] || '0');
    const sessionsValue = removeCommas(filteredData.value['清理次數(次)'] || '0');

    animateNumber(totalWeight.value, weightValue);
    animateNumber(totalParticipants.value, participantsValue);
    animateNumber(totalSessions.value, sessionsValue);
});

function animateNumber(element, targetValue) {
    gsap.to(element, {
        textContent: targetValue,
        duration: 1,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function () {
            element.innerHTML = formatNumber(element.textContent);
        },
    });
}

function removeCommas(value) {
    return value.replace(/,/g, '');
}

function formatNumber(value) {
    return parseFloat(value).toLocaleString();
}

// D3 地圖
const mapContainer = ref(null)

const counties = {
    北部地區: ['新北市', '桃園市', '宜蘭縣', '新竹縣', '基隆市', '新竹市'],
    中部地區: ['臺中市', '苗栗縣', '彰化縣', '雲林縣'],
    南部地區: ['嘉義縣', '臺南市', '高雄市', '屏東縣'],
    東部地區: ['臺東縣', '花蓮縣'],
    離島地區: ['澎湖縣', '金門縣', '連江縣']
}

let svg
let projection
let path

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeMap)
})

async function initMap() {
    const container = mapContainer.value

    svg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')

    projection = d3.geoMercator()
        .center([120, 23.5])
        .scale(1)

    path = d3.geoPath().projection(projection)

    const topoData = await d3.json(`${import.meta.env.BASE_URL}localjson/map/COUNTY_tw.topo.json`)
    const geoData = topojson.feature(topoData, topoData.objects.COUNTY_MOI_1090820)

    svg.selectAll('path')
        .data(geoData.features)
        .enter()
        .append('path')
        .attr('fill', '#E7A600')
        .attr('stroke', 'white')

    updateProjection()
}

function updateProjection() {
    const width = svg.node().clientWidth
    const height = svg.node().clientHeight

    projection
        .scale(5000)
        .translate([width / 2, height / 2])

    svg.selectAll('path')
        .attr('d', path)
}

onMounted(() => {
    initMap()
    window.addEventListener('resize', resizeMap)
})

function updateMapColor(area) {
    if (area === '總計') {
        svg.selectAll('path')
            .transition()
            .duration(500)
            .attr('fill', '#E7A600')
    } else {
        const selectedRegions = counties[area]
        svg.selectAll('path')
            .transition()
            .duration(500)
            .attr('fill', (d) => {
                if (selectedRegions && selectedRegions.includes(d.properties.COUNTYNAME)) {
                    return '#E7A600'
                } else {
                    return '#005FA1'
                }
            })
    }
}

function handleAreaClick(sort) {
    if (sort) {
        selectedArea.value = sort.area
        updateMapColor(sort.area)
    }
}

function resizeMap() {
    updateProjection()
}
</script>
<template>
    <section class="section section-debris" ref="debris">
        <div class="container">
            <h3>
                OVERVIEW OF MARINE DEBRIS<br>
                海洋垃圾一覽
            </h3>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <ul class="debris-sort">
                        <li v-for="sort in hebrisSort" :key="sort.area" @click="handleAreaClick(sort)"
                            :class="{ 'select': selectedArea === sort.area }">
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
</template>