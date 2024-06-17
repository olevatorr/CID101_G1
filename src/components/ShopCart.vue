<template>
    <div class="section section-shoppingcart">
        <div class="container">
            <div class="carticon" @click="toggleCartBox" v-if="!showCartBox">
                <div class="pic">
                    <img src="../../public/img/shop/cart.png" alt="">
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
                        <span>{{ item.title }}</span>
                        <span>數量 :</span>
                        <button @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">-</button>
                        <span>{{ item.amount ? item.amount : 1 }}</span>
                        <button @click="increaseQuantity(item)" :disabled="item.amount >= 10">+</button>
                        <span class="price">NT$ {{ item.price * (item.amount ? item.amount : 1) }}</span>
                        <div class="delete">
                            <img src="../../public/img/shop/delete2.png" alt="" @click="removeFromCart(item)">
                        </div>
                    </div>
                </div>
                <div class="carttotal">
                    <RouterLink :to="'/mallcart'">
                        <button>立即購買</button>
                    </RouterLink>
                    <span>NT$ {{ addPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [],
            showCartIcon: false,
            showCartBox: false,
            sharedCart: [],

            // 該頁存儲localStorage資料
            productList: [],
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
                return total + item.price * item.amount;
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
                    if (forItem.id == item.id) {
                        forItem.amount = forItem.amount - 1;
                    };
                });
                localStorage.setItem('cartItems', JSON.stringify(this.productList));
            }
        },
        increaseQuantity(item) {
            if (item.amount < 10) {
                this.productList.forEach(forItem => {
                    if (forItem.id == item.id) {
                        forItem.amount = forItem.amount + 1;
                    };
                });
                localStorage.setItem('cartItems', JSON.stringify(this.productList));
            }
        },
    }
}
</script>