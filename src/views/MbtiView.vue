<template>
  <!-- 進入遊戲 -->
  <section class="section section-mbti">
    <div class="container">
      <span>知識挑戰</span>
      <div class="content" v-if="!showQuiz">
        <h3>海廢小知識</h3>
        <h3>Q & A</h3>
        <button @click="showQuiz = true">進入遊戲</button>
      </div>
    </div>
  </section>
  <!-- 遊戲開始 -->
  <section class="section section-mbti-rule">
    <div class="container">
      <span>遊戲規則</span>
      <div class="content">
        <h3>
          總共有十個問題<br />
          每個問題都與海廢有關<br />
          答案分為『可回收』&『不可回收<br />
          全部題目都做完後<br />
          即可獲得MBTI解析喔~
        </h3>
        <button>遊戲開始</button>
      </div>
    </div>
  </section>
  <!-- 遊戲內容 -->
  <section class="section section-mbti-game">
    <div class="container">
      <div class="content">
        <h3>01.網購用的紙箱</h3>
        <div class="game">
          <div class="choose">
            <h6>可回收</h6>
          </div>
          <img src="../../public/img/mbti/carton.png" alt="" />
          <div class="choose">
            <h6>不可回收</h6>
          </div>
        </div>
        <button>下一題</button>
      </div>
    </div>
  </section>

  <!-- 遊戲結果 -->
  <section class="section section-mbti-result">
    <div class="container">
      <div class="content">
        <h3>恭喜你答對9題！你的海廢知識非常好！</h3>
        <div class="mbti">
          <img src="../../public/img/mbti/bigfish.png" alt="" />
          <div class="txt">
            <h4>人格特質 :鯨魚型 </h4>
            <h5>
                非常聰明 ! 可以信賴 !<br />是個絕佳的好夥伴！
            </h5>
          </div>
        </div>
        <p>( 長按圖片即可儲存為照片 )</p>
        <button class="restart">重新開始</button>
        <button>回首頁</button>
      </div>
    </div>
  </section>
</template>

<script>
// export default {
//     data() {
//         return {
//             showQuiz: false
//         }
//     }
// }
// const app = Vue.createApp({
//             data() {
//                 return {
//                     result: '9',
//                     mbti:'鯨魚型',
//                     content: '非常聰明 ! 可以信賴 !<br />是個絕佳的好夥伴！',
//                     }
//                 }
//             }).mount('#app')
</script>
