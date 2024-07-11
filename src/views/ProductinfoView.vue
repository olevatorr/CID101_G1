<template>
    <section class="section section-production-picture">
        <div class="container">
            <div class="breadcrumb">
                <router-link :to="{ name: 'home' }">首頁</router-link>
                <router-link :to="{ name: 'shop' }">商城</router-link>
                <router-link :to="{ name: 'productinfo' }">商品資訊</router-link>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12">
                            <div class="big-pic">
                                <img :src="largeSrc" alt="" />
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="pic-s">
                                <img :src="getImageUrl(productdetail.P_MAIN_IMG)" alt="" @click="showLarge(productdetail.P_MAIN_IMG)" />
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="pic-s">
                                <img :src="getImageUrl(productdetail.P_IMG1)" alt="" @click="showLarge(productdetail.P_IMG1)" />
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="pic-s">
                                <img :src="getImageUrl(productdetail.P_IMG2)" alt="" @click="showLarge(productdetail.P_IMG2)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="info-group">
                        <div class="title">
                            <h3>{{ productdetail.P_NAME }}</h3>
                        </div>
                        <div class="content">
                            <p>{{ productdetail.P_SUBTITLE }}</p>
                        </div>
                        <div class="line"></div>
                        <div class="amount">
                            <span>數量 : </span>
                            <button @click="decreaseQuantity" :disabled="productdetail.amount <= 1">-</button>
                            <span>{{ productdetail.amount }}</span>
                            <button @click="increaseQuantity" :disabled="productdetail.amount >= 10">+</button>
                        </div>
                        <div class="price">
                            <span>金額總計 ${{ totalPrice }} 元</span>
                        </div>
                        <div class="button">
                            <button @click="submitBuy">立即購買</button>
                            <button class="add-to-cart" @click="addToCart(productdetail)">加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-introduce">
        <div class="container">
            <div class="text-group">
                <h3>產品介紹</h3>
                <p>{{ productdetail.P_CONTENT }}</p>
                <div class="pic">
                    <img :src="getImageUrl(productdetail.P_IMG1)" alt="">
                </div>
                <h3>規格說明</h3>
                <div class="directions">
                    <div class="text">
                        <p>材質 : {{ productdetail.P_MATERIAL }}</p>
                        <p>尺寸 : {{ productdetail.P_SIZE }}</p>
                        <p>顏色 : {{ productdetail.P_COLOR }}</p>
                    </div>
                    <div class="pic">
                        <img :src="getImageUrl(productdetail.P_IMG2)" alt="">
                    </div>
                    <div class="text2">
                        <p>手工測量有1-3公分誤差，由於顯示器及拍照光線等<br>不可抗拒因素，色差不可避免。</p>
                    </div>
                </div>
                <div class="disclaimer">
                    <p>下訂購買表示已詳閱賣場購物須知，且100%同意依賣場製作流程、規則出貨！</p>
                </div>
            </div>
            <ShopCart v-if="$route.path === '/shop' || $route.path === '/productinfo'" />
        </div>
    </section>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import ShopCart from '@/components/ShopCart.vue';
import Swal from 'sweetalert2'; // 引入sweetalert2
import { useRouter, useRoute } from 'vue-router';
import { useMemberStore } from '@/stores/member'; // 引入Pinia store
import { useCartStore } from '@/stores/cart'; // 引入Pinia store
import { useProductStore } from '@/stores/product'; // 引入Pinia store

export default defineComponent({
    components: {
        ShopCart,
    },
    setup() {
        const memberStore = useMemberStore();
        const cartStore = useCartStore();
        const productStore = useProductStore();
        const router = useRouter();
        const route = useRoute();

        const largeSrc = ref("");
        const productdetail = ref({});
        const amount = ref(1);

        const totalPrice = computed(() => {
            return productdetail.value.amount * productdetail.value.P_PRICE;
        });

        const showLarge = (src) => {
            const newURL= getImageUrl(src)
            largeSrc.value = newURL;
        };

        const decreaseQuantity = () => {
            if (productdetail.value.amount > 1) {
                productdetail.value.amount--;
            }
        };

        const increaseQuantity = () => {
            if (productdetail.value.amount < 10) {
                productdetail.value.amount++;
            }
        };

        const addToCart = (item) => {
        // console.log(item)
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

        const submitBuy = () => {
            if (!memberStore.isLogging) {
                Swal.fire({
                    icon: 'error',
                    title: '未登入',
                    text: '請先登入會員才能進行購買'
                }).then(() => {
                    router.push('/Member');
                });
                return;
            } else {
                router.push('/mallcart');
            }
        };

        onMounted(async () => {
            await productStore.fetchProducts();
            const product = productStore.products.find(item => item.P_ID == route.query.id);
            // console.log(product)
            if (product) {
                productdetail.value = product;
                productdetail.value.amount = 1;
                largeSrc.value = getImageUrl(product.P_MAIN_IMG);
            } else {
                console.error('Product not found with ID:', route.query.id);
            }
        });

        return {
            largeSrc,
            productdetail,
            amount,
            totalPrice,
            showLarge,
            decreaseQuantity,
            increaseQuantity,
            addToCart,
            getImageUrl,
            submitBuy
        };
    }
});
</script>
