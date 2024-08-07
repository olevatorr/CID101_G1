<!-- <script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';
//import axios from 'axios';

//team member animation
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  teamAnimation()
  purposeAnimation()
  donationAnimation()
})

//定義GSAP動畫
const director = ref(null)
const techManager = ref(null)
const marketingManager = ref(null)
const educationManager = ref(null)

const purposeLine1 = ref(null)
const purposeLine2 = ref(null)
const purposeLine3 = ref(null)

const donationCard1 = ref(null)
const donationCard2 = ref(null)
const donationCard3 = ref(null)


function teamAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-team',
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  tl
    .from(director.value, { x: -100, y: 200, opacity: 0, duration: 3 }, 0)
    .from(techManager.value, { x: 200, y: 200, opacity: 0, duration: 3 }, 1)
    .from(marketingManager.value, { x: 100, y: 200, opacity: 0, duration: 3 }, 2)
    .from(educationManager.value, { y: -100, opacity: 0, duration: 3 }, 3)
}

function purposeAnimation() {
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-purpose',
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  t2
    .from(purposeLine1.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 0)
    .from(purposeLine2.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 1)
    .from(purposeLine3.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 2)
}

function donationAnimation() {
  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-donation-intro',
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  t3
    .from(donationCard1.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 0)
    .from(donationCard2.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 1)
    .from(donationCard3.value, { x: 300, y: 200, opacity: 0, duration: 4 }, 2)
}



//驗證碼
const enteredCaptcha = ref('');
const captchaText = ref('');
const captchaCanvas = ref(null);
onMounted(() => {
  drawCaptcha();
});


function drawCaptcha() {
  const canvas = captchaCanvas.value;
  if (!canvas) return; // 如果 canvas 元素尚未存在,直接返回

  const ctx = canvas.getContext('2d');
  captchaText.value = generateCaptchaText();

//清除 canvas 内容
ctx.clearRect(0, 0, canvas.width, canvas.height);

//添加背景噪點
for (let i = 0; i < 100; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(x, y, 1, 1);
}

//對驗證碼文本應用隨機的字體大小、顏色和旋轉角度
const fontSize = 30;
ctx.font = `${fontSize}px serif`;
ctx.fillStyle = getRandomColor();
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate((Math.random() - 0.5) * Math.PI / 12); // 減小旋轉角度
ctx.fillText(captchaText.value, 0, 0);
ctx.rotate(-(Math.random() - 0.5) * Math.PI / 12); // 減小旋轉角度
ctx.translate(-canvas.width / 2, -canvas.height / 2);

//添加干擾線
  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }
}
//重新產生驗證碼
function refreshCaptcha() {
  drawCaptcha();
  enteredCaptcha.value = '';
}
//產生隨機驗證碼五個數字
function generateCaptchaText() {
  const chars = '0123456789';
  let text = '';
  for (let i = 0; i < 5; i++) {
    text += chars[Math.floor(Math.random() * chars.length)];
  }
  return text;
}
//產生隨機顏色
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const isCaptchaValid = computed(() => {
  return enteredCaptcha.value.toLowerCase() === captchaText.value.toLowerCase();
});


//表單
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  captcha: ''
});


//手機驗證
const isPhoneValid = computed(() => {
  const phoneRegex = /^[0][9][0-9]{8}$/
  return phoneRegex.test(formData.phone)
})

//信箱驗證
const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(formData.email)
})

//表單提交
const router = useRouter();
const submitForm = () => {
  if (isFormValid()) {
    Swal.fire({
      title: '表單已提交',
      text: '感謝您的回饋，將跳轉至首頁...',
      icon: 'success',
      timer: 5000, 
      timerProgressBar: true, 
    });
    console.log('表單已提交:', formData);

    setTimeout(()=>{
      router.push('/');
    },5000)
  }
};

