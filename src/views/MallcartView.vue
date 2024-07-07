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
            <div class="cart-info" v-for="(item ,index) in cartItems" :key="index">
                <div class="item">
                    <p>{{ index + 1 }}</p>
                </div>
                <div class="content">
                    <div class="pic">
                        <img :src="Array.isArray(item.P_IMG1) ? getImageUrl(item.P_IMG1[0]) : getImageUrl(item.P_IMG1)" alt="">
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
                    <h4>應付金額 NT$ {{ totalPrice + 60}}</h4>
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
                    <h3>收件人資料 <input  type="checkbox" v-model="input.checkbox">同會員資料</h3>
                </div>
            </div>
            <div class="cart-receiveinfo">
                <div class="name">
                    <h4>收件人姓名</h4>
                    <input type="text" v-model="name" id="name" name="name" :readonly="input.checkbox"/>
                </div>
                <div class="phone">
                    <h4>收件人聯絡電話</h4>
                    <input type="text" v-model="phone" id="phone" name="phone" :readonly="input.checkbox"/>
                </div>
                <div class="add">
                    <h4>收件人地址</h4>
                    <input type="text" v-model="add" id="add" name="add" :readonly="input.checkbox"/>
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
                <button class="pay">確定下單</button>
            </div>
        </div>
    </section>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useMemeberStore } from '@/stores/member';
import { computed } from 'vue';

export default {
    data() {
        return {
            input: {
                checkbox: false
            },
            name: '',
            phone: '',
            add: ''
        }
    },
    setup() {
        const cartStore = useCartStore();
        const memberStore = useMemeberStore();
        
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
            return `${import.meta.env.BASE_URL}img/shop/${imgUrl}`;
        }
    }
}
</script>