
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
                    <ProductItem 
                    v-for=" item in paginatedProdList" 
                    :key="item.id"
                    :item="item"
                    />
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
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default{
    components: {
        ProductItem
    },
    data() {
        return {
            product: [],
            prodList: [],
            currentPage: 1
        }
    },
    computed: {
        paginatedProdList() {
            const startIndex = (this.currentPage - 1) * 16;
            const endIndex = startIndex + 16;
            return this.prodList.slice(startIndex, endIndex);
        }
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
    }
    }
}
</script>