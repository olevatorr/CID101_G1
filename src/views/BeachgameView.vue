<template>
    <main>
        <section class="section section-beachgame">
            <RouterLink to="/">
                <div class="left-game">
                    <i class="fa-solid fa-house"></i>
                </div>
            </RouterLink>

            <div class="container beachgame-text">
                <span class="beachgame-title">
                    淨灘大作戰
                </span>
                <h2 class="beachgame-subtitle">一起來淨灘</h2>
                <button>進入遊戲</button>
            </div>
        </section>
        <section class="section section-beachgame-rules">
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
        </section>
        <section class="section section-beachgame-character">
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
        </section>
        <section class="section section-beachgame-character-select">
            <div class="col character-lightbox">
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
        </section>
        <section class="section section-select-tool">
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
        </section>
        <!-- 使用beachgame-character-select 模板 -->
        <section class="section section-beachgame-success">
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
        </section>
        <!-- 撿取失敗 -->
        <section class="section section-beachgame-fail">
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
        </section>

        <!-- 挑戰成功頁面 -->
        <section class="section section-beachgame-finish">
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
                    <button>重新挑戰</button>
                    <button>海廢小知識</button>
                    <button>回首頁</button>
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