<template>
    <div>
        <section class="section section-shop-banner">
            <div class="container">
                <div class="title-wrap">
                    <div class="title">
                        <span>商城</span>
                        <h1>Mall</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shop-title">
            <div class="container">
                <div class="title">
                    <h3>商品頁面</h3>
                    <h3>減少海洋垃圾，綠色購物很簡單!</h3>
                </div>
                <div class="category">
                    <ul>
                        <li>商品分類</li>
                        <li @click="clear()">全部商品</li>
                        <li @click="filter('杯套')">杯套類</li>
                        <li @click="filter('上衣')">上衣類</li>
                        <li @click="filter('包包')">包包類</li>
                        <li @click="filter('馬克杯')">馬克杯</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section section-product-list">
            <div class="container">
                <div class="row">
                    <ProductItem @add-to-cart="addToCart(item)" 
                    v-for=" item in paginatedProdList" 
                    :key="item.id"
                    :item="item"
                    />
                </div> 
            </div> 
        </section>
        
        <section class="section section-shoppingcart">
            <div class="container">
                <div class="carticon" :class="{ show: showCartIcon }" @click="toggleCartBox">
                    <div class="pic">
                        <img src="../../public/img/shop/cart.png" alt="">
                    </div>
                    <div class="icon">
                        <span>{{ cartCount }}</span>
                    </div>
                </div>    
                <div class="cartbox" :class="{ show: showCartBox }">
                    <div class="carttitle">
                            <p>購物車</p>
                            <i class="fa-regular fa-circle-xmark" @click="toggleCartBox"></i>
                    </div>
                    <div class="cartinfo">
                        <div class="info" v-for="(item, index) in cartItems" :key="item.id">
                            <span>{{ index + 1 }}.</span>
                            <span>{{ item.title }}</span>
                            <span>數量 :</span>
                            <button @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">-</button>
                            <span>{{ item.quantity }}</span>
                            <button @click="increaseQuantity(item)" :disabled="item.quantity >= 10">+</button>
                            <span class="price">NT$ {{ item.price * item.quantity }}</span>
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
        </section>

        <section class="section section-pagination">
            <div class="container">
                <div class="button">
                    <a href="#" @click.prevent="changePage(1)">1</a>
                    <a href="#" @click.prevent="changePage(2)" v-if="prodList.length > 16 && prodList.length === product.length">2</a>
                </div>
            </div>
            <div class="sea-img">
                <img src="../../public/img/shop/sea.png" alt="">
            </div>
        </section>

        <ProductInfoView @add-to-cart="handleAddToCart" :sharedCart="sharedCart" />
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default{
    components: {
        ProductItem,
    },
    data() {
        return {
            product: [],
            prodList: [],
            cart: [],
            currentPage: 1,
            cartCount: 0,
            cartItems: [],
            showCartIcon: false,
            showCartBox: false,
            sharedCart: []
        }
    },
    computed: {
        paginatedProdList() {
            const startIndex = (this.currentPage - 1) * 16;
            const endIndex = startIndex + 16;
            return this.prodList.slice(startIndex, endIndex);
        },
        totalPrice() {
            return this.quantity * this.productdetail.price;
        },
        addPrice() {
            return this.cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
            }, 0);
        },
    },
    mounted() {
        fetch("/public/shop.json")
        .then(data => data.json())
        .then(res => {
            //備份用
            this.product = res
            //顯示用
            this.prodList = res
            console.log(res)
        })
    },
    methods: {
        clear(){
            this.prodList = this.product;
            this.currentPage = 1;
        },
        filter(dog){
            console.log(dog);
            this.prodList = this.product.filter(item => item.class === dog);
            this.currentPage = 1;
        },
        changePage(page) {
            this.currentPage = page;
            window.scrollTo(0, 0);
        },
        addToCart(product) {
            this.cartCount++;
            const existingProduct = this.cartItems.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cartItems.push({ ...product, quantity: 1 });
            }
            this.showCartIcon = true;
        },
        removeFromCart(item) {
            const index = this.cartItems.indexOf(item);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                this.cartIndex--;
                this.cartCount--;
                if (this.cartItems.length === 0) {
                    this.showCartIcon = false; 
                    this.showCartBox = false;
                }
            }
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
            },
        increaseQuantity(item) {
            if (item.quantity < 10) {
                item.quantity++;
            }
        },
        toggleCartBox() {
            this.showCartBox = !this.showCartBox;
            if (this.showCartBox) {
            this.showCartIcon = false; 
            } else if (this.cartItems.length > 0) {
            this.showCartIcon = true; 
            }
        },
        handleAddToCart(localCart) {
            this.sharedCart = [...this.sharedCart, ...localCart]
        }
    }
}
</script>