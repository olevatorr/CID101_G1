<template>
  <div class="pagenumber">
    <a href="#" v-for="pageNumber in totalPages" :key="pageNumber" @click.prevent="changePage(pageNumber)">
      {{ pageNumber }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    totalItems:Number,
    itemsPerPage:Number,
    currentPage:Number
  },
  emits: ['page-changed'],
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  methods: {
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.$emit('page-changed', pageNumber);
      }
    }
  }
}
</script>

<style>
.pagination a {
  margin: 0 5px;
  cursor: pointer;
}
</style>
