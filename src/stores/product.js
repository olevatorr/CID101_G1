// src/stores/product.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filteredProducts: [],
    currentFilter: 'all'
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}json/productdata.json`)
        const data = await response.json()
        this.products = data
        this.filteredProducts = data
        console.log(this.filteredProducts)
        
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    setFilter(category) {
      this.currentFilter = category
      if (category === 'all') {
        this.filteredProducts = this.products
        console.log(this.filteredProducts)

      } else {
        this.filteredProducts = this.products.filter(item => item.P_CATEGORY === category)
        console.log(this.filteredProducts)
      }
    }
  }
})