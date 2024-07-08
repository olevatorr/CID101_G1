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
            this.items.push({ ...product })
        }
        },
        removeFromCart(productId) {
            this.items = this.items.filter(item => item.P_ID !== productId)
        },
        updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.P_ID === productId)
        if (item) {
            item.amount = quantity
        }
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
    }
})