<template>
  <eveBanner />
  <evenQuickApply />
  <!-- <section class="section section-event-banner">
    <div class="container">
      <div class="sloagn">
        <h2 class="ori">為保護大自然盡份心力，美麗的海洋，守護有你有我!</h2>
        <button class="fast-signup" @click="getLocation">會員一鍵報名</button>
      </div>
    </div>
  </section> -->
  <calendar @card-click="handleEventCardClick" />
  <evenList />
  <!-- <section class="section section-event-list" ref="eventListSection">
    <div class="container">
      <h2>活動列表</h2>
      <div class="menu">
        <select v-model="selectedRegion" @change="handleRegionChange">
          <option value="">全台灣(地區)</option>
          <option :value="index" v-for="(regions, index) in regions" :key="regions">{{ regions }}</option>
        </select>
      </div>
      <div class="row">
        <EventCard :filteredEvents="paginatedEvents" @card-click="handleEventCardClick" />
      </div>
      <eventPagination :totalItems="filteredEvents.length" :itemsPerPage="8" :currentPage="eventPage"
        @page-changed="changeEventPage" />
    </div>
  </section> -->
  <section class="section section-event-share">
    <h2>活動分享</h2>
    <div class="container">
      <div class="row">
        <ShareCard :shareContent="paginatedShare" @card-click="handleShareCardClick"
          @report-click="showReportModal = true" />
      </div>
      <eventPagination :totalItems="shareContent.length" :itemsPerPage="4" :currentPage="sharePage"
        @page-changed="changeSharePage" />
      <div class="sharebtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
  <eventAgree />
  <!-- <div v-if="selectedEventCard">
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
                    <p>報名人數：{{ selectedEventCard.E_SIGN_UP }}/{{ selectedEventCard.E_MAX_ATTEND }}</p>
                    <div class="join">
                      <p class="people">參加人數:</p>
                      <select v-model="peopleNum">
                        <option :value="peoNum" v-for="peoNum in 10" :key="peoNum">{{ peoNum }}</option>
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
          <h3>{{ selectedEventCard.E_TITLE }}</h3>
          <p>活動地點：{{ selectedEventCard.E_ADDRESS }}</p>
          <p>活動日期：{{ selectedEventCard.E_DATE }}</p>
          <p>截止日期：{{ selectedEventCard.E_DEADLINE }}</p>
          <p>報名人數：{{ selectedEventCard.E_SIGN_UP }}/{{ selectedEventCard.E_MAX_ATTEND }}</p>
          <p>會員名稱:{{ store.member.U_NAME }}</p>
          <p>報名人數:{{ peopleNum }}人</p>
        </div>
      </div>
      <div class="sent-btn">
        <button class="sent" @click="SubmitEvent">送出</button>
      </div>
    </div>
  </div> -->
  <eventLightBox />
  <evenUpload style="display: none;" />
  <div class="section section-examine" v-if="showReportModal
  ">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="CancelBtn">
          <span @click="closeExamine">取消</span>
        </div>
        <h2>您檢舉此文章的理由是?</h2>
        <div class="box" v-for="(reason, index) in reasons" :key="index">
          <label :for="'no' + (index + 1)">{{ reason.label }}</label>
          <input type="radio" :name="reason" :id="'no' + (index + 1)" v-model="selectedReason" :value="reason.label" />
        </div>
        <transition name="flashing">
          <div v-if="showWarning" class="warning">*請至少勾選一個選項!</div>
        </transition>
        <button type="submit">送出</button>
      </form>
    </div>
  </div>
  <div class="section section-detailed" v-if="selectedShareCard">
    <ShareCard :shareContent="selectedShareCard ? [selectedShareCard] : []" @close-click="closeShareModal"
      @report-click="showReportModal = true" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed, watch } from 'vue'
