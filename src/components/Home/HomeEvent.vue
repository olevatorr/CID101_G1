<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref } from 'vue';

const eventList = ref([])


onMounted(()=>{
    fetch('/json/event.json')
        .then((res) => res.json())
        .then(jsonData => {
            eventList.value = jsonData.slice(0,4)
            console.log(eventList.value);
        })
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
                <EventCard :filteredEvents="eventList" />
            </div>
            <button>查看更多活動</button>
        </div>
    </section>
</template>