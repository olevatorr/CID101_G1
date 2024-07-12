<script setup>
import { useEventsStore } from '@/stores/events';
import {storeToRefs} from 'pinia';
const events = useEventsStore()


const {selectedEventCard} = storeToRefs(events)

const props = defineProps({
    filteredEvents: Array,
})

const handleEventCard = (event)=>{
    selectedEventCard.value = event
}
const convertURL = (url) => {
    return `${import.meta.env.VITE_IMG_URL}/events/${url}`;
};


</script>

<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="card in filteredEvents" :key="card.E_ID" @click="handleEventCard(card)">   
        <div class="event-card">
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>{{ card.E_TITLE }}</h3>
                    </div>
                </div>
                <span>{{ card.E_ADDRESS }}</span>
                <span>活動日期:{{ card.E_DATE }}</span>
                <span>截止日期:{{ card.E_DEADLINE }}</span>
            </div>
            <div class="pic">
                <img :src="convertURL(card.E_IMG)" />
                <div class="add">報名活動</div>
            </div>
            <div class="people">
                <span>報名人數{{ card.E_SIGN_UP }}/{{ card.E_MAX_ATTEND }}</span>
            </div>
        </div>
    </div>
</template>