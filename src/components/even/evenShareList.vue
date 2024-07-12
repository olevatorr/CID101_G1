<script setup>
import { onMounted, computed, ref } from 'vue'
import ShareCard from '@/components/ShareCard.vue'
import EventPagination from '@/components/even/eventPagination.vue'
import { useSharesStore } from '@/stores/shares'
import { storeToRefs } from 'pinia'


const shares = useSharesStore()
const { shareContent, selectedShareCard, reportDetails } = storeToRefs(shares)
const sharePage = ref(1);    //活動分享

onMounted(() => {
    shares.fetchselectedShareCardData()
})
const paginatedShare = computed(() => {
    const startIndex = (sharePage.value - 1) * 4;
    return shareContent.value.slice(startIndex, startIndex + 4);
});

const changeSharePage = (pageNumber) => {
    sharePage.value = pageNumber;
};
const handleShareCardClick = (card) => {
    reportDetails.value = card;
    selectedShareCard.value = card;
}

</script>
<template>
    <section class="section section-event-share">
        <h2>活動分享</h2>
        <div class="container">
            <div class="row">
                <ShareCard :shareContent="paginatedShare" @card-click="handleShareCardClick"/>
            </div>
            <eventPagination :totalItems="shareContent.length" :itemsPerPage="4" :currentPage="sharePage"
                @page-changed="changeSharePage" />
            <div class="sharebtn">
                <button>活動分享</button>
            </div>
        </div>
        <ShareCard />
    </section>
</template>