// src/stores/product.js
import { defineStore } from 'pinia'
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filteredProducts: [],
    currentFilter: 'all'
  }),
  actions: {
    // 在您的 product store 中
  async fetchProducts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product.php`);
        const data = response.data;
        
        if (data && !data.error && Array.isArray(data.product)) {
            this.products = data.product;
            this.filteredProducts = data.product;
            console.log('Products loaded:', this.products.length);
        } else {
            console.error('Unexpected API response:', data);
            this.products = [];
            this.filteredProducts = [];
        }
        
        this.saveProductsToLocalStorage();
      } catch (error) {
        console.error('Error fetching products:', error);
        this.products = [];
        this.filteredProducts = [];
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
      this.saveProductsToLocalStorage(); // 保存到 localStorage
    },
    saveProductsToLocalStorage() {
      localStorage.setItem('productsData', JSON.stringify({
        products: this.products,
        filteredProducts: this.filteredProducts,
        currentFilter: this.currentFilter
      }));
    },
    loadProductsFromLocalStorage() {
      const storedData = localStorage.getItem('productsData');
      if (storedData) {
          const parsedData = JSON.parse(storedData);
          this.products = parsedData.products;
          this.filteredProducts = parsedData.filteredProducts;
          this.currentFilter = parsedData.currentFilter;
      }
    },
    initializeStore() {
      console.log('Initializing product store');
      this.loadProductsFromLocalStorage();
      console.log('Products after initialization:', this.products);
      if (this.products.length === 0) {
          console.log('No products found in localStorage, fetching from server');
          this.fetchProducts();
      }
    }
  },
    // 在 store 創建時從 localStorage 加載資料
    onInitialized() {
      this.loadProductsFromLocalStorage();
    }
});