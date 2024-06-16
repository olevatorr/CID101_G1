<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/layout/HeaderView.vue'
import FooterView from './components/layout/FooterView.vue'
import ShopCart from './components/ShopCart.vue'
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
  <ShopCart />
</template>

<style lang="scss">
@import './assets/sass/style.scss';
</style>
