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
                <div class="beachgame-text">
                    <span class="beachgame-title">
                        淨灘大作戰
                    </span>
                    <h2 class="beachgame-subtitle">一起來淨灘</h2>
                    <button>進入遊戲</button>
                </div>
                <!-- 規則彈窗 -->
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
                        <button>開始遊戲</button>
                    </div>
                </div>
                <!-- 角色選擇彈窗 -->
                <div class="character-lightbox">
                    <h2 class="ori">選擇角色</h2>
                    <div class="row character-list">
                        <div class="col-4">
                            <div class="character-item">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/sea-bird.png" alt="">
                                </div>
                                <div class="character-name">
                                    <h3>海鷗鷗</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/sea-turtle.png" alt="">
                                </div>
                                <div class="character-name">
                                    <h3>龜吉</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item">
                                <div class="character-pic">
                                    <img src="../../public/img/beachgame/shark.png" alt="">
                                </div>
                                <div class="character-name">
                                    <h3>胖莎</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>確定角色</button>
                </div>
                <!-- 角色確定 -->
                <div class="col character-check-lightbox">
                    <h2 class="ori">淨灘去</h2>
                    <div class="character-oneset">
                        <div class="character-oneset-pic">
                            <img src="../../public/img/beachgame/shark.jpg" alt="">
                        </div>
                        <div class="character-name">
                            <h3>胖莎</h3>
                        </div>
                    </div>
                    <button>START</button>
                </div>
                <!-- 選擇工具 -->
                <div class="trash-lightbox">
                    <h2 class="trash-title">橡膠拖鞋</h2>
                    <div class="trash-pic">
                        <img src="../../public/img/beachgame/slippers.png" alt="">
                    </div>
                    <div class="trash-text">
                        <p>不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,
                            它們可能被沖入水流、排水系統,最終流入河川或海洋。</p>
                    </div>
                    <button>選擇淨灘工具</button>
                </div>
                <div class="slide-page">
                    <h3>挑選工具</h3>
                    <div class="row tool-list">
                        <div class="col-4">
                            <div class="tool-item">
                                <div class="tool-pic">
                                    <img src="../../public/img/beachgame/clamp.jpg" alt="">
                                </div>
                                <div class="tool-name">
                                    <h3>鐵夾子</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="tool-item">
                                <div class="tool-pic">
                                    <img src="../../public/img/beachgame/gloves.jpg" alt="">
                                </div>
                                <div class="tool-name">
                                    <h3>手套</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="tool-item">
                                <div class="tool-pic">
                                    <img src="../../public/img/beachgame/hat.jpg" alt="">
                                </div>
                                <div class="tool-name">
                                    <h3>防曬帽</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>確定工具</button>
                </div>
                <!-- 撿取成功 -->
                <div class="col success-lightbox">
                    <h2 class="ori">撿取垃圾成功</h2>
                    <div class="success-content">
                        <div class="success-pic">
                            <img src="../../public/img/beachgame/shark.jpg" alt="">
                        </div>
                        <div class="success-text">
                            <p class="b">吃很多的鯊魚小姐</p>
                            <p>終於可以在乾淨的海水裡生活了， 每次從海邊
                                漂來奇怪的東西，都很容易受傷。
                            </p>
                        </div>
                    </div>
                    <button>繼續淨灘</button>
                </div>
                <!-- 撿取失敗 -->
                <div class="col fail-lightbox">
                    <h2 class="ori">撿取垃圾失敗</h2>
                    <div class="fail-content">
                        <div class="fail-pic">
                            <img src="../../public/img/beachgame/fail.jpg" alt="">
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
                </div>
                <!-- 淨灘成功 -->
                <div class="col finish-lightbox">
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
                        <button>
                            <RouterLink to="/MbtiView">海廢小知識</RouterLink>
                        </button>
                        <button>
                            <RouterLink to="/">回首頁</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>



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