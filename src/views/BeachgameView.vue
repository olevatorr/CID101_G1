<template>
    <main class="checkDirection">
        <!-- 如果是直向，顯示全屏覆蓋層提示 -->
        <div v-if="isPortrait" class="overlay">
            <p>請將螢幕轉向橫向以顯示內容！</p>
        </div>
        <!-- 否則顯示整個頁面內容 -->
        <div v-else>
            <section class="section section-beachgame">
                <!-- 重新遊戲圖示 -->
                <div class="resetGame" v-show="showResetGame">
                    <i class="fa-solid fa-rotate-right" @click="gameHome"></i>
                </div>
                <!-- 顯示角色頭貼 -->
                <!-- 當 showImgPosition 為true時(初始為false)，加上class 'slide-in' -->
                <div v-if="showImgPosition" class="show-img-position">
                    <div class="showCharacterImg">
                        <div v-show="showBirdimage" class="character-oneset-pic">
                            <img src="/img/beachgame/birdImg.png" alt="海鷗鷗">
                        </div>
                        <div v-show="showTurtleimage" class="character-oneset-pic">
                            <img src="/img/beachgame/turtleImg.png" alt="龜吉">
                        </div>
                        <div v-show="showShark" class="character-oneset-pic">
                            <img src="/img/beachgame/sharkImg.png" alt="胖鯊">
                        </div>
                    </div>
                </div>
                <div class="left-game">
                    <RouterLink to="/">
                        <i class="fa-solid fa-house"></i>
                    </RouterLink>
                </div>
                <div class="show-window-outside">
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
                    <div class="col character-check-lightbox" v-show="characterCheck">
                        <h2 class="ori">淨灘去</h2>
                        <div class="character-oneset">
                            <div v-show="showBirdimage" class="character-oneset-pic">
                                <img src="/img/beachgame/sea-bird.png" alt="海鷗鷗">
                            </div>
                            <div v-show="showTurtleimage" class="character-oneset-pic">
                                <img src="/img/beachgame/sea-turtle.png" alt="龜吉">
                            </div>
                            <div v-show="showShark" class="character-oneset-pic">
                                <img src="/img/beachgame/shark.png" alt="胖鯊">
                            </div>
                            <div v-show="showBirdimage" class="character-name">
                                <h3>海鷗鷗</h3>
                            </div>
                            <div v-show="showTurtleimage" class="character-name">
                                <h3>龜吉</h3>
                            </div>
                            <div v-show="showShark" class="character-name">
                                <h3>胖鯊</h3>
                            </div>
                        </div>
                        <button @click="finishCharacter">START</button>
                    </div>
                    <!-- 選擇工具 -->
                    <!-- 垃圾點選後的彈窗 -->
                    <div v-show="selectedTrash" class="trash-lightbox">
                        <h2 class="trash-title ori ">{{ selectedTrash?.name }}</h2>
                        <!-- 點擊後隱藏，加上class -->
                        <div class="trash-pic">
                            <img :src="selectedTrash?.image" :alt="selectedTrash?.name">
                        </div>
                        <!-- 成立後display:none -->
                        <!-- 點擊後隱藏，加上class -->
                        <div class="trash-text" :class="{ '-viewClose': slidePage }">
                            <p>{{ selectedTrash?.description }}</p>
                        </div>
                        <!-- 點擊後隱藏，加上class -->
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
                                            <div class="tool-item" @click="selectTool(1)">
                                                <button class="btn-tool-pic"
                                                    :class="{ '-selected': selectedTool == 1 }">
                                                    <img src="/img/beachgame/clamp.jpg" alt="">
                                                </button>
                                                <div class="tool-name">
                                                    <h3>鐵夾子</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="tool-item" @click="selectTool(2)">
                                                <button class="btn-tool-pic"
                                                    :class="{ '-selected': selectedTool == 2 }">
                                                    <img src="/img/beachgame/gloves.jpg" alt="">
                                                </button>
                                                <div class="tool-name">
                                                    <h3>手套</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="tool-item " @click="selectTool(3)">
                                                <button class="btn-tool-pic"
                                                    :class="{ '-selected': selectedTool == 3 }">
                                                    <img src="/img/beachgame/hat.jpg" alt="">
                                                </button>
                                                <div class="tool-name">
                                                    <h3>防曬帽</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 點選關閉選取工具列表，出現選取結果 -->
                                    <button class="btn-checkTool" @click="showToolResult">確定工具</button>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <!-- 撿取成功 -->
                    <div class="col success-lightbox" :class="{ '-viewShow': successLightbox }">
                        <h2 class="ori">撿取垃圾成功</h2>
                        <div class="success-content">
                            <div class="success-pic">
                                <img src="/img/beachgame/shark.png" alt="胖鯊">
                            </div>
                            <div class="success-text">
                                <p class="b">吃很多的鯊魚小姐</p>
                                <p>終於可以在乾淨的海水裡生活了，每次從海邊漂來奇怪的東西，都很容易受傷。</p>
                            </div>
                        </div>
                        <button @click="continueGame">繼續淨灘</button>
                    </div>
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
                    <div class="col finish-lightbox" :class="{ '-viewShow': finishLightbox }">
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
                                <button class="center-button">
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
                <!-- 確定角色選取後，加上class，會出現散佈的垃圾 -->
                <!-- 當showTrashContainer 為true值時就把這個class加上去，-viewShow是設定出現 -->
                <div class="trash-container" :class="{ '-viewShow': showTrashContainer }">
                    <!-- 使用v-for去跑迴圈將 trashItem陣列中的項目都顯示出來 -->
                    <!-- 調整元素動態位置時，常用style去設定 -->
                    <!-- 不跑元素id時就隱藏 -->
                    <!-- 若是不包含物件id就隱藏 -->
                    <div v-show="!hideItem.includes(item.id)" class="trash-pic" v-for="item in trashItem" :key="item.id"
                        :style="{
                            'position': 'absolute', left: `${item.x}%`, top: `${item.y}%`,
                            width: '15vw', 'max-width': '150px',
                            'min-width': '50px'
                        }" @click=" handleTrashClick(item.id)">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </section>
        </div>
        <!-- 出現角色的圖片固定的圖像位置 -->
    </main>
