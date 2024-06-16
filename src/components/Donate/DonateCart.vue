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
// 導入 js-cookie 庫,用於讀取和寫入 Cookie
import Cookies from 'js-cookie';

export default {
    // 定義組件名稱,便於調試和開發工具識別
    name: 'DonateCart',

    // data 函數返回組件的初始數據
    data() {
        return {
            // 初始化捐款金額為 0
            donationAmount: 0,
        };
    },

    // mounted 是 Vue 的生命週期鉤子,在組件被掛載到 DOM 後調用
    mounted() {
        // 從當前路由的查詢參數中獲取 'refreshed' 的值
        // 用於判斷頁面是否已經被重新整理過
        const refreshed = this.$route.query.refreshed;
        
        // 如果 refreshed 參數不存在
        if (!refreshed) {
            // 將 refreshed 參數設置為 'true',並保留其他現有的查詢參數
            // 這是為了標記頁面即將被重新整理
            this.$router.replace({ query: { ...this.$route.query, refreshed: 'true' } })
                .then(() => {
                    // 路由更新完成後,強制重新整理頁面
                    // 這確保了在讀取 Cookie 之前,頁面已經完全重新加載
                    window.location.reload();
                });
        } else {
            // 如果 refreshed 參數存在,表示頁面已經重新整理過
            // 從 Cookie 中讀取捐款金額
            const donationAmount = Cookies.get('donationAmount');

            // 如果 Cookie 中存在捐款金額
            if (donationAmount) {
                // 將 Cookie 中的值轉換為整數,並賦值給 donationAmount
                // 使用 parseInt 是為了確保 donationAmount 始終是一個數字
                this.donationAmount = parseInt(donationAmount, 10);
            }
        }
    },
};
</script>