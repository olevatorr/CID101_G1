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
                                <img :src="largeSrc" alt="" />
                            </div>
                        </div>
                        <div class="col-4" v-for="(src, index) in productdetail.imgUrl" :key="index">
                            <div class="pic-s">
                                <img :src="src" alt="" @click="showLarge(src)" />
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
                            <span>{{ quantity }}</span>
                            <button @click="increaseQuantity" :disabled="quantity >= 10">+</button>
                        </div>
                        <div class="price">
                            <span>金額總計 ${{ totalPrice }} 元</span>
                        </div> 
                        <div class="button">
                            <RouterLink to="/mallcart">
                                <input type="button" value="立即購買">
                            </RouterLink>
                            <input type="button" value="加入購物車">
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
                    <img :src="productdetail.imgUrl2" alt="">
                </div>
                <h3>規格說明</h3>
                <div class="directions">
                    <div class="text">
                        <p>材質 : {{ productdetail.material }}</p>
                        <p>尺寸 : {{ productdetail.size }}</p>
                        <p>顏色 : {{ productdetail.color }}</p>
                    </div>
                    <div class="pic">
                        <img :src="productdetail.imgUrl3" alt="">
                    </div>
                    <div class="text2">
                        <p>手工測量有1-3公分誤差，由於顯示器及拍照光線等<br>不可抗拒因素，色差不可避免。</p>
                    </div>
                </div>
                <div class="disclaimer">
                    <p>下訂購買表示已詳閱賣場購物須知，且100%同意依賣場製作流程、規則出貨！</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            largeSrc: "",
            quantity: 1,
            //商品細節資訊
            productdetail:[],
        };
    },
    computed: {
        totalPrice() {
        return this.quantity * this.productdetail.price;
        }
    },
        methods: {
        showLarge(src) {
            this.largeSrc = src;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
            this.quantity--;
            }
        },
        increaseQuantity() {
            if (this.quantity < 10) {
            this.quantity++;
            }
        }
    },
        mounted() {
        console.log( this.$route.query.id)
        fetch("/public/productdata.json")
        .then(data => data.json())
        .then(res => {
            this.productdetail = res.find(item=>item.id==this.$route.query.id)
            this.largeSrc = this.productdetail.imgUrl[0];
        })
    },
}
</script>