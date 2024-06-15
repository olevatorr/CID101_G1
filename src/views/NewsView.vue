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
        <div class="container">
            <h4 class="news-info">最新消息</h4>
            <div class="news-filter">
                <button @click="filterNews('')">全部</button>
                <button @click="filterNews('環保商品')">環保商品</button>
                <button @click="filterNews('環保議題')">環保議題</button>
                <button @click="filterNews('淨灘活動')">淨灘活動</button>
            </div>
            <div class="row">
                <NewsCard :newsitem="displayData" />
                <div class="news-pagination">
                    <ul class="pagination">
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
import NewsCard from '@/components/NewsCard.vue'; // 引入 NewsCard 組件
export default {
    components: {
        NewsCard // 注冊 NewsCard 組件
    },
    data() {
        return {
            // 需要新聞數據
            newslist: [],
            // 存篩選後的新聞數據
            selectedCategory: '',
            // 當前頁碼
            currentPage: 1,
            // 每頁顯示的新聞數量
            pageSize: 16,
            responseData: [],
            displayData: [],
        };
    },
    computed: {
        filteredNews() {
            if (this.selectedCategory === '') {
                return this.newslist;
            }
            return this.newslist.filter(news => news.filter === this.selectedCategory);
        },
        //頁數中應該顯示的新聞列表
        paginatedNews() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filteredNews.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredNews.length / this.pageSize);
        }
    },
    methods: {
        filterNews(category) {
            this.selectedCategory = category;
            this.currentPage = 1;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        }
    },
    mounted() {
        fetch('../../public/json/newslist.json')
            .then(res => res.json())
            .then(json => {
                // 確認有沒有response

                // 備份還原用
                this.responseData = json
                console.log(this.responseData);
                // 顯示用
                this.displayData = json
            })
    },
}
</script>
