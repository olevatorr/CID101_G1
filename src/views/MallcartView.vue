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
                    <p>價格</p>
                    <p>數量</p>
                    <p>小計</p>
                </div>
            </div>
            <div class="cart-info" v-for="(item, index) in cartItems" :key="index">
                <div class="item">
                    <p>{{ index + 1 }}</p>
                </div>
                <div class="content">
                    <div class="pic">
                        <img :src="Array.isArray(item.P_MAIN_IMG) ? getImageUrl(item.P_MAIN_IMG) : getImageUrl(item.P_MAIN_IMG)"
                            alt="">
                    </div>
                    <div class="title">
                        <p>{{ item.P_NAME }}</p>
                    </div>
                </div>
                <div class="price">
                    <p>$NT {{ item.P_PRICE }}</p>
                </div>
                <div class="amount">
                    <button @click="decreaseQuantity(item)">-</button>
                    <span>{{ item.amount }}</span>
                    <button @click="increaseQuantity(item)">+</button>
                </div>
                <div class="subtotal">
                    <p>NT$ {{ item.P_PRICE * item.amount }}</p>
                    <i class="fa-regular fa-circle-xmark" @click="removeFromCart(item.P_ID)"></i>
                </div>
            </div>
            <div class="cart-price">
                <div class="text">
                    <h4>訂單金額 NT$ {{ totalPrice }}</h4>
                    <h4>運費 +NT$60</h4>
                </div>
            </div>
            <div class="cart-total">
                <div class="text">
                    <h4>應付金額 NT$ {{ totalPrice + 60 }}</h4>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-member">
        <div class="container">
            <div class="cart-member">
                <div class="title">
                    <h3>02</h3>
                    <h3>會員資料</h3>
                </div>
            </div>
            <div class="cart-form">
                <div class="name">
                    <h4>會員名稱</h4>
                    <span>{{ memberStore.member.U_NAME }}</span>
                </div>
                <div class="phone">
                    <h4>會員電話</h4>
                    <span>{{ memberStore.member.U_PHONE }}</span>
                </div>
                <div class="email">
                    <h4>會員信箱</h4>
                    <span>{{ memberStore.member.U_EMAIL }}</span>
                </div>
                <div class="add">
                    <h4>會員地址</h4>
                    <span>{{ memberStore.member.U_ADDRESS }}</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-ship">
        <div class="container">
            <div class="cart-ship">
                <div class="title">
                    <h3>03</h3>
                    <h3>運送方式</h3>
                </div>
            </div>
            <div class="row">
                <div class="ship-method col-12 col-md-6">
                    <label for="express">
                        <input type="radio" id="express" name="drone" value="express" checked />
                        宅配
                    </label>
                </div>
                <div class="ship-method col-12 col-md-6">
                    <label for="seven">
                        <input type="radio" id="seven" name="drone" value="seven" checked />
                        7-11門市取件
                    </label>
                </div>
                <div class="ship-method col-12 col-md-6">
                    <label for="family">
                        <input type="radio" id="family" name="drone" value="family" checked />
                        全家門市取件
                    </label>
                </div>
                <div class="ship-method col-12 col-md-6">
                    <label for="hilife">
                        <input type="radio" id="hilife" name="drone" value="hilife" checked />
                        萊爾富門市取件
                    </label>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-receiver">
        <div class="container">
            <div class="cart-receive">
                <div class="title">
                    <h3>04</h3>
                    <h3>收件人資料 <input type="checkbox" v-model="input.checkbox">同會員資料</h3>
                </div>
            </div>
            <div class="cart-receiveinfo">
                <div class="name">
                    <h4>收件人姓名</h4>
                    <input type="text" v-model="name" id="name" name="name" :readonly="input.checkbox" />
                </div>
                <div class="phone">
                    <h4>收件人聯絡電話</h4>
                    <input type="text" v-model="phone" id="phone" name="phone" :readonly="input.checkbox" />
                </div>
                <div class="add">
                    <h4>收件人地址</h4>
                    <input type="text" v-model="add" id="add" name="add" :readonly="input.checkbox" />
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-pay">
        <div class="container">
            <div class="cart-pay">
                <div class="title">
                    <h3>05</h3>
                    <h3>付款方式</h3>
                </div>
            </div>
            <div class="cart-pay-choose">
                <div class="row">
                    <div class="ship-method col-12 col-md-6">
                        <label for="credit-card">
                            <input type="radio" id="credit-card" name="drone" value="credit-card" checked />
                            信用卡
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="line-pay">
                            <input type="radio" id="line-pay" name="drone" value="line-pay" checked />
                            LINE PAY
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="store-code">
                            <input type="radio" id="store-code" name="drone" value="store-code" checked />
                            超商代碼
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="atm">
                            <input type="radio" id="atm" name="drone" value="atm" checked />
                            ATM轉帳
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-confirm">
        <div class="container">
            <div class="cart-confirm">
                <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">為保障彼此之權益，賣家在收到您的訂單後仍保有是否接受訂單及出貨與否之權利。</label>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-makesure">
        <div class="container">
            <div class="cart-checkout">
                <router-link to="/shop" tag="div" event="click" class="button">
                    <button>返回商品頁面</button>
                </router-link>
                <button class="pay" @click="submitEcpayForm">確定下單</button>
            </div>
        </div>
    </section>
    <!-- 綠界支付表單提交後的跳轉頁面 -->
    <div v-if="showEcpayRedirect" class="ecpay-redirect-overlay">
        <div class="ecpay-redirect-container" v-html="ecpayRedirectForm"></div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useMemberStore } from '@/stores/member';
