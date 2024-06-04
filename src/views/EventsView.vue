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
            <FullCalendar :options="calendarOptions" />
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
        <select name="" class="choose">
          <option value="">全台灣(地區)</option>
          <option value="">北部</option>
          <option value="">中部</option>
          <option value="">南部</option>
          <option value="">東部</option>
          <option value="">離島</option>
        </select>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="card in sectionEvents" :key="card">
          <div class="event-card">
            <div class="text">
              <h3>{{ card.title }}</h3>
              <p>{{ card.place }}</p>
              <p>{{ card.date }}</p>
              <p>{{ card.Deadline }}</p>
            </div>
            <div class="pic">
              <img :src=card.imageUrl />
            </div>
            <div class="addnew">
              <span>{{ card.people }}</span>
              <i class="fa-solid fa-user-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in computedTotalPages" :key="pageNumber" @click="goToPage(pageNumber)">{{
          pageNumber }}</a>
      </div>
    </div>
  </section>
  <section class="section section-event-share">
    <h2>活動分享</h2>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="card in sectionShare" :key="card">
          <div class="event-card">
            <div class="pic">
              <img :src="card.imageUrl" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <h3>{{ card.name }}</h3>
                </div>
                <div class="report">
                  <i class="fa-solid fa-circle-exclamation"></i>
                </div>
              </div>
              <span>{{ card.place }}</span>
              <span>{{ card.date }}</span>
              <span>{{ card.share }}</span>
              <span>{{ card.exp }}</span>
              <p class="Thoughts">
                {{ card.thoughts }}
                <a href="#">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in computedTotalPages" :key="pageNumber" @click="goToPage(pageNumber)">{{
          pageNumber }}</a>
      </div>
      <div class="sharebtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
  <section class="section section-event-agree">
    <div class="container">
      <p class="statement">
        活動免責聲明:<br />

        歡迎參加由[活動組織者名稱]（以下簡稱「組織者」）主辦的[活動名稱]（以下簡稱「活動」）。
        參加本活動前，請您仔細閱讀並同意以下免責聲明條款： 1.
        自願參加：我自願參加此活動，並了解活動的性質及其潛在風險。 2.
        健康狀況：我確認我的身體狀況適合參加此活動，並保證在參加活動前已經進行必要的健康檢查。如有任何身體不適或健康問題，我將主動告知組織者。
        3.
        風險承擔：我理解並接受參加此活動可能存在的風險，包括但不限於身體傷害、財產損失等。我同意自行承擔參加活動的所有風險，並豁免組織者及其工作人員、志願者、贊助商對於任何意外事故、傷害或損失的責任。
        4.
        個人責任：我承諾在活動期間遵守活動規則和組織者的指示，對自己的行為負責。如果因我的行為導致自己或他人受傷或財產損失，我將自行承擔相應責任。
        5.
        保險：我了解組織者可能不提供任何形式的保險保障，我同意自行購買適當的保險以覆蓋參加活動期間可能發生的任何風險。
        6.
        不可抗力：如因天災、政府政策變更或其他不可抗力因素導致活動無法正常舉行，組織者不承擔任何責任。
        7.
        肖像權使用：我同意組織者在活動期間拍攝的照片、錄像及其他影像資料可用於宣傳和推廣活動之用，而無需支付任何費用。
        8.
        法律適用：本免責聲明受[國家/地區]法律管轄，任何因本免責聲明引起的爭議應提交[地點]的法院解決。
      </p>
      <div class="return">
        <button>Top</button>
      </div>
    </div>
  </section>
  <section class="section section-light-box">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6">
          <div class="pic">
            <img src="https://picsum.photos/300/200/?random=10" />
            <div class="text">
              <h3>活動敘述</h3>
              <p class="Narrate">
                由環保志工組織的淨灘活動，旨在清理淡水區海灘垃圾並向參與者進行環保教育。
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <div class="activity-area">
            <div class="text">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
              <h3>北海岸環保淨灘行動</h3>
              <p>活動地點：淡水漁人碼頭Subheading</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
              <p>報名人數：100/150</p>
              <div class="join">
                <p class="people">參加人數:</p>
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
          <input type="file" name="" id="" />
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
          <label>仇恨言論或歧視</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>侵犯隱私</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>暴力或威脅</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>騷擾或霸凌</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>虛假信息或誤導信息</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>色情或不當內容</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>非法活動</label>
          <input type="checkbox" name="" id="">
        </div>
        <div class="box">
          <label>垃圾信息或廣告</label>
          <input type="checkbox" name="" id="">
        </div>
        <button>送出</button>
      </form>
    </div>
  </section>
  <section class="section section-detailed">
    <div class="container">
      <div class="detailed-wrap">
        <div class="close">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <div class="pic">
          <img src="https://picsum.photos/300/200/?random=21">
        </div>
        <div class="text" v-for="card in detailed" :key="card">
          <div class="report">
            <i class="fa-solid fa-circle-exclamation"></i>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.place }}</p>
          <p>{{ card.date }}</p>
          <p>{{ card.share }}</p>
          <p>{{ card.experience }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Swal from 'sweetalert2'

export default defineComponent({
  setup() {
    //calendar
    const calendarOptions = ref({
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      events: [
        {
          title: '北海岸環境淨灘行動',
          start: '2024-05-19'
        },
        {
          title: 'Time Event',
          start: '2024-05-29 00:00:00',
          end: '2024-06-10 24:00:00'
        }
      ],
      eventClick: function (info) {
        info.event.remove()
      },
      eventRemove: function (info) {
        console.log('removed', info)
        Swal.fire({
          icon: info.event.allDay ? 'success' : 'info',
          title: info.event.title,
          text: `Removed: ${info.event.startStr}`,
          confirmButtonText: 'OK'
        })
      },
      plugins: [dayGridPlugin, timeGridPlugin]
    });

    //定義生成卡片數據的方法
    const generateCards = (numCards) => {
      const cards = [];
      for (let i = 1; i <= numCards; i++) {
        cards.push({
          title: '北海岸環保淨灘行動',
          place: '活動地點：新北市漁人碼頭',
          date: '活動日期：2024年6月15日',
          Deadline: '截止日期：2024年6月10日',
          imageUrl: 'https://picsum.photos/300/200/?random=' + i,
          people: '報名人數：100/150',
          share: '分享人：林小美',
          exp: '北海岸環保淨灘行動給我留下了深刻的印象。在參與這項活動的過程中，我意識到海岸線上的垃圾對我們的環境造成了嚴重的影響。...',
          experience: '北海岸環保淨灘行動給我留下了深刻的印象。在參與這項活動的過程中，我意識到海岸線上的垃圾對我們的環境造成了嚴重的影響。我們小組一起穿上手套，拿著垃圾袋，開始清理海灘上的垃圾。這不僅是一次環保行動，更是一次團隊合作的體驗。我們一邊聊天笑著，一邊清理著海灘，不知不覺中收穫了友誼與愉快。這次活動讓我更加深刻地理解了垃圾對海洋生態的破壞。我們捡到的塑料袋、瓶子，甚至是一些微小的塑料碎片，都可能對海洋生物造成威脅。這使我更加堅定了自己保護環境的決心，我也將會積極參與更多類似的環保活動。此外，這次淨灘活動也讓我認識到了社區的重要性。只有當我們齊心協力，才能真正改變我們周圍的環境。我們每個人都應該有責任保護我們珍貴的大自然，讓我們的子孫後代也能夠享受美麗的自然風景。感謝這次活動讓我有機會深刻體驗到這一點。'
        });
      }
      return cards;
    };

    // 分別生成不同數量的卡片
    const sectionEvents = ref(generateCards(16));
    const sectionShare = ref(generateCards(4));
    const detailed = ref(generateCards(1));

    // 活動列表(每頁限制16張卡片)
    const cardsPerPage = 16;
    const computedTotalPages = computed(() => {
      return Math.ceil(sectionEvents.value.length / cardsPerPage);
    });

    //活動分享(每頁限制四張卡片)
    const cardsshare = 4;
    const computedTotalPagesSectionShare = computed(() => {
      return Math.ceil(sectionShare.value.length / cardsshare);
    });

    //活動列表數量超出條件時新增一頁
    // const addNewPageForEvents = () => {
    //   sectionEvents.value = sectionEvents.value.concat(generateCards(cardsPerPage));
    // };
    //活動分享數量超出條件時新增一頁
    // const addNewPageForShare = () => {
    //   sectionShare.value = sectionShare.value.concat(generateCards(cardsPerShare));
    // };

    return {
      calendarOptions,
      computedTotalPages,
      sectionEvents,
      sectionShare,
      computedTotalPagesSectionShare,
      detailed
    }
  },
  components: {
    FullCalendar
  },


})
</script>
