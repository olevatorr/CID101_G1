<script setup>
import KnowledgeBanner from '../components/Knowledge/KnowledgeBanner.vue';
import KnowledgeTrashtxt from '../components/Knowledge/KnowledgeTrash-txt.vue';
import KnowledgeChart from '../components/Knowledge/KnowledgeChart.vue';
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
<!-- ----------------------------------------------------------------垃圾種類圖 -->
<template>
  <div id="app">
    <!-- ----------------------------------------------------------------banner -->
    <KnowledgeBanner />
    <!-- ----------------------------------------------------------------什麼是海洋廢棄物？trash-txt -->
    <KnowledgeTrashtxt />
    <!-- ---------------------------------------------------------------------------------------全台灣沿海廢棄數據 -->
    <KnowledgeChart />
    <!-- ----------------------------------------------------------------海廢知識庫 -->
    <section class="section section-knowledge">
      <div class="container">
        <h2>海廢知識庫</h2>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 image-container" v-for="(card, index) in cards"
            :key="card.imgSrc" @click="showLightbox(index)">
            <div class="wrap animate pop">
              <div class="overlay">
                <div class="overlay-content animate slide-left delay-2">
                  <h4 class="animate slide-left pop delay-4">海洋動物調查</h4>
                  <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">
                    Kingdom: 海洋保護會
                  </p>
                </div>
              </div>
              <div class="text">
                <img class="inset" src="../../public/img/knowledge/1.png">
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
    <!-- ----------------------------------------------------------------小遊戲 -->
    <section class="section section-game">
      <div class="container">
        <h2>放鬆之餘，也能用有趣的方式更了解海廢</h2>
        <div class="card">
          <div class="row">
            <div class="card-content col-12 col-md-3">
              <img src="/public/img/beachgame/beachgame-background.png" width="250px" height="250px">
            </div>
            <div class="card-content col-12 col-md-6">
              <h3>海廢小遊戲</h3>
              <p>
                通過我們設計的海廢小遊戲，您可以在遊戲中學習如何識別和處理海洋垃圾，並體驗保護海洋的樂趣。這些遊戲不僅適合兒童，也能吸引成年人參與其中。
              </p>
            </div>
            <div class="card-content col-12 col-md-3">
              <button>
                <RouterLink to="/Beachgame">立即前往</RouterLink>
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="card-content col-12 col-md-3">
              <img src="../../public/img/mbti/1.png" width="250px" height="250px">
            </div>
            <div class="card-content col-12 col-md-6">
              <h3>海廢Q&A</h3>
              <p>
                我們設計了一個有趣且有教育意義的問卷，讓您通過回答一系列問題來了解自己屬於什麼樣的海洋人格。這個問卷不僅可以幫助您更深入地認識海洋垃圾問題，還能增加您對海洋保護的興趣和參與度。
              </p>
            </div>
            <div class="card-content col-12 col-md-3">
              <button>
                <RouterLink to="./Mbti">立即前往</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>




<!-- <style scoped>
.map-path:hover {
  transform: scale(1.5);
  /* 調整放大倍率 */
  transition: transform 0.3s ease;
  /* 添加平滑過渡效果 */
}
</style> -->
