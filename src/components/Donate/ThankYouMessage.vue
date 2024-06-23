<script setup>
// 從 Vue 中導入必要的函數
import { ref, onMounted } from 'vue'
// 導入 GSAP 主庫
import { gsap } from 'gsap'
// 導入 ScrollTrigger 插件，用於滾動觸發動畫
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 創建 ref 來引用 DOM 元素
const thanksText = ref(null)

// 當組件掛載完成時執行
onMounted(() => {
    // 創建動畫
    gsap.from(thanksText.value, {
        y: 50, // 從下方 80px 的位置開始
        opacity: 0, // 開始時完全透明
        duration: 3, // 動畫持續 1 秒
        ease: 'power2.out', // 使用 power2.out 緩動函數
        scrollTrigger: {
            trigger: '.sectionThanks', // 觸發元素
            start: 'top 70%', // 當觸發元素的頂部到達視窗 70% 的位置時開始動畫
            toggleActions: 'play none none reverse' // 定義滾動時的行為
        }
    })
})
</script>

<template>
    <section class="section sectionThanks">
        <div class="container">
            <div ref="thanksText" class="sx-txt co1-12">
                <p>感謝您對「藍色警戒」的慷慨支持！</p>
                <p>您的每一筆捐款都將助力我們更有效地保護海洋，為子孫後代創造一個更加乾淨、健康、永續的海洋環境。</p>
            </div>
        </div>
    </section>
</template>