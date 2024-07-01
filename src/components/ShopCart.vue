
<template>
    <div class="section section-shoppingcart">
        <div class="container">
            <div class="carticon" @click="toggleCartBox" v-if="!showCartBox">
                <div class="pic">
                    <img src="/img/shop/cart.png" alt="">
                </div>
                <div class="icon">
                    <span>{{ productCount }}</span>
                </div>
            </div>
            <div class="cartbox" v-if="showCartBox">
                <div class="carttitle">
                    <p>購物車</p>
                    <i class="fa-regular fa-circle-xmark" @click="toggleCartBox"></i>
                </div>
                <div class="cartinfo">
                    <div class="info" v-for="(item, index) in productList" :key="item.id">
                        <span>{{ index + 1 }}.</span>
                        <span>{{ item.P_NAME }}</span>
                        <span>數量 :</span>
                        <button @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">-</button>
                        <span>{{ item.amount ? item.amount : 1 }}</span>
                        <button @click="increaseQuantity(item)" :disabled="item.amount >= 10">+</button>
                        <span class="price">NT$ {{ item.P_PRICE * (item.amount ? item.amount : 1) }}</span>
                        <div class="delete">
                            <img src="/img/shop/delete2.png" alt="" @click="removeFromCart(item)">
                        </div>
                    </div>
                </div>
                <div class="carttotal">
                        <button @click="submitBuy">立即購買</button>
                    <span>NT$ {{ addPrice }}</span>
                </div>
                {{dogs.todos}}
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import { store } from '@/store.js'; // 引入store
import Swal from 'sweetalert2'; // 引入sweetalert2
import {useProdStore} from '@/stores/product'

export default {
    data() {
        return {
            cartItems: [],
            showCartIcon: false,
            showCartBox: false,
            sharedCart: [],

            // 該頁存儲localStorage資料
            productList: [],
            dogs:useProdStore(),
        }
    },
    mounted() {
        //登入後取得name並存入localStorage，在初始化layout時取得本機快取中的name 
        this.productList = JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : [];
        //依照自己需求來監聽對應的key 
        window.addEventListener("setItemEvent", (e) => {
            // e.key : 是值改變的key 
            // e.newValue : 是可以對應的新值
            if (e.key === "cartItems") {
                this.productList = JSON.parse(e.newValue) ? JSON.parse(e.newValue) : [];
            };
        });
    },
    computed: {
        addPrice() {
            return this.productList.reduce((total, item) => {
                return total + item.P_PRICE * item.amount;
            }, 0);
        },
        // 購物車商品數量
        productCount() {
            let count = 0;
            console.log(this.productList)
            this.productList.forEach(item => {
                console.log(item.amount)
                count = count + (item.amount ? item.amount : 1);
            }); 
            console.log(count)
            return count
        }
    },
    methods: {

        // 點擊購物車Icon
        toggleCartBox() {
            // 收折list列表
            this.showCartBox = !this.showCartBox;
            if (this.showCartBox) {
            this.showCartIcon = false; 
            } else if (this.cartItems.length > 0) {
            this.showCartIcon = true; 
            }
        },
        removeFromCart(item) {
            const index = this.productList.findIndex(element => element.id == item.id);
            this.productList.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(this.productList));
        },
        decreaseQuantity(item) {
            if (item.amount > 1) {
                this.productList.forEach(forItem => {
                    if (forItem.P_ID == item.P_ID) {
                        forItem.amount = forItem.amount - 1;
                    };
                });
                localStorage.setItem('cartItems', JSON.stringify(this.productList));
            }
        },
        increaseQuantity(item) {
            if (item.amount < 10) {
                this.productList.forEach(forItem => {
                    if (forItem.P_ID == item.P_ID) {
                        forItem.amount = forItem.amount + 1;
                    };
                });
                localStorage.setItem('cartItems', JSON.stringify(this.productList));
            }
        },
        submitBuy() {
            if (!store.isLoging) {
                Swal.fire({
                icon: 'error',
                title: '未登入',
                text: '請先登入會員才能進行購買'
                }).then(() => {
                this.$router.push('/Member');
                // 未登入跳轉至會員登入頁面
                });
                return;
            } else{
                this.$router.push('/mallcart');
            }
        },
        addcatttt(){
            this.dogs;
            console.log(this.dogs.todos)
        }
    }
}
</script>