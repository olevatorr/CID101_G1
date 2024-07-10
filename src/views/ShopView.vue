<template>
    <div>
        <section class="section section-shop-banner">
            <div class="container">
                <div class="title-wrap">
                    <div class="title">
                        <span>商城</span>
                        <h1>Mall</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shop-title">
            <div class="container">
                <div class="title">
                    <h3>商品頁面</h3>
                    <h3>減少海洋垃圾，綠色購物很簡單!</h3>
                </div>
                <div class="category">
                    <ul>
                        <li>商品分類</li>
                        <li @click=" handleClick('all')" :class="{ active: activeIndex === 'all' }">全部商品</li>
                        <li @click=" handleClick('飲料杯套')" :class="{ active: activeIndex === '飲料杯套' }">杯套類</li>
                        <li @click=" handleClick('大學衛衣')" :class="{ active: activeIndex === '大學衛衣' }">上衣類</li>
                        <li @click=" handleClick('側背包')" :class="{ active: activeIndex === '側背包' }">包包類</li>
                        <li @click=" handleClick('馬克杯')" :class="{ active: activeIndex === '馬克杯' }">馬克杯</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section section-product-list">
            <div class="container">
                <div class="row">
                    <!-- 每一個商品卡 -->
                    <ProductItem
                        v-for="product in paginatedProdList"
                        :key="product.P_ID"
                        :productInfo="product"
                        @add-to-cart="addToCart"
                    />
                </div>
            </div>
        </section>

        <section class="section section-pagination">
            <div class="container">
                <div class="button">
                    <a href="#" @click.prevent="changePage(1)">1</a>
                    <a href="#" @click.prevent="changePage(2)" v-if="isPages">2</a>
                
                </div>
            </div>
            <div class="sea-img">
                <img src="/img/shop/sea.png" alt="">
            </div>
        </section>
        <ShopCart v-if="$route.path === '/shop' || $route.path === '/productinfo'" />
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import ProductItem from '../components/ProductItem.vue'
import ShopCart from '@/components/ShopCart.vue'

export default {
    components: {
        ProductItem,
        ShopCart,
    },
    setup() {
        const productStore = useProductStore()
        const cartStore = useCartStore()

        const currentPage = ref(1)
        const activeIndex = ref('all')

        const isPages = ref(false)

        const paginatedProdList = computed(() => {
        console.log('Calculating paginated list, filtered products:', productStore.filteredProducts);
        const startIndex = (currentPage.value - 1) * 16;
        const endIndex = startIndex + 16;

        let productsToShow = productStore.filteredProducts;

        // 檢查 productsToShow 是否為對象，如果是，則使用其 product 屬性
        if (typeof productsToShow === 'object' && productsToShow !== null && Array.isArray(productsToShow.product)) {
            productsToShow = productsToShow.product;
        }

        // 如果 productsToShow 不是數組，則使用空數組
        if (!Array.isArray(productsToShow)) {
            console.error('productsToShow is not an array:', productsToShow);
            return [];
        }

        isPages.value = productsToShow.length > 16;

        return productsToShow.slice(startIndex, endIndex).map(product => ({
            ...product,
            amount: 1
        }));
    });

    onMounted(async () => {
        try {
            await productStore.initializeStore();
            console.log('Products fetched, total:', productStore.products.length);
        } catch (error) {
            console.error('Failed to initialize store:', error);
        }
    })

    const handleClick = (category) => {
            activeIndex.value = category;
            productStore.setFilter(category);
            currentPage.value = 1;
            console.log('Category clicked:', category);
            console.log('Filtered products after click:', productStore.filteredProducts.length);
        }
        const changePage = (page) => {
            currentPage.value = page
            window.scrollTo(0, 0)
        }

        const addToCart = (product) => {
            cartStore.addToCart(product)
        }

        const getImageUrl = (imgUrl) => {
            return `${import.meta.env.BASE__IMG_URL}/shop/${imgUrl}`
        }

        return {
            productStore,
            currentPage,
            activeIndex,
            paginatedProdList,
            handleClick,
            changePage,
            addToCart,
            getImageUrl,
            isPages
            }
        }
    }
</script>