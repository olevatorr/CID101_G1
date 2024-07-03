import { defineStore } from 'pinia'
export const usePostitionStore = defineStore('location', {
  state: () => ({
    eventListSection: null,
    selectedRegion: '',
    currentPage: 1 //地點篩選
  }),
  actions: {
    scrollToEventList() {
      if (this.eventListSection) {
        this.eventListSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleRegionChangeForLocation(event) {
      this.selectedRegion = event
      this.currentPage = 1
    },
    determineRegion(latitude, longitude) {
      if (latitude >= 23.5 && latitude <= 25.2 && longitude >= 119.5 && longitude <= 122.5) {
        this.handleRegionChangeForLocation('0')
      } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 120 && longitude <= 121.5) {
        this.handleRegionChangeForLocation('1')
      } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 121.5 && longitude <= 122.5) {
        this.handleRegionChangeForLocation('3')
      } else if (latitude >= 21 && latitude <= 23 && longitude >= 119.5 && longitude <= 121) {
        this.handleRegionChangeForLocation('2')
      } else if (
        (latitude >= 23 && latitude <= 23.5 && longitude >= 119 && longitude <= 119.5) ||
        (latitude >= 26 && latitude <= 26.5 && longitude >= 119.5 && longitude <= 122)
      ) {
        this.handleRegionChangeForLocation('4')
      } else {
        alert('error')
      }
    }
  }
})
