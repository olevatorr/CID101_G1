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
      this.currentFilter = category;
      let productsToFilter = Array.isArray(this.products) ? this.products : (this.products.product || []);
      
      if (category === 'all' || !category) {
          this.filteredProducts = productsToFilter;
      } else {
          console.log(category);
          console.log(productsToFilter);
          this.filteredProducts = productsToFilter.filter(dog => {
              return (dog['P_NAME'].toString()).indexOf(category) !== -1
          });
      }
      console.log('Filtered products:', this.filteredProducts);
      this.saveProductsToLocalStorage();
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
          this.filteredProducts = Array.isArray(parsedData.filteredProducts) ? parsedData.filteredProducts : (parsedData.filteredProducts?.product || []);
          this.currentFilter = parsedData.currentFilter;
      }
    },
    initializeStore() {
      console.log('Initializing product store');
      this.loadProductsFromLocalStorage();
      console.log('Products after initialization:', this.products);
      if (!Array.isArray(this.products) || this.products.length === 0) {
          console.log('No valid products found in localStorage, fetching from server');
          return this.fetchProducts();
      } else {
          // 確保 filteredProducts 是一個數組
          this.filteredProducts = Array.isArray(this.products) ? this.products : (this.products.product || []);
      }
    },
  },
    // 在 store 創建時從 localStorage 加載資料
    onInitialized() {
      this.loadProductsFromLocalStorage();
    }
});