// import { useRouter } from 'vue-router'
import { store } from '@/store.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Swal from 'sweetalert2'
import eveBanner from '@/components/even/evenBanner.vue'
import evenQuickApply from '@/components/even/evenQuickApply.vue'
// import EventCard from '@/components/EventCard.vue'
import evenList from '@/components/even/evenList.vue'
import ShareCard from '@/components/ShareCard.vue'
import calendar from '@/components/even/calendarFilter.vue'
import eventPagination from '@/components/even/eventPagination.vue';
import eventAgree from '@/components/even/evenAgree.vue'
import evenUpload from '@/components/even/evenUpload.vue'
import eventLightBox from '@/components/even/evenLightBox.vue'

export default defineComponent({
  components: {
    // EventCard,
    ShareCard,
    calendar,
    eventPagination,
    evenUpload,
    eveBanner,
    eventAgree,
    eventLightBox,
    evenQuickApply,
    evenList
    // eventLightBox
  },
  setup() {
    //獲取路由
    // const router = useRouter();

    const scrollToEventList = () => {
      if (eventListSection.value) {
        eventListSection.value.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {  //請求當前位置
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert('您的瀏覽器不支援地理位置服務')
      }
    }

    //抓取目前定位，並帶入determineRegion函式做判斷
    const showPosition = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      determineRegion(latitude, longitude);
      // 在這裡根據緯度和經度調用 API 獲取卡片位置信息
      // 並更新相應的數據
      scrollToEventList();  // 確保在確定區域後進行滾動
    }

    //錯誤訊息
    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('您拒絕了位置請求')
          break
        case error.POSITION_UNAVAILABLE:
          alert('無法獲取位置信息')
          break
        case error.TIMEOUT:
          alert('獲取位置信息超時')
          break
        case error.UNKNOWN_ERROR:
          alert('發生未知錯誤')
          break
      }
    }

    const areas = ref([
      { id: 0, name: '北部' },
      { id: 1, name: '中部' },
      { id: 2, name: '南部' },
      { id: 3, name: '東部' },
      { id: 4, name: '離島' }
    ])
    const calendarOptions = ref({
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next'
      },
      events: [],
      eventDidMount: (info) => {
        const eventEl = info.el
        const event = info.event
        const eventDate = event.start.toISOString().slice(0, 10)

        if (eventEl.style.display === 'none') {
          return
        }

        const sameDateEvents = info.view.calendar
          .getEvents()
          .filter((e) => e.start.toISOString().slice(0, 10) === eventDate)

        if (sameDateEvents.length > 1) {
          sameDateEvents.forEach((e, index) => {
            if (index > 0) {
              e.setProp('display', 'none')
            }
          })
        }
      },
      eventContent: () => {
        return { html: `<i class="fas fa-circle"></i>` }
      },
      eventClick: (arg) => {
        const date = arg.event.start
        const events = eventList.value.filter((event) => {
          const eventDate = new Date(event.E_DATE)
          const clickedDate = new Date(date)
          const result = eventDate.toDateString() === clickedDate.toDateString()
          // console.log('Event Date:', eventDate.toDateString());
          // console.log('Clicked Date:', clickedDate.toDateString());
          // console.log('Comparison Result:', result);
          return result
        })

        // console.log(date);
        // console.log(events);

        if (events.length > 0) {
          Swal.fire({
            icon: 'info',
            title: `${date.toLocaleDateString()} 的活動`,
            html: events
              .map(
                (event) => `
        <div>
          <h4>${event.E_TITLE}</h4>
          <p>地點：${event.E_ADDRESS}</p>
        </div>
      `
              )
              .join(''),
            confirmButtonText: '確認'
          })
        }
      },
      plugins: [dayGridPlugin, timeGridPlugin]
    })
    //定義跳窗預設隱藏
    const selectedEventCard = ref(null);
    const selectedShareCard = ref(null);
    // const openConfirm = ref(false);
    const showReportModal = ref(false);
    //跳窗卡片抓取點擊卡片時的卡片資訊
    // const handleEventCardClick = (card) => {
    //   selectedEventCard.value = card;
    //   peopleNum.value = 1;
    // }
    const handleShareCardClick = (card) => {
      selectedShareCard.value = card;

      // console.log(selectedShareCard.value);
    }
    //活動報名判斷及執行
    // const handleRegistration = () => {
    //   if (!store.isLoging) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: '未登入',
    //       text: '還不是會員? 請登入'
    //     }).then(() => {
    //       router.push('/Member');  //跳轉登入介面
    //     });
    //   } else {
    //     showConfirmModal();
    //   }
    // };
    //報名確認頁面顯示
    // const showConfirmModal = () => {
    //   openConfirm.value = true;
    // };

    //報名完成提示後跳轉回首頁
    // const SubmitEvent = () => {
    //   Swal.fire({
    //     icon: 'success',
    //     title: '報名成功',
    //     html: `${selectedEventCard.value.E_TITLE}</div>
    //     <div>活動日期:${selectedEventCard.value.E_DATE}</div>`,
    //     showConfirmButton: true,
    //     confirmButtonText: "確認",
    //     cancelButtonText: "<h1>Close</h1>",
    //     timer: 5000,
    //     timerProgressBar: true
    //   }).then(() => {
    //     router.push({ name: 'home' });
    //   })
    //   closeConfirm();
    //   closeEventModal();
    // };
    //活動結束邏輯判斷
    const eventEnded = computed(() => {
      return selectedEventCard.value && selectedEventCard.value.E_DATE > date();
    });
    //報名截止邏輯判斷
    const registrationClosed = computed(() => {
      return selectedEventCard.value && selectedEventCard.value.E_DEADLINE > date();
    });

    // 存儲所有事件數據
    const events = ref([]);
    // 當前頁數
    const currentPage = ref(1);    //地點篩選
    const eventPage = ref(1);    //活動列表
    const sharePage = ref(1);    //活動分享
    const eventListSection = ref(null); //定義列表區塊

    //處理頁數變化
    const changeEventPage = (pageNumber) => {
      eventPage.value = pageNumber;
    };
    const changeSharePage = (pageNumber) => {
      sharePage.value = pageNumber;
    };
    //定義選單列表
    const regions = ref(["北部", "中部", "南部", "東部", "離島"]);
    //判斷位置對應地區
    const determineRegion = (latitude, longitude) => {
      if (latitude >= 23.5 && latitude <= 25.2 && longitude >= 119.5 && longitude <= 122.5) {
        handleRegionChangeForLocation('0')
      } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 120 && longitude <= 121.5) {
        handleRegionChangeForLocation('1')
      } else if (latitude >= 21.8 && latitude <= 23.5 && longitude >= 121.5 && longitude <= 122.5) {
        handleRegionChangeForLocation('3')

      } else if (latitude >= 21 && latitude <= 23 && longitude >= 119.5 && longitude <= 121) {
        handleRegionChangeForLocation('2')

      } else if (
        (latitude >= 23 && latitude <= 23.5 && longitude >= 119 && longitude <= 119.5) ||
        (latitude >= 26 && latitude <= 26.5 && longitude >= 119.5 && longitude <= 122)
      ) {
        handleRegionChangeForLocation('4')

      } else {
        alert('error')

      }
    };

    //定義選單初始值為1
    // const peopleNum = ref(1);
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
    const closeShareModal = () => {
      selectedShareCard.value = null
    }
    // const closeConfirm = () => {
    //   openConfirm.value = false;
    // };
    const closeExamine = () => {
      selectedReason.value = '';
      showWarning.value = false;
      showReportModal.value = false;
    }

    //定義shareContent、eventContent是一個物件
    const shareContent = ref([])
    const eventContent = ref([])

    const eventList = ref(null)
    const calendarList = ref(null)
    const calendarFilteredEvents = ref([])

    //定義下拉式選單域設為空
    const selectedRegion = ref('')

    //依資料庫area邏輯判斷出篩選結果
    const filteredEvents = computed(() => {
      if (!selectedRegion.value) {
        return eventContent.value
      } else {
        return eventContent.value.filter(
          (event) => Number(selectedRegion.value) === Number(event.E_AREA)
        )
      }
    })
    //抓取卡片值渲染至彈窗內容
    const handleRegionChangeForLocation = (event) => {
      selectedRegion.value = event;
      currentPage.value = 1;
    }
    const handleRegionChange = (event) => {
      selectedRegion.value = event.target.value;
      currentPage.value = 1;
    }
    //定義檢舉原因
    const reasons = ref([
      { label: '仇恨言論或歧視' },
      { label: '侵犯隱私' },
      { label: '暴力或威脅' },
      { label: '騷擾或霸凌' },
      { label: '虛假信息或誤導信息' },
      { label: '色情或不當內容' },
      { label: '非法活動' },
      { label: '垃圾信息或廣告' }
    ]);
    //存儲選擇的理由
    const selectedReason = ref('');
    //控制是否顯示警告提示
    const showWarning = ref(false);
    //每次關閉表單清空紀錄
    watch(showReportModal, () => {
      selectedReason.value = '';
      showWarning.value = false
    })

    ////監聽 selectedReason 的變化，如果為空且表單送出，則顯示警告
    watch(selectedReason, (newValue) => {
      showWarning.value = newValue === '';
    });
    // 顯示警告
    const submitForm = () => {
      if (selectedReason.value === '') {
        showWarning.value = true;
      }
      else {
        showReportModal.value = false;
        Swal.fire({
          icon: 'success',
          title: '檢舉成功提交',
          text: '您的檢舉已成功提交，我們會進行審核。',
          className: "reportSubmission"
        });
        closeShareModal();
      }
    }
    const isLoading = ref(true); //默認加載狀態為true

    // 在組件掛載後加載 JSON 文件
    onMounted(async () => {
      try {
        // 加載 Share.json
        const shareResponse = await fetch(`${import.meta.env.BASE_URL}json/Share.json`)
        if (!shareResponse.ok) {
          throw new Error('錯誤')
        }
        shareContent.value = await shareResponse.json()

        // 加載 event.json
        const eventResponse = await fetch(`${import.meta.env.BASE_URL}json/event.json`)
        if (!eventResponse.ok) {
          throw new Error('錯誤')
        }
        const jsonData = await eventResponse.json()
        eventList.value = jsonData
        eventContent.value = jsonData
        calendarList.value = eventList.value.map((event) => ({
          title: event.E_TITLE,
          start: event.E_DATE,
          allDay: true,
          backgroundColor: 'rgba(255,0,0,0)',
          borderColor: 'rgba(255,0,0,0)',
          textColor: '#E7A600'
        }))
        isLoading.value = false; //數據加載完成後將 isLoading 設置為 false
      } catch (error) {
        console.error('Error loading JSON:', error);
        isLoading.value = false;//加載狀態指示器消失
      }
    })
    // 列表呈現(8張)
    const paginatedEvents = computed(() => {
      const startIndex = (eventPage.value - 1) * 8;
      return filteredEvents.value.slice(startIndex, startIndex + 8);
    });
    // 分享呈現(4張)
    const paginatedShare = computed(() => {
      const startIndex = (sharePage.value - 1) * 4;
      return shareContent.value.slice(startIndex, startIndex + 4);
    });

    const hasEvents = (areaId) => {
      return getAreaEvents(areaId).length > 0
    }
    const getAreaEvents = (areaId) => {
      return calendarFilteredEvents.value.filter((event) => event.E_AREA === areaId)
    }
    return {
      calendarOptions,
      shareContent,
      eventContent,
      selectedEventCard,
      selectedShareCard,
      // handleEventCardClick,
      handleShareCardClick,
      closeEventModal,
      closeShareModal,
      calendarList,
      areas,
      getAreaEvents,
      hasEvents,
      filteredEvents,
      handleRegionChange,
      eventEnded,
      registrationClosed,
      registrationFull,
      date,
      selectedRegion,
      regions,
      // handleRegistration,
      SubmitEvent,
      // closeConfirm,
      // openConfirm,
      // peopleNum,
      showReportModal,
      closeExamine,
      reasons,
      selectedReason,
      showWarning,
      submitForm,
      events,
      currentPage,
      paginatedEvents,
      paginatedShare,
      eventPage,
      sharePage,
      changeEventPage,
      changeSharePage,
      isLoading,
      location,
      getLocation,
      scrollToEventList,
      eventListSection,
      store
    }
  }
})
</script>
