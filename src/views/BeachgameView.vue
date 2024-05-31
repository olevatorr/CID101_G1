<template>
    <main>
        <section class="section section-beachgame">
            <div class="container beachgame-text">
                <span class="beachgame-title">
                    淨灘大作戰
                </span>
                <h2 class="beachgame-subtitle">一起來淨灘</h2>
                <button>進入遊戲</button>
            </div>
        </section>
        <div class="container">
            <div class="rules-lightbox">
                <div class="row">
                    <div class="col rules-content">
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
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col character-lightbox">
                    <h2 class="character-title">選擇角色</h2>
                    <div class="character-list">
                        <div class="character-item">
                            <div class="character-pic">
                                <img src="../../public/img/beachgame/sea-bird.png" alt="">
                            </div>
                            <div class="character-name">
                                <h3>海鷗鷗</h3>
                            </div>
                        </div>
                        <div class="character-item">
                            <div class="character-pic">
                                <img src="../../public/img/beachgame/sea-turtle.png" alt="">
                            </div>
                            <div class="character-name">
                                <h3>胖莎</h3>
                            </div>
                        </div>
                        <div class="character-item">
                            <div class="character-pic">
                                <img src="../../public/img/beachgame/shark.png" alt="">
                            </div>
                            <div class="character-name">
                                <h3>龜吉</h3>
                            </div>
                        </div>
                    </div>
                    <button>確定角色</button>
                </div>
            </div>    
        </div>
        <div class="container">
            <div class="row">
                <div class="col character-lightbox">
                    <h2 class="character-title">淨灘去</h2>
                    <div class="character-list">
                        <div class="character-item">
                            <div class="character-pic">
                                <img src="../../public/img/beachgame/shark.png" alt="">
                            </div>
                            <div class="character-name">
                                <h3>胖莎</h3>
                            </div>
                        </div>
                    </div>
                    <button>START</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col trash-lightbox">
                    <h2 class="trash-title">橡膠拖鞋</h2>
                        <div class="trash-item">
                            <div class="trash-pic">
                                <img src="../../public/img/beachgame/slippers.png" alt="">
                            </div>
                            <div class="trash-text">
                                <p>不當棄置 許多人使用後直接將舊的橡膠拖鞋隨意丟棄,
                                    它們可能被沖入水流、排水系統,最終流入河川或海洋。</p>
                            </div>
                        </div>
                    <button>選擇淨灘工具</button>
                </div>
            </div>
        </div>
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