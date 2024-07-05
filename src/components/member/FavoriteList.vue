<template>
    <div class="registration">
      <table class="favorite">
        <caption>收藏商品</caption>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="love in paginatedData" :key="love.P_ID">
            <td v-for="key in dataKeys" :key="key" :data-label="headers[dataKeys.indexOf(key)]">
              {{ love[key] }}
            </td>
            <td data-label="功能">
              <button>{{ love.collect }}</button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationControls 
        :totalPages="totalPages" 
        :currentPage="currentPage" 
        @go-to-page="$emit('go-to-page', $event)"
      />
    </div>
  </template>
  
  <script>
  import PaginationControls from './PaginationControls.vue'
  
  export default {
    components: { PaginationControls },
    props: ['paginatedData', 'totalPages', 'currentPage'],
    emits: ['go-to-page'],
    setup() {
      const headers = ['商品編號', '商品名稱', '商品類別', '單價', '功能']
      const dataKeys = ['P_ID', 'P_NAME', 'PS_ID', 'P_PRICE']
  
      return { headers, dataKeys }
    }
  }
  </script>