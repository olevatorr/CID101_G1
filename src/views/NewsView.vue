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
                <!-- 點擊按鈕，方法被調用且接收相應的分類ID作為參數 -->
                <button @click="filteredNews(1)">全部</button>
                <button @click="filteredNews(2)">環保商品</button>
                <button @click="filteredNews(3)">環保議題</button>
                <button @click="filteredNews(4)">淨灘活動</button>
            </div>
            <div class="row">
                <!-- newsCard 是子組件的標籤，把父組件的東西傳進子組件，然後綁定: -->
                <!-- newsCard 的綁定屬性為 currentNewsList -->
                <!-- filterNewsList是個變數 -->
                <!-- 綁定資料的地方: -->
                <newsCard :filterNewsList="currentNewsList" />

                <!-- 分頁 -->
                <!-- 占滿整欄col-12 -->
                <div class="col-12 news-pagination">
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
import axios from 'axios';

export default {
    components: {
        newsCard //註冊子組件(拆成子組件的檔案名稱)
    },
    data() {
        return {
            news: [], // 所有news資料fetch用(改成後端相同名稱)
            filterNewsList: [], //渲染用資料，因裡面資料會根據篩選不同要從newsList重新filter
            currentPage: 1, // 當前頁碼
            pageSize: 16, // 每頁顯示的新聞數量
            categories: [// 定義分類列表
                { id: 1, name: '全部' },
                { id: 2, name: '環保商品' },
                { id: 3, name: '環保議題' },
                { id: 4, name: '淨灘活動' }
            ],
            selectedCategory: 1, // 當前選中的分類預設值:預設選中 "全部"
        }
    },

    computed: {
        // 計算總頁數
        totalPages() {
            // 括號裡先獲取篩選後的資料長度，要除上每頁最多的數量，決定要換頁嗎?
            // Math.ceil()函式，向上取整數，多的就在下一頁顯示
            return Math.ceil(this.filterNewsList.length / this.pageSize);
        },
        // 計算當前頁面要顯示的新聞列表
        currentNewsList() {
            // 在內部不會再另外賦值，也防止意外賦值
            // 計算當前頁面第一條新聞在整個 filterNewsList 中的索引
            const start = (this.currentPage - 1) * this.pageSize;//計算起始索引，start 當前頁面第一條新聞的索引
            const end = start + this.pageSize;//計算結束索引
            // 提取新聞列表：從篩選後的新聞列表中提取對應範圍內的新聞，並返回這些新聞作為當前頁面要顯示的內容
            return this.filterNewsList.slice(start, end);//slice 方法返回一個新的陣列，從索引 start 到索引 end（但不包括 end）
        }
    },
    methods: {
        // 接收後端的資料過來，每個資料用 NS_ID 知道他的分類
        // 接收一個參數category= 1，默認初始是選擇全部，默認參數目的是在未提供某些參數時仍能正常運作
        // async 關鍵字，代表式一個不同步函式，允許內部使用await 關鍵字，等待一個 Promise 完成
        //用來等待一個 Promise 解析（resolve）或拒絕
        async fetchData(category = 1) {
            try {
                //獲取後端資料來源
                let url = `${import.meta.env.VITE_API_URL}/news.php`;
                if (category !== 1) {
                    // 完整的網址後?接資料，獲取對應(特定)的分類資訊
                    url += `?NS_ID=${category}`;
                }
                // 使用 await 關鍵字等待 axios.get(url) 返回的 Promise 完成
                // axios.get(url) 發送一個 GET 請求到指定的 URL，並返回一個 Promise
                const response = await axios.get(url);
                // 如果響應資料沒錯誤，將資料給
                if (!response.data.error) {
                    this.news = response.data.news.sort((a, b) => b.N_ID - a.N_ID);// news，原始的數據
                    this.filterNewsList = this.news;// 篩選後的新聞數據
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        // 篩選使用函式，裡面的 category 參數，是代表所選擇的分類ID
        filteredNews(category) {
            // 當前選好的參數放入 selectedCategory
            this.selectedCategory = category;
            // 調用 fetchData 方法
            this.fetchData(category);
            this.currentPage = 1; // 篩選後回到第一頁
        },
        // 跳轉到指定頁碼，參數確認目前頁數
        goToPage(page) {//page 是傳入的參數值，即用戶希望跳轉到的頁碼
            // 確認頁數不能小於1,所以大於或等於1，&& 兩項都要成立
            // 不能超過總頁數，totalPages
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
    },
    // 一進畫面就渲染，先接資料
    mounted() {
        this.fetchData();
    },
}
</script>
