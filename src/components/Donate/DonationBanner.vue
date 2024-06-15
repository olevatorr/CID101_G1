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
                                <input type="number" v-model="customAmount" min="0" oninput="if(value>100000)value=100000">
                            </div>
                            <button @click="submitDonation">
                                <!-- 點擊按鈕提交捐款金額並跳轉至捐款頁面 -->
                                <RouterLink to="/DonatePage">捐款去</RouterLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// 引入必要的模塊
import Cookies from 'js-cookie';
import { ref } from 'vue';

export default {
    name: 'DonationBanner', // 組件名稱
    setup() {
        // 預設捐款金額選項
        const donationAmounts = [100, 500, 1000, 2000];
        const selectedAmount = ref(null); // 被選中的捐款金額
        const customAmount = ref(0); // 自訂捐款金額

        // 選擇預設捐款金額
        const selectAmount = (amount) => {
            selectedAmount.value = amount;
        };

        // 提交捐款金額
        const submitDonation = () => {
            const amountToDonate = selectedAmount.value || customAmount.value; // 確定捐款金額
            Cookies.set('donationAmount', amountToDonate, { expires: 1 }); // 將捐款金額儲存到 Cookie 中，有效期為1天
        };

        return {
            donationAmounts,
            selectedAmount,
            customAmount,
            selectAmount,
            submitDonation,
        };
    },
};
</script>

