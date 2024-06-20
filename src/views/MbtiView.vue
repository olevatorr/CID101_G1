<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const showStart = ref(true)
const showRules = ref(false)
const showQuiz = ref(false)

const questions = [
    {
        question: '01. 網購用的紙箱',
        image: '/img/mbti/1.png',
        answer: true
    },
    {
        question: '02. 玩偶',
        image: '/img/mbti/2.png',
        answer: false
    },
    {
        question: '03. 玻璃瓶',
        image: '/img/mbti/3.png',
        answer: true
    },
    {
        question: '04. 旅行箱',
        image: '/img/mbti/4.png',
        answer: false
    },
    {
        question: '05. 飲料杯',
        image: '/img/mbti/5.png',
        answer: true
    },
    {
        question: '06. 牛奶盒',
        image: '/img/mbti/6.png',
        answer: false
    },
    {
        question: '07. 花盆',
        image: '/img/mbti/7.png',
        answer: true
    },
    {
        question: '08. 電池',
        image: '/img/mbti/8.png',
        answer: true
    },
    {
        question: '09. 牙刷',
        image: '/img/mbti/9.png',
        answer: false
    },
    {
        question: '10. 夾腳拖',
        image: '/img/mbti/10.png',
        answer: true
    }
]

const mbtiResults = [
    {
        name: '鯨魚型',
        description: '非常聰明！可以信賴！<br />是個絕佳的好夥伴！',
        image: '/img/mbti/bigfish.png'
    },
    {
        name: '海龜型',
        description: '溫和有耐心，但有時候太過被動。<br />需要多一些積極性。',
        image: '/img/mbti/turtle.png'
    },
    {
        name: '企鵝型',
        description: '活潑開朗，很受歡迎！<br />但是有時候做事太衝動了。',
        image: '/img/mbti/pingu.png'
    }
]

const currentQuestionIndex = ref(0)
const correctAnswers = ref(0)
const mbti = ref(mbtiResults[0])

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const startGame = () => {
    showStart.value = false
    showRules.value = true
}

const startQuiz = () => {
    showRules.value = false
    showQuiz.value = true
    currentQuestionIndex.value = 0
}

const submitAnswer = (answer) => {
    if (answer === currentQuestion.value.answer) {
        correctAnswers.value++
    }

    if (currentQuestionIndex.value === questions.length - 1) {
        showQuiz.value = false
        determineMbti()
    } else {
        currentQuestionIndex.value++
    }
}

const determineMbti = () => {
    if (correctAnswers.value >= 8) {
        mbti.value = mbtiResults[0]
    } else if (correctAnswers.value >= 5) {
        mbti.value = mbtiResults[1]
    } else {
        mbti.value = mbtiResults[2]
    }
}

const restartGame = () => {
    showStart.value = true
    showRules.value = false
    showQuiz.value = false
    currentQuestionIndex.value = 0
    correctAnswers.value = 0
}




//網頁<p>
// const isMobile = ref(window.innerWidth <= 768)

// const checkMobile = () => {
//     isMobile.value = window.innerWidth <= 768
// }

// onMounted(()=>{
//     window.addEventListener('resize', checkMobile)
// })

// onUnmounted(()=>{
//     window.removeEventListener('resize', checkMobile)
// })




</script>



<template>
    <!-- 進入遊戲 -->
    <section class="section section-mbti" v-if="showStart">
        <div class="container">
            <span>知識挑戰</span>
            <div class="content" v-if="!showQuiz">
                <h3>海廢小知識</h3>
                <h3>Q & A</h3>
                <button @click="startGame">進入遊戲</button>
            </div>
        </div>
    </section>

    <!-- 遊戲規則 -->
    <section class="section section-mbti-rule" v-else-if="showRules">
        <div class="container">
            <span>遊戲規則</span>
            <div class="content">
                <h3>
                    總共有十個問題<br />
                    每個問題都與海廢有關<br />
                    答案分為『可回收』&『不可回收』<br />
                    全部題目都做完後<br />
                    即可獲得MBTI解析喔~
                </h3>
                <button @click="startQuiz">遊戲開始</button>
            </div>
        </div>
    </section>

    <!-- 遊戲內容 -->
    <section class="section section-mbti-game" v-else-if="showQuiz">
        <div class="container">
            <div class="content">
                <h3>{{ currentQuestion.question }}</h3>
                <div class="game">
                    <div class="choose">
                        <button @click="submitAnswer(true)" class="choosebtn">可回收</button>
                    </div>
                    <img :src="currentQuestion.image" alt="" />
                    <div class="choose">
                        <button @click="submitAnswer(false)" class="choosebtn">不可回收</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 遊戲結果 -->
    <section class="section section-mbti-result" v-else>
        <div class="container">
            <div class="content">
                <h3>恭喜你答對 {{ correctAnswers }} 題！你的海廢知識 {{ correctAnswers >= 8 ? '非常好' : '還可以' }}！</h3>
                <div class="mbti">
                    <img :src="mbti.image" alt="" />
                    <div class="txt">
                        <h4>人格特質 :{{ mbti.name }} </h4>
                        <h5 v-html="mbti.description"></h5>
                    </div>
                </div>
                <p>( 點按下載看多人格分析內容 )</p>
                <button class="restart" @click="restartGame">重新開始</button>
                <RouterLink to="/">回首頁</RouterLink>
            </div>
        </div>
    </section>
</template>
