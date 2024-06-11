<template>
    <main>
        <section class="section section-beachgame">
            <div class="left-game">
                <RouterLink to="/">
                    <i class="fa-solid fa-house"></i>
                </RouterLink>
            </div>
            <div class="show-window-outside">
                <!-- 進入畫面中間提示 -->
                <div class="beachgame-text" :class="{ '-viewClose': beachgameText }">
                    <span class="beachgame-title">
                        淨灘大作戰
                    </span>
                    <h2 class="beachgame-subtitle">一起來淨灘</h2>
                    <button @click="showRules">進入遊戲</button>
                </div>
                <!-- 規則彈窗 -->
                <div class="rules-lightbox" :class="{ '-viewShow': rulesLightbox, '-viewClose': rulesLightboxcc }">
                    <div class="rules-content">
                        <h3 class="rules-title">淨灘須知</h3>
                        <ol>
                            <li>請選擇角色進入遊戲</li>
                            <li>點選垃圾</li>
                            <li>選擇淨灘工具</li>
                            <li>若為大型垃圾請選擇手套</li>
                            <li>不然容易受傷，視為挑戰失敗</li>
                            <li>需重新挑戰</li>
                            <li>完成遊戲會出現淨灘成功</li>
                        </ol>
                        <button @click="enterGame">開始遊戲</button>
                    </div>
                </div>
                <!-- 角色選擇彈窗 -->
                <div class="character-lightbox"
                    :class="{ '-viewShow': characterLightbox, '-viewClose': characterSelect }">
                    <h2 class="ori">請點選角色</h2>
                    <div class="row character-list">
                        <div class="col-4">
                            <div class="character-item" @click="choseBird">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/sea-bird.png" alt="海鷗鷗">
                                </div>
                                <div class="character-name">
                                    <h3>海鷗鷗</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item" @click="choseTurtle">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/sea-turtle.png" alt="龜吉">
                                </div>
                                <div class="character-name">
                                    <h3>龜吉</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item" @click="choseShark">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/shark.png" alt="胖鯊">
                                </div>
                                <div class="character-name">
                                    <h3>胖莎</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 角色確定 -->
                <div class="col character-check-lightbox"
                    :class="{ '-viewShow': characterCheck, '-viewClose': characterOk }">
                    <h2 class="ori">淨灘去</h2>
                    <div class="character-oneset">
                        <div v-if="showBirdimage" class="character-oneset-pic">
                            <img src="../../public/img/beachgame/sea-bird.png" alt="海鷗鷗">
                        </div>
                        <div v-if="showTurtleimage" class="character-oneset-pic">
                            <img src="../../public/img/beachgame/sea-turtle.png" alt="龜吉">
                        </div>
                        <div v-if="showShark" class="character-oneset-pic">
                            <img src="../../public/img/beachgame/shark.png" alt="胖鯊">
                        </div>
                        <div v-if="showBirdimage" class="character-name">
                            <h3>海鷗鷗</h3>
                        </div>
                        <div v-if="showTurtleimage" class="character-name">
                            <h3>龜吉</h3>
                        </div>
                        <div v-if="showShark" class="character-name">
                            <h3>胖鯊</h3>
                        </div>
                    </div>
                    <button @click="finishCharacter">START</button>
                </div>
                <!-- 選擇工具 -->
                <!-- 垃圾點選後的彈窗 -->
                <div v-if="selectedTrash" class="trash-lightbox">
                    <h2 class="trash-title">{{ selectedTrash.name }}</h2>
                    <div class="trash-pic">
                        <img :src="selectedTrash.image" :alt="selectedTrash.name">
                    </div>
                    <div class="trash-text">
                        <p>{{ selectedTrash.description }}</p>
                    </div>
                    <button @click="showSlidePage">選擇淨灘工具</button>
                </div>
                <!-- 滑入頁面 -->
                <!-- v-if是否顯示，條件為 true 或 false 時才渲染 -->
                <!-- <transition> 组件可實現滑入動畫 -->
                <transition name="slide-up">
                    <div v-if="slidePage" class="slide-tool-page">
                        <h3>挑選工具</h3>
                        <div class="row tool-list">
                            <div class="col-4" v-for="tool in tools" :key="tool.name">
                                <div class="tool-item">
                                    <div class="tool-pic">
                                        <img :src="tool.image" alt="tool.name">
                                    </div>
                                    <div class="tool-name">
                                        <h3>{{ tool.name }}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                <!-- 撿取成功 -->
                <!-- <div class="col success-lightbox">
                    <h2 class="ori">撿取垃圾成功</h2>
                    <div class="success-content">
                        <div class="success-pic">
                            <img src="../../public/img/beachgame/shark.png" alt="胖鯊">
                        </div>
                        <div class="success-text">
                            <p class="b">吃很多的鯊魚小姐</p>
                            <p>終於可以在乾淨的海水裡生活了， 每次從海邊漂來奇怪的東西，都很容易受傷。</p>
                        </div>
                    </div>
                    <button>繼續淨灘</button>
                </div> -->
                <!-- 撿取失敗 -->
                <!-- <div class="col fail-lightbox">
                    <h2 class="ori">撿取垃圾失敗</h2>
                    <div class="fail-content">
                        <div class="fail-pic">
                            <img src="../../public/img/beachgame/fail.jpg" alt="失敗">
                        </div>
                        <div class="fail-text">
                            <p>淨灘也存在危險性，記得選擇適合的工具
                                保護自己也保護海洋喔!
                                大型垃圾帶手套，安全又衛生
                                小型垃圾用鐵夾，快速又便利
                            </p>
                        </div>
                    </div>
                    <button>重新挑戰</button>
                </div> -->
                <!-- 淨灘成功 -->
                <!-- <div class="col finish-lightbox">
                    <h2 class="ori">淨灘成功</h2>
                    <div class="finish-content">
                        <div class="finish-pic">
                            <img src="../../public/img/beachgame/win.png" alt="">
                        </div>
                        <div class="finish-text">
                            <p>今天救了海洋，學到關於海廢垃圾的知識
                                日常也要注意垃圾分類和丟棄，為海洋生物
                                保留更美好的棲息地。
                            </p>
                        </div>
                    </div>
                    <div class="beachgame-button-wrap">
                        <button>
                            <RouterLink to="/Beachgame">重新挑戰</RouterLink>
                        </button>
                        <RouterLink to="/Mbti">
                            <button>
                                海廢小知識
                            </button>
                        </RouterLink>
                        <button>
                            <RouterLink to="/">回首頁</RouterLink>
                        </button>
                    </div>
                </div> -->
            </div>
            <!-- 隨機垃圾分佈 -->
            <!-- selectedTrash為null時，顯示視窗，被設置時隱藏視窗 -->
            <!-- v-for綁唯一值，有刪除絕對不能用會影響索引值 -->
            <div v-if="!selectedTrash" class="trash-container" :class="{ '-viewShow': showTrashContainer }">
                <div class="trash-pic" v-for="(image, index) in trashImage" :key="index"
                    @click="handleTrashClick(index)">
                    <img :src="image" alt="">
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {

    data() {
        return {
            beachgameText: false,
            rulesLightbox: false,
            rulesLightboxcc: false,
            characterLightbox: false,
            // 定義選哪一張圖，出現什麼值
            characterChoosed: null,
            // 選取後整張大圖消失
            characterSelect: false,
            showBirdimage: false,
            showTurtleimage: false,
            showShark: false,
            // 出現選擇相應的角色頁面
            characterCheck: false,
            // 選好的角色圖要消失
            characterOk: false,
            // 控制垃圾圖片顯示
            showTrashContainer: false,
            trashImage: [
                "../../public/img/beachgame/trash01.png",
                "../../public/img/beachgame/trash02.png",
                "../../public/img/beachgame/trash03.png",
                "../../public/img/beachgame/trash04.png",
                "../../public/img/beachgame/trash05.png"
            ],

            // 垃圾點選後出現的視窗
            // trashLightbox: false,
            selectedTrash: null,
            choseTrash: [
                {
                    id: 1,
                    name: '橡膠拖鞋',
                    image: '../../public/img/beachgame/trash01.png',
                    description: '不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,它們可能被沖入水流、排水系統,最終流入河川或海洋。',
                },
                {
                    id: 2,
                    name: '輪胎',
                    image: '../../public/img/beachgame/trash02.png',
                    description: '廢棄輪胎會釋放有害化學物質，對海洋生物構成威脅，並且難以分解，移除廢棄輪胎，有助於保護海洋生態。',
                },
                {
                    id: 3,
                    name: '吸管',
                    image: '../../public/img/beachgame/trash03.png',
                    description: '塑膠吸管是海洋垃圾的常見組成部分，會對海洋生物造成窒息危險,撿起塑膠吸管，減少海洋污染。',
                },
                {
                    id: 4,
                    name: '塑膠袋',
                    image: '../../public/img/beachgame/trash04.png',
                    description: '塑膠袋被視為海洋中最危險的污染物之一,它們會被海洋生物誤食,造成消化道阻塞和飢餓，塑膠袋雖然看起來很小,但對海洋生物的危害卻很大,一定要小心清理。',
                },
                {
                    id: 5,
                    name: '漁網',
                    image: '../../public/img/beachgame/trash05.png',
                    description: '遺棄的漁網會繼續捕獲海洋生物，並且對海底環境造成破壞，清理遺棄漁網，有助於保護海洋生物。',
                }
            ],
            // 顯示工具選擇頁面
            slidePage: false,
            tools: [
                {
                    name: '鐵夾子',
                    image: '../../public/img/beachgame/clamp.jpg',
                },
                {
                    name: '手套',
                    image: '../../public/img/beachgame/gloves.jpg',
                },
                {
                    name: '防曬帽',
                    image: '../../public/img/beachgame/hat.jpg'
                }
            ],
            // successLightbox: false,
            // failLightbox: false,
            // finishLightbox: false,
        }
    },
    // 隨機垃圾渲染
    mounted() {
    },
    methods: {
        showRules() {
            this.beachgameText = true;
            this.rulesLightbox = true;
        },
        enterGame() {
            this.rulesLightboxcc = true;
            this.characterLightbox = true;
        },
        choseBird() {
            this.characterChoosed = 1;
            if (this.characterChoosed == 1) {
                this.characterSelect = true;
                this.showBirdimage = true;
                this.characterCheck = true;
            }

        },
        choseTurtle() {
            // console.log(34);
            this.characterChoosed = 2;
            if (this.characterChoosed == 2) {
                this.characterSelect = true;
                this.showTurtleimage = true;
                this.characterCheck = true;
            }

        },
        choseShark() {
            this.characterChoosed = 3;
            if (this.characterChoosed == 3) {
                this.characterSelect = true;
                this.showShark = true;
                this.characterCheck = true;
            }
        },
        finishCharacter() {
            this.characterOk = true;
            this.shuffleImages();//隨機排列圖片
            this.showTrashContainer = true; // 顯示垃圾圖片容器

        },
        shuffleImages() {
            this.trashImage = this.trashImage.sort(() => Math.random() - 0.5);
        },

        // 點選垃圾圖片
        handleTrashClick(index) {
            this.selectedTrash = this.choseTrash[index];
        },
        showSlidePage() {
            console.log(124);
            this.slidePage = true;
        }

    },
}

