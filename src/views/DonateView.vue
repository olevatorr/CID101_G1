<template>
  <main>
    <section class="section section-index-banner">
      <div class="container">
        <div class="img">
          <img src="../../public/img/LOGO-white.png" alt="">
        </div>
        <h1>潔淨海洋 綠色明天</h1>
        <h2>Clean Ocean, Green tomorrow</h2>
      </div>
      <div class="smoke-left">
        <img src="../../public/img/index/smoke-left.png" alt="">
      </div>
      <div class="smoke-right">
        <img src="../../public/img/index/smoke-right.png" alt="">
      </div>
      <div class="trash-left">
        <img src="../../public/img/index/trash-left.png" alt="">
      </div>
      <div class="trash-right">
        <img src="../../public/img/index/trash-right.png" alt="">
      </div>
    </section>
    <section class="section section-intro">
      <div class="container">
        <h3>用數據和行動,<br>創造海洋的微笑</h3>
        <p>
          海洋是人類賴以生存的寶貴資源。<br>
          我們希望通過全面的海洋垃圾數據整合與分析,以及積極的教育宣導和環境行動, <br>
          讓世界各地的人們都能展現笑顔,享受健康且永續的海洋環境。<br>
          <br>
          要達成這個目標,首先我們自己要充滿熱情,樂在海洋保護的工作中。<br>
          在一個開放透明的氛圍裡,與所有志同道合的夥伴攜手並進,共同茁壯。<br>
          如此一來,我們將能引導改變的風潮,成為世界海洋環保的領航者。
        </p>
      </div>
    </section>
    <section class="section section-debris">
      <div class="container">
        <h3>
          OVERVIEW OF MARINE DEBRIS<br>
          海洋垃圾一覽
        </h3>
        <div class="row">
          <div class="col-12 col-lg-6">
            <ul class="debris-sort">
              <li v-for="sort in hebrisSort" :key="sort.id">
                <span class="material-symbols-outlined">line_end</span> {{ sort.area }}
              </li>
            </ul>
            <div ref="mapContainer" class="map-container"></div>
          </div>
          <div class="debris-data col-12 col-lg-6">
            <div class="clean-tons">
              <span class="debris-word">已清理</span>
              <span class="debris-num">9,090</span>
              <span class="debris-word">噸海廢</span>
            </div>
            <div class="clean-attend">
              <span class="debris-word">參與人數</span>
              <span class="debris-num">20,751</span>
              <span class="debris-word">人次</span>
            </div>
            <div class="clean-session">
              <span class="debris-word">總共</span>
              <span class="debris-num">5,121</span>
              <span class="debris-word">場次</span>
            </div>
            <p>*皆為本年度資訊，與海洋委員會海洋保育署資料同步</p>
          </div>
        </div>
      </div>
    </section>
      <div class="container">
        <h3>
          COMPARATION<br>
          對比照
        </h3>
      </div>
      <div class="control"></div>
      <div class="dirty">
        <img src="../../public/img/index/compare-dirty.png" alt="垃圾海洋">
      </div>
      <div class="clean">
        <img src="../../public/img/index/compare-clean.png" alt="乾淨海洋">
      </div>
  </main>
</template>


<script>

</script>