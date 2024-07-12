import { defineStore } from 'pinia'
import axios from 'axios';
export const useEventsStore = defineStore('events', {
    state: () => ({
        selectedEventCard: null,
        selectedRegion: '',
        currentPage: 1,
        eventPage: 1,
        eventList: [],
        eventContent: [],
        isLoading: false,
        peopleNum: 1
    }),
    actions: {
        handleRegionChangeForLocation(event) {
            this.selectedRegion = event
            this.currentPage = 1
        },
        async fetchEventData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/events.php`);
                if (!response.data.error) {
                    this.events = response.data.events;
                    this.eventContent = response.data.events;
                    // console.log(this.events);
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        }
    }
})
