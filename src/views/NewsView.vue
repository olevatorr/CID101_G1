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
                <div class="col-6 col-md-4 col-lg-3" v-for="newsitem in paginatedNews" :key="newsitem.id">
                    <RouterLink to="/Newsinner">
                        <!-- 放入app -->
                        <div class="news-card">
                            <div class="news-card-pic">
                                <img :src="newsitem.imgUrl" alt="">
                            </div>
                            <div class="news-card-txt">
                                <p class="news-cards-time">{{ newsitem.time }}</p>
                                <h4 class="news-cards-title b">{{ newsitem.title }}</h4>
                                <p class="news-card-content">{{ newsitem.content }}</p>
                                <p class="filter-name">{{ newsitem.filter }}</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="news-pagination">
                    <ul>
                        <li @click="prevPage" :disabled="currentPage === 1">1</li>
                        <li @click="nextPage" :disabled="currentPage === totalPages">2</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // 需要新聞數據
            newslist: [
                {
                    id: 1,
                    imgUrl: '../../public/img/news/news01.png',
                    time: "2024-06-02",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 2,
                    imgUrl: '../../public/img/news/news02.png',
                    time: "2024-06-03",
                    title: "最新環保商品上市",
                    content: "為響應環保,減少一次性塑膠袋的使用,我們特別推出全新環保飲料杯套。" +
                        "這款提袋採用再生聚酯纖維製作,不僅質地耐用,更達到友善環境的目標。" +
                        "提袋圖案使用清新自然的樹葉印花,既時尚又環保,絕對是購物的理想良伴。",
                    filter: "環保商品",
                },
                {
                    id: 3,
                    imgUrl: '../../public/img/news/news03.jpg',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "每年有多達800萬噸塑膠廢棄物被棄置於海洋中,即每分鐘就有一輛垃圾車的廢棄物被棄置於海中。" +
                        "這些塑膠廢棄物約有80%源自陸地,20%來自於海洋相關活動。" +
                        "我們應立即採取行動刻不容緩,否則海洋生態將面臨無可挽回的結果。",
                    filter: "環保議題",
                },
                {
                    id: 4,
                    imgUrl: '../../public/img/news/news04.jpg',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "每年有多達800萬噸塑膠廢棄物被棄置於海洋中,即每分鐘就有一輛垃圾車的廢棄物被棄置於海中。" +
                        "這些塑膠廢棄物約有80%源自陸地,20%來自於海洋相關活動。" +
                        "我們應立即採取行動刻不容緩,否則海洋生態將面臨無可挽回的結果。",
                    filter: "環保議題",
                },
                {
                    id: 5,
                    imgUrl: '../../public/img/news/news05.png',
                    time: "2024-06-03",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 6,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "可愛動物馬克杯",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保商品",
                },
                {
                    id: 7,
                    imgUrl: '../../public/img/news/news05.png',
                    time: "2024-06-03",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 8,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "動物圖案馬克杯",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保商品",
                },
                {
                    id: 9,
                    imgUrl: '../../public/img/news/news01.png',
                    time: "2024-06-02",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 10,
                    imgUrl: '../../public/img/news/news02.png',
                    time: "2024-06-03",
                    title: "環保飲料杯套熱銷中",
                    content: "為響應環保,減少一次性塑膠袋的使用,我們特別推出全新環保飲料杯套。" +
                        "這款提袋採用再生聚酯纖維製作,不僅質地耐用,更達到友善環境的目標。" +
                        "提袋圖案使用清新自然的樹葉印花,既時尚又環保,絕對是購物的理想良伴。",
                    filter: "環保商品",
                },
                {
                    id: 11,
                    imgUrl: '../../public/img/news/news03.jpg',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "每年有多達800萬噸塑膠廢棄物被棄置於海洋中,即每分鐘就有一輛垃圾車的廢棄物被棄置於海中。" +
                        "這些塑膠廢棄物約有80%源自陸地,20%來自於海洋相關活動。" +
                        "我們應立即採取行動刻不容緩,否則海洋生態將面臨無可挽回的結果。",
                    filter: "環保議題",
                },
                {
                    id: 12,
                    imgUrl: '../../public/img/news/news04.jpg',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "每年有多達800萬噸塑膠廢棄物被棄置於海洋中,即每分鐘就有一輛垃圾車的廢棄物被棄置於海中。" +
                        "這些塑膠廢棄物約有80%源自陸地,20%來自於海洋相關活動。" +
                        "我們應立即採取行動刻不容緩,否則海洋生態將面臨無可挽回的結果。",
                    filter: "環保議題",
                },
                {
                    id: 13,
                    imgUrl: '../../public/img/news/news05.png',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 14,
                    imgUrl: '../../public/img/news/news02.png',
                    time: "2024-06-03",
                    title: "最新環保商品上市",
                    content: "為響應環保,減少一次性塑膠袋的使用,我們特別推出全新環保飲料杯套。" +
                        "這款提袋採用再生聚酯纖維製作,不僅質地耐用,更達到友善環境的目標。" +
                        "提袋圖案使用清新自然的樹葉印花,既時尚又環保,絕對是購物的理想良伴。",
                    filter: "環保商品",
                },
                {
                    id: 15,
                    imgUrl: '../../public/img/news/news05.png',
                    time: "2024-06-03",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "環保議題",
                },
                {
                    id: 16,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保議題",
                },
                {
                    id: 17,
                    imgUrl: '../../public/img/news/news02.png',
                    time: "2024-06-03",
                    title: "最新環保商品上市",
                    content: "為響應環保,減少一次性塑膠袋的使用,我們特別推出全新環保飲料杯套。" +
                        "這款提袋採用再生聚酯纖維製作,不僅質地耐用,更達到友善環境的目標。" +
                        "提袋圖案使用清新自然的樹葉印花,既時尚又環保,絕對是購物的理想良伴。",
                    filter: "環保商品",
                },
                {
                    id: 18,
                    imgUrl: '../../public/img/news/news02.png',
                    time: "2024-06-03",
                    title: "環保飲料杯套熱銷中",
                    content: "為響應環保,減少一次性塑膠袋的使用,我們特別推出全新環保飲料杯套。" +
                        "這款提袋採用再生聚酯纖維製作,不僅質地耐用,更達到友善環境的目標。" +
                        "提袋圖案使用清新自然的樹葉印花,既時尚又環保,絕對是購物的理想良伴。",
                    filter: "環保商品",
                },
                {
                    id: 19,
                    imgUrl: '../../public/img/news/news01.png',
                    time: "2024-06-02",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 20,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "可愛動物馬克杯",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保商品",
                },
                {
                    id: 21,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保議題",
                },
                {
                    id: 22,
                    imgUrl: '../../public/img/news/news01.png',
                    time: "2024-06-02",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
                {
                    id: 23,
                    imgUrl: '../../public/img/news/news06.png',
                    time: "2024-06-03",
                    title: "海洋垃圾統計",
                    content: "溫暖的飲品是生活的小確幸,但即棄的膠杯卻對地球造成無情的傷害。" +
                        "為了讓您可以環保兼具品味地品嚐美味,我們特別推出這款精美的動物圖案馬可杯。" +
                        "採用無毒的食品級鉅亨玻璃製成,絕對安全無虞。",
                    filter: "環保議題",
                },
                {
                    id: 24,
                    imgUrl: '../../public/img/news/news01.png',
                    time: "2024-06-02",
                    title: "淨灘活動共襄盛舉",
                    content: "每月舉行淨灘活動, 誠摯邀請所有人一同加入環保行列。" +
                        "讓我們攜手淨化海濱, 拯救美麗家園，一起實際減少海洋廢棄物, 更能提高民眾對此議題的認知。" +
                        "誠摰邀請您攜家帶眷參與, 為未來綠色環境盡一份心力。",
                    filter: "淨灘活動",
                },
            ],
            // 篩選後的新聞數據
            selectedCategory: '',
            // 當前頁碼
            currentPage: 1,
            // 每頁顯示的新聞數量
            pageSize: 16,
        };
    },
    computed: {
        filteredNews() {
            if (this.selectedCategory === '') {
                return this.newslist;
            }
            return this.newslist.filter(news => news.filter === this.selectedCategory);
        },
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
        this.filterNews(this.selectedCategory);
    }
}
</script>
