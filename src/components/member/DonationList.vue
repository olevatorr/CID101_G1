<template>
    <div class="registration">
      <table class="order">
        <caption>訂單查詢</caption>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="list in paginatedData" :key="list.PO_ID">
            <tr>
              <td v-for="key in dataKeys" :key="key" :data-label="headers[dataKeys.indexOf(key)]">
                {{ list[key] }}
              </td>
              <td>
                <button class="view" @click="$emit('toggle-shop-table', list.PO_ID)">
                  {{ list.VIEW }}
                </button>
              </td>
              <td data-label="功能">
                <button>{{ list.ORDER_BUTTON }}</button>
              </td>
            </tr>
            <OrderDetails 
              v-if="currentPoId === `${list.PO_ID}` && isShopTableVisible"
              :filteredShoplists="filteredShoplists"
              @close="$emit('toggle-shop-table')"
            />
          </template>
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
  import OrderDetails from './OrderDetails.vue'
  
  export default {
    components: { PaginationControls, OrderDetails },
    props: ['paginatedData', 'totalPages', 'currentPage', 'isShopTableVisible', 'currentPoId', 'filteredShoplists'],
    emits: ['go-to-page', 'toggle-shop-table'],
    setup() {
      const headers = ['訂單編號', '訂單狀況', '訂單日期', '總金額', '付款方式', '功能', '']
      const dataKeys = ['PO_ID', 'S_STATUS', 'PO_DATE', 'PO_AMOUNT', 'PO_ORDER']
  
      return { headers, dataKeys }
    }
  }
  </script>