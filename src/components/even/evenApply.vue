<script setup>
// import { ref } from 'vue'
import { useEventsStore } from '@/stores/events'
import { useMemberStore } from '@/stores/member'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const emit = defineEmits(['scroll-click'])
const locationStore = useEventsStore()
const memberStore = useMemberStore()
const router = useRouter()

const getLocation = () => {
    if(memberStore.isLogging){
        if (navigator.geolocation) {  //請求當前位置
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        emit('scroll-click')
    } else {
        alert('您的瀏覽器不支援地理位置服務')
    }
    }else{
        Swal.fire({
        icon: 'warning',
        title: '需要登入',
        text: '請先登入或加入會員以提交檢舉。',
        className: 'reportSubmission'
      }).then(() => {
        router.push('/Member');
      });
    }
}


const showPosition = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    determineRegion(latitude, longitude);
    // 在這裡根據緯度和經度調用 API 獲取卡片位置信息
    // 並更新相應的數據
}
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
const determineRegion = (latitude, longitude) => {
    if (latitude >= 23.5 && latitude <= 25.2 && longitude >= 119.5 && longitude <= 122.5) {
        locationStore.handleRegionChangeForLocation('0')
    } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 120 && longitude <= 121.5) {
        locationStore.handleRegionChangeForLocation('1')
    } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 121.5 && longitude <= 122.5) {
        locationStore.handleRegionChangeForLocation('3')

    } else if (latitude >= 21 && latitude <= 23 && longitude >= 119.5 && longitude <= 121) {
        locationStore.handleRegionChangeForLocation('2')

    } else if (
        (latitude >= 23 && latitude <= 23.5 && longitude >= 119 && longitude <= 119.5) ||
        (latitude >= 26 && latitude <= 26.5 && longitude >= 119.5 && longitude <= 122)
    ) {
        locationStore.handleRegionChangeForLocation('4')

    } else {
        alert('error')

    }
};

</script>

<template>
    <section class="section section-event-banner">
        <div class="container">
            <div class="sloagn">
                <h2 class="ori">為保護大自然盡份心力，美麗的海洋，守護有你有我!</h2>
                <button class="fast-signup" @click="getLocation()">會員一鍵報名</button>
            </div>
        </div>
    </section>
</template>