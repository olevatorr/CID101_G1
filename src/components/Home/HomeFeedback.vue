<script setup>
import shareCard from '@/components/carouselShareCard.vue';
import { onMounted, ref, watch } from 'vue';
const homeFeedback = ref([])
onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}json/Share.json`)
        .then(res => res.json())
        .then(jsonData => {
            homeFeedback.value = jsonData.slice(0, 16)
        })
})
const selectedShareCard = ref(null);
const showReportModal = ref(false);

const handleShareCardClick = (card) => {
    selectedShareCard.value = card
    // console.log(selectedShareCard.value);
}

const closeShareModal = () => {
    selectedShareCard.value = null
}
const closeExamine = () => {
    showReportModal.value = false;
    selectedReason.value = '';
    showWarning.value = true;
}
const reasons = ref([
    { label: '仇恨言論或歧視' },
    { label: '侵犯隱私' },
    { label: '暴力或威脅' },
    { label: '騷擾或霸凌' },
    { label: '虛假信息或誤導信息' },
    { label: '色情或不當內容' },
    { label: '非法活動' },
    { label: '垃圾信息或廣告' }
]);
//存儲選擇的理由
const selectedReason = ref('');

//控制是否顯示警告提示
const showWarning = ref(false);
////監聽 selectedReason 的變化，如果為空且表單送出，則顯示警告
watch(selectedReason, (newValue) => {
    showWarning.value = newValue === '';
});
// 顯示警告
const submitForm = () => {
    if (selectedReason.value === '') {
        showWarning.value = true;
    }
}

</script>
<template>
    <section class="section section-index-event-feedback">
        <div class="container">
            <h3>
                FEEDBACK OF EVENT<br>
                活動分享
            </h3>
            <div class="row">
                <shareCard :shareContent="homeFeedback" @card-click="handleShareCardClick"
                    @report-click="showReportModal = true" />
            </div>
        </div>
    </section>
    <div class="section section-detailed" v-if="selectedShareCard">
        <shareCard :shareContent="selectedShareCard ? [selectedShareCard] : []" @close-click="closeShareModal"
            @report-click="showReportModal = true" />
    </div>
    <div class="section section-examine" v-if="showReportModal">
        <div class="container">
            <form @submit.prevent="submitForm">
                <div class="CancelBtn">
                    <span @click="closeExamine">取消</span>
                </div>
                <h2>您檢舉此文章的理由是?</h2>
                <div class="box" v-for="(reason, index) in reasons" :key="index">
                    <label :for="'no' + (index + 1)">{{ reason.label }}</label>
                    <input type="radio" :name="reason" :id="'no' + (index + 1)" v-model="selectedReason"
                        :value="reason.label" />
                </div>
                <div v-if="showWarning" class="warning">請至少勾選一個選項!</div>
                <button type="submit">送出</button>
            </form>
        </div>
    </div>
</template>