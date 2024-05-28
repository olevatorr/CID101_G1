<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
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
                    <li><a href="">全部商品</a></li>
                    <li><a href="">杯套類</a></li>
                    <li><a href="">上衣類</a></li>
                    <li><a href="">包包類</a></li>
                    <li><a href="">馬克杯</a></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section section-product-list">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3" v-for="item in productlist" :key="item.id">
                    <RouterLink  to="/productinfo">
                        <div class="shop-card">
                            <div class="img">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div class="text">
                                <span>{{ item.title }}</span>
                                <span>NT$ {{ item.price }}</span>
                            </div>
                            <div class="cart">
                                <span>加入購物車</span>
                                <a href="">🩶</a>
                            </div>
                            <div class="hot">
                                <span>熱銷商品</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-pagination">
        <div class="container">
            <div class="button">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
            </div>
        </div>
        <div class="sea-img">
            <img src="../../public/img/shop/sea.png" alt="">
        </div>
        <div class="turtle-img">
            <img src="../../public/img/shop/turtle.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            productlist: [
                {
                    id: 1,
                    title: '【側背包套經典款-鯨魚】',
                    price: 520,
                    imgUrl: '../../public/img/shop/01.png'
                },
                {
                    id: 2,
                    title: '【側背包套經典款-海龜】',
                    price: 520,
                    imgUrl: '../../public/img/shop/02.png'
                },
                {
                    id: 3,
                    title: '【側背包套經典款-企鵝】',
                    price: 520,
                    imgUrl: '../../public/img/shop/03.png'
                },
                {
                    id: 4,
                    title: '【側背包套經典款-海豚】',
                    price: 520,
                    imgUrl: '../../public/img/shop/04.png'
                },
                {
                    id: 5,
                    title: '【大學T經典款-鯨魚】',
                    price: 1980,
                    imgUrl: '../../public/img/shop/05.png'
                },
                {
                    id: 6,
                    title: '【大學T經典款-海龜】',
                    price: 1980,
                    imgUrl: '../../public/img/shop/06.png'
                },
                {
                    id: 7,
                    title: '【大學T經典款-企鵝】',
                    price: 1980,
                    imgUrl: '../../public/img/shop/07.png'
                },
                {
                    id: 8,
                    title: '【大學T經典款-海豚】',
                    price: 1980,
                    imgUrl: '../../public/img/shop/08.png'
                },
                {
                    id: 9,
                    title: '【飲料杯套經典款-鯨魚】',
                    price: 120,
                    imgUrl: '../../public/img/shop/09.png'
                },
                {
                    id: 10,
                    title: '【飲料杯套經典款-海龜】',
                    price: 120,
                    imgUrl: '../../public/img/shop/10.png'
                },
                {
                    id: 11,
                    title: '【飲料杯套經典款-企鵝】',
                    price: 120,
                    imgUrl: '../../public/img/shop/11.png'
                },
                {
                    id: 12,
                    title: '【飲料杯套經典款-海豚',
                    price: 120,
                    imgUrl: '../../public/img/shop/12.png'
                },
                {
                    id: 13,
                    title: '【馬克杯套經典款-鯨魚】',
                    price: 660,
                    imgUrl: '../../public/img/shop/13.png'
                },
                {
                    id: 14,
                    title: '【馬克杯套經典款-海龜】',
                    price: 660,
                    imgUrl: '../../public/img/shop/14.png'
                },
                {
                    id: 15,
                    title: '【馬克杯套經典款-企鵝】',
                    price: 660,
                    imgUrl: '../../public/img/shop/15.png'
                },
                {
                    id: 16,
                    title: '【馬克杯套經典款-海豚】',
                    price: 660,
                    imgUrl: '../../public/img/shop/16.png'
                }
            ],
        }
    }
}
</script>