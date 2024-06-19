<template>
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
                <li>{{ newsDetail.filter }}</li>
            </ol>
        </div>

    </section>
    <!-- 圖片連結為.imgUrl -->
    <section class="section section-newsinner-content">
        <div class="container newsinner-container-info">
            <p href="#">{{ newsDetail.filter }}</p>
            <p class="newsinner-cards-time">{{ newsDetail.time }}</p>
            <h2 class="">{{ newsDetail.title }}</h2>
        </div>
        <div class="container newsinner-container">
            <div class="newsinner-pic">
                <img :src="newsDetail.imgUrl" alt="最新消息">
            </div>
            <div class="newsinner-txt">
                <p>{{ newsDetail?.content }}</p>
            </div>
        </div>
    </section>
</template>

<script>
// 抓取json檔資料
//點擊NewsCard.vue中的新聞卡片時，使用router-link導航到NewsInner.vue頁面
export default {
    // 資料要放入的空間
    data() {
        return {
            newsDetail: {}//先設為 null，表示資料尚未加載
        }
    },
    mounted() {
        this.fetchNewsDetail();
    },
    methods: {
        fetchNewsDetail() {
            // 抓API
            fetch(`${import.meta.env.BASE_URL}json/newslist.json`)
                .then(res => res.json())
                .then(json => {
                    this.newsDetail = json.find(item => {
                        return item.id == this.$route.params.id
                    })
                })
                .catch((error) => {
                    // 錯誤例外
                    console.log(`Error: ${error}`);
                })
        }
    },
}
</script>