<script setup>
import { ref, computed, onMounted } from "vue";
import EventCard from '@/components/EventCard.vue'
import EventPagination from '@/components/even/eventPagination.vue'
import { useEventsStore } from '@/stores/events.js'
import { storeToRefs } from 'pinia'



// pinia遷入，因為是compostion寫法所以要用defineStore調用
const eventsStore = useEventsStore()
const { selectedRegion, eventContent, currentPage, eventPage } = storeToRefs(eventsStore)


onMounted(() => {
    eventsStore.fetchEventData()
})

const regions = ref(["北部", "中部", "南部", "東部", "離島"]);

const handleRegionChange = (event) => {
    selectedRegion.value = event.target.value;
    currentPage.value = 1;
}
const filteredEvents = computed(() => {
    if (!selectedRegion.value) {
        return eventContent.value
    } else {
        return eventContent.value.filter(
            (event) => Number(selectedRegion.value) === Number(event.E_AREA)
        )
    }
})
const paginatedEvents = computed(() => {
    const startIndex = (eventPage.value - 1) * 8;
    return filteredEvents.value.slice(startIndex, startIndex + 8);
});
const changeEventPage = (pageNumber) => {
    eventPage.value = pageNumber;
};

</script>

<template>
    <section class="section section-event-list">
        <div class="container">
            <h2>活動列表</h2>
            <div class="menu">
                <select v-model="selectedRegion" @change="handleRegionChange">
                    <option value="">全台灣(地區)</option>
                    <option :value="index" v-for="(region, index) in regions" :key="region">{{ region }}</option>
                </select>
            </div>
            <div class="row">
                <EventCard :filteredEvents="paginatedEvents" />
            </div>
            <EventPagination :totalItems="filteredEvents.length" :itemsPerPage="8" :currentPage="eventPage"
                @page-changed="changeEventPage" />
        </div>
    </section>
</template>