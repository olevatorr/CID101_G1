<template>
    <section class="section section-knowledge">
        <div class="container">
            <h2>海洋知識庫</h2>
            <div class="row wrapper">
                <div v-if="isLoading" class="loading col-12">Loading...</div>
                <div v-else v-for="card in cards" :key="card.id" class=" col-6 col-md-3 col-sm-4">
                    <div class="card">
                        <h3 class="card-title cardh2">{{ card.title }}</h3>
                        <img :src="card.imgSrc"  />
                        <div class="card-body info">
                            <p class="card-text">{{ card.description }}</p>
                            <button>Read More</button>
                            <div class="btnc">
                                <span class="card-source">來源: {{ card.source }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    data() {
        return {
            // 初始化一個空數組,用於存儲獲取到的卡片數據
            cards: [],
            // 初始化一個標誌,用於表示數據是否正在加載中
            isLoading: true
        }
    },
    // 在組件掛載到 DOM 後執行 fetchCardsData 方法
    mounted() {
        this.fetchCardsData();
    },
    methods: {
        fetchCardsData() {
            fetch('/json/oceanCard.json')
                .then(response => response.json()) // JSON 格式
                .then(data => {
                    // 將 card拉出資料 
                    this.cards = data;
                    // 設置 isLoading 標誌為 false,表示數據已經加載完成
                    this.isLoading = false;
                })
                .catch(error => {
                    // 如果在獲取資料錯誤,console:error
                    console.error('Error fetching cards data:', error);
                    // 設置 isLoading 標誌為 false,以防止一直顯示加載中狀態
                    this.isLoading = false;
                });
        }
    }
}
</script>