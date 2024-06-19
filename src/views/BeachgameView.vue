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
                                    <img src="/img/beachgame/sea-bird.png" alt="海鷗鷗">
                                </div>
                                <div class="character-name">
                                    <h3>海鷗鷗</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item" @click="choseTurtle">
                                <div class="character-pic">
                                    <img src="/img/beachgame/sea-turtle.png" alt="龜吉">
                                </div>
                                <div class="character-name">
                                    <h3>龜吉</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="character-item" @click="choseShark">
                                <div class="character-pic">
                                    <img src="/img/beachgame/shark.png" alt="胖鯊">
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
                            <img src="/img/beachgame/sea-bird.png" alt="海鷗鷗">
                        </div>
                        <div v-if="showTurtleimage" class="character-oneset-pic">
                            <img src="/img/beachgame/sea-turtle.png" alt="龜吉">
                        </div>
                        <div v-if="showShark" class="character-oneset-pic">
                            <img src="/img/beachgame/shark.png" alt="胖鯊">
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
                <div v-if="selectedTrash" class="trash-lightbox" :class="{ '-viewClose': trashLightbox }">
                    <h2 class="trash-title ">{{ selectedTrash.name }}</h2>
                    <div class="trash-pic">
                        <img :src="selectedTrash.image" :alt="selectedTrash.name">
                    </div>
                    <!-- 成立後display:none -->
                    <div class="trash-text" :class="{ '-viewClose': slidePage }">
                        <p>{{ selectedTrash.description }}</p>
                    </div>
                    <button @click="showSlidePage" :class="{ '-viewClose': slidePage }">選擇淨灘工具</button>
                    <!-- 滑入頁面 -->
                    <!-- v-if是否顯示，條件為 true 或 false 時才渲染 -->
                    <!-- <transition> 组件可實現滑入動畫 -->
                    <div class="slidepage-up" :class="{ '-viewClose': slidePage }">
                        <transition name="slide-up">
                            <div v-if="slidePage" class="slide-tool-page">
                                <h3>挑選工具</h3>
                                <div class="row tool-list">
                                    <div class="col-4">
                                        <div class="tool-item">
                                            <div class="tool-pic" @click="choseClamp">
                                                <img src="/img/beachgame/clamp.jpg" alt="">
                                            </div>
                                            <div class="tool-name">
                                                <h3>鐵夾子</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="tool-item">
                                            <div class="tool-pic" @click="choseGloves">
                                                <img src="/img/beachgame/gloves.jpg" alt="">
                                            </div>
                                            <div class="tool-name">
                                                <h3>手套</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="tool-item">
                                            <div class="tool-pic" @click="choseHat">
                                                <img src="/img/beachgame/hat.jpg" alt="">
                                            </div>
                                            <div class="tool-name">
                                                <h3>防曬帽</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>

                <!-- 撿取成功 -->
                <!-- <div class="col success-lightbox">
                    <h2 class="ori">撿取垃圾成功</h2>
                    <div class="success-content">
                        <div class="success-pic">
                            <img src="/img/beachgame/shark.png" alt="胖鯊">
                        </div>
                        <div class="success-text">
                            <p class="b">吃很多的鯊魚小姐</p>
                            <p>終於可以在乾淨的海水裡生活了， 每次從海邊漂來奇怪的東西，都很容易受傷。</p>
                        </div>
                    </div>
                    <button>繼續淨灘</button>
                </div> -->
                <!-- 撿取失敗 -->
                <div class="col fail-lightbox" :class="{ '-viewShow': failLightbox, '-viewClose': returnPageSet }">
                    <h2 class="ori">撿取垃圾失敗</h2>
                    <div class="fail-content">
                        <div class="fail-pic">
                            <img src="/img/beachgame/fail.jpg" alt="失敗">
                        </div>
                        <div class="fail-text">
                            <p>淨灘也存在危險性，記得選擇適合的工具
                                保護自己也保護海洋喔!
                                大型垃圾帶手套，安全又衛生
                                小型垃圾用鐵夾，快速又便利
                            </p>
                        </div>
                    </div>
                    <button @click="returnPage" :class="{ '-viewClose': returnPageSet }">重新挑戰</button>
                </div>
                <!-- 淨灘成功 -->
                <div class="col finish-lightbox" :class="{ '-viewShow': successLightbox }">
                    <h2 class="ori">淨灘成功</h2>
                    <div class="finish-content">
                        <div class="finish-pic">
                            <img src="/img/beachgame/win.png" alt="">
                        </div>
                        <div class="finish-text">
                            <p>今天救了海洋，學到關於海廢垃圾的知識
                                日常也要注意垃圾分類和丟棄，為海洋生物
                                保留更美好的棲息地。
                            </p>
                        </div>
                    </div>
                    <div class="beachgame-button-wrap">
                        <button @click="gameHome">重新挑戰</button>
                        <RouterLink to="/Mbti">
                            <button>
                                海廢小知識
                            </button>
                        </RouterLink>
                        <RouterLink to="/">
                            <button>
                                回首頁
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- 隨機垃圾分佈 -->
            <!-- selectedTrash為null時，顯示視窗，被設置時隱藏視窗 -->
            <!-- v-for綁唯一值，有刪除絕對不能用會影響索引值 -->
            <div class="trash-container" :class="{ '-viewShow': showTrashContainer }">
                <div v-show="!hideItem.includes(item.id)" class="trash-pic" v-for="item in trashItem" :key="item.id"
                    :style="{ 'position': 'absolute', left: `${item.x}%`, top: `${item.y}%`, width: '150px', }"
                    @click=" handleTrashClick(item.id)">
                    <img :src="item.url" alt="">
                </div>
            </div>
        </section>
    </main>
</template>

<script>

