<template>
    <!--使用v-for渲染多張卡片-->
        <div 
        v-if="even" 
        class="col-12 col-sm-6 col-md-4 col-lg-3" 
        v-for="card in filter" 
        :key="card.F_ID" 
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
                    <div class="report">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                </div>
                <span>活動地點：{{ card.E_ADDRESS }}</span>
                <span>活動日期：{{ card.E_DATE }}</span>
                <span>分享人：{{ card.U_NAME }}</span>
                <p class="Thoughts">參加心得:<br/>{{ card.F_CONTENT }}
                    <a href="#">閱讀更多</a>
                </p>
            </div>
        </div>
        </div>
    <!-- 只渲染一張卡片 -->
    <div v-else class="col-12">
        <div class="event-card">
            <i class="fa-regular fa-circle-xmark" @click="closeCard"></i>
            <div class="pic">
                <img :src="filter[0].F_IMG" />
            </div>
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>活動名稱：{{ filter[0].E_TITLE }}</h3>
                    </div>
                    <div class="report">
                        <span><i class="fa-solid fa-triangle-exclamation"></i>檢舉此貼文</span>
                    </div>
                </div>
                <span>活動地點：{{ filter[0].E_ADDRESS }}</span>
                <span>活動日期：{{ filter[0].E_DATE }}</span>
                <span>分享人：{{ filter[0].U_NAME }}</span>
                <p>參加心得:<br/>{{ filter[0].F_CONTENT }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ShareCard: {
            type:Array,
            default:()=>[]
        },
        limit: {
            type:Number,
            default:0
        },
        even:{
            type:Boolean,
            default:true
        }
    },
    computed: {
        filter() {
            if (this.limit === 0) {
                return this.ShareCard;
            } else {
                return this.ShareCard.slice(0, this.limit);
            }
        }
    },
    methods: {
        cardClicked(card) {
            this.$emit('card-click', card);
        },
        closeCard() {
            this.$emit('close-click');
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/sass/base/var";
@import "../assets/sass/component/eventcard";
</style>