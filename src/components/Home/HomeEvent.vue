<script setup>
import EventCard from '@/components/EventCard.vue';
import eventLightBox from '@/components/even/evenLightBox.vue'
import { onMounted, ref } from 'vue';
import { useEventsStore } from '@/stores/events.js'
import { storeToRefs } from 'pinia'

const eventList = ref([])
const eventsStore = useEventsStore()
const { eventContent } = storeToRefs(eventsStore)

onMounted(async () => {
    await eventsStore.fetchEventData()
    eventList.value = eventContent.value.slice(0,4)
})

</script>
<template>
  <section class="section section-index-event">
    <div class="container">
      <h3>
        EVENT<br>
        活動
      </h3>
      <div class="row">
        <EventCard :filteredEvents="eventList" @card-click="handleEventCardClick"/>
      </div>
      <router-link to="/events"><button>查看更多活動</button></router-link>
    </div>
  </section>
  <eventLightBox />
</template>