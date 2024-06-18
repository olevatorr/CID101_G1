<script setup>
import KnowledgeBanner from '../components/Knowledge/KnowledgeBanner.vue';
import KnowledgeTrashtxt from '../components/Knowledge/KnowledgeTrash-txt.vue';
import KnowledgeChart from '../components/Knowledge/KnowledgeChart.vue';
import KnowledgeCard from '../components/Knowledge/KnowledgeCard.vue';
import KnowledgeGame from '../components/Knowledge/KnowledgeGame.vue';

</script>
<!-- ----------------------------------------------------------------垃圾種類圖 -->
<template>
  <div id="app">
    <!-- ----------------------------------------------------------------banner -->
    <KnowledgeBanner />
    <!-- ----------------------------------------------------------------什麼是海洋廢棄物？trash-txt -->
    <KnowledgeTrashtxt />
    <!-- -----------------------------------------------------------------全台灣沿海廢棄數據 -->
    <KnowledgeChart />
    <!-- ----------------------------------------------------------------海廢知識庫 -->
    <KnowledgeCard />
    <!-- ----------------------------------------------------------------小遊戲 -->
    <KnowledgeGame />
  </div>
</template>