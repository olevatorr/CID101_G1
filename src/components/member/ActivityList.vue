<template>
    <div class="registration">
      <table class="apply">
        <caption>活動報名</caption>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="act in paginatedData" :key="act.E_ID">
            <td v-for="key in dataKeys" :key="key" :data-label="headers[dataKeys.indexOf(key)]">
              {{ act[key] }}
            </td>
            <td data-label="功能">
              <button>{{ act.EO_status }} {{ act.F_ID }}</button>
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
      const headers = ['活動訂單', '活動名稱', '活動日期', '截止日期', '地點', '活動狀態', '功能']
      const dataKeys = ['E_ID', 'E_TITLE', 'E_DATE', 'E_DEADLINE', 'E_ADDRESS', 'E_STATUS']
  
      return { headers, dataKeys }
    }
  }
  </script>