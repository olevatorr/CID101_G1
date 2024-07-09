<script>
import { useMemberStore } from '@/stores/member'; // 引入store
import {storeToRefs } from 'pinia';
import Cookies from 'js-cookie';

export default {
    name: 'DonatePage',
    data() {
        const store = useMemberStore();
        const { member } = storeToRefs(store)
        return {
            donationAmount: 0,
            member
        };
    },
    mounted() {
        this.donationAmount = Cookies.get('donationAmount');
    },
};

</script>

<template>
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
                    <span>{{ member.U_NAME }}</span>
                </div>
                <div class="phone">
                    <h4>會員電話</h4>
                    <span>{{ member.U_PHONE }}</span>
                </div>
                <div class="email">
                    <h4>會員信箱</h4>
                    <span>{{ member.U_EMAIL }}</span>
                </div>
                <div class="add">
                    <h4>會員地址</h4>
                    <span>{{ member.U_ADDRESS }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
