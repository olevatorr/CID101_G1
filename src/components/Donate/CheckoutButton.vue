<script>
import { store } from '@/store.js';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { ref } from 'vue'

export default {
    name: 'DonatePage',
    setup() {
        const contentToConvert = ref(null)

        const printContent = () => {
            const printWindow = window.open('', '', 'height=600,width=800')
            const defaultFileName = '捐款證書.pdf' // 設定默認文件名
            printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>${defaultFileName}</title>
        <style>
            .logoimgbox {margin: 0;}
            .txt-content {
                background: white;
                padding: 0 20px 30px 20px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                height: 100%;
            }
            .h4-line {
                border-bottom: 1px solid black;
                margin: 20px 0;
            }
            .txt-content img {
                margin: 10px;
            }
            .txtcontentbox {
                border: 1px solid black;
                max-width: 40vh;
                text-align: start;
                padding: 10px;
                margin-bottom: 10px;
            }
            .stamp {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .stamp img {
                height: 40px;
            }
            .stamp p {
                text-align: end;
            }
            button {
                display: none;
            }
            @media print {
            @page {
                size: auto;
                margin: 0;
            }
            body {
                display: flex;
                justify-content: center;
                height: 100vh;
                margin: 0;
            }
            }
            @media (max-width: 768px) {
            .lightbox {
                width: 70%;
                height: 70%;
                padding: 30px;
            }
            .alert-box {
                max-width: 70%;
                max-height: 70%;
            }
            }
         </style>
        </head>
        <body>
            ${contentToConvert.value.innerHTML}
        </body>
        </html>
        `)
            printWindow.document.close()
            printWindow.print()
            printWindow.addEventListener('afterprint', () => { printWindow.close() })
        }

        return {
            contentToConvert,
            printContent
        }
    },
    data() {
        return {
            donationAmount: 0,
            donationId: '', // 新增捐款編號
            donationDate: '', // 新增捐款日期
            isLightboxVisible: false, // 控制 Lightbox 是否顯示
            isChecked: false, // 控制 checkbox 是否被勾選
            selectedPayment: null // 默認不選中任何選項
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
            if (!this.selectedPayment) {
                Swal.fire({
                    icon: 'warning',
                    title: '請確認付款方式',
                    text: '請先選擇付款方式，再進行下一步。'
                });
                return;
            } else if (!this.isChecked) {
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
            this.disableBodyScroll(); // 禁用页面滚动
        },
        closeLightbox() {
            this.isLightboxVisible = false; // 隱藏 Lightbox
            this.enableBodyScroll(); // 启用页面滚动
        },
        disableBodyScroll() {
            document.body.style.overflow = 'hidden'; // 禁用页面滚动
        },
        enableBodyScroll() {
            document.body.style.overflow = 'auto'; // 启用页面滚动
        }
    }
};
</script>


<template>
    <section class="section section-mallcart-pay">
        <div class="container">
            <div class="cart-pay">
                <div class="title">
                    <h3>03</h3>
                    <h3>付款方式</h3>
                </div>
            </div>
            <div class="cart-pay-choose">
                <div class="row">
                    <div class="ship-method col-12 col-md-6">
                        <label for="credit-card">
                            <input type="radio" v-model="selectedPayment" id="credit-card" name="drone"
                                value="credit-card" />
                            信用卡
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="line-pay">
                            <input type="radio" v-model="selectedPayment" id="line-pay" name="drone" value="line-pay" />
                            LINE PAY
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="store-code">
                            <input type="radio" v-model="selectedPayment" id="store-code" name="drone"
                                value="store-code" />
                            超商代碼
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="atm">
                            <input type="radio" v-model="selectedPayment" id="atm" name="drone" value="atm" />
                            ATM轉帳
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="cart-confirm">
                <div>
                    <input type="checkbox" id="scales" name="scales" v-model="isChecked" />
                    <label
                        for="scales">為保障彼此之權益,捐款一經送出即無法退款。在您完成捐款程序後,我們將視為您已確認並同意捐款金額無法退回。敬請在送出捐款前,仔細確認您欲捐款之金額及相關信息,一旦完成捐款流程,我們將無法為您辦理退款。您的每一筆善款都將被謹慎使用於海洋保護相關工作,感謝您的慷慨解囊與支持。若您對捐款使用有任何疑問,歡迎隨時與我們聯繫,我們將竭誠為您提供所需之資訊。</label>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section section-CheckoutButton">
        <div class="container">
            <div class="row">
                <div class="cart-checkout">
                    <RouterLink to="/Donate"><button class="DonateBackBtn">返回捐款頁面</button></RouterLink>
                    <button @click="confirmDonation" class="">確認捐款</button>
                </div>
            </div>
        </div>
    </section>

    <div v-if="isLightboxVisible" class="backdrop" @click.self="closeLightbox"></div>

    <!-- Lightbox -->
    <section class="lightboxbg">
        <div class="container">
            <div v-if="isLightboxVisible" class="alert-box lightbox">
                <div class="alert-header lightbox-content">
                    <div class="lightbox-p">
                        <h3>捐款成功</h3>
                        <p>感謝您對海洋資源的保護，為未來世代留下了更美好的環境。您的智慧和付出，讓我們能夠更好地理解和利用海洋資源，同時保護海洋生態的多樣性和穩定性，為後人留下了寶貴的遺產。</p>

                    </div>
                </div>
                <div class="alert-content lightbox-content">
                    <!-- 印製 -->
                    <div class="txt-content" ref="contentToConvert">
                        <div>
                            <img class="logoimgbox" src="/public/img/LOGO-color.png" width="10%">
                            <div class="h4-line">
                                <h4>捐款證書</h4>
                            </div>
                            <div class="txtcontentbox">
                                <p>捐款編號:{{ donationId }}</p>
                                <p>捐款姓名: {{ store.member.U_NAME }}</p>
                                <p>捐款金額: NT$ {{ donationAmount }}</p>
                                <p>捐款日期: {{ donationDate }}</p>
                                <p>社福財團法人:Tibame績育海洋服務</p>
                                <div class="donatboxtxt">
                                    <p>捐款用途:</p>
                                    <p>捐款可能會用於開展海洋教育項目，促進公眾對海洋生態的認識和理解，提高對海洋保護的關注度。</p>
                                </div>
                                <div class="stamp">
                                    <p>社福財團法人:Tibame績育海洋服務</p>
                                    <img src="/public/img/donate/緯育海洋服務辦事處_redmi 1.png" alt="Stamp">
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/"><button @click="printContent">下載並至首頁</button></RouterLink>
                    </div>
                    <!-- 印製 -->
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    z-index: 998; /* 确保遮罩在内容之上 */
}
/* Lightbox 的樣式 */
.lightbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0056b3;
    padding: 20px;
    max-width: 60vh;
    max-height: 100vh;
    z-index: 1000;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.lightbox p {
    font-size: 10px;
    margin: 10px;
}

.lightbox h3 {
    margin: 10px;
    color: white;
}

.lightbox-p p {
    text-align: start;
    color: white;
}

.lightbox-content {
    border-radius: 5px;
    text-align: center;
}

.alert-box {
    background-color: #0056b3;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: left;
    max-width: 60vh;
    max-height: 100vh;
}

.alert-header {
    display: flex;
    align-items: center;
}

.alert-content {
    max-width: 60vh;
    max-height: 60vh;
    display: flex;
    justify-content: center;
}

.logoimgbox {
    margin: 0;
}

.txt-content {
    background: white;
    padding: 0 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.h4-line {
    border-bottom: 1px solid black;
    margin: 20px 0;
}

.txt-content img {
    margin: 10px;
}

.txtcontentbox {
    border: 1px solid black;
    max-width: 40vh;
    text-align: start;
    padding: 10px;
    margin-bottom: 10px;
    /* 新增這行確保底部有足夠的間距 */
}

.stamp {
    display: flex;
    justify-content: center;
    align-items: center;
}

.txt-content button {
    margin: 10px 0;
    /* 確保按鈕有適當的頂部間距 */
}

.stamp img {
    height: 40px;
}

.stamp p {
    text-align: end;
}

@media (max-width: 768px) {
    .lightbox {
        width: 70%;
        height: 70%;
        padding: 30px;
    }

    .alert-box {
        max-width: 70%;
        max-height: 70%;
    }
}
</style>