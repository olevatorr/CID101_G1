<template>
    <div class="col-6 col-md-4 col-lg-3">
        <div class="shop-card" @mouseenter="showCart" @mouseleave="hideCart">
            <router-link :to="'/productinfo?id=' + productInfo.P_ID">
                <div class="img">
                    <img :src="getImageUrl(productInfo.P_MAIN_IMG)" alt="">
                </div>
            </router-link>
            <div class="cart-wrapper">
                <div class="cart" :class="{ show: isHovered }">
                    <button class="add-to-cart" @click="addToCart(productInfo)">加入購物車</button>
                </div>
            </div>
            <router-link :to="'/productinfo?id=' + productInfo.P_ID">
                <div class="text">
                    <span>{{ productInfo.P_NAME }}</span>
                    <span>NT$ {{ productInfo.P_PRICE }}</span>
                </div>
            </router-link>
            <div class="collect" @click="toggleCollect" :class="{ 'collected': isCollected }">
                <a href="javascript:void(0)">{{ isCollected ? '🩵' : '🤍' }}</a>
            </div>
            <div class="hot" v-if="productInfo.P_ID < 9">
                <span>熱銷商品</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useMemberStore } from '@/stores/member';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    props: ['productInfo'],
    setup(props) {
        const cartStore = useCartStore();
        const memberStore = useMemberStore();
        const { isLogging } = storeToRefs(memberStore);
        const router = useRouter();

        const isHovered = ref(false);
        const isClicked = ref(false);
        const isCollected = ref(false);

        const showCart = (event) => {
            const cartButton = event.target.closest('.shop-card').querySelector('.cart');
            cartButton.classList.add('show');
        };

        const hideCart = (event) => {
            const cartButton = event.target.closest('.shop-card').querySelector('.cart');
            cartButton.classList.remove('show');
        };

        const toggleHover = (hovering) => {
            isHovered.value = hovering;
        };
        const checkCollectionStatus = async () => {
            if (isLogging.value) {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/collect.php`, {
                        params: {
                            U_ID: memberStore.member.U_ID,
                            P_ID: props.productInfo.P_ID
                        }
                    });
                    isCollected.value = response.data.isCollected;
                } catch (error) {
                    console.error('檢查收藏狀態失敗:', error);
                }
            }
        };

        const toggleCollect = async () => {
            if (!isLogging.value) {
                Swal.fire({
                    icon: 'error',
                    title: '未登入',
                    text: '請先登入會員才能進行收藏商品'
                }).then(() => {
                    router.push('/Member');
                });
                return;
            }

            try {
                const userId = memberStore.member.U_ID;
                const productId = props.productInfo.P_ID;
                const url = isCollected.value ?  `${import.meta.env.VITE_API_URL}/collectDelete.php` : `${import.meta.env.VITE_API_URL}/collectAdd.php`;

                const response = await axios.post(url, {
                    U_ID: userId,
                    P_ID: productId
                });

                if (response.data.error === false) {
                    isCollected.value = !isCollected.value;
                    Swal.fire({
                        icon: 'success',
                        title: isCollected.value ? '已成功加入收藏' : '已成功取消收藏',
                    });
                } else {
                    throw new Error(response.data.msg);
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: '操作失敗',
                    text: error.message || '發生未知錯誤'
                });
            }
        };

        const addToCart = (item) => {
        console.log(item)
            cartStore.addToCart(item);
            Swal.fire({
                icon: 'success',
                title: '已加入購物車',
                showConfirmButton: false,
                timer: 1500
            });
        };

        const getImageUrl = (imgUrl) => {
            return `${import.meta.env.VITE_IMG_URL}/product/${imgUrl}`;
        };

        return {
            isHovered,
            isClicked,
            isLogging,
            showCart,
            hideCart,
            toggleHover,
            addToCart,
            getImageUrl,
            checkCollectionStatus,
            toggleCollect
        };
    }
};
</script>
