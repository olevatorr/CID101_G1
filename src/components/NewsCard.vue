<template>
    <div class="col-6 col-md-4 col-lg-3" v-for="news in newsitem" :key="news.id">
        <RouterLink to="/Newsinner">
            <!-- 放入app -->
            <div class="news-card">
                <div class="news-card-pic">
                    <img :src="news.imgUrl" alt="">
                </div>
                <div class="news-card-txt">
                    <p class="news-cards-time">{{ news.time }}</p>
                    <h4 class="news-cards-title b">{{ news.title }}</h4>
                    <p class="news-card-content">{{ news.content }}</p>
                    <p class="filter-name">{{ news.filter }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>

export default {
    props: {
        newsitem: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            responseData: [],
            displayData: [],
        }
    },
    mounted() {
        // this.filterNews(this.selectedCategory);

    },
}
</script>