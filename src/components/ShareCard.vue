<template>
    <!--使用v-for渲染多張卡片-->
        <div v-if="even" class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="card in filter" :key="card.id">
        <div class="event-card">
            <div class="pic">
                <img :src="card.imageUrl" />
            </div>
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>{{ card.title }}</h3>
                    </div>
                    <div class="report">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                </div>
                <span>{{ card.place }}</span>
                <span>{{ card.date }}</span>
                <span>{{ card.share }}</span>
                <span>{{ card.exp }}</span>
                <p class="Thoughts">
                    {{ card.thoughts }}
                    <a href="#">閱讀更多</a>
                </p>
            </div>
        </div>
        </div>
    <!-- 只渲染一張卡片 -->
    <div v-else class="col-12">
        <div class="event-card">
            <i class="fa-regular fa-circle-xmark"></i>
            <div class="pic">
                <img :src="filter[0].imageUrl" />
            </div>
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>{{ filter[0].title }}</h3>
                    </div>
                    <div class="report">
                        <span><i class="fa-solid fa-triangle-exclamation"></i>檢舉此貼文</span>
                    </div>
                </div>
                <span>{{ filter[0].place }}</span>
                <span>{{ filter[0].date }}</span>
                <span>{{ filter[0].share }}</span>
                <span>參加心得:</span>
                <p>{{ filter[0].experience }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ShareCard: [],
        limit: Number,
        even:Boolean
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
}

</script>
<style lang="scss" scoped>
@import "../assets/sass/base/var";
@import "../assets/sass/component/eventcard";
</style>