import { defineStore } from 'pinia'
import axios from 'axios';

export const useSharesStore = defineStore('shares', {
    state: () => ({
        shareContent: [],
        selectedShareCard: '',
        showReportModal: false,
        error: false,
        errorMsg: '',
        reportDetails: '',
    }),
    actions: {
        // fetchShare() {
        //     fetch(`${import.meta.env.BASE_URL}json/Share.json`)
        //         .then(res => res.json())
        //         .then(jsonData=> {
        //             this.shareContent = jsonData
        //         })
        // },
        async fetchselectedShareCardData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/eventShare.php`);
                if (!response.data.error) {
                    this.shareContent = response.data.FEEDBACK.filter(share => share.F_STATUS === 0);
                    console.log(this.shareContent);
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