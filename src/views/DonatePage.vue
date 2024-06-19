<script setup>
import DonateCart from '../components/Donate/DonateCart.vue'
import MemberInfo from '../components/Donate/MemberInfo.vue'
import CheckoutButton from '../components/Donate/CheckoutButton.vue'

</script>

<template>
    <main>
        <!-- -------------------------------------------------------------------捐款金額 -->
        <DonateCart />
        <!-- -------------------------------------------------------------------會員資料代入 -->
        <MemberInfo />
        <!-- -------------------------------------------------------------------付款方式 &送出捐款表單 -->
        <CheckoutButton />
    </main>
</template>