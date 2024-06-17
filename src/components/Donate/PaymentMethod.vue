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
                            <input type="radio" v-model="selectedPayment" id="credit-card" name="drone" value="credit-card" />
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
                            <input type="radio" v-model="selectedPayment" id="store-code" name="drone" value="store-code"  />
                            超商代碼
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="atm">
                            <input type="radio" v-model="selectedPayment" id="atm" name="drone" value="atm"  />
                            ATM轉帳
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MallcartPay',
    setup() {
        const selectedPayment = ref(''); // 默認不選中任何選項

        return {
            selectedPayment,
        };
    },
};
</script>