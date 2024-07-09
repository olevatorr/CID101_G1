<template>
    <div class="col-6 col-md-4 col-lg-3" v-for="news in filterNewsList" :key="news.N_ID"> <!--改成filterNewsList-->
        <RouterLink v-if="news" :to="`/Newsinner/${news.N_ID}`">
            <!-- 放入app -->
            <div class="news-card">
                <div class="news-card-pic">
                    <img :src="getImageUrl(news.N_IMG)" alt="">
                </div>
                <div class="news-card-txt">
                    <p class="news-cards-time">{{ news.N_TIME }}</p>
                    <h4 class="news-cards-title b">{{ news.N_TITLE }}</h4>
                    <p class="news-card-content">{{ news.N_CONTENT }}</p>
                    <p class="filter-name">{{ categoryNames[news.NS_ID] }}</p>


                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>

export default {
    props: ["filterNewsList"], // 創建接收父組件容器
    data() {
        return {
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
            return `${import.meta.env.VITE_IMG_URL}/news/${imgUrl}`;
        }
    },
}
</script>
