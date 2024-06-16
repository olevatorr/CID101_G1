<script setup>
import newsCard from '@/components/NewsCard.vue' // import 組件
import { onMounted, ref } from 'vue';
const homeNews = ref([])

onMounted(()=>{
  fetch('../../public/json/newslist.json')
    .then((res)=> res.json())
    .then(jsonData => {
      homeNews.value = jsonData.slice(0,4)
      console.log(homeNews.value);
    })
})

</script>
<template>
    <section class="section section-index-news">
      <div class="container">
        <h3>
          NEWS<br>
          最新消息
        </h3>
        <div class="row">
          <newsCard :filterNewsList="homeNews"/>
        </div>
        <button>查看更多活動</button>
      </div>
    </section>
</template>