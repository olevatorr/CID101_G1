<script setup>
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeIntro from '@/components/Home/HomeIntro.vue'
import HomeDebris from '@/components/Home/HomeDebris.vue'
import HomeComparation from '@/components/Home/HomeComparation.vue'
import HomeSurvey from '@/components/Home/HomeSurvey.vue'
import HomeDonation from '@/components/Home/HomeDonation.vue'
import HomeEvent from '@/components/Home/HomeEvent.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
import HomeFeedback from '@/components/Home/HomeFeedback.vue'
import {ref, onMounted } from 'vue'
const apiUrl = ref(import.meta.env.VITE_API_URL)
const imgBaseUrl = ref(import.meta.env.VITE_IMG_URL)

onMounted(() => {
  console.log('API URL:', apiUrl.value)
  console.log('Image Base URL:', imgBaseUrl.value)
})
</script>
<template>
  <main>
    <HomeBanner/>
    <HomeIntro/>
    <HomeDebris/>
    <HomeComparation/>
    <HomeSurvey/>
    <HomeDonation/>
    <HomeEvent/>
    <HomeNews/>
    <HomeFeedback/>
  </main>
</template>