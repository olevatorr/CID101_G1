<template>
    <section class="section section-donation">
      <div class="container donation-list">
        <h3>DISTRIBUTION OF DONATION<br />捐款用途</h3>
        <div class="row donation-item">
          <div class="donation-box col-lg-3 col-sm-12" ref="txt1" v-for="(item, index) in donationItems" :key="index">
            <div :class="item.iconClass">
              <i :class="item.icon"></i>
            </div>
            <h3 class="donation-subtitle">{{ item.title }}</h3>
            <p class="donation-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  export default {
    name: 'DonationSection',
    setup() {
      const donationItems = ref([
        {
          iconClass: 'universal-access',
          icon: 'fa-solid fa-universal-access',
          title: '行政及人事開支',
          description: '您的捐款將用於支付工作人員的薪資福利、辦公場地租賃、設備採購和維護等行政開支,確保組織能夠高效、持續地開展海洋保護工作。'
        },
        {
          iconClass: 'person-chalkboard',
          icon: 'fa-solid fa-person-chalkboard',
          title: '教育宣導活動',
          description: '我們將利用您的捐款開展一系列教育宣導活動,包括在校園舉辦海洋環保講座、組織學生參與互動體驗、製作和發放宣傳材料等。通過生動有趣的方式,我們希望讓更多人,尤其是青少年,瞭解海洋面臨的挑戰,并自覺踐行環保理念。'
        },
        {
          iconClass: 'recycle',
          icon: 'fa-solid fa-recycle',
          title: '淨灘活動',
          description: '您的捐款將用於組織和支持各地的淨灘行動,包括采購清潔工具、提供志願者宣傳招募等。我們還將與其他環保組織、社區團體、企業等開展合作,擴大淨灘活動的規模和影響力。'
        },
        {
          iconClass: 'school',
          icon: 'fa-solid fa-school',
          title: '海洋生態保育專案',
          description: 'BLUE ALERT將與專業的海洋保育團體合作，利用您的捐款開展針對性的保育專案，如珊瑚礁復育、濕地保護、海洋生物多樣性監測等。這些專案將由具有豐富經驗和專業知識的團隊負責實施，確保取得實質性的保育成果。'
        },
        {
          iconClass: 'flask-vial',
          icon: 'fa-solid fa-flask-vial',
          title: '相關研究計畫',
          description: 'BLUE ALERT將設立專項基金,資助高校、研究所等學術單位開展海洋環境相關的研究工作,如海洋污染治理技術、生態修復方法、可持續漁業模式等。這些研究成果將為我們的環保實踐提供科學指導,並為海洋可持續發展貢獻智慧。'
        },
        {
          iconClass: 'display',
          icon: 'fa-solid fa-display',
          title: '網站維護',
          description: '您的捐款將用於網站的日常維護、內容更新、功能優化等,確保平台穩定運行,為公眾提供及時、豐富、互動的海洋環保資源。我們也將不斷探索網站的創新應用,如開發線上學習課程、建設海洋資料庫等,为海洋保護事業賦能。'
        },
      ]);
  
      onMounted(() => {
        gsap.from('.donation-box', {
          opacity: 0,
          y: 50,
          stagger: 0.2,
        });
      });
  
      return {
        donationItems,
      };
    },
  };
  </script>