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
  <section class="section section-event-date">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div>
            <FullCalendar v-if="calendarList" :options="calendarOptions" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="area-list">
            <div class="area">
              <h3>北部</h3>
              <div class="activities">
                <p>北海岸環保淨灘行動</p>
                <p>系統自動帶入當天活動資訊</p>
                <p>系統自動帶入當天活動資訊</p>
              </div>
            </div>
            <div class="area">
              <h3>中部</h3>
              <div class="activities">
                <p>台中海洋守護淨灘</p>
                <p>系統自動帶入當天活動資訊</p>
                <p>系統自動帶入當天活動資訊</p>
              </div>
            </div>
            <div class="area">
              <h3>南部</h3>
              <div class="activities">
                <p>南台灣淨灘大會</p>
                <p>系統自動帶入當天活動資訊</p>
                <p>系統自動帶入當天活動資訊</p>
              </div>
            </div>
            <div class="area">
              <h3>東部</h3>
              <div class="activities">
                <p>東部海岸守護者淨灘</p>
                <p>系統自動帶入當天活動資訊</p>
                <p>系統自動帶入當天活動資訊</p>
              </div>
            </div>
            <div class="area">
              <h3>離島</h3>
              <div class="activities">
                <p>綠島海岸守護者淨灘</p>
                <p>系統自動帶入當天活動資訊</p>
                <p>系統自動帶入當天活動資訊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-event-list">
    <div class="container">
      <h2>活動列表</h2>
      <div class="menu">
        <select name="">
          <option value="">全台灣(地區)</option>
          <option value="">北部</option>
          <option value="">中部</option>
          <option value="">南部</option>
          <option value="">東部</option>
          <option value="">離島</option>
        </select>
      </div>
      <div class="row">
        <EventCard :eventList=eventList />
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in 4" :key="pageNumber">{{
          pageNumber }}</a>
      </div>
    </div>
  </section>
  <section class="section section-event-share">
    <h2>活動分享</h2>
    <div class="container">
      <div class="row">
        <ShareCard :ShareCard=shareList 
        :even="true" 
        @card-click="handleCardClick" />
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in 4" :key="pageNumber">{{  pageNumber }}</a>
      </div>
      <div class="sharebtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
  <section class="section section-event-agree">
    <div class="container">
      <h2>活動免責聲明:</h2>
      <span>歡迎參加由[活動組織者名稱]（以下簡稱「組織者」）主辦的[活動名稱]（以下簡稱「活動」）。</span>
      <span>參加本活動前，請您仔細閱讀並同意以下免責聲明條款：</span>
      <ul>
        <li>1. 自願參加：我自願參加此活動，並了解活動的性質及其潛在風險。</li>
        <li>2. 健康狀況：我確認我的身體狀況適合參加此活動，並保證在參加活動前已經進行必要的健康檢查。如有任何身體不適或健康問題，我將主動告知組織者。</li>
        <li>3. 風險承擔：我理解並接受參加此活動可能存在的風險，包括但不限於身體傷害、財產損失等。我同意自行承擔參加活動的所有風險，並豁免組織者及其工作人員、志願者、贊助商對於任何意外事故、傷害或損失的責任。</li>
        <li>4. 個人責任：我承諾在活動期間遵守活動規則和組織者的指示，對自己的行為負責。如果因我的行為導致自己或他人受傷或財產損失，我將自行承擔相應責任。</li>
        <li>5. 保險：我了解組織者可能不提供任何形式的保險保障，我同意自行購買適當的保險以覆蓋參加活動期間可能發生的任何風險。</li>
        <li>6. 不可抗力：如因天災、政府政策變更或其他不可抗力因素導致活動無法正常舉行，組織者不承擔任何責任。</li>
        <li>7. 肖像權使用：我同意組織者在活動期間拍攝的照片、錄像及其他影像資料可用於宣傳和推廣活動之用，而無需支付任何費用。</li>
        <li>8. 法律適用：本免責聲明受[國家/地區]法律管轄，任何因本免責聲明引起的爭議應提交[地點]的法院解決。</li>
      </ul>
      <div class="return">
        <button>Top</button>
      </div>
    </div>
  </section>
  <section class="section section-light-box">
    <div class="container">
      <div class="row">
          <div class="pic">
            <img src="https://picsum.photos/300/200/?random=10" />
            <div class="text">
              <h3>活動敘述</h3>
              <p>
                由環保志工組織的淨灘活動，旨在清理淡水區海灘垃圾並向參與者進行環保教育。
              </p>
            </div>
          </div>
        <div class="content">
          <i class="fa-regular fa-circle-xmark"></i>
          <div class="activity-area">
          <div class="text">
            <h3>北海岸環保淨灘行動</h3>
            <span>活動地點：淡水漁人碼頭Subheading</span>
            <span>活動日期：2024年6月15日</span>
            <span>截止日期：2024年6月10日</span>
            <span>報名人數：100/150</span>
            <div class="join">
              <span class="people">參加人數:</span>
              <select name="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>
          </div>
          </div>
          <div class="state">
            <button class="now">立即報名</button>
            <button class="stop">報名截止</button>
            <button class="full">報名已滿</button>
            <button class="end">活動結束</button>
          </div>
          </div>
      </div>
    </div>
  </section>
  <section class="section section-confirm">
    <div class="container">
      <div class="apply-wrap">
        <div class="close">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <div class="text">
          <h3>北海岸環保淨灘行動</h3>
          <p>活動地點：淡水漁人碼頭Subheading</p>
          <p>活動日期：2024年6月15日</p>
          <p>截止日期：2024年6月10日</p>
          <p>報名人數：100/150</p>
          <p>會員名稱:林小美</p>
          <p>報名人數:5人</p>
        </div>
      </div>
      <div class="sent-btn">
        <button class="sent">送出</button>
      </div>
    </div>
  </section>
  <section class="section-upload">
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
          <input type="file" name="" id=""  class="newFile">
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
  <section class="section section-examine">
    <div class="container">
      <div class="CancelBtn">
        <span>取消</span>
      </div>
      <h2>您檢舉此文章的理由是?</h2>
      <form>
        <div class="box">
          <label for="no1">仇恨言論或歧視</label>
          <input type="radio" name="reason" id="no1">
        </div>
        <div class="box">
          <label for="no2">侵犯隱私</label>
          <input type="radio" name="reason" id="no2">
        </div>
        <div class="box">
          <label for="no3">暴力或威脅</label>
          <input type="radio" name="reason" id="no3">
        </div>
        <div class="box">
          <label for="no4">騷擾或霸凌</label>
          <input type="radio" name="reason" id="no4">
        </div>
        <div class="box">
          <label for="no5">虛假信息或誤導信息</label>
          <input type="radio" name="reason" id="no5">
        </div>
        <div class="box">
          <label for="no6">色情或不當內容</label>
          <input type="radio" name="reason" id="no6">
        </div>
        <div class="box">
          <label for="no7">非法活動</label>
          <input type="radio" name="reason" id="no7">
        </div>
        <div class="box">
          <label for="no8">垃圾信息或廣告</label>
          <input type="radio" name="reason" id="no8">
        </div>
        <button>送出</button>
      </form>
    </div>
  </section>
  <section class="section section-detailed" @click.self="closeModal" v-if="selectedCard" >
    <div class="overlay" @click="closeModal"></div>
    <div class="container">
      <ShareCard :ShareCard="[selectedCard]" 
      :limit="1" 
      :even="false" 
      @close-click="closeModal" />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref,onMounted, watch } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Swal from 'sweetalert2'
