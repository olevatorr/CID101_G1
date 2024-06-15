<template>
    <section class="section section-mallcart-cart">
        <div class="container">
            <div class="cart-wrap">
                <div class="title">
                    <h3>01</h3>
                    <h3>購物車內容</h3>
                </div>
                <div class="cart-head">
                    <p>項目</p>
                    <p>商品資料</p>
                    <p>小計</p>
                </div>
            </div>
            <div class="cart-info">
                <div class="item">
                    <p>1</p>
                </div>
                <div class="content">
                    <div class="pic">
                        <img src="../../../public/img/donate/Mask group.png" alt="">
                    </div>
                    <div class="pic">
                        <p>【為海洋生態出一份力】</p>
                    </div>
                </div>
                <div class="price">
                    <!-- 顯示捐款金額 -->
                    <p>NT$ {{ donationAmount }}</p>
                </div>
                <div class="subtotal">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <div class="cart-price">
                <div class="text">
                    <h3>訂單金額 NT$ {{ donationAmount }}</h3>
                </div>
            </div>
            <div class="cart-total">
                <div class="text">
                    <h3>應付金額 NT$ {{ donationAmount }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// 引入必要的模塊
import Cookies from 'js-cookie';

export default {
    name: 'DonateCart', // 組件名稱
    data() {
        return {
            donationAmount: 0, // 存儲捐款金額
        };
    },
    mounted() {
        // 從 Cookie 中讀取捐款金額
        this.donationAmount = Cookies.get('donationAmount');
    },
};
</script>

