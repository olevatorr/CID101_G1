<template>
    <!--使用v-for渲染多張卡片-->
    <div v-if="shareContent.length && shareContent.length > 1">
        <div v-if="carouselEnabled" ref="carousel" class="carousel" v-show="carouselVisible">
            <div class="carousel-card" v-for="card in shareContent" :key="card.F_ID" @click="cardClicked(card)"
                @mouseenter="pauseCarousel" @mouseleave="startCarousel">
                <div class="share-card">
                    <div class="pic">
                        <img :src="convertImg(card.F_IMG)" />
                    </div>
                    <div class="text">
                        <div class="theme">
                            <div class="event-name">
                                <h3>{{ card.E_TITLE }}</h3>
                            </div>
                        </div>
                        <span>活動地點：{{ card.E_ADDRESS }}</span>
                        <span>活動日期：{{ card.E_DATE }}</span>
                        <span>分享人：{{ card.U_NAME }}</span>
                        <p class="Thoughts">參加心得:<br />{{ card.F_CONTENT }}</p>
                    </div>
                    <div class="more">
                        <a href="#">閱讀更多</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="card in shareContent" :key="card.F_ID"
                @click="cardClicked(card)">
                <div class="share-card">
                    <div class="pic">
                        <img :src="convertImg(card.F_IMG)" />
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
                        <p class="Thoughts">參加心得:<br />{{ card.F_CONTENT }}</p>
                    </div>
                    <div class="more">
                        <a href="#">閱讀更多</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 只渲染一張卡片 -->
    <div v-else-if="shareContent.length" class="share-bg">
    <div class="lightBox-share">
      <div class="close">
        <i class="fa-regular fa-circle-xmark" @click="closeCard"></i>
      </div>
      <div class="leftBar">
        <div class="pic">
          <img :src="convertImg(shareContent[0].F_IMG)" />
        </div>
        <div class="report">
          <span @click.stop="reportClicked"
            ><i class="fa-solid fa-triangle-exclamation"></i>檢舉此貼文</span
          >
        </div>
      </div>
      <div class="text">
        <div class="event-name">
          <h3>活動名稱：{{ shareContent[0].E_TITLE }}</h3>
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
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import { useSharesStore } from '@/stores/shares.js'
import { storeToRefs } from 'pinia'

export default {
    props: {
        shareContent: {
            type: Array,
            required: true
        },
        carouselEnabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['card-click', 'close-click', 'report-click'],
    setup(props, { emit }) {
        const carousel = ref(null);
        const carouselVisible = ref(false);
        let animation = null;
        let clonedItems = [];
        
        const sharesStore = useSharesStore()
        const { selectedShareCard } = storeToRefs(sharesStore)

        const startCarousel = () => {
            if (props.carouselEnabled && carousel.value && !selectedShareCard.value) {
                nextTick(() => {
                    if (carousel.value && carousel.value.children.length > 0) {
                        const duration = 40;
                        const repeat = -1;
                        const carouselItems = carousel.value.children;
                        const carouselWidth = carousel.value.scrollWidth;

                        if (animation) {
                            animation.kill();
                        }

                        animation = gsap.to(carouselItems, {
                            duration: duration,
                            ease: 'none',
                            x: `-=${carouselWidth}`,
                            repeat: repeat,
                            modifiers: {
                                x: gsap.utils.unitize(x => parseFloat(x) % carouselWidth)
                            }
                        });
                    }
                });
            }
        };

        const pauseCarousel = () => {
            if (animation) {
                animation.pause();
            }
        };

        const cardClicked = (card) => {
            emit('card-click', card);
        };

        const closeCard = () => {
            emit('close-click');
        };

        const reportClicked = () => {
            emit('report-click');
        };

        const initializeCarousel = () => {
            if (carousel.value && carousel.value.children.length > 0) {
                gsap.set(carousel.value.children, {
                    x: (i) => i * carousel.value.offsetWidth
                });

                clonedItems = Array.from(carousel.value.children).map(item => item.cloneNode(true));
                clonedItems.forEach(item => carousel.value.appendChild(item));

                startCarousel();
            }
        };

        const convertImg = (URL) => {
            return `${import.meta.env.VITE_IMG_URL}/events/${URL}`
        }

        onMounted(() => {
            if (props.carouselEnabled) {
                carouselVisible.value = true;
                nextTick(() => {
                    initializeCarousel();
                });
            }
        });

        onUnmounted(() => {
            if (animation) {
                animation.kill();
            }
        });

        watch(carouselVisible, (newVal) => {
            if (newVal) {
                nextTick(() => {
                    initializeCarousel();
                });
            }
        });

        watch(selectedShareCard, (newVal) => {
            if (newVal) {
                pauseCarousel();
            } else {
                startCarousel();
            }
        });

        return {
            carousel,
            carouselVisible,
            cardClicked,
            closeCard,
            reportClicked,
            selectedShareCard,
            convertImg
        };
    }
};
</script>