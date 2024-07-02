import { defineStore} from 'pinia'

export const useSharesStore = defineStore('shares', {
    state: ()=>({
        shareContent:[]
    }),
    getters: ()=>{

    },
    actions: {
        fetchShare() {
            fetch(`${import.meta.env.BASE_URL}json/Share.json`)
                .then(res => res.json())
                .then(jsonData=> {
                    this.shareContent = jsonData
                })
        },
    }
})