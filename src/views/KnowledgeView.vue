<template>
<div id="app">
  <section class="section section-knowledge-banner">
    <div class="container">
      <h1 class="section">教育中心</h1>
      <h2 class="subtitle">守護海洋，從知識開始</h2>
      <p>
        在我們的教育中心，您可以找到豐富的資源和互動內容，幫助您了解海洋污染問題並參與保護行動。我們提供多樣化的學習工具，讓每一位訪客都能輕鬆獲取相關知識，並在趣味中學習環保的重要性。
      </p>
    </div>
  </section>

  <section class="section section-bg">
    <div class="container">
      <div class="row">
        <div class="trash-txt col-12 col-lg-6 col-md-6">
          <h3>什麼是海洋廢棄物？</h3>
          <p>
            海洋廢棄物是指人類活動產生的廢棄物進入海洋環境後，對海洋生態系統造成的污染物。這些廢棄物包括塑膠製品、金屬、玻璃、紙張、橡膠和化學物質等。海洋廢棄物來源廣泛，主要來自於陸地上的垃圾、海上活動（如漁業和航運業）、工業排放以及自然災害。
          </p>
          <p>
            覺得旁邊的圖美嗎？是的，我也覺得很漂亮，但美麗是主觀的，事實上這正是我們想要強調的一點，海洋的美麗不僅僅在於它的外觀，而是在於它內在的健康和生命力。海洋廢棄物的污染，無論再怎麼美麗的景色，也會變得令人擔憂。我們希望通過提高公眾對海洋污染問題的認識，讓更多人參與到海洋保護的行動中來，共同守護這片藍色的美麗。
          </p>
        </div>
        <div class=" trash-pic col-12 col-lg-6 col-md-6">
          <img src="../../public/img/knowledge/banner2.png" width="100%">
        </div>
      </div>
    </div>
  </section>

  <section class="section section-data">
    <div class="container">
      <h3>全台灣沿海廢棄數據</h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
            <img src="https://picsum.photos/562/528/?random=19" width="100%">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="button button-area">
            <button>北部</button>
            <button>中部</button>
            <button>南部</button>
            <button>東部</button>
            <button>離島</button>
          </div>
          <div class="news-filter">
            <select name="name" id="">
              <option value="0">請選擇地區</option>
              <option value="1">台北市</option>
              <option value="2">新北市</option>
              <option value="3">桃園市</option>
              <option value="4">桃園縣</option>
            </select>
          </div>
          <div class="card-data">
            <h3>基隆市海廢月份圖表</h3>
            <div class="span-flex">
              <span>
                <div class="red-box"></div>
                <p>海廢頓數</p>
              </span>
              <span>
                <div class="blue-box"></div>
                <p>淨灘人數統計</p>
              </span>
            </div>
            <img src="https://picsum.photos/535/232/?random=0" width="100%">
          </div>
          <p>
            塑料是最常見的海洋廢棄物之一，尤其是一次性塑料製品，如吸管、塑料袋和瓶子。這些塑料製品長期漂浮在海洋中，分解成微小的塑料碎片，危害海洋生物的健康，甚至進入了人類的食物鏈。
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row">
      <div  class="flex col-12 col-md-6">
        <div class="trash-type">
          <h3>垃圾種類</h3>
          <img src="https://picsum.photos/269/269/?random=2" width="100%">
        </div>
        <div class="card-type">
          <div class="p-type">
          <div class="color-box">
            <div class="blue-box"></div>
            <p>塑膠垃圾</p>
          </div>
          <div class="color-box">
            <div class="yellow-box"></div>
            <p>捕魚漁網</p>
          </div>
          <div class="color-box">
            <div class="red-box"></div>
            <p>漂流木</p>
          </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="trash-card">
          <h3>基隆垃圾處理方式</h3>
          <div>
            <img src="https://picsum.photos/535/232/?random=10" width="100%">
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>

  <section class="section section-knowledge">
    <div class="container">
      <h2>海廢知識庫</h2>
      <div class="row">
        <div class="card-c  col-sm-5 col-lg-3 " v-for="card in cards" :key="card.imgSrc">
          <div class="card">
            <img :src="card.imgSrc" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-game">
    <div class="container">
      <h2>放鬆之餘，也能用有趣的方式更了解海廢</h2>
      <a href="./BeachgameView.vue">
        <div class="card">
            <div class="row">
              <div class="card-content col-12 col-md-3">
                      <img src="https://picsum.photos/208/208/?random=15" width="100%">
              </div>
              <div class="card-content col-12 col-md-6">
                <h3>海廢小遊戲</h3>
                <p>
                通過我們設計的海廢小遊戲，您可以在遊戲中學習如何識別和處理海洋垃圾，並體驗保護海洋的樂趣。這些遊戲不僅適合兒童，也能吸引成年人參與其中。
                </p>
              </div>
              <div class="card-content col-12 col-md-2">
                  <button>立即前往</button>
              </div>
            </div>
        </div>
      </a>

      <div class="card">
            <div class="row">
              <div class="card-content col-12 col-md-3">
                      <img src="https://picsum.photos/208/208/?random=10" width="100%">
              </div>
              <div class="card-content col-12 col-md-6">
                <h3>海廢Q&A</h3>
                <p>
                  我們設計了一個有趣且有教育意義的問卷，讓您通過回答一系列問題來了解自己屬於什麼樣的海洋人格。這個問卷不僅可以幫助您更深入地認識海洋垃圾問題，還能增加您對海洋保護的興趣和參與度。
                </p>
              </div>
              <div class="card-content col-12 col-md-2">
                  <button>立即前往</button>
              </div>
            </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      cards: Array.from({ length: 16 }, (_, index) => ({
        imgSrc: `https://picsum.photos/280/150/?random=${index + 1}`,
        title: '海洋動物調查',
        description: '保護海洋不僅是一個環保問題，更是一個全球性'
      }))
    }
  }
}
</script>
