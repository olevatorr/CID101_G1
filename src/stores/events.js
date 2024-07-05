import { defineStore } from 'pinia'
export const useEventsStore = defineStore('events', {
    state: () => ({
        selectedEventCard: null,
        selectedRegion: '',
        currentPage: 1,
        eventPage: 1,
        eventList: [],
        eventContent:[],
        isLoading: false,
        peopleNum: 1,
    }),
    actions: {
        handleRegionChangeForLocation(event) {
            this.selectedRegion = event;
            this.currentPage = 1;
        },
        fetchEventData() {
            fetch(`${import.meta.env.BASE_URL}json/event.json`)
                .then(res => res.json())
                .then(jsonData => {
                    this.eventList = jsonData
                    this.eventContent = jsonData
            })
        },
    },
})

