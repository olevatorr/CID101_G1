<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const props = defineProps({
  isSurveyPopUp: Boolean
});

const router = useRouter();
const startSurvey = ref(false);
const currentQuestion = ref(0);
const selectedAnswer = ref(null);
const totalScore = ref(0);

const questions = [
  {
    question: "下列哪一項是海洋廢棄物的主要來源?",
    options: [
      { text: "A. 海上活動,如漁業和航運", score: 20 },
      { text: "B. 陸地上的生活垃圾", score: 20 },
      { text: "C. 自然災害,如颱風和海嘯", score: 5 },
      { text: "D. 以上皆是", score: 20 }
    ]
  },
  {
    question: "微塑膠對海洋生態的主要影響是什麼?",
    options: [
      { text: "A. 被海洋生物誤食,導致死亡", score: 10 },
      { text: "B. 進入食物鏈,影響生態平衡和人類健康", score: 20 },
      { text: "C. 改變海水的化學組成", score: 5 },
      { text: "D. 沉積在海底,影響海底地形", score: 5 }
    ]
  },
  {
    question: "哪些海洋生物最容易受到塑膠垃圾的影響?",
    options: [
      { text: "A. 海龜", score: 10 },
      { text: "B. 海鳥", score: 10 },
      { text: "C. 鯨魚和海豚", score: 10 },
      { text: "D. 以上皆是", score: 20 }
    ]
  },
  {
    question: "下列哪一項是減少海洋垃圾最有效的方法?",
    options: [
      { text: "A. 在海邊舉辦大型淨灘活動", score: 5 },
      { text: "B. 從源頭減少一次性塑膠製品的使用", score: 20 },
      { text: "C. 加強海上巡邏,監控船隻垃圾棄置", score: 10 },
      { text: "D. 研發海洋垃圾清理設備", score: 5 }
    ]
  },
  {
    question: "個人在日常生活中可以採取哪些措施來減少海洋垃圾?",
    options: [
      { text: "A. 使用環保袋和可重複使用的水瓶", score: 10 },
      { text: "B. 妥善分類和回收垃圾", score: 10 },
      { text: "C. 參與海洋環保教育和宣導活動", score: 10 },
      { text: "D. 以上皆是", score: 20 }
    ]
  }
];

function SurveyPopUp() {
  emit('update:isSurveyPopUp', !props.isSurveyPopUp);
}

function nextQuestion() {
  if (selectedAnswer.value !== null) {
    totalScore.value += selectedAnswer.value;
    selectedAnswer.value = null;
    currentQuestion.value++;
    if (currentQuestion.value === questions.length) {
      setTimeout(() => {
        if (totalScore.value >= 80) {
          router.push('/events');
        } else {
          router.push('/knowledge');
        }
      }, 5000);
    }
  } else {
    Swal.fire({
      title: '請選擇一個答案',
      icon: "warning"
    });
  }
}

const emit = defineEmits(['update:isSurveyPopUp']);
</script>

<template>
  <div class="survey-box" :class="{ show: isSurveyPopUp }">
    <div class="wrapper">
      <template v-if="!startSurvey">
        <h2>是否開始測驗</h2>
        <div class="buttons">
          <button @click="SurveyPopUp">取消測驗</button>
          <button @click="startSurvey = true">開始測驗</button>
        </div>
      </template>
      <template v-else-if="currentQuestion < questions.length">
        <h2>{{ questions[currentQuestion].question }} (單選題)</h2>
        <ul class="survey-form">
          <li v-for="(option, index) in questions[currentQuestion].options" :key="index">
            <input type="radio" :id="'q' + currentQuestion + 'o' + index" :name="'q' + currentQuestion" :value="option.score" v-model="selectedAnswer">
            <label :for="'q' + currentQuestion + 'o' + index">{{ option.text }}</label>
          </li>
        </ul>
        <div class="buttons">
          <button @click="nextQuestion">{{ currentQuestion === questions.length - 1 ? '看結果' : '下一題' }}</button>
        </div>
      </template>
      <template v-else>
        <div class="survey-result">
          <h2>測驗結果</h2>
          <div class="score-area">
            <p>你的分數</p>
            <div class="score"><span>{{ totalScore }}</span>分</div>
          </div>
          <p v-if="totalScore < 80">在準備參加淨灘活動前，讓我們先了解更多海廢知識吧，將在5秒後跳轉至教育中心</p>
          <p v-else>太好了!你對海廢有很深的了解，馬上來去活動報名淨灘吧，將在5秒後跳轉至活動頁面</p>
          <i class="fa-solid fa-spinner"></i>
        </div>
      </template>
    </div>
  </div>
</template>