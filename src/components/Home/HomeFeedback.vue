<script setup>
import shareCard from '@/components/ShareCard.vue';
import { onMounted, ref } from 'vue';
const homeFeedback = ref([])
onMounted(()=>{
    fetch('../../../public/Share.json')
        .then(res => res.json())
        .then(jsonData=>{
            homeFeedback.value = jsonData.slice(0,12)
        })
})
</script>
<template>
    <section class="section section-index-event-feedback">
        <div class="container">
            <h3>
                FEEDBACK OF EVENT<br>
                活動分享
            </h3>
            <div class="row">
                <shareCard />
            </div>
        </div>
    </section>
</template>