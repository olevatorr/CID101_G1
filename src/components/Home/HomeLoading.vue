<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap';
const loading = ref(true)
onMounted(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    
    if (!isFirstVisit) {
        // 初次進入首頁,顯示 loading 畫面
        setTimeout(() => {
            const tl = gsap.timeline();
            
            tl
                .to(loading.value, { y: '-100%', duration: .5 }, 0)
                .call(() => {
                    document.querySelector('html').style.overflow = 'auto';
                    localStorage.setItem('isFirstVisit', 'true');
                });
        }, 5000);
    } else {
        // 非初次進入,不顯示 loading 畫面
        loading.value = false;
        document.querySelector('html').style.overflow = 'auto';
    }
    
    // 在 loading 期間隱藏 scrollbar
    if (loading.value) {
        document.querySelector('html').style.overflow = 'hidden';
    }
});
</script>
<template>
    <div  v-if="loading" ref="loading" class="loading">
        <div class="title">
            <span><img src="/img/LOGO-color.png" alt=""></span>
            <span>藍</span>
            <span>色</span>
            <span>警</span>
            <span>戒</span>
        </div>
        <div class="boxes">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="loadingbar">
            <div class="run"></div>
        </div>
    </div>
</template>