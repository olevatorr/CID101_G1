<script setup>
    //Top按鈕跳至網頁最上方
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
</script>

<template>
    <section class="section section-event-agree">
        <div class="container">
            <h2>活動免責聲明:</h2>
            <ul>歡迎參加由[活動組織者名稱]（以下簡稱「組織者」）主辦的[活動名稱]（以下簡稱「活動」）。<br>參加本活動前，請您仔細閱讀並同意以下免責聲明條款：
                <li>1. 自願參加：我自願參加此活動，並了解活動的性質及其潛在風險。</li>
                <li>
                    2.
                    健康狀況：我確認我的身體狀況適合參加此活動，並保證在參加活動前已經進行必要的健康檢查。如有任何身體不適或健康問題，我將主動告知組織者。
                </li>
                <li>
                    3.
                    風險承擔：我理解並接受參加此活動可能存在的風險，包括但不限於身體傷害、財產損失等。我同意自行承擔參加活動的所有風險，並豁免組織者及其工作人員、志願者、贊助商對於任何意外事故、傷害或損失的責任。
                </li>
                <li>
                    4.
                    個人責任：我承諾在活動期間遵守活動規則和組織者的指示，對自己的行為負責。如果因我的行為導致自己或他人受傷或財產損失，我將自行承擔相應責任。
                </li>
                <li>
                    5.
                    保險：我了解組織者可能不提供任何形式的保險保障，我同意自行購買適當的保險以覆蓋參加活動期間可能發生的任何風險。
                </li>
                <li>
                    6.
                    不可抗力：如因天災、政府政策變更或其他不可抗力因素導致活動無法正常舉行，組織者不承擔任何責任。
                </li>
                <li>
                    7.
                    肖像權使用：我同意組織者在活動期間拍攝的照片、錄像及其他影像資料可用於宣傳和推廣活動之用，而無需支付任何費用。
                </li>
                <li>
                    8.
                    法律適用：本免責聲明受[國家/地區]法律管轄，任何因本免責聲明引起的爭議應提交[地點]的法院解決。
                </li>
            </ul>
            <div class="return">
                <button @click="scrollToTop">Top</button>
            </div>
        </div>
    </section>
</template>