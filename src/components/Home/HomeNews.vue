<script setup>
import newsCard from '@/components/NewsCard.vue' // import 組件
import axios from 'axios'
import { onMounted, ref } from 'vue'
const homeNews = ref([])

onMounted(async () => {
  try {
    //獲取後端資料來源
    let url = `${import.meta.env.VITE_API_URL}/news.php`
    const response = await axios.get(url)
    // 如果響應資料沒錯誤，將資料給
    if (!response.data.error) {
      homeNews.value = response.data.news.slice(0, 4) // news，原始的數據
    } else {
      this.error = true
      this.errorMsg = response.data.msg
    }
  } catch (error) {
    this.error = true
    this.errorMsg = error.message
  }
})
</script>
<template>
  <section class="section section-index-news">
    <div class="container">
      <h3>
        NEWS<br />
        最新消息
      </h3>
      <div class="row">
        <newsCard :filterNewsList="homeNews" />
      </div>
      <router-link to="/news"><button>查看更多消息</button></router-link>
    </div>
  </section>
</template>