import EventCard from '../components/EventCard.vue'
import ShareCard from '../components/ShareCard.vue'

export default defineComponent({
  components: {
    FullCalendar,
    EventCard,
    ShareCard,
  },
  setup() {
      //定義行事曆的內容資訊
     // 定義行事曆的內容資訊
    const calendarOptions = ref({
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next',
      },
      events: [],
      eventClick: function (arg) {
    const event = arg.event;
    const startDate = event.start;
    const endDate = event.end;

    // 檢查 startDate 和 endDate 是否為 null
    if (!startDate || !endDate) {
      return;
    }
    const formattedStartDate = startDate.toLocaleString();

    Swal.fire({
      icon: event.allDay ? 'success' : 'info',
      title: event.title,
      text: formattedStartDate,
      confirmButtonText: '確認',
    });
  },
      plugins: [dayGridPlugin, timeGridPlugin],
    });
    //定義預設跳窗卡片是隱藏狀態false
    const selectedCard = ref(null);
    //跳窗卡片抓取點擊卡片時的卡片資訊
    const handleCardClick = (card) => {
        selectedCard.value = card;
    };
    //點擊彈窗區域以外的關閉方法
    const closeModal = () => {
        selectedCard.value = null;
    };
    //定義shareContent是一個物件
    const shareContent = ref({});


    const eventList = ref(null);
    const calendarList = ref(null);
    // 在組件掛載後加載 JSON 文件
    onMounted(async () => {
      try {
        // 加載 Share.json
        const shareResponse = await fetch('../../public/Share.json');
        if (!shareResponse.ok) {
          throw new Error('Network response was not ok');
        }
        shareContent.value = await shareResponse.json();

        // 加載 event.json
        const eventResponse = await fetch('../../public/json/event.json');
        if (!eventResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await eventResponse.json();
        eventList.value = jsonData;
        calendarList.value = eventList.value.map((event) => ({
          title: event.E_TITLE,
          start: event.E_START,
        }));
      } catch (error) {
        console.error('Error loading JSON:', error);
      }
    });

    watch(calendarList, (newValue) => {
      calendarOptions.value.events = newValue;
    });

    return {
      calendarOptions,
      selectedCard,
      handleCardClick,
      closeModal,
      shareContent,
      eventList,
      calendarList,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../assets/sass/base/var";
@import "../assets/sass/page/event";
</style>
