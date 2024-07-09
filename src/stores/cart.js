    // src/stores/cart.js
import { defineStore } from 'pinia' 

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addToCart(product) {
            const existingProduct = this.items.find(item => item.P_ID === product.P_ID)
            if (existingProduct) {
                existingProduct.amount++
            } else {
                this.items.push({ ...product,amount: 1})
            }
            this.saveCartToLocalStorage(); 
            // 每次添加商品後保存到 localStorage
        },
        removeFromCart(productId) {
            this.items = this.items.filter(item => item.P_ID !== productId)
            this.saveCartToLocalStorage();
        },
        updateQuantity(productId, quantity) {
            const item = this.items.find(item => item.P_ID === productId)
            if (item) {
                item.amount = quantity;
                this.saveCartToLocalStorage();
            }
        },
        saveCartToLocalStorage() {
            localStorage.setItem('cartItems', JSON.stringify(this.items));
        },
        loadCartFromLocalStorage() {
            const storedItems = localStorage.getItem('cartItems');
            if (storedItems) {
                this.items = JSON.parse(storedItems);
            }
        },
        initializeStore() {
            console.log('Initializing cart store');
            this.loadCartFromLocalStorage();
            console.log('Cart items after initialization:', this.items);
        }
    },
    getters: {
        totalPrice: (state) => {
            return state.items.reduce((total, item) => total + item.P_PRICE * item.amount, 0);
        },
        totalItems: (state) => {
            // console.log(this.items)
            return state.items.reduce((total, item) => total + item.amount, 0);
            
        },
    },
    // 在 store 創建時從 localStorage 加載資料
        onInitialized() {
            this.loadCartFromLocalStorage();
    }
})