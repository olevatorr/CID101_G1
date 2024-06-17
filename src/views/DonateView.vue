<script setup>
import DonationBanner from '../components/Donate/DonationBanner.vue'
import OceanStory from '../components/Donate/OceanStory.vue'
import ThankYouMessage from '../components/Donate/ThankYouMessage.vue'
import DonationUsage from '../components/Donate/DonationUsage.vue'
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {AOS.init()})
</script>

<template>
<!-- ---------------------------------------------------------------banner- -->
<DonationBanner />
<!-- ----------------------------------------------------------------海洋故事 -->
<OceanStory />
<!-- ----------------------------------------------------------------感謝話語 -->
<ThankYouMessage />
<!-- ----------------------------------------------------------------捐款用途 -->
<DonationUsage />
</template>