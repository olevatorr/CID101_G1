<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 創建引用以訪問 DOM 元素
const pic1 = ref(null)
const pic2 = ref(null)
const pic3 = ref(null)
const storyText = ref(null)

onMounted(() => {
    // 創建一個 GSAP 時間軸
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-story',
            start: 'top 70%',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    })

    // 添加gsap動畫
    tl.from(pic1.value, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    })
        .from(pic2.value, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5')
        .from(pic3.value, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5')
        .from(storyText.value, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5')
})
</script>

<template>
    <section class="section section-story">
        <div class="container container-story">
            <div class="flex">
                <div class="row">
                    <!-- 第一張圖片 -->
                    <div ref="pic1" class="row pic-1 col-6 col-md-3">
                        <img src="/img/donate/donate-pic2.png" />
                        <!-- 第二張圖片 -->
                        <div ref="pic2" class="pic2">
                            <img src="/img/donate/donate-pic3.png" />
                        </div>
                    </div>

                    <!-- 第三張圖片 -->
                    <div ref="pic3" class="pic3 col-6 col-md-3">
                        <img src="/img/donate/donate-pic4.png" />
                    </div>

                    <!-- 文字內容 -->
                    <div ref="storyText" class="story-text col-12 col-sm-6">
                        <h2>海洋故事</h2>
                        <p>
                            滔滔大海,賦予地球生命的搖籃，孕育著萬物的希望。<br />
                            如今的海洋正遭受著人類活動的嚴重威脅：塑料污染、過度捕撈、氣候變遷等，正在無情地摧毀著這片寶貴的藍色家園。<br />
                            但是，我們還有機會扭轉乾坤！您的每一份捐助，都將化作守護海洋生態的力量，為珊瑚礁注入新生，為海豚們帶來自由的暢遊，為鯨魚們開闢安全的回家路。<br />
                            讓我們攜手同心，共同捍衛這片深邃而神奇的海洋世界。每一分捐款，都將如滴水匯入大海,彙聚成守護之流，灌溉海洋生命的根基。<br />
                            加入我們，成為海洋的守護者！讓這片孕育萬物的母親之海，永遠綻放勃勃生機!讓我們用實際行動，捍衛美麗家園的未來!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