import { computed } from 'vue';
import axios from 'axios';


export default {
    data() {
        return {
            input: {
                checkbox: false
            },
            name: '',
            phone: '',
            add: '',
            showEcpayRedirect: false,
            ecpayRedirectForm: ''
        }
    },
    setup() {
        const cartStore = useCartStore();
        const memberStore = useMemberStore();

        const cartItems = computed(() => cartStore.items);
        const totalPrice = computed(() => cartStore.totalPrice);


        return {
            cartStore,
            memberStore,
            cartItems,
            totalPrice

        };
    },
    watch: {
        'input.checkbox'(newVal) {
            if (newVal) {
                this.name = this.memberStore.member.U_NAME;
                this.phone = this.memberStore.member.U_PHONE;
                this.add = this.memberStore.member.U_ADDRESS;
            } else {
                this.name = '';
                this.phone = '';
                this.add = '';

            }
        }
    },
    methods: {
        removeFromCart(productId) {
            this.cartStore.removeFromCart(productId);
        },
        decreaseQuantity(item) {
            if (item.amount > 1) {
                this.cartStore.updateQuantity(item.P_ID, item.amount - 1);
            }
        },
        increaseQuantity(item) {
            if (item.amount < 10) {
                this.cartStore.updateQuantity(item.P_ID, item.amount + 1);
            }
        },
        getImageUrl(imgUrl) {
            return `${import.meta.env.VITE_IMG_URL}/product/${imgUrl}`;
        },

        // 綠界支付表單
        async submitEcpayForm() {
            try {
                let itemsString = this.cartItems.map(item =>
                    `${item.P_NAME} $${item.P_PRICE} x ${item.amount}`
                ).join('#');

                const response = await axios.post('http://localhost/cid101/g1/api/ecpay.php', {
                    itemName: itemsString,
                    itemPrice: this.totalPrice + 60,
                    itemQuantity: 1,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: false
                });
                this.submitOrder()
                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = response.data;
                if (result.form) {
                    this.showEcpayRedirect = true;
                    this.ecpayRedirectForm = result.form;
                    this.$nextTick(() => {
                        const formContainer = document.createElement('div');
                        formContainer.innerHTML = result.form;
                        document.body.appendChild(formContainer);
                        formContainer.querySelector('form').submit();
                    });
                } else {
                    throw new Error('綠界支付回應中沒有表單');
                }
            } catch (error) {
                console.error('發送綠界支付請求時發生錯誤', error);
                alert('處理付款時發生錯誤，請稍後再試。');
            }
        },

        //送訂單資訊到後台
        async submitOrder() {
            try {
                // 檢查是否選擇了付款和配送方式
                if (!this.selectedPaymentMethod || !this.selectedShippingMethod) {
                    throw new Error('請選擇付款方式和配送方式');
                }

                // 檢查收件人信息是否完整
                if (!this.name || !this.phone || !this.add) {
                    throw new Error('請填寫完整的收件人信息');
                }

                // 準備訂單數據
                const orderData = {
                    PO_NAME: this.name,
                    PO_ADDR: this.add,
                    PO_PHONE: this.phone,
                    PO_AMOUNT: this.totalPrice + 60,  // 總價加運費
                    PM_ID: this.selectedPaymentMethod,
                    PO_TRANS: this.selectedShippingMethod,
                    S_STATUS: 0,  // 初始狀態：未處理
                    items: this.cartItems.map(item => ({
                        P_NAME: item.P_NAME,
                        P_PRICE: item.P_PRICE,
                        PO_QTY: item.amount
                    }))
                };

                // 發送訂單數據到後端 API
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/cid101/g1/api/createOrder.php`, orderData);

                if (response.data.success) {  // 注意這裡使用 success 而不是 error
                    // 訂單創建成功
                    alert('訂單已成功提交！');
                    this.cartStore.clearCart();  // 清空購物車
                    this.$router.push('/orderConfirmation');  // 導航到訂單確認頁面
                } else {
                    throw new Error(response.data.message);  // 使用 message 而不是 msg
                }
            } catch (error) {
                console.error('提交訂單時發生錯誤：', error);
                alert(error.message || '提交訂單失敗，請稍後再試。');
            }
        }
    }
}

</script>

<style scoped>
.ecpay-redirect-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.ecpay-redirect-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}
</style>