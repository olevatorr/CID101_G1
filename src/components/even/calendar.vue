<script setup>
import { ref, onMounted, watch } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const areas = ref([
    { id: 0, name: '北部' },
    { id: 1, name: '中部' },
    { id: 2, name: '南部' },
    { id: 3, name: '東部' },
    { id: 4, name: '離島' },
]);
const calendarOptions = ref({
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next',
    },
    events: [],
    eventDidMount: (info) => {
        const eventEl = info.el;
        const event = info.event;
        const eventDate = event.start.toISOString().slice(0, 10);

        if (eventEl.style.display === 'none') {
            return;
        }

        const sameDateEvents = info.view.calendar.getEvents().filter(
            (e) => e.start.toISOString().slice(0, 10) === eventDate
        );

        if (sameDateEvents.length > 1) {
            sameDateEvents.forEach((e, index) => {
                if (index > 0) {
                    e.setProp('display', 'none');
                }
            });
        }
    },
    eventContent: () => {
        return { html: `<i class="fas fa-circle"></i>` };
    },
    eventClick: (arg) => {
        const date = arg.event.start;
        const events = eventList.value.filter((event) => {
            const eventDate = new Date(event.E_DATE);
            const clickedDate = new Date(date);
            const result = eventDate.toDateString() === clickedDate.toDateString();
            return result;
        });

        calendarFilteredEvents.value = events;

    },
    plugins: [dayGridPlugin, timeGridPlugin],
});

const eventEnded = (eventDay) => {
    return new Date(eventDay) < today();
};

const registrationClosed = (eventDeadline) => {
    return new Date(eventDeadline) < today();
};

const registrationFull = (attendee, maxAttendee) => {
    return attendee === maxAttendee;
};
const today = () => {
    return new Date();
};

const eventList = ref(null);
const calendarList = ref(null);
const calendarFilteredEvents = ref([]);

// const eventList = ref(null);
// 在組件掛載後加載 JSON 文件
onMounted(async () => {
    try {
        // 加載 event.json
        const eventResponse = await fetch('../../public/json/event.json');
        if (!eventResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await eventResponse.json();
        eventList.value = jsonData;
        calendarList.value = eventList.value.map((event) => ({
            title: event.E_TITLE,
            start: event.E_DATE,
            allDay: true,
            backgroundColor: 'rgba(255,0,0,0)',
            borderColor: 'rgba(255,0,0,0)',
            textColor: '#E7A600',
        }));
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
});
const getAreaEvents = (areaId) => {
    return calendarFilteredEvents.value.filter((event) => event.E_AREA === areaId);
};

watch(calendarList, (newValue) => {
    calendarOptions.value.events = newValue;
});
</script>
<template>
    <section class="section section-event-date">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div>
                        <FullCalendar v-if="calendarList" :options="calendarOptions" />
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="area-list">
                        <div v-if="calendarFilteredEvents && calendarFilteredEvents.length > 0">
                            <div v-for="area in areas" :key="area.id" class="area">
                                <h3>{{ area.name }}</h3>
                                <div class="activities">
                                    <ul>
                                        <li v-for="event in getAreaEvents(area.id)" :key="event.E_ID">
                                            {{ event.E_TITLE }}
                                            <span class="end" v-if="eventEnded(event.E_DATE)">活動結束</span>
                                            <span class="deadline" v-else-if="registrationClosed(event.E_DEADLINE)">報名截止</span>
                                            <span class="fullsign" v-else-if="registrationFull(event.E_SIGN_UP, event.E_MAX_ATTEND)">報名額滿</span>
                                            <span class="ongoing" v-else>報名中</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            請點擊行事曆
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>