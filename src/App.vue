<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/layout/HeaderView.vue'
import FooterView from './components/layout/FooterView.vue'
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style lang="scss">
@import './assets/sass/style.scss';
</style>
