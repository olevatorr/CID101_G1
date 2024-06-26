<script>
import { computed } from 'vue'

export default {
    data() {
        return {
            showStart: true,
            showRules: false,
            showQuiz: false,
            isLightboxVisible: false,
            contentToConvert: null,
            currentQuestionIndex: 0,
            correctAnswers: 0,
            mbti: null,
            Lightbox: null,

            questions: [
                {
                    question: '01. 網購用的紙箱',
                    image: `${import.meta.env.BASE_URL}img/mbti/1.png`,
                    answer: true
                },
                {
                    question: '02. 玩偶',
                    image: `${import.meta.env.BASE_URL}img/mbti/2.png`,
                    answer: false
                },
                {
                    question: '03. 玻璃瓶',
                    image: `${import.meta.env.BASE_URL}img/mbti/3.png`,
                    answer: true
                },
                {
                    question: '04. 旅行箱',
                    image: `${import.meta.env.BASE_URL}img/mbti/4.png`,
                    answer: false
                },
                {
                    question: '05. 飲料杯',
                    image: `${import.meta.env.BASE_URL}img/mbti/5.png`,
                    answer: true
                },
                {
                    question: '06. 牛奶盒',
                    image: `${import.meta.env.BASE_URL}img/mbti/6.png`,
                    answer: false
                },
                {
                    question: '07. 花盆',
                    image: `${import.meta.env.BASE_URL}img/mbti/7.png`,
                    answer: true
                },
                {
                    question: '08. 電池',
                    image: `${import.meta.env.BASE_URL}img/mbti/8.png`,
                    answer: true
                },
                {
                    question: '09. 牙刷',
                    image: `${import.meta.env.BASE_URL}img/mbti/9.png`,
                    answer: false
                },
                {
                    question: '10. 夾腳拖',
                    image: `${import.meta.env.BASE_URL}img/mbti/10.png`,
                    answer: true
                }
            ],

            mbtiResults: [
                {
                    name: '鯨魚型',
                    description: '非常聰明！可以信賴！<br />是個絕佳的好夥伴！',
                    image: `${import.meta.env.BASE_URL}img/mbti/bigfish.png`
                },
                {
                    name: '海龜型',
                    description: '溫和有耐心，但有時候太過被動。<br />需要多一些積極性。',
                    image: `${import.meta.env.BASE_URL}img/mbti/turtle.png`
                },
                {
                    name: '企鵝型',
                    description: '活潑開朗，很受歡迎！<br />但是有時候做事太衝動了。',
                    image: `${import.meta.env.BASE_URL}img/mbti/pingu.png`
                }
            ],

            mbtiLightbox: [
                {
                    name: '鯨魚型',
                    description: '鯨魚型的人通常被視為非常聰明且值得信賴的夥伴。他們擁有豐富的知識和洞察力,能夠以寬廣的視野看待問題,提出獨到的見解和解決方案。他們善於傾聽和理解他人的觀點,同時也懂得適時分享自己的想法和建議。<br/>鯨魚型的人通常表現得沈穩內斂,但絕非冷漠與疏離。相反,他們對周遭的人和事物保持高度的興趣和關注。他們樂於與他人分享自己的經驗和知識,並從中獲得滿足感。無論是在工作還是生活中,鯨魚型的人都是絕佳的夥伴,值得您的信賴和尊重。',
                    image: `${import.meta.env.BASE_URL}img/mbti/bigfish.png`
                },
                {
                    name: '海龜型',
                    description: '海龜型的人給人一種溫和、有耐心的印象。他們往往不喜歡張揚,而是安份守己,循序漸進地完成自己的目標。他們謹慎行事,做事往往三思而後行,這種穩重的作風往往能夠幫助他們避免許多不必要的麻煩和風險。<br/>然而,有時候海龜型的人過於被動和保守,缺乏一些進取心和魄力。他們需要學會在適當的時候拋開猶豫,大膽地嘗試新事物,勇於面對挑戰。只有這樣,他們才能發掘出自身潛能,不斷成長和蛻變。總的來說,海龜型的人是可靠的夥伴,但也需要適當地突破自我,培養積極進取的精神。',
                    image: `${import.meta.env.BASE_URL}img/mbti/turtle.png`
                },
                {
                    name: '企鵝型',
                    description: '企鵝型的人通常活潑開朗、熱情友善,處處散發著陽光般的正能量。他們擅長掌握群眾的興趣,善於扮演話題中心的角色,自然而然就能成為眾人的焦點。他們往往極具親和力,很受周圍人的歡迎和喜愛。<br/>不過,企鵝型的人有時候做事過於衝動、魯莽,缺乏必要的深思熟慮。他們常常被當下的感受所主導,難以對自己的言行作出客觀的評估和權衡。這種性格特質雖然讓他們顯得活潑可愛,但也可能給自己或他人帶來一些棘手的麻煩。因此,企鵝型的人有必要學會遵循規矩、三思而後行,以免因魯莽行事而喪失了原有的人緣和魅力。',
                    image: `${import.meta.env.BASE_URL}img/mbti/pingu.png`
                }
            ],
        }
    },

    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex]
        }
    },

    methods: {
        startGame() {
            this.showStart = false
            this.showRules = true
        },

        startQuiz() {
            this.showRules = false
            this.showQuiz = true
            this.currentQuestionIndex = 0
        },

        submitAnswer(answer) {
            if (answer === this.currentQuestion.answer) {
                this.correctAnswers++
            }

            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.showQuiz = false
                this.determineMbti()
            } else {
                this.currentQuestionIndex++
            }
        },

        determineMbti() {
            if (this.correctAnswers >= 8) {
                this.mbti = this.mbtiResults[0]
                this.Lightbox = this.mbtiLightbox[0]
            } else if (this.correctAnswers >= 5) {
                this.mbti = this.mbtiResults[1]
                this.Lightbox = this.mbtiLightbox[1]
            } else {
                this.mbti = this.mbtiResults[2]
                this.Lightbox = this.mbtiLightbox[2]
            }
        },

        restartGame() {
            this.showStart = true
            this.showRules = false
            this.showQuiz = false
            this.currentQuestionIndex = 0
            this.correctAnswers = 0
        },

        printContent() {
            if (this.Lightbox) {
                const printWindow = window.open('', '_blank');
                const content = `
        <html>
          <head>
            <title>${this.Lightbox.name} 分析</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                padding: 20px;
              }
              h1 {
                color: #2c3e50;
              }
              img {
                max-width: 100%;
                height: auto;
              }
            </style>
          </head>
          <body>
            <h1>${this.Lightbox.name}</h1>
            <div>${this.Lightbox.description}</div>
            <img src="${this.Lightbox.image}" alt="${this.Lightbox.name}">
          </body>
        </html>
      `;

                printWindow.document.write(content);
                printWindow.document.close();

                printWindow.onload = function () {
                    printWindow.print();
                    printWindow.onafterprint = function () {
                        printWindow.close();
                    };
                };
            }
        },

        showLightbox() {
            this.isLightboxVisible = true
        },

        closeLightbox() {
            this.isLightboxVisible = false
            this.Lightbox = null
        }
    },

    watch: {
        mbti: {
            handler() {
                this.determineMbti()
            },
            deep: true
        }
    },

    unmounted() {
        this.isLightboxVisible = false
        this.Lightbox = null
    }
}
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
                <p @click="showLightbox">
                    點按可下載看多分析內容
                    <span class="material-symbols-outlined">
                        web_traffic
                    </span>
                </p>
                <button class="restart" @click="restartGame">重新開始</button>
                <RouterLink to="/">回首頁</RouterLink>
            </div>
        </div>
    </section>

    <!-- Lightbox -->
    <div v-if="isLightboxVisible" class="lightbox" ref="contentToConvert">
        <div class="lightbox-txt">
            <i class="fa-regular fa-circle-xmark close" @click="closeLightbox"></i>
            <h3>{{ Lightbox.name }}</h3>
            <p v-html="Lightbox.description"></p>
            <img :src="Lightbox.image" alt="" />
        </div>
        <button @click="printContent">下載</button>
    </div>

</template>
