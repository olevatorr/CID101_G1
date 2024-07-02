import { defineStore } from 'pinia'
export const useEventsStore = defineStore('events', {
    state: () => ({
        selectedEventCard: null,
        selectedRegion: '',
        currentPage: 1,
        eventList: [],
        eventContent:[],
        isLoading: false,
    }),
    getters: {
        paginatedEvents: () => {
            const startIndex = (eventPage.value - 1) * 8;
            return filteredEvents.value.slice(startIndex, startIndex + 8);
        },
    },
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