</template>

<script>
// 設全域目前也只有一個要套用
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
export default {
    data() {
        return {
            showResetGame: false,  // 出現重來遊戲
            showImgPosition: false,//角色頭貼滑入畫面
            isPortrait: true, // 初始化為 true，預設顯示警告
            beachgameText: false,
            rulesLightbox: false,
            rulesLightboxcc: false,
            characterLightbox: false,//角色選項的彈窗顯示
            characterChoosed: null, // 定義選哪一張圖，出現什麼值
            characterSelect: false, // 選取後整張大圖消失，選取角色視窗
            showBirdimage: false, // 出現選擇鳥的角色頁面
            showTurtleimage: false, // 出現選擇烏龜角色頁面
            showShark: false, // 出現選擇鯊魚角色頁面
            //出現選選擇角色大頭貼
            characterCheck: false,
            slidingIn: false,//滑入角色標示
            showTrashContainer: false,// 控制垃圾圖片顯示
            // 點選垃圾後出現的彈窗後，滑入工具隱藏button 和文字敘述
            showTrashText: true, // 初始化為true，顯示敘述文字
            showToolButton: true,   // 初始化為 true，默認顯示選擇淨灘工具按鈕
            // 用在生成 trashItem 陣列的url(垃圾圖片路徑)
            trashImage: [
                `${import.meta.env.BASE_URL}img/beachgame/trash01.png`,
                `${import.meta.env.BASE_URL}img/beachgame/trash02.png`,
                `${import.meta.env.BASE_URL}img/beachgame/trash03.png`,
                `${import.meta.env.BASE_URL}img/beachgame/trash04.png`,
                `${import.meta.env.BASE_URL}img/beachgame/trash05.png`
            ],
            // trashItem的生成，使用 Array from() 方法，創建一個陣列
            // 長度後面的回調函數，接受當前元素的值及索引
            // 但目前以索引做運作，可忽略第一個參數，給一個下底線
            // 這個 trashItem 是個陣列，有5個值
            //使用 return 關鍵字返回這個物件，使其成為新陣列中的一個元素。
            trashItem: (() => {
                // 全域的寫法
                // container範圍，所以起始點不在(0,0)，左上角
                const pos = shuffle([
                    { x: 20, y: 30 },
                    { x: 5, y: 80 },
                    { x: 70, y: 10 },
                    { x: 80, y: 80 },
                    { x: 40, y: 69 },
                ])
                return Array.from({ length: 5 }, (_, i) => {
                    //為了方便定義位置，使用pos陣列，去控制索引的 x 及 y 值
                    //我們要從 pos 陣列中獲取對應索引的 x 和 y 座標值
                    const x = pos[i].x
                    const y = pos[i].y
                    // 用id值去控制陣列中的物件，而 id 等於索引+1
                    return {
                        id: i + 1,
                        x,
                        y,
                        url: `${import.meta.env.BASE_URL}img/beachgame/trash0${i + 1}.png`
                    }
                })
            })(),

            // 垃圾點選後出現的視窗
            trashLightbox: false,
            selectedTrash: null,
            choseTrash: [
                {
                    id: 1,
                    name: '橡膠拖鞋',
                    image: `${import.meta.env.BASE_URL}img/beachgame/trash01.png`,
                    description: '不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,它們可能被沖入水流、排水系統,最終流入河川或海洋。',
                },
                {
                    id: 2,
                    name: '輪胎',
                    image: `${import.meta.env.BASE_URL}img/beachgame/trash02.png`,
                    description: '廢棄輪胎會釋放有害化學物質，對海洋生物構成威脅，並且難以分解，移除廢棄輪胎，有助於保護海洋生態。',
                },
                {
                    id: 3,
                    name: '吸管',
                    image: `${import.meta.env.BASE_URL}img/beachgame/trash03.png`,
                    description: '塑膠吸管是海洋垃圾的常見組成部分，會對海洋生物造成窒息危險,撿起塑膠吸管，減少海洋污染。',
                },
                {
                    id: 4,
                    name: '塑膠袋',
                    image: `${import.meta.env.BASE_URL}img/beachgame/trash04.png`,
                    description: '塑膠袋被視為海洋中最危險的污染物之一,它們會被海洋生物誤食,造成消化道阻塞和飢餓，塑膠袋雖然看起來很小,但對海洋生物的危害卻很大,一定要小心清理。',
                },
                {
                    id: 5,
                    name: '漁網',
                    image: `${import.meta.env.BASE_URL}img/beachgame/trash05.png`,
                    description: '遺棄的漁網會繼續捕獲海洋生物，並且對海底環境造成破壞，清理遺棄漁網，有助於保護海洋生物。',
                }
            ],
            // 顯示工具選擇頁面
            // 滑入工具
            slidePage: false,
            //得到選取垃圾的id
            getTrashId: null,
            // 選擇工具
            selectedTool: 0, // 初始值為 0，表示未選擇任何工具
            //點工具加上背景色
            // 成功撿取出現彈窗
            successLightbox: false,
            //失敗彈窗
            failLightbox: false,
            // 失敗挑戰後再挑戰
            returnPageSet: false,
            //成功挑戰出現彈窗
            finishLightbox: false,
            // 點選垃圾後將id推入此陣列儲存，代表原本顯示陣列的會消失
            hideItem: []
        }
    },
    methods: {
        // 螢幕手機限制橫向
        checkOrientation() {
            // window.matchMedia 是一個內建的 API
            if (window.matchMedia("(orientation: portrait)").matches) {
                // 如果是豎向，顯示警告
                alert("請將螢幕轉向橫向以顯示內容！");
                this.isPortrait = true; // 設置為 true，以便顯示警告
            } else {
                this.isPortrait = false; // 如果橫向，則隱藏警告
            }
        },
        showRules() {
            this.beachgameText = true;
            this.rulesLightbox = true;
            this.showResetGame = true;
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
            this.characterCheck = false;
            this.showTrashContainer = true; // 顯示垃圾圖片容器
            this.showImgPosition = true;//顯示選擇角色頭貼
        },

        // 點選垃圾圖片
        // 在choseTrash陣列中找到 id 與參數 id 相符的垃圾項目，並將其賦值給 selectedTrash
        // 用find()陣列方法，在 choseTrash 陣列中找到第一個符合條件的元素
        // v 是回呼函式中的參數，代表陣列中的每個元素
        handleTrashClick(id) {
            this.selectedTrash = this.choseTrash.find(v => v.id === id)
            //沒有顯示是false，就隱藏垃圾容器
            this.showTrashContainer = false;
            // 取出陣列裡的垃圾id值，要用在對應工具上
            // 將參數 id 賦值給 getTrashId，用於記錄當前選中的垃圾項目的 id
            this.getTrashId = id;
            // 將參數 id 推入 hideItem 陣列，用於記錄隱藏的垃圾項目
            this.hideItem.push(id);
        },
        // 滑入工具列可選取
        showSlidePage() {
            // 用@click 加上class，要隱藏還是出現
            this.slidePage = true;
            // 點選垃圾後隱藏button 和敘述文字
        },
        // 點選工具圖片時，調用selectTool(tool)函式
        selectTool(tool) {
            // 選擇工具
            // 如果選擇的是已經選中的工具，則取消選擇
            if (this.selectedTool === tool) {
                this.selectedTool = 0;
            } else {
                // 點擊另一項工具，就帶入新選取的那一項
                this.selectedTool = tool;
            }
        },
        // 點選選擇工具按鈕時，把選到的垃圾和工具做一個對應的判斷
        showToolResult() {
            // 確保點選確認工具按鈕時，是至少有選一項工具
            // selectedTool點選圖片 item 時觸發放入選工具的值
            if (this.selectedTool == 0) {
                // 如果未選擇工具，顯示彈窗提醒用戶選擇工具
                alert('請先選擇一個工具');
                return;
            }
            // 關掉垃圾的視窗
            this.trashLightbox = false;
            this.slidePage = false;  // 假設 slidePage 控制工具選擇頁面的顯示

            // 對應選取垃圾和選取工具的對錯
            switch (this.selectedTool) {
                case 1:
                    if (this.getTrashId == 1 || this.getTrashId == 3 || this.getTrashId == 4) {
                        this.successLightbox = true;
                    } else {
                        this.failLightbox = true;
                        //失敗頁面出現即出現計算垃圾個數
                        this.hideItem = [];
                    }
                    // 所有數值都reset
                    this.returnPageSet = false;
                    break;
                case 2:
                    this.successLightbox = true;
                    // 所有數值都reset
                    this.returnPageSet = false;
                    break;
                case 3:
                    this.failLightbox = true; // 防曬帽沒有成功的條件
                    //失敗頁面出現即出現計算垃圾個數
                    this.hideItem = [];
                    // 所有數值都reset
                    this.returnPageSet = false;
                    break;
                default:
                    // 如果未選擇工具，顯示彈窗提醒用戶選擇工具
                    alert('請先選擇一個工具');
                    return;
            }
            //計算被選取的工具個數
            if (this.hideItem.length >= 5) {
                this.successLightbox = false;
                this.finishLightbox = true;
            }
            // 關閉原始視窗
            // 垃圾彈窗
            this.selectedTrash = false;
            this.slidePage = false;
            // 工具選取為0
            this.selectedTool = 0;
            // 重置一些狀態
            this.returnPageSet = false;
        },
        handleToolClick(tool) {
            // 點擊圖片時選擇工具
            this.selectTool(tool);
        },
        continueGame() {
            this.successLightbox = false;
            this.showTrashContainer = true;
            // 點選垃圾出現的彈窗，前面點過這裡要讓他先回初始值，這樣下次點才會出現
        },
        gameHome() {
            location.reload();
        },
        returnPage() {
            this.returnPageSet = true;
            this.slidePage = false;
            this.characterChoosed = null;
            this.selectedTrash = null;
            // 重選工具
            this.selectedTool = 0;
            this.failLightbox = false;
            this.getTrashId = null;
            this.trashLightbox = false;
            this.showTrashContainer = true;
        },
    },
    // 手機轉向掛載時就檢查
    mounted() {
        //監聽視窗改變即會跳出提醒
        //瀏覽器定義的事件名稱(已定義)，代表裝置方向改變時觸發的事件。
        // 監聽螢幕轉向事件
        window.addEventListener('resize', this.checkOrientation);
        // 當組件創建時立即檢查一次方向
        this.checkOrientation();
        // 移除 nav
        document.querySelector('nav').classList.add('hidden-nav');
        // 移除footer隱藏，在組件掛載後隱藏 footer
        document.querySelector('footer').classList.add('hidden-footer');
    },
    // 只在這個頁面做轉向檢查
    beforeUnmount() {
        // 是指向當前組件內定義的 checkOrientation 方法
        window.removeEventListener('resize', this.checkOrientation);
        //移除 nav
        document.querySelector('nav').classList.remove('hidden-nav');
        // 移除footer隱藏，在組件卸載前移除隱藏樣式，避免影響其他頁面
        document.querySelector('footer').classList.remove('hidden-footer');
    },
}
</script>