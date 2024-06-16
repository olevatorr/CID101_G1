<script>
import { store } from '@/store.js'
import Cookies from 'js-cookie';

export default {
    name: 'DonatePage',
    data() {
        return {
            donationAmount: 0,
            donationId: '', // 新增捐款編號
            donationDate: '', // 新增捐款日期
            isLightboxVisible: false // 控制 Lightbox 是否顯示
        };
    },
    mounted() {
        this.donationAmount = Cookies.get('donationAmount');
    },
    computed: {
        store() {
            return store;
        }
    },
    methods: {
        // 確認捐款按鈕的處理函數
        confirmDonation() {
            this.donationId = 'D' + Date.now(); // 生成簡單的捐款編號
            this.donationDate = new Date().toLocaleString(); // 獲取當前日期和時間
            this.isLightboxVisible = true; // 顯示 Lightbox
        },
        // 關閉 Lightbox 的處理函數
        closeLightbox() {
            this.isLightboxVisible = false; // 隱藏 Lightbox
        }
    }
};
</script>


<template>
    <section class="section section-confirm">
        <div class="container">
            <div class="cart-checkout">
                <button @click="confirmDonation">確認捐款</button>
            </div>
        </div>
    </section>

    <!-- Lightbox 彈窗 -->
    <div v-if="isLightboxVisible" class="lightbox">
        <div class="lightbox-content">
            <h2>捐款成功</h2>
            <p>捐款編號: {{ donationId }}</p>
            <p>會員姓名: {{ store.member.U_NAME }}</p>
            <p>捐款金額: NT$ {{ donationAmount }}</p>
            <p>捐款日期: {{ donationDate }}</p>
            <RouterLink to="/"><button>回首頁</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>
/* Lightbox 的樣式 */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.lightbox-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.lightbox-content h2 {
    margin-bottom: 20px;
}

.lightbox-content p {
    margin: 10px 0;
}

.lightbox-content button {
    margin-top: 20px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.lightbox-content button:hover {
    background: #0056b3;
}
</style>