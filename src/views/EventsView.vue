<template>
  <eveBanner />
  <evenApply @scroll-click="scrollToEventList"/>
  <calendar />
  <evenList ref="eventListSection"/>
  <evenShareList />
  <eventAgree />
  <eventLightBox />
  <evenUpload style="display: none;" />
  <div class="section section-detailed" v-if="selectedShareCard">
        <ShareCard :shareContent="selectedShareCard ? [selectedShareCard] : []" @close-click="closeShareModal"
            @report-click="showReportModal = true" />
  </div>
  <ShareReport/>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import eveBanner from '@/components/even/evenBanner.vue'
import ShareCard from '@/components/ShareCard.vue'
import ShareReport from '@/components/even/evenShareReport.vue'
import calendar from '@/components/even/calendarFilter.vue'
import eventAgree from '@/components/even/evenAgree.vue'
import evenUpload from '@/components/even/evenUpload.vue'
import eventLightBox from '@/components/even/evenLightBox.vue'
import evenApply from '@/components/even/evenApply.vue'
import evenShareList from '@/components/even/evenShareList.vue'
import evenList from '@/components/even/evenList.vue'
import { useSharesStore } from '@/stores/shares.js'

    const sharesStore = useSharesStore()
    const {selectedShareCard, showReportModal } = storeToRefs(sharesStore)

    const closeShareModal = () => {
      selectedShareCard.value = null
    }

    const eventListSection = ref(null)
    const scrollToEventList = () => {
      if (eventListSection.value) {
        eventListSection.value.$el.scrollIntoView({ behavior: 'smooth' });
      }
    };

</script>
