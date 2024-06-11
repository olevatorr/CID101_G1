<script setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const intro = ref(null)
const introTitle = ref(null)
const introContent = ref(null)
const gotop = ref(null)


gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: intro.value,
            start: 'top 50%',
            end: '0',
        }
    })
    tl.fromTo(introTitle.value, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        .fromTo(introTitle.value, { x: '-30%' }, { x: '0%', duration: 1 }, 0)
        .fromTo(introContent.value, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        .fromTo(introContent.value, { x: '-30%' }, { x: '0%', duration: 1 }, 0)

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: intro.value,
            start: 'bottom bottom',
            end: '0',
            scrub: 1,
        }
    })
    tl2.fromTo(gotop.value, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        .fromTo(gotop.value, { y: '-30%' }, { x: '0%', duration: 1 }, 0)
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

</script>
<template>
    <section class="section section-intro" ref="intro">
        <div class="container">
            <h3 ref="introTitle">用數據和行動,<br>創造海洋的微笑</h3>
            <p ref="introContent">
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
    <div class="gotop" ref="gotop" @click="scrollToTop">
        <i class="fa-solid fa-chevron-up"></i>
        <span>TOP</span>
    </div>
</template>