</script>

<!--<script>

export default {
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    const openModal = document.getElementById('open-modal');
    const nextStep = document.getElementById('next-step');

    openModal.addEventListener('click', () => {
      this.showModal = true;
    });

    nextStep.addEventListener('click', () => {
      // 在這裡添加進入下一步驟的邏輯
    });
  },
  methods: {
    nextStep() {
      // 在這裡添加進入下一步驟的邏輯
    }
  }
}
</script>-->

<!--<script>
document.addEventListener('wheel', function (event) {
    // 阻止預設行為
    event.preventDefault();

    // 獲取 wheelDeltaY 值
    var deltaY = event.wheelDeltaY || -event.deltaY;

    // 在控制台輸出 wheelDeltaY 值
    console.log('wheelDeltaY:', deltaY);

    // 其他自定義處理邏輯
}, { passive: false });
</script> -->


<!--
<template>
    <main>
        <section class="section section-beachgame">
            <RouterLink to="/">
                <div class="left-game">
                    <i class="fa-solid fa-house"></i>
                </div>
            </RouterLink>

            <div class="container beachgame-text">
                <span class="beachgame-title">淨灘大作戰</span>
                <h2 class="beachgame-subtitle">一起來淨灘</h2>
                <button @click="showRules = true">進入遊戲</button>
            </div>
        </section>

        <section class="section section-beachgame-rules" v-if="gameState === 'rules'">
            <div class="rules-lightbox">
                <div class="rules-content">
                    <h3 class="rules-title">淨灘須知</h3>
                    <ol>
                        <li>請選擇角色進入遊戲</li>
                        <li>點選垃圾</li>
                        <li>選擇淨灘工具</li>
                        <li>若為大型垃圾請選擇手套</li>
                        <li>不然容易受傷,視為挑戰失敗</li>
                        <li>需重新挑戰</li>
                        <li>完成遊戲會出現淨灘成功</li>
                    </ol>
                    <button>開始遊戲</button>
                </div>
            </div>
        </section>
        <section v-if="gameState === 'rules'" class="section section-beachgame-rules">
            <div class="rules-lightbox">
                <div class="rules-content">
                    <h3 class="rules-title">淨灘須知</h3>
                    <ol>
                        <li>請選擇角色進入遊戲</li>
                        <li>點選垃圾</li>
                        <li>選擇淨灘工具</li>
                        <li>若為大型垃圾請選擇手套</li>
                        <li>不然容易受傷，視為挑戰失敗</li>
                        <li>需重新挑戰</li>
                        <li>完成遊戲會出現淨灘成功</li>
                    </ol>
                    <button @click="startGame">開始遊戲</button>
                </div>
            </div>
        </section>

        <section v-else-if="gameState === 'selectCharacter'" class="section section-beachgame-character">
            <div class="character-lightbox">
                <h2 class="ori">選擇角色</h2>
                <div class="row character-list">
                    <div class="col-4" v-for="character in characters" :key="character.id">
                        <div class="character-item" @click="selectCharacter(character)">
                            <div class="character-pic">
                                <img :src="character.image" :alt="character.name">
                            </div>
                            <div class="character-name">
                                <h3>{{ character.name }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-else-if="gameState === 'confirmCharacter'" class="section section-beachgame-character-select">
            <div class="col character-lightbox">
                <h2 class="ori">淨灘去</h2>
                <div class="character-oneset">
                    <div class="character-oneset-pic">
                        <img :src="selectedCharacter.image" :alt="selectedCharacter.name">
                    </div>
                    <div class="character-name">
                        <h3>{{ selectedCharacter.name }}</h3>
                    </div>
                </div>
                <button @click="startCleaning">START</button>
            </div>
        </section>

        <section v-else-if="gameState === 'selectTool'" class="section section-select-tool">
            <div class="trash-lightbox">
                <h2 class="trash-title">{{ currentTrash.name }}</h2>
                <div class="trash-pic">
                    <img :src="currentTrash.image" :alt="currentTrash.name">
                </div>
                <div class="trash-text">
                    <p>{{ currentTrash.description }}</p>
                </div>
                <button @click="showToolSelection = true">選擇淨灘工具</button>
            </div>
            <div v-if="showToolSelection" class="slide-page">
                <h3>挑選工具</h3>
                <div class="row tool-list">
                    <div class="col-4" v-for="tool in tools" :key="tool.id">
                        <div class="tool-item" @click="selectTool(tool)">
                            <div class="tool-pic">
                                <img :src="tool.image" :alt="tool.name">
                            </div>
                            <div class="tool-name">
                                <h3>{{ tool.name }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-else-if="gameState === 'success'" class="section section-beachgame-success">
            <div class="col success-lightbox">
                <h2 class="ori">撿取垃圾成功</h2>
                <div class="success-content">
                    <div class="success-pic">
                        <img :src="selectedCharacter.image" :alt="selectedCharacter.name">
                    </div>
                    <div class="success-text">
                        <p class="b">{{ selectedCharacter.successMessage }}</p>
                        <p>{{ currentTrash.successMessage }}</p>
                    </div>
                </div>
                <button @click="nextTrash">繼續淨灘</button>
            </div>
        </section>

        <section v-else-if="gameState === 'fail'" class="section section-beachgame-fail">
            <div class="col fail-lightbox">
                <h2 class="ori">撿取垃圾失敗</h2>
                <div class="fail-content">
                    <div class="fail-pic">
                        <img src="../../public/img/beachgame/fail.jpg" alt="失败">
                    </div>
                    <div class="fail-text">
                        <p>{{ currentTrash.failMessage }}</p>
                    </div>
                </div>
                <button @click="resetLevel">重新挑戰</button>
            </div>
        </section>

        <section v-else-if="gameState === 'finish'" class="section section-beachgame-finish">
            <div class="col finish-lightbox">
                <h2 class="ori">淨灘成功</h2>
                <div class="finish-content">
                    <div class="finish-pic">
                        <img src="../../public/img/beachgame/win.png" alt="胜利">
                    </div>
                    <div class="finish-text">
                        <p>今天救了海洋，學到關於海廢垃圾的知識日常也要注意垃圾分類和丟棄，為海洋生物保留更美好的棲息地。</p>
                    </div>
                </div>
                <div class="beachgame-button-wrap">
                    <button @click="restartGame">重新挑戰</button>
                    <button>海廢小知識</button>
                    <button>回首頁</button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            gameState: 'rules', // 初始状态为显示规则
            showToolSelection: false, // 是否显示工具选择
            selectedCharacter: null, // 选择的角色
            currentTrash: null, // 当前需要清理的垃圾
            currentTool: null, // 选择的工具
            characters: [
                { id: 1, name: '海鷗鷗', image: '../../public/img/beachgame/sea-bird.png', successMessage: '終於可以在乾淨的海灘上覓食了' },
                { id: 2, name: '龜吉', image: '../../public/img/beachgame/sea-turtle.png', successMessage: '海洋變乾淨了,我可以安心產卵了' },
                { id: 3, name: '胖莎', image: '../../public/img/beachgame/shark.png', successMessage: '吃很多的鯊魚小姐,終於可以在乾淨的海水裡生活了' }
            ],
            trashes: [
                {
                    id: 1,
                    name: '橡膠拖鞋',
                    image: '../../public/img/beachgame/slippers.png',
                    description: '不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,它們可能被沖入水流、排水系統,最終流入河川或海洋。',
                    successMessage: '每次從海邊漂來奇怪的東西,都很容易受傷。',
                    failMessage: '淨灘也存在危險性,記得選擇適合的工具保護自己也保護海洋喔!大型垃圾帶手套,安全又衛生小型垃圾用鐵夾,快速又便利',
                    correctTool: 'clamp'
                },
                {
                    id: 2,
                    name: '塑膠袋',
                    image: '../../public/img/beachgame/plastic-bag.png',
                    description: '塑膠袋被視為海洋中最危險的污染物之一,它們會被海洋生物誤食,造成消化道阻塞和飢餓。',
                    successMessage: '海洋變乾淨了,我們可以自由游泳,不用擔心被塑膠袋纏住。',
                    failMessage: '塑膠袋雖然看起來很小,但對海洋生物的危害卻很大,一定要小心清理。',
                    correctTool: 'clamp'
                },
            ],
            tools: [
                {
                    id: 1,
                    name: '鐵夾子',
                    image: '../../public/img/beachgame/clamp.jpg'
                },
                {
                    id: 2,
                    name: '手套',
                    image: '../../public/img/beachgame/gloves.jpg'
                },
                {
                    id: 3,
                    name: '防曬帽',
                    image: '../../public/img/beachgame/hat.jpg'
                }
            ]
        }
    },
    methods: {
        startGame() {
            this.gameState = 'selectCharacter'
        },
        selectCharacter(character) {
            this.selectedCharacter = character
            this.gameState = 'confirmCharacter'
        },
        startCleaning() {
            this.currentTrash = this.trashes[0] // 设置第一个垃圾
            this.gameState = 'selectTool'
        },
        selectTool(tool) {
            this.currentTool = tool
            if (tool.name === this.currentTrash.correctTool) {
                this.gameState = 'success'
            } else {
                this.gameState = 'fail'
            }
        },
        nextTrash() {
            const currentTrashIndex = this.trashes.findIndex(trash => trash.id === this.currentTrash.id)
            if (currentTrashIndex === this.trashes.length - 1) {
                this.gameState = 'finish' // 如果是最后一个垃圾,游戏结束
            } else {
                this.currentTrash = this.trashes[currentTrashIndex + 1] // 设置下一个垃圾
                this.gameState = 'selectTool'
            }
        },
        resetLevel() {
            this.currentTool = null
            this.gameState = 'selectTool'
        },
        restartGame() {
            this.selectedCharacter = null
            this.currentTrash = null
            this.currentTool = null
            this.gameState = 'rules'
        }
    }
}
</script>
-->