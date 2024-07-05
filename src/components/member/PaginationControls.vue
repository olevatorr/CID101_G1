<!-- @/components/PaginationControls.vue -->
<template>
    <div class="pagination">
      <button 
        @click="$emit('go-to-page', currentPage - 1)" 
        :disabled="currentPage === 1"
      >
        上一頁
      </button>
      <button 
        v-for="page in visiblePages" 
        :key="page" 
        @click="$emit('go-to-page', page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button 
        @click="$emit('go-to-page', currentPage + 1)" 
        :disabled="currentPage === totalPages"
      >
        下一頁
      </button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    emits: ['go-to-page'],
    setup(props) {
      const visiblePages = computed(() => {
        const delta = 2;
        const range = [];
        for (
          let i = Math.max(2, props.currentPage - delta);
          i <= Math.min(props.totalPages - 1, props.currentPage + delta);
          i++
        ) {
          range.push(i);
        }
  
        if (props.currentPage - delta > 2) {
          range.unshift("...");
        }
        if (props.currentPage + delta < props.totalPages - 1) {
          range.push("...");
        }
  
        range.unshift(1);
        if (props.totalPages !== 1) {
          range.push(props.totalPages);
        }
  
        return range;
      });
  
      return {
        visiblePages
      };
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  
  button.active {
    background-color: #007bff;
    color: white;
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  </style>