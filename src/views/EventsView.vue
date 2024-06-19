<template>
  <section class="section section-event-title">
    <div class="container">
      <div class="title-wrap">
        <div class="title">
          <span>活動</span>
          <h1>EVENTS</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-event-banner">
    <div class="container">
      <div class="sloagn">
        <h2 class="ori">為保護大自然盡份心力，美麗的海洋，守護有你有我!</h2>
        <button class="fast-signup">會員一鍵報名</button>
      </div>
    </div>
  </section>
  <calendar @card-click="handleEventCardClick" />
  <section class="section section-event-list">
    <div class="container">
      <h2>活動列表</h2>
      <div class="menu">
        <select name="" v-model="selectedRegion" @change="handleRegionChange">
          <option value="">全台灣(地區)</option>
          <option :value="index" v-for="(regions, index) in regions" :key="index">{{ regions }}</option>
        </select>
      </div>
      <div class="row">
        <EventCard :filteredEvents="filteredEvents && paginatedEvents" @card-click="handleEventCardClick" />
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in totalPages" :key="pageNumber" @click.prevent="changePage(pageNumber)">{{ pageNumber }}</a>
      </div>
    </div>
  </section>
  <section class="section section-event-share">
    <h2>活動分享</h2>
    <div class="container">
      <div class="row">
        <ShareCard :shareContent="shareContent" @card-click="handleShareCardClick"
          @report-click="showReportModal = true" />
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in 4" :key="pageNumber">{{ pageNumber }}</a>
      </div>
      <div class="sharebtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
  <section class="section section-event-agree">
    <div class="container">
      <h2>活動免責聲明:</h2>
      <ul>歡迎參加由[活動組織者名稱]（以下簡稱「組織者」）主辦的[活動名稱]（以下簡稱「活動」）。<br>參加本活動前，請您仔細閱讀並同意以下免責聲明條款：
        <li>1. 自願參加：我自願參加此活動，並了解活動的性質及其潛在風險。</li>
        <li>
          2.
          健康狀況：我確認我的身體狀況適合參加此活動，並保證在參加活動前已經進行必要的健康檢查。如有任何身體不適或健康問題，我將主動告知組織者。
        </li>
        <li>
          3.
          風險承擔：我理解並接受參加此活動可能存在的風險，包括但不限於身體傷害、財產損失等。我同意自行承擔參加活動的所有風險，並豁免組織者及其工作人員、志願者、贊助商對於任何意外事故、傷害或損失的責任。
        </li>
        <li>
          4.
          個人責任：我承諾在活動期間遵守活動規則和組織者的指示，對自己的行為負責。如果因我的行為導致自己或他人受傷或財產損失，我將自行承擔相應責任。
        </li>
        <li>
          5.
          保險：我了解組織者可能不提供任何形式的保險保障，我同意自行購買適當的保險以覆蓋參加活動期間可能發生的任何風險。
        </li>
        <li>
          6.
          不可抗力：如因天災、政府政策變更或其他不可抗力因素導致活動無法正常舉行，組織者不承擔任何責任。
        </li>
        <li>
          7.
          肖像權使用：我同意組織者在活動期間拍攝的照片、錄像及其他影像資料可用於宣傳和推廣活動之用，而無需支付任何費用。
        </li>
        <li>
          8.
          法律適用：本免責聲明受[國家/地區]法律管轄，任何因本免責聲明引起的爭議應提交[地點]的法院解決。
        </li>
      </ul>
      <div class="return">
        <button @click="scrollToTop">Top</button>
      </div>
    </div>
  </section>
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
                  <button v-else @click="showConfirmModal">立即報名</button>
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
          <p>會員名稱:林小美</p>
          <p>報名人數:{{ peopleNum }}人</p>
        </div>
      </div>
      <div class="sent-btn">
        <button class="sent" @click="SubmitEvent">送出</button>
      </div>
    </div>
  </div>
  <section class="section-upload" style="display: none">
    <div class="container">
      <div class="upload">
        <h2>活動分享</h2>
        <div class="close">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
      <form>
        <div class="box box-1">
          <label>活動場次</label>
          <select>
            <option value="">北海岸愛地球淨灘活動</option>
            <option value="">南台灣海岸清潔行動</option>
            <option value="">東海岸守護者淨灘</option>
          </select>
        </div>
        <div class="box box-2">
          <label>活動日期</label>
          <input type="date" name="" id="" />
        </div>
        <div class="box box-3">
          <label>活動地點</label>
          <span>根據場次自動帶入</span>
        </div>
        <div class="box box-4">
          <label>分享人</label>
          <span>系統自動帶入</span>
        </div>
        <div class="box box-5">
          <label>活動圖片</label>
          <input type="file" name="" id="" class="newFile" />
        </div>
        <div class="box box-6">
          <label>活動心得</label>
          <div class="Experience">
            <span>限100字</span>
            <textarea rows="10" placeholder="請輸入文字內容"></textarea>
          </div>
        </div>
      </form>
      <div class="shareBtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
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
import { useRouter } from 'vue-router'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Swal from 'sweetalert2'
import EventCard from '@/components/EventCard.vue'
import ShareCard from '@/components/ShareCard.vue'
import calendar from '@/components/even/calendarFilter.vue'

export default defineComponent({
  components: {
    EventCard,
    ShareCard,
    calendar
  },
  setup() {
    //獲取路由
    const router = useRouter();

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
    const openConfirm = ref(false);
    const showReportModal = ref(false);
    //跳窗卡片抓取點擊卡片時的卡片資訊
    const handleEventCardClick = (card) => {
      selectedEventCard.value = card;
      peopleNum.value = 1;
    }
    const handleShareCardClick = (card) => {
      selectedShareCard.value = card;

      // console.log(selectedShareCard.value);
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
      }).then(() => {
        router.push({ name: 'home' });
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

    // 存儲所有事件數據
    const events = ref([]);
    // 每頁顯示的事件數量
    const itemsPerPage = 8;
    // 当前页数
    const currentPage = ref(1);
    //計算總頁數
    const totalPages = computed(() => {
      return Math.ceil(filteredEvents.value.length / itemsPerPage);
    });
    // 根據當前頁數和每頁數量計算當前頁顯示的事件
    const paginatedEvents = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      return filteredEvents.value.slice(startIndex, startIndex + itemsPerPage);
    });
    //處理頁數變化
    const changePage = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages.value) {
        currentPage.value = pageNumber;
      }
    };
    



    //定義選單列表
    const regions = ref(["北部", "中部", "南部", "東部", "離島"]);
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
    const closeShareModal = () => {
      selectedShareCard.value = null
    }
    const closeConfirm = () => {
      openConfirm.value = false;
    };
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
    function handleRegionChange(event) {
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
            })
      }
    }
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
      } catch (error) {
        console.error('Error loading JSON:', error)
      }
    })

    const hasEvents = (areaId) => {
      return getAreaEvents(areaId).length > 0
    }
    const getAreaEvents = (areaId) => {
      return calendarFilteredEvents.value.filter((event) => event.E_AREA === areaId)
    }
    //Top按鈕跳至網頁最上方
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return {
      calendarOptions,
      shareContent,
      eventContent,
      selectedEventCard,
      selectedShareCard,
      handleEventCardClick,
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
      showConfirmModal,
      SubmitEvent,
      closeConfirm,
      openConfirm,
      peopleNum,
      showReportModal,
      closeExamine,
      reasons,
      selectedReason,
      showWarning,
      submitForm,
      scrollToTop,
      events,
      itemsPerPage,
      currentPage,
      totalPages,
      paginatedEvents,
      changePage

    }
  }
})
</script>
