<script setup>
import { ref, computed } from 'vue'
import { store } from '@/store.js'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useEventsStore } from '@/stores/events'

const events = useEventsStore()
const peopleNum = ref(1);
const router = useRouter();
const openConfirm = ref(null)



const date = () => {
    return new Date();
};
const closeEventModal = () => {
    events.selectedEventCard = null
}
const eventEnded = computed(() => {
    return events.selectedEventCard && events.selectedEventCard.E_DATE > date();
});
const registrationClosed = computed(() => {
    return events.selectedEventCard && events.selectedEventCard.E_DEADLINE > date();
});
const registrationFull = computed(() => {
    if (events.selectedEventCard) {
        return events.selectedEventCard.E_MAX_ATTEND === events.selectedEventCard.E_SIGN_UP;
    }
    return false;
});
const handleRegistration = () => {
    if (!store.isLoging) {
        Swal.fire({
            icon: 'error',
            title: '未登入',
            text: '還不是會員? 請登入'
        }).then(() => {
            router.push('/Member');
        });
    } else {
        showConfirmModal();
    }
};

const showConfirmModal = () => {
    openConfirm.value = events.selectedEventCard;
    events.selectedEventCard = null;
};
const closeConfirm = () => {
    openConfirm.value = events.selectedEventCard;
    events.selectedEventCard = null;
};
const SubmitEvent = () => {
    Swal.fire({
        icon: 'success',
        title: '報名成功',
        html: `${openConfirm.value.E_TITLE}</div>
        <div>活動日期:${openConfirm.value.E_DATE}</div>`,
        showConfirmButton: true,
        confirmButtonText: "確認",
        cancelButtonText: "<h1>Close</h1>",
        timer: 5000,
        timerProgressBar: true
    }).then(() => {
        router.push({ name: 'home' });
    })
    closeConfirm();
    closeEventModal();
};

</script>

<template>
    
    <div v-if="events.selectedEventCard">
        <div class="light-box-bgc">
            <div class="light-box" @click.self="closeEventModal">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="pic">
                                <img :src="events.selectedEventCard.E_IMG" />
                            </div>
                            <div class="description">
                                <h3>活動敘述</h3>
                                <p>
                                    {{ events.selectedEventCard.E_CONTENT }}
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
                                        <h3>{{ events.selectedEventCard.E_TITLE }}</h3>
                                        <p>活動地點：{{ events.selectedEventCard.E_ADDRESS }}</p>
                                        <p>活動日期：{{ events.selectedEventCard.E_DATE }}</p>
                                        <p>截止日期：{{ events.selectedEventCard.E_DEADLINE }}</p>
                                        <p>報名人數：{{ events.selectedEventCard.E_SIGN_UP }}/{{
                                            events.selectedEventCard.E_MAX_ATTEND }}
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
                    <p>會員名稱:{{ store.member.U_NAME }}</p>
                    <p>報名人數:{{ peopleNum }}人</p>
                </div>
            </div>
            <div class="sent-btn">
                <button class="sent" @click="SubmitEvent">送出</button>
            </div>
        </div>
    </div>
</template>