const pos = [{
    x: 100,
    y: 100,
}, {
    x: 100,
    y: 50,
}, {
    x: 50,
    y: 75,
}, {
    x: 20,
    y: 80,
}, {
    x: 50,
    y: 69,
}, {
    x: 20,
    y: 100,
}
]

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
                "/img/beachgame/trash01.png",
                "/img/beachgame/trash02.png",
                "/img/beachgame/trash03.png",
                "/img/beachgame/trash04.png",
                "/img/beachgame/trash05.png"
            ],
            trashItem: Array.from({ length: 5 }, (_, i) => {
                const x = pos[i].x
                const y = pos[i].y
                return {
                    id: i + 1,
                    x,
                    y,
                    url: `/img/beachgame/trash0${i + 1}.png`
                }
            }),

            // 垃圾點選後出現的視窗
            trashLightbox: false,
            selectedTrash: null,
            choseTrash: [
                {
                    id: 1,
                    name: '橡膠拖鞋',
                    image: '/img/beachgame/trash01.png',
                    description: '不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,它們可能被沖入水流、排水系統,最終流入河川或海洋。',
                },
                {
                    id: 2,
                    name: '輪胎',
                    image: '/img/beachgame/trash02.png',
                    description: '廢棄輪胎會釋放有害化學物質，對海洋生物構成威脅，並且難以分解，移除廢棄輪胎，有助於保護海洋生態。',
                },
                {
                    id: 3,
                    name: '吸管',
                    image: '/img/beachgame/trash03.png',
                    description: '塑膠吸管是海洋垃圾的常見組成部分，會對海洋生物造成窒息危險,撿起塑膠吸管，減少海洋污染。',
                },
                {
                    id: 4,
                    name: '塑膠袋',
                    image: '/img/beachgame/trash04.png',
                    description: '塑膠袋被視為海洋中最危險的污染物之一,它們會被海洋生物誤食,造成消化道阻塞和飢餓，塑膠袋雖然看起來很小,但對海洋生物的危害卻很大,一定要小心清理。',
                },
                {
                    id: 5,
                    name: '漁網',
                    image: '/img/beachgame/trash05.png',
                    description: '遺棄的漁網會繼續捕獲海洋生物，並且對海底環境造成破壞，清理遺棄漁網，有助於保護海洋生物。',
                }
            ],
            // 顯示工具選擇頁面
            // 滑入工具
            slidePage: false,
            // 選擇工具
            selectedTool: null,
            //得到選取垃圾的id
            getTrashId: null,

            successLightbox: false,
            failLightbox: false,
            finishLightbox: false,
            returnPageSet: false,
            hideItem: []
        }
    },
    // 手機轉向掛載時就檢查
    // mounted() {
    //     // 頁面加載後立即檢查螢幕方向
    //     this.checkOrientation();
    //     //監聽視窗改變即會跳出提醒
    //     window.addEventListener('resize', this.checkOrientation);

    // },
    methods: {
        // 螢幕手機限制橫向
        // checkOrientation() {
        //     if (window.matchMedia("(orientation: portrait)").matches) {
        //         alert("請將螢幕轉向橫向以顯示內容！");
        //     }
        // },
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
        handleTrashClick(id) {
            this.selectedTrash = this.choseTrash.find(v => v.id === id)
            //顯示沒有變成false
            this.showTrashContainer = false;
            // 取出陣列裡的垃圾id值，要用在對應工具上
            this.getTrashId = id

            this.hideItem.push(id)
        },
        // 滑入工具列可選取
        showSlidePage() {
            this.slidePage = true;
            // this.selectedTrash = ;
        },
        // 選擇鐵夾子
        choseClamp() {
            this.selectedTool = 1;
            this.trashLightbox = true;
            this.returnPageSet = false;
            console.log('getTrashId:', this.getTrashId);
            if (this.getTrashId == 1 || this.getTrashId == 3 || this.getTrashId == 4) {
                this.successLightbox = true; // 顯示挑戰成功
                // console.log('Success lightbox should be shown'); // 檢查是否進入成功的條件
            } else if (this.getTrashId == 2 || this.getTrashId == 5) {
                this.failLightbox = true; // 顯示挑戰失敗彈窗
                // console.log('Fail lightbox should be shown'); // 檢查是否進入失敗的條件
            }
            if (this.hideItem.length >= 5) {
                alert('')
            }
        },
        choseGloves() {
            this.selectedTool = 2;
            this.trashLightbox = true;
            this.returnPageSet = false;
            console.log('getTrashId:', this.getTrashId);
            if (this.getTrashId == 2 || this.getTrashId == 5) {
                this.successLightbox = true; // 顯示挑戰成功
                // console.log('Success lightbox should be shown'); // 檢查是否進入成功的條件
            } else if (this.getTrashId == 1 || this.getTrashId == 3 || this.getTrashId == 4) {
                this.failLightbox = true; // 顯示挑戰失敗彈窗
                // console.log('Fail lightbox should be shown'); // 檢查是否進入失敗的條件
            }
        },
        choseHat() {
            this.selectedTool = 3;
            this.trashLightbox = true;
            // console.log('getTrashId:', this.getTrashId);
            this.failLightbox = true; // 顯示挑戰失敗彈窗
            this.returnPageSet = false;
        },
        // 重新挑戰刷新頁面
        gameHome() {
            location.reload();
        },
        returnPage() {
            this.returnPageSet = true;
            this.slidePage = false;
            this.characterChoosed = null;
            this.selectedTrash = null;
            this.failLightbox = false;
            this.getTrashId = null;
            this.trashLightbox = false;
            this.showTrashContainer = true;
        }
    },
    // beforeUnmount() {
    //     // console.log(4444);
    //     window.removeEventListener('resize', this.checkOrientation);
    // }
}
</script>