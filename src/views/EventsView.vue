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
        <ShareCard :ShareCard=shareList :even="true" />
      </div>
      <div class="pagenumber">
        <a href="#" v-for="pageNumber in 4" :key="pageNumber">{{
          pageNumber }}</a>
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
        <div class="col-lg-6">
          <div class="pic">
            <img src="https://picsum.photos/300/200/?random=10" />
            <div class="text">
              <h3>活動敘述</h3>
              <p>
                由環保志工組織的淨灘活動，旨在清理淡水區海灘垃圾並向參與者進行環保教育。
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="activity-area">
            <div class="text">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
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
  <section class="section section-detailed">
    <div class="container">
      <ShareCard :ShareCard="shareList" :limit="1" :even="false" />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
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
    ShareCard
  },
  setup() {
    //calendar
    const calendarOptions = ref({
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next'
      },
      events: [
        {
          title: '小龜老師meeting',
          start: '2024-06-05'
        },
        {
          title: '走一步是一步',
          start: '2024-06-10 00:00:00',
          end: '2024-06-21 24:00:00'
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
    return {
      calendarOptions,
      shareList: [
        {
          id: '001',
          title: '北海岸淨灘',
          shareTitle: '活動名稱：北海岸愛地球淨灘活動',
          place: '活動地點：新北市漁人碼頭',
          date: '活動日期：2024/6/15',
          Deadline: '截止日期：2024/6/10',
          imageUrl: 'https://picsum.photos/300/200/?random=1',
          maxAttend:150,
          curAttend:200,
          share: '分享人：林小美',
          exp: '北海岸環保淨灘行動給我留下了深刻的印象。在參與這項活動的過程中，我意識到海岸線上的垃圾對我們的環境造成了嚴重的影響...',
          experience:'北海岸環保淨灘行動給我留下了深刻的印象。在參與這項活動的過程中，我意識到海岸線上的垃圾對我們的環境造成了嚴重的影響。我們小組一起穿上手套，拿著垃圾袋，開始清理海灘上的垃圾。這不僅是一次環保行動，更是一次團隊合作的體驗。我們一邊聊天笑著，一邊清理著海灘，不知不覺中收穫了友誼與愉快。這次活動讓我更加深刻地理解了垃圾對海洋生態的破壞。我們捡到的塑料袋、瓶子，甚至是一些微小的塑料碎片，都可能對海洋生物造成威脅。這使我更加堅定了自己保護環境的決心，我也將會積極參與更多類似的環保活動。此外，這次淨灘活動也讓我認識到了社區的重要性。只有當我們齊心協力，才能真正改變我們周圍的環境。我們每個人都應該有責任保護我們珍貴的大自然，讓我們的子孫後代也能夠享受美麗的自然風景。感謝這次活動讓我有機會深刻體驗到這一點。'
        },
        {
          id: '002',
          title: '社區義工服務',
          shareTitle: '活動名稱：社區關懷服務',
          place: '活動地點：XX區老人活動中心',
          date: '活動日期：2024/7/5',
          Deadline: '截止日期：2024/6/28',
          imageUrl: 'https://picsum.photos/300/200/?random=2',
          maxAttend:30,
          curAttend:50,
          share: '分享人：王大明',
          exp: '參與社區義工服務讓我有機會回饋社會,也讓我更珍惜生活...',
          experience: '參與這次的社區義工服務讓我有機會回饋社會,也讓我更珍惜生活。我們一行人來到老人活動中心,為長者們提供協助及陪伴。看著他們開心的笑容,我也感到非常欣慰。透過與長者們的互動,我了解到他們雖然年紀大了,但內心仍保有希望和樂觀的精神,這份正能量深深地感染了我。此外,這次活動也讓我認識到和平相處的重要性。不同年齡層的人雖然有代溝,但只要用心相處,一定能找到共同點。我們應該互相尊重、包容,營造一個溫馨和諧的社會氛圍。總之,這次義工服務不僅讓我有機會回饋社會,更讓我獲得寶貴的人生體驗。希望未來能有更多機會參與這類活動,繼續關懷弱勢,實踐生命的意義。'
        },
        {
          id: '003',
          title: '環保種樹活動',
          shareTitle: '活動名稱：樹木綠化賡植活動',
          place: '活動地點：大安森林公園',
          date: '活動日期：2024/8/20',
          Deadline: '截止日期：2024/8/15',
          imageUrl: 'https://picsum.photos/300/200/?random=3',
          maxAttend:100,
          curAttend:80,
          share: '分享人：陳小華',
          exp: '這次的環保種樹活動不僅讓我貼近大自然,更加深了我對環保的認知...',
          experience: '這次的環保種樹活動不僅讓我貼近大自然,更加深了我對環保的認知。一大早我們就來到大安森林公園,工作人員先為我們簡單介紹了種樹的步驟及注意事項。接著,我們就開始動手種植樹苗。雖然過程有些辛苦,但看著樹苗一點一點長大,我內心充滿成就感。種樹不僅能美化環境,更能凈化空氣、防止水土流失,對環境保護有著重大意義。這次活動讓我意識到保護環境確實非常重要,我們每個人都應該從自己做起,節約用水用電、減少垃圾產生等,用行動愛護我們賴以生存的這片土地。與此同時,這次活動也給了我機會與志同道合的夥伴們互相交流。大家你一言我一語地討論環保話題,獲得了許多新的啟示。我希望未來能有更多這樣的活動,讓更多人參與到環保的行列中來,攜手共創一個綠色的明天。'
        },
        {
          id: '004',
          title: '公益園遊會',
          shareTitle: '活動名稱：公益慈善園遊會',
          place: '活動地點：中正紀念公園',
          date: '活動日期：2024/9/28',
          Deadline: '截止日期：2024/9/20',
          imageUrl: 'https://picsum.photos/300/200/?random=4',
          maxAttend:300,
          curAttend:250,
          share: '分享人：李曉明',
          exp: '參加這次的公益園遊會讓我深切體會到一個人的力量是有限的,只有大家攜手合作...',
          experience: '參加這次的公益園遊會讓我深切體會到一個人的力量是有限的,只有大家攜手合作才能產生巨大的力量。活動當天,我看到各式各樣的遊戲攤位、表演節目,處處洋溢著歡樂的氣氛。最讓我感動的是,所有的盈餘都將捐贈給當地的兒童福利機構,用於改善弱勢兒童的生活環境。看著大家你幫我我幫你的互相支持,我深切體會到這正是公益活動最寶貴的意義所在。每個人也許貢獻有限,但當大家的心血匯聚在一起時,就能產生巨大的力量,為這個世界帶來積極的改變。這次活動不僅讓我學會了團結合作的重要性,更燃起了我對公益事業的熱忱。我期待未來能有更多機會參與這類活動,盡自己的一份綿力,為創造一個更加美好的世界而努力。'
        }
      ],
      eventList: [
        {
          id: "005",
          title: "澎湖海洋淨灘活動",
          place: "澎湖縣馬公市西嶼海灘",
          date: "活動日期：2024/6/20",
          Deadline: "截止日期：2024/6/5",
          imageUrl: "https://picsum.photos/300/200/?random=5",
          maxAttend:300,
          curAttend:250
        },
        {
          id: "006",
          title: "綠島珊瑚礁保育淨灘行動",
          place: "綠島珊瑚礁區",
          date: "活動日期：2024/7/12",
          Deadline: "截止日期：2024/6/28",
          imageUrl: "https://picsum.photos/300/200/?random=6",
          maxAttend:100,
          curAttend:80
        },
        {
          id: "007",
          title: "蘭嶼淨灘環保之旅",
          place: "蘭嶼島東清部落海灘",
          date: "活動日期：2024/8/3",
          Deadline: "截止日期：2024/7/20",
          imageUrl: "https://picsum.photos/300/200/?random=7",
          maxAttend:150,
          curAttend:120
        },
        {
          id: "008",
          title: "澎湖七美海岸淨灘日",
          place: "澎湖七美鄉海口村海灘",
          date: "活動日期：2024/9/14",
          Deadline: "截止日期：2024/8/30",
          imageUrl: "https://picsum.photos/300/200/?random=8",
          maxAttend:220,
          curAttend:180
        },
        {
          id: "009",
          title: "小琉球海洋教育淨灘之旅",
          place: "小琉球伍桐部落海灘",
          date: "活動日期：2024/10/5",
          Deadline: "截止日期：2024/9/20",
          imageUrl: "https://picsum.photos/300/200/?random=9",
          maxAttend:120,
          curAttend:100
        },
        {
          id: "010",
          title: "花蓮石梯坪淨灘推廣活動",
          place: "花蓮縣新城鄉石梯坪海岸",
          date: "活動日期：2024/11/2",
          Deadline: "截止日期：2024/10/18",
          imageUrl: "https://picsum.photos/300/200/?random=10",
          maxAttend:120,
          curAttend:90
        },
        {
          id: "011",
          title: "綠島珊瑚礁保育",
          place: "綠島珊瑚礁區",
          date: "活動日期：2024/12/7",
          Deadline: "截止日期：2024/11/25",
          imageUrl: "https://picsum.photos/300/200/?random=11",
          maxAttend:200,
          curAttend:150
        },
        {
          id: "012",
          title: "澎湖馬公海灘淨灘推廣日",
          place: "澎湖縣馬公市中興海灘",
          date: "活動日期：2025年1月18日",
          Deadline: "截止日期：2025年1月5日",
          imageUrl: "https://picsum.photos/300/200/?random=12",
          maxAttend:250,
          curAttend:200
        }
      ],
    }

  },
})
</script>

<style lang="scss" scoped>
@import "../assets/sass/base/var";
@import "../assets/sass/page/event";
</style>
