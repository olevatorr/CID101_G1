<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref, computed } from 'vue';
import Swal from 'sweetalert2'


const eventList = ref([])


onMounted(() => {
  fetch('/json/event.json')
    .then((res) => res.json())
    .then(jsonData => {
      eventList.value = jsonData.slice(0, 4)
      console.log(eventList.value);
    })
})


const selectedEventCard = ref(null);
const openConfirm = ref(false);
//跳窗卡片抓取點擊卡片時的卡片資訊
const handleEventCardClick = (card) => {
  selectedEventCard.value = card
}

const showConfirmModal = () => {
  // console.log(openConfirm.value);
  openConfirm.value = true;
  // console.log(openConfirm.value);
};
//報名完成提示後跳轉回首頁
const SubmitEvent = () => {
  Swal.fire({
    icon: 'success',
    title: '報名成功',
    html: `${selectedEventCard.value.E_TITLE}</div>
        <div>活動日期:${selectedEventCard.value.E_DATE}</div>`,
    showConfirmButton: true,
    confirmButtonText: "確認",
    cancelButtonText: "<h1>Close</h1>",
    timer: 5000,
    timerProgressBar: true
  })
  closeConfirm();
  closeEventModal();
};

//活動結束邏輯判斷
const eventEnded = computed(() => {
  return selectedEventCard.value && selectedEventCard.value.E_DATE > date();
});
//報名截止邏輯判斷
const registrationClosed = computed(() => {
  return selectedEventCard.value && selectedEventCard.value.E_DEADLINE > date();
});
//定義選單初始值為1
const peopleNum = ref(1);
//下拉式選單(篩選功能)
const registrationFull = computed(() => {
  if (selectedEventCard.value) {
    return selectedEventCard.value.E_MAX_ATTEND === selectedEventCard.value.E_SIGN_UP;
  }
  return false;
});
const date = () => {
  // 實現 date() 函數來獲取當前日期
  return new Date();
};

//點擊關閉方法
const closeEventModal = () => {
  selectedEventCard.value = null
}

const closeConfirm = () => {
  openConfirm.value = false;
};

</script>
<template>
  <section class="section section-index-event">
    <div class="container">
      <h3>
        EVENT<br>
        活動
      </h3>
      <div class="row">
        <EventCard :filteredEvents="eventList" @card-click="handleEventCardClick"/>
      </div>
      <router-link to="/events"><button>查看更多活動</button></router-link>
    </div>
  </section>
  <div class="event-confirm" v-if="openConfirm">
    <div class="container">
      <div class="apply-wrap">
        <div class="close" @click.stop="closeConfirm">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <div class="text">
          <h3>{{ selectedEventCard.E_TITLE }}</h3>
          <p>活動地點：{{ selectedEventCard.E_ADDRESS }}</p>
          <p>活動日期：{{ selectedEventCard.E_DATE }}</p>
          <p>截止日期：{{ selectedEventCard.E_DEADLINE }}</p>
          <p>報名人數：{{ selectedEventCard.E_SIGN_UP }}/{{ selectedEventCard.E_MAX_ATTEND }}</p>
          <p>會員名稱:林小美</p>
          <p>報名人數:{{ peopleNum }}人</p>
        </div>
      </div>
      <div class="sent-btn">
        <button class="sent" @click="SubmitEvent">送出</button>
      </div>
    </div>
  </div>
  <div v-if="selectedEventCard">
    <div class="light-box-bgc">
      <div class="light-box" @click.self="closeEventModal">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="pic">
                <img :src="selectedEventCard.E_IMG" />
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
                    <p>報名人數：{{ selectedEventCard.E_SIGN_UP }}/{{ selectedEventCard.E_MAX_ATTEND }}
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
                  <button v-else @click="showConfirmModal">立即報名</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>