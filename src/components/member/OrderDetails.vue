<!-- @/components/OrderDetails.vue -->
<template>
    <div class="order-details">
      <h3>訂單明細</h3>
      <table>
        <thead>
          <tr>
            <th>商品編號</th>
            <th>商品名稱</th>
            <th>商品數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredShoplists" :key="item.P_ID">
            <td>{{ item.P_ID }}</td>
            <td>{{ item.P_NAME }}</td>
            <td>{{ item.PO_QTY }}</td>
            <td>{{ item.PO_PRICE }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="$emit('close')">關閉</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      filteredShoplists: {
        type: Array,
        required: true
      }
    },
    emits: ['close']
  };
  </script>
  
  <style scoped>
  .order-details {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  </style>