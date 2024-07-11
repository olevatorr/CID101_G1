<script setup>
import shareCard from '@/components/carouselShareCard.vue';
import ShareReport from '@/components/even/evenShareReport.vue'
import { useSharesStore } from '@/stores/shares.js'
import { storeToRefs } from 'pinia'
const sharesStore = useSharesStore()
const {selectedShareCard, showReportModal } = storeToRefs(sharesStore)

import { onMounted, ref, watch } from 'vue';

const homeFeedback = ref([]);
const carouselEnabled = ref(true); // 添加這行,控制是否啟用輪播功能

onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}json/Share.json`)
        .then(res => res.json())
        .then(jsonData => {
            homeFeedback.value = jsonData.slice(0, 16);
        });
});


const handleShareCardClick = (card) => {
    selectedShareCard.value = card;
};

const closeShareModal = () => {
    selectedShareCard.value = null;
};

const selectedReason = ref('');
const showWarning = ref(false);

watch(selectedReason, (newValue) => {
    showWarning.value = newValue === '';
});
watch(selectedShareCard, (newValue) => {
    showWarning.value = newValue === '';
});

</script>

<template>
    <section class="section section-index-event-feedback">
        <div class="container">
            <h3>
                FEEDBACK OF EVENT<br>
                活動分享
            </h3>
        </div>
        <shareCard :shareContent="homeFeedback" :carouselEnabled="carouselEnabled"
            @card-click="handleShareCardClick" @report-click="showReportModal = true" />
        <router-link to="/events"><button>查看更多分享</button></router-link>
    </section>
    <div class="section section-detailed" v-if="selectedShareCard">
        <shareCard :shareContent="selectedShareCard ? [selectedShareCard] : []" @close-click="closeShareModal"
            @report-click="showReportModal = true" />
    </div>
    <ShareReport/>
</template>