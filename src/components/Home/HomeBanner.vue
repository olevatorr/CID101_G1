<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted, } from 'vue';
import HomeLoading from '@/components/Home/HomeLoading.vue'


gsap.registerPlugin(ScrollTrigger)

const banner = ref(null)
const smokeLeft = ref(null)
const smokeRight = ref(null)
const trashLeft = ref(null)
const trashRight = ref(null)
const cover = ref(null)
const indexLogo = ref(null)

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

    tl
        .to(trashLeft.value, { x: '-100%', duration: 1 }, 0)
        .to(trashRight.value, { x: '100%', duration: 1 }, 0)
        .to(smokeLeft.value, { x: '-100%', duration: 1 }, 1)
        .to(smokeRight.value, { x: '100%', duration: 1 }, 1)
        .to(indexLogo.value, { width: '15%', duration: 1 }, 1)
        .fromTo(cover.value, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power4.out' }, 1)
        .fromTo(cover.value, { y: '100%' }, { y: '0%', duration: 1, ease: 'power4.out' }, 1)
})
</script>
<template>
    <HomeLoading/>
    <section ref="banner" class="section section-index-banner">
        <div class="container">
            <div class="img" ref="indexLogo">
                <img src="/img/LOGO-short.png" alt="">
            </div>
            <div class="cover" ref="cover">
                <h1>潔淨海洋 綠色明天</h1>
                <h2>Clean Ocean, Green tomorrow</h2>
            </div>
        </div>
        <div ref="smokeLeft" class="smoke-left">
            <img src="/img/index/smoke-left.webp" alt="">
        </div>
        <div ref="smokeRight" class="smoke-right">
            <img src="/img/index/smoke-right.webp" alt="">
        </div>
        <div ref="trashLeft" class="trash-left">
            <img src="/img/index/trash-left.webp" alt="">
        </div>
        <div ref="trashRight" class="trash-right">
            <img src="/img/index/trash-right.webp" alt="">
        </div>
    </section>

</template>