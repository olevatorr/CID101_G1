<script setup>
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useEventsStore } from '@/stores/events'
import {storeToRefs} from 'pinia'
import { useMemberStore } from '@/stores/member'
import axios from 'axios'

const events = useEventsStore()
const {selectedEventCard} = storeToRefs(events)
const peopleNum = ref(1)
const router = useRouter()
const openConfirm = ref(null)
const memberStore = useMemberStore()




const date = () => {
    return new Date();
};
const closeEventModal = () => {
    selectedEventCard.value = null
}
const eventEnded = computed(() => {
    return selectedEventCard.value && selectedEventCard.value.E_DATE > date();
});
const registrationClosed = computed(() => {
    return selectedEventCard.value && selectedEventCard.value.E_DEADLINE > date();
});
const registrationFull = computed(() => {
    if (selectedEventCard.value) {
        return selectedEventCard.value.E_MAX_ATTEND === selectedEventCard.value.E_SIGN_UP;
    }
    return false;
});
const handleRegistration = () => {
    if (!memberStore.isLogging) {
        Swal.fire({
            icon: 'error',
            title: '未登入',
            text: '還不是會員? 請登入'
        }).then(() => {
            router.push('/Member');
        });
        closeEventModal();
    } else {
        showConfirmModal();
    }
};

const showConfirmModal = () => {
    openConfirm.value = selectedEventCard.value;
    selectedEventCard.value = null;
};
const closeConfirm = () => {
    openConfirm.value = selectedEventCard.value;
    selectedEventCard.value = null;
};
const SubmitEvent = async () => {
    try {
        const data = {
            E_ID: openConfirm.value.E_ID,
            U_ID: memberStore.member.U_ID,
            EO_ATTEND: peopleNum.value
        }
        
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/evenApplyAdd.php`, data)
        if(!response.data.error){
             Swal.fire({
            icon: 'success',
            title: '報名成功',
            html: `${openConfirm.value.E_TITLE}</div>
            <div>活動日期:${openConfirm.value.E_DATE}</div>`,
            showConfirmButton: true,
            confirmButtonText: "確認",
            cancelButtonText: "<h1>Close</h1>",
            timer: 5000,
            timerProgressBar: true})
            closeConfirm();
            closeEventModal();
            events.fetchEventData()
        } 
    }catch(error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: '報名失敗',
                text: '請稍後再試'
            });
        };
};

const convertURL = (url) => {
    return `${import.meta.env.VITE_IMG_URL}/events/${url}`;
};

</script>

<template>
    
    <div v-if="selectedEventCard">
        <div class="light-box-bgc">
            <div class="light-box" @click.self="closeEventModal">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="pic">
                                <img :src="convertURL(selectedEventCard.E_IMG)" />
                            </div>
                            <div class="description">
                                <h3>活動敘述</h3>
                                <p>
                                    {{ selectedEventCard.E_CONTENT }}
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="content">
                                <div class="close">
                                    <i class="fa-regular fa-circle-xmark" @click="closeEventModal"></i>
                                </div>
                                <div class="activity-area">
                                    <div class="text">
                                        <h3>{{ selectedEventCard.E_TITLE }}</h3>
                                        <p>活動地點：{{ selectedEventCard.E_ADDRESS }}</p>
                                        <p>活動日期：{{ selectedEventCard.E_DATE }}</p>
                                        <p>截止日期：{{ selectedEventCard.E_DEADLINE }}</p>
                                        <p>報名人數：{{ selectedEventCard.E_SIGN_UP }}/{{
                                            selectedEventCard.E_MAX_ATTEND }}
                                        </p>
                                        <div class="join">
                                            <p class="people">參加人數:</p>
                                            <select v-model="peopleNum">
                                                <option :value="peoNum" v-for="peoNum in 10" :key="peoNum">{{ peoNum }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="state">
                                    <button v-if="eventEnded">活動結束</button>
                                    <button v-else-if="registrationClosed">報名截止</button>
                                    <button v-else-if="registrationFull">報名已滿</button>
                                    <button v-else @click="handleRegistration">立即報名</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="event-confirm" v-if="openConfirm">
        <div class="container">
            <div class="apply-wrap">
                <div class="close" @click.stop="closeConfirm">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div class="text">
                    <h3>{{ openConfirm.E_TITLE }}</h3>
                    <p>活動地點：{{ openConfirm.E_ADDRESS }}</p>
                    <p>活動日期：{{ openConfirm.E_DATE }}</p>
                    <p>截止日期：{{ openConfirm.E_DEADLINE }}</p>
                    <p>報名人數：{{ openConfirm.E_SIGN_UP }}/{{ openConfirm.E_MAX_ATTEND }}</p>
                    <p>會員名稱:{{ memberStore.member.U_NAME }}</p>
                    <p>報名人數:{{ peopleNum }}人</p>
                </div>
            </div>
            <div class="sent-btn">
                <button class="sent" @click="SubmitEvent">送出</button>
            </div>
        </div>
    </div>
</template>