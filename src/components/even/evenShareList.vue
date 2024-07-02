<script setup>
import {onMounted, ref} from 'vue'


onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}json/Share.json`)
        .then(res => res.json())
        .then(jsonData => {
            
        })
}),



</script>
<template>
    <section class="section section-event-share">
        <h2>活動分享</h2>
        <div class="container">
            <div class="row">
                <ShareCard :shareContent="paginatedShare" @card-click="handleShareCardClick"
                    @report-click="showReportModal = true" />
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