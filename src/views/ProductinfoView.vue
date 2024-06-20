<template>
    <section class="section section-production-picture">
        <div class="container">
            <div class="breadcrumb">
                <router-link :to="{ name: 'home' }">首頁</router-link>
                <router-link :to="{ name: 'shop' }">商城</router-link>
                <router-link :to="{ name: 'productinfo' }">商品資訊</router-link>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12">
                            <div class="big-pic">
                                <img :src="getImageUrl(largeSrc)" alt="" />
                            </div>
                        </div>
                        <div class="col-4" v-for="(src, index) in productdetail.imgUrl" :key="index">
                            <div class="pic-s">
                                <img :src="getImageUrl(src)" alt="" @click="showLarge(src)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="info-group">
                        <div class="title">
                            <h3>{{ productdetail.title }}</h3>
                        </div>
                        <div class="content">
                            <p>{{ productdetail.content }}</p>
                        </div>
                        <div class="line">
                        </div>
                        <div class="amount">
                            <span>數量 : </span>
                            <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
                            <span>{{ productdetail.amount }}</span>
                            <button @click="increaseQuantity" :disabled="quantity >= 10">+</button>
                        </div>
                        <div class="price">
                            <span>金額總計 ${{ totalPrice }} 元</span>
                        </div>
                        <div class="button">
                            <RouterLink to="/mallcart">
                                <input type="button" value="立即購買">
                            </RouterLink>
                            <button class="add-to-cart" @click="addToCart(productdetail)">加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-introduce">
        <div class="container">
            <div class="text-group">
                <h3>產品介紹</h3>
                <p>{{ productdetail.introduce }}</p>
                <div class="pic">
                    <img :src="getImageUrl(productdetail.imgUrl2)" alt="">
                </div>
                <h3>規格說明</h3>
                <div class="directions">
                    <div class="text">
                        <p>材質 : {{ productdetail.material }}</p>
                        <p>尺寸 : {{ productdetail.size }}</p>
                        <p>顏色 : {{ productdetail.color }}</p>
                    </div>
                    <div class="pic">
                        <img :src="getImageUrl(productdetail.imgUrl3)" alt="">
                    </div>
                    <div class="text2">
                        <p>手工測量有1-3公分誤差，由於顯示器及拍照光線等<br>不可抗拒因素，色差不可避免。</p>
                    </div>
                </div>
                <div class="disclaimer">
                    <p>下訂購買表示已詳閱賣場購物須知，且100%同意依賣場製作流程、規則出貨！</p>
                </div>
            </div>
            <ShopCart v-if="$route.path === '/shop' || $route.path === '/productinfo'" />
        </div>
    </section>
</template>

<script>
import ShopCart from '@/components/ShopCart.vue';

export default {
    data() {
        return {
            largeSrc: "",
            quantity: 1,
            //商品細節資訊
            productdetail: {},
        };
    },
    components: {
        ShopCart,
    },
    computed: {
        totalPrice() {
            return this.productdetail.amount * this.productdetail.price;
        }
    },
    methods: {
        showLarge(src) {
            this.largeSrc = src;
        },
        decreaseQuantity() {
            if (this.productdetail.amount > 1) {
                this.productdetail.amount--;
            }
        },
        increaseQuantity() {
            if (this.productdetail.amount < 10) {
                this.productdetail.amount++;
            }
        },
        addToCart(item) {
            // 檢查localStorage裡有無資料
            console.log(localStorage.getItem('cartItems'));
            console.log(item)

            // localStorage.getItem是取得localStorage資料
            if (!localStorage.getItem('cartItems')) {
                console.log(localStorage.getItem('cartItems'));
                let arr = [];
                let obj = { ...item }
                obj.amount = obj.amount ? obj.amount : 1;
                arr.push(obj);
                // 把資料存在localStorage
                localStorage.setItem('cartItems', JSON.stringify(arr));
            } else {
                // 找到已存在購物車裡的商品列表,透過localsrortage方式取得
                let productList = JSON.parse(localStorage.getItem('cartItems'));
                console.log(productList)

                // 檢查商品列表裡有無資料
                if (!productList || !productList.length) {
                    let arr = [];
                    let obj = { ...item }
                    obj.amount = obj.amount ? obj.amount : 1;
                    arr.push(obj);
                    // 把資料存在localStorage
                    localStorage.setItem('cartItems', JSON.stringify(arr));
                } else {
                    let isReduce = false;

                    productList.forEach(element => {
                        if (item.id == element.id) {
                            if (!element.amount) {
                                element.amount = 1;
                            }
                            element.amount = element.amount + 1;
                            isReduce = true;
                        }
                    });


                    // 判斷isReduce有沒有在購物車裡面,沒有商品要push
                    if (!isReduce) {
                        let obj = { ...item }
                        obj.amount = obj.amount ? obj.amount : 1;
                        productList.push(obj);
                        // 把資料存在localStorage
                    }
                    localStorage.setItem('cartItems', JSON.stringify(productList));
                }
            }
        },
        getImageUrl(imgUrl) {
            return `${import.meta.env.BASE_URL}img/shop/${imgUrl}`;
        }
    },
        mounted() {
        console.log( this.$route.query.id)
        fetch(`${import.meta.env.BASE_URL}json/productdata.json`)
        .then(data => data.json())
        .then(data => {
            this.productdetail = data.find(item=>item.id==this.$route.query.id);
            this.productdetail.amount = 1;
            this.largeSrc = this.productdetail.imgUrl[0];
        })
    },
}
</script>