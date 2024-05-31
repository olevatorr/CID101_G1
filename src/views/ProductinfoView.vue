<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="section section-production-picture">
        <div class="container">
            <div class="breadcrumb">
                <a href="">首頁</a>
                <a href="">商城</a>
                <a href="">商品資訊</a>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12">
                            <div class="big-pic">
                                <img src="../../public/img/productioninfo/01.png" alt="">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="small-pic">
                                <img src="../../public/img/productioninfo/02.png" alt="">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="small-pic">
                                <img src="../../public/img/productioninfo/03.png" alt="">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="small-pic">
                                <img src="../../public/img/productioninfo/04.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="info-group">
                        <div class="title">
                            <h3>【側背包經典款-鯨魚】</h3>
                        </div>
                        <div class="content">
                            <p>這款環保帆布包的設計理念源自於對大自然的熱愛與尊重。<br>我們希望透過這個產品,呼籲人們重視環境保護,減少對地球資源的過度消耗和破壞。</p>
                        </div>
                        <div class="line">
                        </div>
                        <div class="amount">
                            <span>數量 : </span>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div class="price">
                            <span>金額總計 $520 元</span>
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
                <p>這款100%環保帆布包,專為熱愛時尚且關注環境永續的現代人而設計。<br>包身採用12oz重磅再生棉帆布製造,混紡再生寶特瓶纖維及有機棉,具備出色的耐磨性和透氣性。</p>
                <div class="pic">
                    <img src="../../public/img/productioninfo/05.png" alt="">
                </div>
                <h3>規格說明</h3>
                <div class="directions">
                    <div class="text">
                        <p>材質 : 帆布 </p>
                        <p>尺寸 : 20x26x6</p>
                        <p>顏色 : 米白色</p>
                    </div>
                    <div class="pic">
                        <img src="../../public/img/productioninfo/06.png" alt="">
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