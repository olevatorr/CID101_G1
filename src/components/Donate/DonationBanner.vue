<script>
// 引入必要的模塊
import Cookies from 'js-cookie';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '@/store.js'; // 引入store
import Swal from 'sweetalert2'; // 引入sweetalert2

export default {
    name: 'DonationBanner', // 組件名稱
    setup() {
        // 預設捐款金額選項
        const donationAmounts = [100, 500, 1000, 2000];
        const selectedAmount = ref(null); // 被選中的捐款金額
        const customAmount = ref(null); // 自訂捐款金額
        const router = useRouter();

        // 選擇預設捐款金額
        const selectAmount = (amount) => { 
            selectedAmount.value = amount;
            customAmount.value = null; // 清空自定義金額
        };

        const checkMaxAmount = (event) => {
            if (event.target.value > 100000) { 
                customAmount.value = 100000; 
            }
        };

        // 監聽自定義金額輸入框的變化
        watch(customAmount, (newVal) => {
            if (newVal !== null && newVal !== "") {
                selectedAmount.value = null; // 取消預設金額選中狀態
            }
        });

        // 提交捐款金額
        const submitDonation = () => {
            if (!store.isLoging) {
                Swal.fire({
                    icon: 'error',
                    title: '未登入',
                    text: '請先登入會員才能進行捐款'
                }).then(() => {
                    router.push('/Member');
                     // 未登入跳轉至會員登入頁面
                });
                return;
            }
            const amountToDonate = selectedAmount.value || customAmount.value; // 確定捐款金額
            if (amountToDonate < 100) {
                Swal.fire({
                    icon: 'error',
                    title: '無效金額',
                    text: '請輸入有效的捐款金額，單筆交易最低100元'
                }).then(() => {
                    customAmount.value = "";
                });
                return;
            }
            // 計算過期時間為10秒
            const expires = new Date(new Date().getTime() + 10 * 1000);
            Cookies.set('donationAmount', amountToDonate, { expires }); // 將捐款金額儲存到 Cookie 中，有效期為10秒
            router.push('/DonatePage'); // 跳轉至捐款頁面
        };

        return {
            donationAmounts,
            selectedAmount,
            customAmount,
            selectAmount,
            submitDonation,
            checkMaxAmount,
            store // 將store導出至模板中
        };
    },
};
</script>

<template>
    <section class="section section-banner">
        <div class="container">
            <div class="container-left">
                <!-- 頁面標題和簡短描述 -->
                <h1>熱心捐款</h1>
                <span>用愛灌溉<br>讓海洋生生不息</span>
            </div>
            <div class="container-donate">
                <div class="row">
                    <!-- 左側描述 -->
                    <div data-aos="fade-left" data-aos-duration="2000" class="col-12 col-md-5">
                        <p>每一份捐助,都是一份守護<br>為海洋的永續盡一份心力</p>
                    </div>
                    <div class="col-12 col-md-7 unit-table">
                        <!-- 捐款金額選項 -->
                        <div v-for="amount in donationAmounts" :key="amount"
                            :class="{ 'selected': selectedAmount === amount }" @click="selectAmount(amount)">
                            <label>
                                <input type="radio" name="unit">
                                ${{ amount }}
                            </label>
                        </div>
                        <div class="donate-submit">
                            <div class="unit-input">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <!-- 自訂捐款金額輸入框 -->
                                <input type="number" v-model="customAmount" min="0" @input="checkMaxAmount" />
                            </div>
                            <button @click="submitDonation">
                                <!-- 點擊按鈕提交捐款金額並跳轉至捐款頁面 -->
                                捐款去
                            </button>
                        </div>
                        <div class="spanpay">
                            <span>單筆最高上限10萬元，最低100元</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
