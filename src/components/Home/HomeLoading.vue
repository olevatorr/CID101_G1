<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap';
const loading = ref(true)
onMounted(() => {
    setTimeout(() => {
        const tl = gsap.timeline();
        
        tl
            .to(loading.value, { y: '-100%', duration: 1 }, 0)
            .call(() => {
                document.querySelector('html').style.overflow = 'auto';
            })
    }, 3000)

    // 在 loading 期間隱藏 scrollbar
    document.querySelector('html').style.overflow = 'hidden';
})
</script>
<template>
    <div ref="loading" class="loading">
        <span></span>
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