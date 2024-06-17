<script>
import { store } from '@/store.js';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export default {
    name: 'DonatePage',
    data() {
        return {
            donationAmount: 0,
            donationId: '', // 新增捐款編號
            donationDate: '', // 新增捐款日期
            isLightboxVisible: false, // 控制 Lightbox 是否顯示
            isChecked: false // 控制 checkbox 是否被勾選
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
            if (!this.isChecked) {
                Swal.fire({
                    icon: 'warning',
                    title: '請確認捐款條款',
                    text: '請先勾選確認捐款條款方可進行捐款。'
                });
                return;
            }
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
        <div class="cart-confirm">
            <div>
                <input type="checkbox" id="scales" name="scales" v-model="isChecked" />
                <label for="scales">為保障彼此之權益,捐款一經送出即無法退款。在您完成捐款程序後,我們將視為您已確認並同意捐款金額無法退回。敬請在送出捐款前,仔細確認您欲捐款之金額及相關信息,一旦完成捐款流程,我們將無法為您辦理退款。您的每一筆善款都將被謹慎使用於海洋保護相關工作,感謝您的慷慨解囊與支持。若您對捐款使用有任何疑問,歡迎隨時與我們聯繫,我們將竭誠為您提供所需之資訊。</label>
            </div>
        </div>
    </div>
</section>
<section class="section section-confirm">
    <div class="container">
        <div class="cart-checkout">
            <button @click="confirmDonation">確認捐款</button>
        </div>
    </div>
</section>

<!-- Lightbox 彈窗 -->
<section class="lightboxbg">
    <div v-if="isLightboxVisible" class="lightbox">
        <div class="lightbox-content">
            <h2>捐款證書</h2>
            <p>捐款編號:{{ donationId }}</p>
            <p>捐款姓名: {{ store.member.U_NAME }}</p>
            <p>捐款金額: NT$ {{ donationAmount }}</p>
            <p>捐款日期: {{ donationDate }}</p>
            <p>社福財團法人:Tibame績育海洋服務</p>
            <p>捐款用途:捐款可能會用於開展海洋教育項目，促進公眾對海洋生態的認識和理解，提高對海洋保護的關注度。</p>
            <RouterLink to="/"><button>下載並至首頁</button></RouterLink>
        </div>
    </div>
</section>

</template>

<style scoped>
/* Lightbox 的樣式 */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .lightbox_bg{
    background: #0056b3;
    padding: 150px 100px 100px 100px;
} */
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

</style>