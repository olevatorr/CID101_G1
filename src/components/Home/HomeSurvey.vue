<script setup>
import { ref } from 'vue';

const isSurveyPopUp = ref(false)

const SurveyPopUp = () => {
    isSurveyPopUp.value = !isSurveyPopUp.value
}

</script>

<template>
    <section class="section section-survey">
        <div class="container">
            <div class="survey-card">
                <h3>海廢知多少</h3>
                <p>透過回答以下5個問題,讓我們一起檢視您對海洋環保的了解程度。這個測驗旨在幫助您:</p>
                <ul>
                    <li><i class="fa-solid fa-earth-asia"></i>
                        若得分低於80分,建議您先前往我們的教育中心,深入學習海洋環保知識,充實自己的環保知識基礎,再參與實際的環保行動,讓您的每一份努力都更有意義。</li>
                    <li><i class="fa-solid fa-earth-asia"></i> 若得分高於或等於80分,歡迎您前往我們的活動頁面,尋找適合您的海洋保護行動,用實際行動為海洋盡一份心力。</li>
                </ul>
                <p>
                    無論結果如何,我們都感謝您對海洋環保的關注和努力。了解自己的知識水平,是成為一個負責任的環保行動者的第一步。讓我們攜手,以知識和行動,共創潔淨、永續的海洋環境!<br>
                    準備好開始這趟自我探索之旅了嗎?現在就開始測驗吧!
                </p>
                <button @click="SurveyPopUp">立即測驗</button>
            </div>
            <div class="survey-box" :class="{ show: isSurveyPopUp }">
                <div class="wrapper">
                    <h2>是否開始測驗</h2>
                    <div class="buttons">
                        <button @click="SurveyPopUp">取消測驗</button>
                        <button>開始測驗</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>