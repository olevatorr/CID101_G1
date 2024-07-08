<template>
    <div id="app">
        <section class="section section-knowledge">
            <div class="container">
                <h2>海洋知識庫</h2>
                <div class="row wrapper">
                    <!-- 顯示加載中的狀態 -->
                    <div v-if="isLoading" class="loading col-12">Loading...</div>
                    <!-- 遍歷每個卡片並顯示 -->
                    <div v-else v-for="card in cards" :key="card.id" class=" col-6 col-md-3 col-sm-4">
                        <div class="card">
                            <h3 class="card-title cardh2">{{ card.title }}</h3>
                            <img :src="convertURL(card.imgSrc)" alt="Card Image"/>
                            <div class="card-body info">
                                <p class="card-text">{{ card.description }}</p>
                                <button @click="openLightbox(card)">Read More</button>
                                <div class="btnc">
                                    <span class="card-source">來源: {{ card.source }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox 顯示區域 -->
        <section v-if="isLightboxOpen" class="section sectionlightbox">
            <div class="lightbox-content">
                <i class="fa-regular fa-circle-xmark close"  @click="closeLightbox"></i>
                <!-- 顯示當前選中卡片的圖片和文字 -->
                <img :src="selectedCard.imgSrc" alt="Sample Image" class="lightbox-img"/>
                <h3>{{ selectedCard.title }}</h3>
                <p>{{ selectedCard.description }}</p>
                <div class="spanlightbox">
                    <span class="">來源: {{ selectedCard.source }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [], // 存儲卡片數據的數組
            isLoading: true, // 加載狀態標誌
            isLightboxOpen: false, // Lightbox 顯示狀態標誌
            selectedCard: {} // 當前選中的卡片
        }
    },
    mounted() {
        this.fetchCardsData(); // 組件掛載後獲取卡片數據
    },
    methods: {
        fetchCardsData() {
            fetch(`${import.meta.env.BASE_URL}json/oceanCard.json`) // 獲取卡片數據的 API 請求
                .then(response => response.json())
                .then(data => {
                    this.cards = data; // 將獲取到的數據存儲在 cards 中
                    this.isLoading = false; // 設置加載狀態為完成
                })
                .catch(error => {
                    console.error('Error fetching cards data:', error);
                    this.isLoading = false; // 確保即使出錯也不會一直顯示加載狀態
                });
        },
        openLightbox(card) {
            this.selectedCard = card; // 設置當前選中的卡片
            this.isLightboxOpen = true; // 顯示 Lightbox
        },
        closeLightbox() {
            this.isLightboxOpen = false; // 關閉 Lightbox
        },
        convertURL(url){
            return `${import.meta.env.VITE_IMG_URL}/knowledge/${url}`
        }
    }
}
</script>