<template>
    <div v-if="error">
        <p>錯誤: {{ errorMsg }}</p>
    </div>
    <div v-else-if="!newsDetail">
        <p>加載中...</p>
    </div>
    <template v-else>
        <section class="section section-news-banner">
            <div class="container">
                <div class="news-banner_title">
                    <p>最新消息</p>
                    <h1>NEWS</h1>
                </div>
            </div>
        </section>
        <section class="section section-newsinner-breadcrumb">
            <div class="breadcrumb-wrap">
                <ol class="newsinner-breadcrumb">
                    <li><router-link to="/">首頁</router-link></li>
                    <li><router-link to="/news">最新消息</router-link></li>
                    <li>{{ categoryNames[newsDetail.NS_ID] }}</li>
                </ol>
            </div>

        </section>
        <!-- 圖片連結為.imgUrl -->
        <section class="section section-newsinner-content">
            <div class="container newsinner-container-info">
                <p href="#">{{ categoryNames[newsDetail.NS_ID] }}</p>
                <p class="newsinner-cards-time">{{ newsDetail.N_TIME }}</p>
                <h2 class="">{{ newsDetail.N_TITLE }}</h2>
            </div>
            <div class="container newsinner-container">
                <div class="newsinner-pic">
                    <img :src="getImageUrl(newsDetail.N_IMG)" alt="最新消息">
                </div>
                <div class="newsinner-txt">
                    <p>{{ newsDetail.N_CONTENT }}</p>
                </div>
            </div>
        </section>
    </template>
</template>

<script>
import axios from 'axios';
// 抓取json檔資料
//點擊NewsCard.vue中的新聞卡片時，使用router-link導航到NewsInner.vue頁面
export default {
    // 資料要放入的空間
    data() {
        return {
            // newsDetail: null//先設為 null，表示資料尚未加載
            newsDetail: null,
            error: false,
            errorMsg: '',
            // 定義一個分類 ID 和分類名稱的映射表
            categoryNames: {
                1: '全部',
                2: '環保商品',
                3: '環保議題',
                4: '淨灘活動'
            }
        }
    },
    methods: {
        getImageUrl(imgUrl) {
            // return imgUrl ? `${import.meta.env.BASE_URL}img/news/${imgUrl}` : '';
            return imgUrl ? `${import.meta.env.VITE_IMG_URL}/news/${imgUrl}` : '';
        },
        async fetchData() {
            try {
                const newsId = this.$route.params.id;
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news.php?N_ID=${newsId}`);
                if (response.data && !response.data.error && response.data.news) {
                    const newsItem = response.data.news.find(item => item.N_ID == newsId);//陣列中查找 N_ID 等於 newsId 的新聞項目。find 方法返回第一個符合條件的元素。
                    if (newsItem) {
                        this.newsDetail = newsItem;
                    } else {
                        this.error = true;
                        this.errorMsg = '未找到對應的新聞項目';
                    }
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg || '無法獲取新聞數據';
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message || '發生錯誤';
            }
        },
    },
    mounted() {
        this.fetchData();
    },

}
</script>