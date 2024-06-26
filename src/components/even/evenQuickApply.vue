<script setup>
import { ref } from 'vue'
import { usePostitionStore } from '@/stores/evenSwitch'
import calendar from '@/components/even/calendarFilter.vue'
import EventCard from '@/components/EventCard.vue'
import eventPagination from '@/components/even/eventPagination.vue';

const postition = usePostitionStore();
const selectedRegion = ref('')

const getLocation = () => {
    if (navigator.geolocation) {  //請求當前位置
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('您的瀏覽器不支援地理位置服務')
    }
}
//抓取目前定位，並帶入determineRegion函式做判斷
const showPosition = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    location.determineRegion(latitude, longitude);
    // 在這裡根據緯度和經度調用 API 獲取卡片位置信息
    // 並更新相應的數據
    postition.scrollToEventList();  // 確保在確定區域後進行滾動
}
//錯誤訊息
const showError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('您拒絕了位置請求')
            break
        case error.POSITION_UNAVAILABLE:
            alert('無法獲取位置信息')
            break
        case error.TIMEOUT:
            alert('獲取位置信息超時')
            break
        case error.UNKNOWN_ERROR:
            alert('發生未知錯誤')
            break
    }
}

</script>

<template>
    <section class="section section-event-banner">
        <div class="container">
            <div class="sloagn">
                <h2 class="ori">為保護大自然盡份心力，美麗的海洋，守護有你有我!</h2>
                <button class="fast-signup" @click="getLocation">會員一鍵報名</button>
            </div>
        </div>
    </section>
    <calendar @card-click="handleEventCardClick" />
    <section class="section section-event-list" ref="eventListSection">
        <div class="container">
            <h2>活動列表</h2>
            <div class="menu">
                <select v-model="selectedRegion" @change="handleRegionChange">
                    <option value="">全台灣(地區)</option>
                    <option :value="index" v-for="(regions, index) in regions" :key="regions">{{ regions }}</option>
                </select>
            </div>
            <div class="row">
                <EventCard :filteredEvents="paginatedEvents" @card-click="handleEventCardClick" />
            </div>
            <eventPagination :totalItems="filteredEvents.length" :itemsPerPage="8" :currentPage="eventPage"
                @page-changed="changeEventPage" />
        </div>
    </section>
</template>