<template>
    <!--使用v-for渲染多張卡片-->
    <template v-if="shareContent.length && shareContent.length > 1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="card in shareContent" :key="card.F_ID"
            @click="cardClicked(card)">
            <div class="event-card">
                <div class="pic">
                    <img :src="card.F_IMG" />
                </div>
                <div class="text">
                    <div class="theme">
                        <div class="event-name">
                            <h3>{{ card.E_TITLE }}</h3>
                        </div>
                        <div class="report" @click.stop="reportClicked">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>
                    <span>活動地點：{{ card.E_ADDRESS }}</span>
                    <span>活動日期：{{ card.E_DATE }}</span>
                    <span>分享人：{{ card.U_NAME }}</span>
                    <p class="Thoughts">參加心得:<br />{{ card.F_CONTENT }}
                    </p>
                </div>
                <div class="more">
                    <a href="#">閱讀更多</a>
                </div>
            </div>
        </div>
    </template>
    <!-- 只渲染一張卡片 -->
    <div v-else-if="shareContent.length" class="col-12">
        <div class="event-card">
            <div class="close">
                <i class="fa-regular fa-circle-xmark" @click="closeCard"></i>
            </div>
            <div class="pic">
                <img :src="shareContent[0].F_IMG" />
            </div>
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>活動名稱：{{ shareContent[0].E_TITLE }}</h3>
                    </div>
                    <div class="report" @click.stop="reportClicked">
                        <span><i class="fa-solid fa-triangle-exclamation"></i>檢舉此貼文</span>
                    </div>
                </div>
                <span>活動地點：{{ shareContent[0].E_ADDRESS }}</span>
                <span>活動日期：{{ shareContent[0].E_DATE }}</span>
                <span>分享人：{{ shareContent[0].U_NAME }}</span>
                <p>參加心得:<br />{{ shareContent[0].F_CONTENT }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shareContent: {
            type: Array,
            default: () => []
        },
        limit: {
            type: Number,
            default: 0
        },
        even: {
            type: Boolean,
            default: true
        }
    },
    emits: {
        'card-click': [],
        'close-click': [],
        'report-click':Boolean
    },
    // watch: {
    //     shareContent: {
    //         handler(nVal, oVal) {
    //             console.log(nVal, oVal)
    //         },
    //         immediate: true
    //     },
    // },
    methods: {
        cardClicked(card) {
            this.$emit('card-click', card);
        },
        closeCard() {
            this.$emit('close-click');
        },
        reportClicked (){
            this.$emit('report-click');
        }
    }
}
</script>