const isFormValid = () => {
  let isValid = true;

  if (!formData.name) {
    isValid = false;
    Swal.fire({
      title: '錯誤',
      text: '請輸入姓名',
      icon: 'error',
    });
  }

  if (!isPhoneValid.value) {
    isValid = false;
    Swal.fire({
      title: '錯誤',
      text: '請輸入正確的手機號碼',
      icon: 'error',
    });
  }

  if (!isEmailValid.value) {
    isValid = false;
    Swal.fire({
      title: '錯誤',
      text: '請輸入正確的電子郵件地址',
      icon: 'error',
    });
  }

  if (!formData.message) {
    isValid = false;
    Swal.fire({
      title: '錯誤',
      text: '請輸入訊息內容',
      icon: 'error',
    });
  }

  if (!isCaptchaValid.value) {
    isValid = false;
    Swal.fire({
      title: '錯誤',
      text: '請輸入正確的驗證碼',
      icon: 'error',
    });
  }

  return isValid;
};





</script> -->

<template>

  <!-- 簡介 -->
  <section class="section section-aboutus">
    <div class="video-container">
      <video autoplay muted loop>
        <source src="../../public/vedio/aboutus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container">
      <div class="txt">
        <p>BLUE ALERT</p>
        <span>ABOUT US</span>
        <h3>
          守護藍色星球，<br />
          從我們開始。
        </h3>
        <br />
        <p>
          海洋保護在日常生活中不可或缺。<br />
          我們致力於建立一個全面的海洋垃圾問題資訊平台，<br />
          通過數據、圖像、互動內容和教育資源，提高公眾認識，促進環保意識和行動。<br />
          平台整合各方資訊，成為中心化的正確信息來源，藉此推動政府重視海洋生態保護和垃圾管理政策，<br />
          為解決海洋垃圾問題貢獻一份心力。<br />
          為了實現這一目標，首先我們自己要保持熱情，享受海洋保護的每一刻。<br />
          在一個開放透明的環境中，與所有合作夥伴共同成長。<br />
          這樣，我們能引導環保的潮流，成為引領世界海洋保護的存在。
        </p>
      </div>
    </div>
  </section>
  <!-- 願景 -->
  <section class="section section-purpose">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <h2 class="ori">PURPOSE</h2>
          <p>BLUE ALERT</p>
          <h2>願景</h2>
        </div>
        <div class="col-12 col-lg-9">
          <!-- 第一條 -->
          <div class="row purpose-line" ref="purposeLine1">
            <div class="col-12 col-lg-3 purpose-circle">
              <span class="material-symbols-outlined"> cognition </span>
              <span>01</span>
            </div>
            <div class="col-12 col-lg-9">
              <h3>提高公眾認識</h3>
              <p>
                通過數據、圖像、互動內容和教育資源，提升大眾對海洋垃圾問題的認識，培養環保意識。我們致力於讓每一位訪客都能了解海洋污染的嚴重性及其對生態和人類的影響，激發更多人參與海洋保護行動。
              </p>
            </div>
          </div>
          <!-- 第二條 -->
          <div class="row purpose-line" ref="purposeLine2">
            <div class="col-12 col-lg-3 purpose-circle">
              <span class="material-symbols-outlined"> keyboard_command_key </span>
              <span>02</span>
            </div>
            <div class="col-12 col-lg-9">
              <h3>整合資訊資源</h3>
              <p>
                建立全面的海洋垃圾問題資訊平台，整合來自各方的數據和研究成果，成為中心化的正確信息來源。我們的平台匯集最新的科學研究、政策動態和行動指南，為關注海洋保護的人士提供權威、可靠的參考資料。
              </p>
            </div>
          </div>
          <!-- 第三條 -->
          <div class="row purpose-line" ref="purposeLine3">
            <div class="col-12 col-lg-3 purpose-circle">
              <span class="material-symbols-outlined"> moving </span>
              <span>03</span>
            </div>
            <div class="col-12 col-lg-9">
              <h3>推動政策改變</h3>
              <p>
                藉由提供準確的數據和詳盡的資訊，推動政府和社會各界重視海洋生態保護和垃圾管理政策。我們積極參與並倡導相關政策的制定和實施，為改善海洋環境、減少海洋垃圾問題貢獻一份力量。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 捐款 -->
  <section class="section section-donation-intro">
    <div class="container">
      <h2 class="ori">DONATION</h2>
      <p>BLUEALERT</p>
      <h2>捐款</h2>
      <p class="donation-intro">
        我們的捐款功能旨在集結社會各界的力量，共同守護我們的海洋。透過您的支持，我們能夠持續<br />推動海洋保護的各項工作，並擴大我們的影響力。
      </p>
      <h3>捐款途徑</h3>
      <div class="row">
        <div class="col-12  col-lg-4 group">
          <!-- 第一張卡片 -->
          <div class="donation-card" ref="donationCard1">
            <div class="donation-line">
              <span class="material-symbols-outlined"> event </span>
              <div class="donation-txt">
                <p>淨灘活動</p>
                <p>組織和支援淨灘活動，清理海岸垃圾，保護海洋生態。</p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> source_environment </span>
              <div class="donation-txt">
                <p>教育資源</p>
                <p>開發和分發教育資源，提升公眾對海洋污染的認識和環保意識。</p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> lab_research </span>
              <div class="donation-txt">
                <p>數據與研究</p>
                <p>收集和分析海洋垃圾數據，推動政府和社會重視海洋保護政策。</p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> account_tree </span>
              <div class="donation-txt">
                <p>平台運營</p>
                <p>維護和改進資訊平台，提供最新、準確的海洋垃圾資訊。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12  col-lg-4 group">
          <!-- 第二張卡片 -->
          <div class="donation-card tp" ref="donationCard2">
            <div class="donation-line">
              <span class="material-symbols-outlined"> contactless </span>
              <div class="donation-txt">
                <p>在線捐款</p>
                <p>訪問我們的捐款頁面，選擇金額並通過安全的在線支付系統完成捐款。</p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> subscriptions </span>
              <div class="donation-txt">
                <p>定期捐款</p>
                <p>設定每月固定金額的捐款，持續支持海洋保護。</p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> diversity_1 </span>
              <div class="donation-txt">
                <p>企業合作</p>
                <p>歡迎企業捐款和資源共享，共同推動海洋保護。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12  col-lg-4 group">
          <!-- 第三張卡片 -->
          <div class="donation-card top up" ref="donationCard3">
            <div class="donation-line">
              <span class="material-symbols-outlined"> workspace_premium </span>
              <div class="donation-txt">
                <p>全民監督</p>
                <p>
                  我們承諾捐款的使用透明，定期公佈資金使用報告，確保每一分捐款都用在刀刃上，真正為海洋環境帶來積極的改變。
                </p>
              </div>
            </div>
            <div class="donation-line">
              <span class="material-symbols-outlined"> water_drop </span>
              <div class="donation-txt">
                <p>海洋永續</p>
                <p>
                  與我們一起，守護藍色星球。每一筆捐款都是對海洋保護的重要支持，讓我們攜手共創無污染的美好未來！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button><router-link to="/donate">立即捐款</router-link></button>
    </div>
  </section>
  <!-- 成員介紹 -->
  <section class="section section-team">
    <div class="container">
      <h2 class="ori">TEAM MEMBER</h2>
      <p>BLUEALERT</p>
      <h3>成員介紹</h3>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 team-card" ref="director">
          <img src="../../public/img/aboutus/Eason.png" />
          <h4>Eason</h4>
          <h3>創始人兼首席執行官</h3>
          <p>
            全面領導BLUE ALERT的發展和運營，制定戰略目標，推動海洋保護的創新項目和合作夥伴關係。
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 team-card" ref="techManager">
          <img src="../../public/img/aboutus/Fred.png" />
          <h4>Fred</h4>
          <h3>技術總監</h3>
          <p>
            負責資訊平台的開發與維護，分析海洋垃圾數據，提供技術支持，確保平台運行順暢並保持信息的準確性。
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 team-card" ref="marketingManager">
          <img src="../../public/img/aboutus/Amber.png" />
          <h4>Amber</h4>
          <h3>市場總監</h3>
          <p>
            策劃和執行市場營銷策略，推廣"藍色警戒"的品牌和活動，提升公眾對海洋污染問題的認識，增加平台的影響力。
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 team-card" ref="educationManager">
          <img src="../../public/img/aboutus/Sandy.png" />
          <h4>Sandy</h4>
          <h3>教育與活動經理</h3>
          <p>
            設計和推動教育項目和淨灘活動，開發環保教育資源，提升公眾尤其是年輕一代的環保意識，鼓勵參與海洋保護行動。
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- 聯絡我們 -->
  <section class="section section-contact">
    <div class="container">
      <h2 class="ori">CONTACT US</h2>
      <p>BLUEALERT</p>
      <h3>聯絡我們</h3>
      <div class="contact-content">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="row">
              <div class="col-12 contact-line">
                <div class="contact-card">
                  <span class="material-symbols-outlined"> call </span>
                  <p>(03) - 4251108</p>
                </div>
              </div>
              <div class="col-12 contact-line tp">
                <div class="contact-card">
                  <span class="material-symbols-outlined"> mail </span>
                  <p>support@bluealert.org</p>
                </div>
              </div>
              <div class="col-12 contact-line tp">
                <div class="contact-card">
                  <span class="material-symbols-outlined"> pin_drop </span>
                  <p>
                    緯育TibaMe附設中壢職訓中心<br>
                    320桃園市中壢區復興路46號9樓
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 removep">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2490359444023!2d121.2224477743517!3d24.957640341363952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1716635036111!5m2!1szh-TW!2stw"
                width="100%" height="100%" frameborder="0" style="border: 0" allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <form action="" method="post" class="col-12" @submit.prevent="submitForm">
            <h3>傳送訊息給我們</h3>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-item">
                  <label for="">姓名</label>
                  <input type="text" name="name" required v-model="formData.name" placeholder="請輸入姓名" />

                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-item">
                  <label for="">手機</label>
                  <input type="tel" name="phone" required v-model="formData.phone" placeholder="請輸入手機以09開頭" />
                  <span v-if="!isPhoneValid" class="material-symbols-outlined" style="color:red">
                    error
                  </span>
                  <span v-else class="material-symbols-outlined" style="color:green">
                    check_circle
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-item">
                  <label for="">信箱</label>
                  <input type="email" name="email" required v-model="formData.email" placeholder="請輸入電子信箱包含@" />
                  <span v-if="!isEmailValid" class="material-symbols-outlined" style="color:red">
                    error
                  </span>
                  <span v-else class="material-symbols-outlined" style="color:green">
                    check_circle
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea cols="30" rows="10" placeholder="請輸入訊息..." maxlength="200" v-model="formData.message"
                  required></textarea>
              </div>
            </div>
            <div class="auth-line row">
              <div class="form-auth col-12 col-lg-6">
                <div class="auth-out">
                  <label for="">驗證碼</label>
                  <input type="text" class="auth-input" v-model="enteredCaptcha" placeholder="請輸入驗證碼" />
                  <span v-if="isCaptchaValid" style="color:green;" class="material-symbols-outlined">
                    check_circle
                  </span>
                  <span v-else class="material-symbols-outlined" style="color:red;">
                    error
                  </span>
                </div>
              </div>
              <div id="app" class="col-12 col-lg-6 ">
                <div class="captcha">
                  <canvas ref="captchaCanvas" width="200" height="60"></canvas>
                  <button @click="refreshCaptcha" type="button">更新驗證碼</button>
                </div>
              </div>
            </div>
            <button type="submit">送出</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swal from 'sweetalert2';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      enteredCaptcha: '',
      captchaText: '',
      captchaCanvas: null,
      formData: {
        name: '',
        phone: '',
        email: '',
        message: '',
        captcha: ''
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimations();
      this.drawCaptcha();
    });
  },
  methods: {
    initAnimations() {
      this.teamAnimation();
      this.purposeAnimation();
      this.donationAnimation();
    },
    teamAnimation() {
      const teamCards = gsap.utils.toArray('.team-card');

      teamCards.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
          }
        });
      });
    },
    purposeAnimation() {
      const purposeLines = gsap.utils.toArray('.purpose-line');
      purposeLines.forEach((line, index) => {
        gsap.from(line, {
          x: 300,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
          }
        });
      });
    },
    donationAnimation() {
      const donationCards = gsap.utils.toArray('.donation-card');
      donationCards.forEach((card, index) => {
        gsap.from(card, {
          x: 300,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
          }
        });
      });
    },
    drawCaptcha() {
      const canvas = this.$refs.captchaCanvas;
      if (!canvas) {
        console.error('Captcha canvas not found');
        return;
      }

      const ctx = canvas.getContext('2d');
      this.captchaText = this.generateCaptchaText();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 繪製背景噪點
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = this.getRandomColor();
        ctx.fillRect(x, y, 1, 1);
      }

      // 繪製驗證碼文字
      const fontSize = 30;
      ctx.font = `${fontSize}px serif`;
      ctx.fillStyle = this.getRandomColor();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((Math.random() - 0.5) * Math.PI / 12);
      ctx.fillText(this.captchaText, 0, 0);
      ctx.rotate(-(Math.random() - 0.5) * Math.PI / 12);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      // 繪製干擾線
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.getRandomColor();
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }
    },
    refreshCaptcha() {
      this.drawCaptcha();
      this.enteredCaptcha = '';
    },
    generateCaptchaText() {
      const chars = '0123456789';
      let text = '';
      for (let i = 0; i < 5; i++) {
        text += chars[Math.floor(Math.random() * chars.length)];
      }
      return text;
    },
    getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    },
    // submitForm() {
    //   if (this.isFormValid()) {
    //     Swal.fire({
    //       title: '表單已提交',
    //       text: '感謝您的回饋，將跳轉至首頁...',
    //       icon: 'success',
    //       timer: 3000,
    //       timerProgressBar: true,
    //     });
    //     console.log('表單已提交:', this.formData);

    //     setTimeout(() => {
    //       this.$router.push('/');
    //     }, 5000);
    //   }
    // },

    async submitForm() {
      if (this.isFormValid()) {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/submit_inquiry.php`, this.formData)
          //('http://localhost/cid101/g1/api/submit_inquiry.php', this.formData);
          if (response.data.success) {
            Swal.fire({
              title: '表單已提交',
              text: '感謝您的回饋，將跳轉至首頁...',
              icon: 'success',
              timer: 3000,
              timerProgressBar: true,
            });
            setTimeout(() => {
              this.$router.push('/');
            }, 3000);
          } else {
            Swal.fire({
              title: '錯誤',
              text: response.data.message || '提交失敗，請稍後再試',
              icon: 'error',
            });
          }
        } catch (error) {
          console.error('提交表單時出錯:', error);
          Swal.fire({
            title: '錯誤',
            text: '提交失敗，請稍後再試',
            icon: 'error',
          });
        }
      }
    },
    isFormValid() {
      let isValid = true;

      if (!this.formData.name) {
        isValid = false;
        Swal.fire({
          title: '錯誤',
          text: '請輸入姓名',
          icon: 'error',
        });
      }

      if (!this.isPhoneValid) {
        isValid = false;
        Swal.fire({
          title: '錯誤',
          text: '請輸入正確的手機號碼',
          icon: 'error',
        });
      }

      if (!this.isEmailValid) {
        isValid = false;
        Swal.fire({
          title: '錯誤',
          text: '請輸入正確的電子郵件地址',
          icon: 'error',
        });
      }

      if (!this.formData.message) {
        isValid = false;
        Swal.fire({
          title: '錯誤',
          text: '請輸入訊息內容',
          icon: 'error',
        });
      }

      if (!this.isCaptchaValid) {
        isValid = false;
        Swal.fire({
          title: '錯誤',
          text: '請輸入正確的驗證碼',
          icon: 'error',
        });
      }

      return isValid;
    }
  },
  computed: {
    isCaptchaValid() {
      return this.enteredCaptcha.toLowerCase() === this.captchaText.toLowerCase();
    },
    isPhoneValid() {
      const phoneRegex = /^[0][9][0-9]{8}$/;
      return phoneRegex.test(this.formData.phone);
    },
    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.formData.email);
    }
  }
};
</script>