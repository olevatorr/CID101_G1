<script setup>
import { ref } from 'vue';

//------------------------------------------------------------------------------------------------------ 卡片數據
const cards = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    imgSrc: `https://picsum.photos/300/150/?random=${index + 1}`,
    title: '海洋動物調查',
    description: '鯨魚是世界上最大的動物，最大的藍鯨可以達到30米長，重達180噸。鯨魚分為齒鯨和鬚鯨兩類，齒鯨如虎鯨，捕食魚類和其他海洋動物；鬚鯨則過濾大量浮游生物和小魚來獲取食物。'
}));

// Lightbox 模态框状态
const showLightboxModal = ref(false);
const currentIndex = ref(null);

const showLightbox = (index) => {
    showLightboxModal.value = true;
    currentIndex.value = index;
};

const closeLightbox = () => {
    showLightboxModal.value = false;
};

</script>

<template>
    <section class="section section-knowledge">
        <div class="container">
            <h2>海廢知識庫</h2>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 image-container" v-for="(card, index) in cards" :key="card.imgSrc" @click="showLightbox(index)">
                    <div class="wrap animate pop">
                        <div class="overlay">
                            <div class="overlay-content animate slide-left delay-2">
                                <h4 class="animate slide-left pop delay-4">海洋動物調查</h4>
                                <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">Kingdom: 海洋保護會</p>
                            </div>
                        </div>
                        <div class="text">
                            <img class="inset" src="/img/knowledge/1.png">
                        <p></p>
                        </div>
                    </div>
            <!-- 測試卡片 -->
                </div>
                <div v-if="showLightboxModal" class="lightbox">
                    <div class="lightbox-content">
                    <span class="close" @click="closeLightbox"><i class="fa-regular fa-circle-xmark"></i></span>
                    <img :src="cards[currentIndex].imgSrc" :alt="cards[currentIndex].title" />
                        <div class="image-caption">
                    <h3>{{ cards[currentIndex].title }}</h3>
                    <p>{{ cards[currentIndex].description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>