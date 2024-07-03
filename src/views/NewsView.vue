<template>
    <section class="section section-news-banner">
        <div class="container">
            <div class="news-banner_title">
                <p>最新消息</p>
                <h1>NEWS</h1>
            </div>
        </div>
    </section>
    <section class="section section-news-content">
        <div class="container recent-news-container">
            <h4 class="news-info">最新消息</h4>
            <div class="news-filter">
                <button @click="filterNews('')">全部</button>
                <button @click="filterNews('環保商品')">環保商品</button>
                <button @click="filterNews('環保議題')">環保議題</button>
                <button @click="filterNews('淨灘活動')">淨灘活動</button>
            </div>
            <div class="row">
                <!-- newsCard 是子組件的標籤 -->
                <!-- 屬性綁定，，將父組件的 filterNewsList 資料傳遞給子組件。 -->
                <!-- filterNewsList是個變數 -->
                <!-- 綁定資料的地方: -->
                <newsCard :filterNewsList="currentNewsList" />

                <!-- 分頁 -->
                <div class="news-pagination">
                    <ul class="pagination">
                        <!-- 用貼文數量來推測目前頁數 -->
                        <!-- 用v-for生成頁碼列表，從page1到全部 -->
                        <!-- 點擊事件出現時會調用到goToPage，切換到對應頁面 -->
                        <li v-for="page in totalPages" :key="page" @click="goToPage(page)"
                            :class="{ active: page === currentPage }">
                            {{ page }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import newsCard from '@/components/NewsCard.vue' // import 組件

export default {
    components: {
        newsCard //註冊子組件(拆成子組件的檔案名稱)
    },
    data() {
        return {
            newsList: [], // 所有news資料fetch用
            filterNewsList: [], //渲染用資料，因裡面資料會根據篩選不同要從newsList重新filter
            currentPage: 1, // 當前頁碼
            pageSize: 16, // 每頁顯示的新聞數量
            selectedCategory: '', // 篩選值
            //空值是false
        }
    },

    computed: {
        totalPages() {
            return Math.ceil(this.filterNewsList.length / this.pageSize);
        },
        currentNewsList() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filterNewsList.slice(start, end);
        }
    },
    methods: {
        filterNews(category) {
            this.selectedCategory = category; // 將篩選值丟進去
            if (this.selectedCategory) { // 判斷selectedCategory是否為true，請記得空值也是false
                //陣列叫用filter方法
                this.filterNewsList = this.newsList.filter(news => news.filter == this.selectedCategory) // 使用filter篩選newsList，再將符合的物件回傳至filterNewsList以達到渲染篩選後的值
            } else { // 為false就執行以下
                this.filterNewsList = this.newsList.map(news => news) // 將newsList放進filterNewsList
            }
            // console.log(this.filterNewsList);
            this.currentPage = 1; // 回到第一頁
        },
        goToPage(page) {
            this.currentPage = page;
        },
    },
    // 一進畫面就渲染，先接資料
    mounted() {
        fetch(`${import.meta.env.BASE_URL}json/newslist.json`) // 你原本的路徑寫錯
            .then(res => res.json())
            .then(json => {//promise物件判定型別
                this.newsList = json
                // console.log(this.newsList); // 確認是否有fetch到
                this.filterNewsList = json
            })
    },
}
</script>
