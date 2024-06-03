<template>
<!-- ---------------------------------------------------------------banner- -->
    <section class="section section-banner">
      <div class="container">
          
        <div class="container-left">
          <h1>熱心捐款</h1>
            <span>用愛灌溉<br>讓海洋生生不息</span>
        </div>
        <div class="container-donate">
          <div class="row">
            <div class="col-12 col-md-5">
              <p>每一份捐助,都是一份守護<br>為海洋的永續盡一份心力</p>
            </div>
            <div class="col-12 col-md-7 unit-table">
              <div
                v-for="amount in donationAmounts"
                :key="amount"
                :class="{ 'selected': selectedAmount === amount }"
                @click="selectAmount(amount)"
              >
              <label>
                <input type="radio" name="unit">
                  ${{ amount }}
              </label>
              </div>
              <div class="donate-submit">
                <div class="unit-input">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <input type="number">
                </div>
                <button><RouterLink to="/DonatePage">捐款去</RouterLink></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- ----------------------------------------------------------------海洋故事 -->
      <section class="section section-story">
        <div class="container container-story ">
          <div class="flex">
            <div class="row">
              <div class="row pic col-6 col-md-3">
                <img src="/public/img/donate/donate-pic2.png" />
                <div class="pic2">
                <img src="/public/img/donate/donate-pic3.png" />
                </div>
              </div>

              <div class="pic3 col-6 col-md-3">
                <img src="/public/img/donate/donate-pic4.png" />
              </div>
            
            <div class="story-text col-12 col-sm-6">
              <h2>海洋故事</h2>
              <p>
                滔滔大海,賦予地球生命的搖籃，孕育著萬物的希望。<br />
                如今的海洋正遭受著人類活動的嚴重威脅：塑料污染、過度捕撈、氣候變遷等，正在無情地摧毀著這片寶貴的藍色家園。<br />
                但是，我們還有機會扭轉乾坤！您的每一份捐助，都將化作守護海洋生態的力量，為珊瑚礁注入新生，為海豚們帶來自由的暢遊，為鯨魚們開闢安全的回家路。<br />
                讓我們攜手同心，共同捍衛這片深邃而神奇的海洋世界。每一分捐款，都將如滴水匯入大海,彙聚成守護之流，灌溉海洋生命的根基。<br />
                加入我們，成為海洋的守護者！讓這片孕育萬物的母親之海，永遠綻放勃勃生機!讓我們用實際行動，捍衛美麗家園的未來!
              </p>
            </div>
            </div>

          </div>
        </div>
      </section>

<!-- ----------------------------------------------------------------感謝話語 -->
      <section>
        <div class="container">
          <div class="sx-txt co1-12">
          <p>感謝您對「藍色警戒」的慷慨支持！</p>
          <p>您的每一筆捐款都將助力我們更有效地保護海洋，為子孫後代創造一個更加乾淨、健康、永續的海洋環境。</p>
        </div>
        </div>
      </section>
<!-- ----------------------------------------------------------------捐款用途 -->
      <section class="section section-donation">
        <div class="container donation-list">
          <h3>
            DISTRIBUTION OF DONATION<br />捐款用途
          </h3>
          <div class="row donation-item">
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="universal-access">
                <i class="fa-solid fa-universal-access"></i>
              </div>
              <h3>行政及人事開支</h3>
              <p>
                您的捐款將用於支付工作人員的薪資福利、辦公場地租賃、設備採購和維護等行政開支,確保組織能夠高效、持續地開展海洋保護工作。
              </p>
            </div>
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="person-chalkboard">
                <i class="fa-solid fa-person-chalkboard"></i>
              </div>
              <h3 class="donation-subtitle">教育宣導活動</h3>
              <p class="donation-description">
                我們將利用您的捐款開展一系列教育宣導活動,包括在校 園舉辦海洋環保講座、組織學生參與互動體驗、製作和發放宣傳材料等。通過生動有趣的方式,我們希望讓更多人,尤其是青少年,瞭解海洋面臨的挑戰,并自覺踐行環保理念。
              </p>
            </div>
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="recycle">
                <i class="fa-solid fa-recycle"></i>
              </div>
              <h3 class="donation-subtitle">淨灘活動</h3>
              <p class="donation-description">
                您的捐款將用於組織和支持各地的淨灘行動,包括采購清潔工具、提供志願者宣傳招募等。我們還將與其他環保組織、社區團體、企業等開展合作,擴大淨灘活動的規模和影響力。
              </p>
            </div>
          </div>
        </div>

        <div class="container donation-list">
          <div class="row donation-item">
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="school">
                <i class="fa-solid fa-school"></i>
              </div>
              <h3>海洋生態保育專案</h3>
              <p>
                BLUE ALERT將與專業的海洋保育團體合作，利用您的捐款開展針對性的保育專案，如珊瑚礁復育、濕地保護、海洋生物多樣性監測等。這些專案將由具有豐富經驗和專業知識的團隊負責實施，確保取得實質性的保育成果。
              </p>
            </div>
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="flask-vial">
                <i class="fa-solid fa-flask-vial"></i>
              </div>
              <h3 class="donation-subtitle">相關研究計畫</h3>
              <p class="donation-description">
                BLUE ALERT將設立專項基金,資助高校、研究所等學術單位開展海洋環境相關的研究工作,如海洋污染治理技術、生態修復方法、可持續漁業模式等。這些研究成果將為我們的環保實踐提供科學指導,並為海洋可持續發展貢獻智慧。
              </p>
            </div>
            <div class="donation-box col-lg-3 col-sm-12">
              <div class="display">
                <i class="fa-solid fa-display"></i>
              </div>
              <h3 class="donation-subtitle">網站維護</h3>
              <p class="donation-description">
                您的捐款將用於網站的日常維護、內容更新、功能優化等,確保平台穩定運行,為公眾提供及時、豐富、互動的海洋環保資源。我們也將不斷探索網站的創新應用,如開發線上學習課程、建設海洋資料庫等,为海洋保護事業賦能。
              </p>
            </div>
          </div>
        </div>
      </section>
<!-- ---------------------------------------------------------------- -->
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const donationAmounts = [100, 500, 1000, 2000]
    const selectedAmount = ref(null)
    const donationTotal = ref(0)
    const targetAmount = 10000

    const selectAmount = (amount) => {
      selectedAmount.value = amount
    }

    const donate = () => {
      if (selectedAmount.value) {
        donationTotal.value += selectedAmount.value
        selectedAmount.value = null
      }
    }

    const progress = computed(() => {
      return (donationTotal.value / targetAmount) * 100
    })

    return {
      donationAmounts,
      selectedAmount,
      selectAmount,
      donate,
      progress,
    }
  },
}
</script>