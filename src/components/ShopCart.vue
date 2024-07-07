<template>
    <div class="section section-shoppingcart">
        <div class="container">
            <div class="carticon" @click="toggleCartBox" v-if="!showCartBox">
                <div class="pic">
                    <img src="/img/shop/cart.png" alt="">
                </div>
                <div class="icon">
                    <span>{{ cartStore.totalItems }}</span>
                </div>
            </div>
            <div class="cartbox" v-if="showCartBox">
                <div class="carttitle">
                    <p>購物車</p>
                    <i class="fa-regular fa-circle-xmark" @click="toggleCartBox"></i>
                </div>
                <div class="cartinfo">
                    <div class="info" v-for="(item, index) in cartStore.items" :key="item.P_ID">
                        <span>{{ index + 1 }}.</span>
                        <span>{{ item.P_NAME }}</span>
                        <span>數量 :</span>
                        <button @click="decreaseQuantity(item)" :disabled="item.amount <= 1">-</button>
                        <span>{{ item.amount }}</span>
                        <button @click="increaseQuantity(item)" :disabled="item.amount >= 10">+</button>
                        <span class="price">NT$ {{ item.P_PRICE * item.amount }}</span>
                        <div class="delete">
                            <img src="/img/shop/delete2.png" alt="" @click="removeFromCart(item)">
                        </div>
                    </div>
                </div>
                <div class="carttotal">
                    <button @click="submitBuy">立即購買</button>
                    <span>NT$ {{ cartStore.totalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useMemeberStore } from '@/stores/member';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';

export default {
    setup() {
        const cartStore = useCartStore();
        const memberStore = useMemeberStore();
        const { isLogging } = storeToRefs(memberStore);

        const showCartBox = ref(false);

        const toggleCartBox = () => {
            showCartBox.value = !showCartBox.value;
        };

        const removeFromCart = (item) => {
            cartStore.removeFromCart(item.P_ID);
        };

        const decreaseQuantity = (item) => {
            if (item.amount > 1) {
                cartStore.updateQuantity(item.P_ID, item.amount - 1);
            }
        };

        const increaseQuantity = (item) => {
            if (item.amount < 10) {
                cartStore.updateQuantity(item.P_ID, item.amount + 1);
            }
        };

        const submitBuy = () => {
            if (!memberStore.isLogging) {
                Swal.fire({
                    icon: 'error',
                    title: '未登入',
                    text: '請先登入會員才能進行購買'
                }).then(() => {
                    router.push('/Member');
                });
            } else {
                router.push('/mallcart');
            }
        };

        return {
            cartStore,
            showCartBox,
            toggleCartBox,
            removeFromCart,
            decreaseQuantity,
            increaseQuantity,
            submitBuy,
            isLogging
        };
    }
};
</script>
