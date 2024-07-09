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
                        <li @click="handleClick('all')" :class="{ active: activeIndex === 'all' }">全部商品</li>
                        <li @click="handleClick('杯套')" :class="{ active: activeIndex === '杯套' }">杯套類</li>
                        <li @click="handleClick('上衣')" :class="{ active: activeIndex === '上衣' }">上衣類</li>
                        <li @click="handleClick('包包')" :class="{ active: activeIndex === '包包' }">包包類</li>
                        <li @click="handleClick('馬克杯')" :class="{ active: activeIndex === '馬克杯' }">馬克杯</li>
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
        console.log('Calculating paginated list, filtered products:', productStore.filteredProducts.length);
        const startIndex = (currentPage.value - 1) * 16;
        const endIndex = startIndex + 16;

        const productsToShow = productStore.filteredProducts;

        isPages.value = productsToShow.length > 16;

        return productsToShow.slice(startIndex, endIndex).map(product => ({
            ...product,
            amount: 1
        }));
    });

        onMounted(async () => {
            console.log('Mounting component...');
            await productStore.fetchProducts();
            console.log('Products fetched, total:', productStore.products.length);
            console.log('Sample product:', productStore.products[0]);
        })

        const handleClick = (category) => {
            console.log('Category clicked:', category);
            activeIndex.value = category;
            if (category === 'all') {
                productStore.resetFilter();
            } else {
                productStore.setFilter(category);
            }
            currentPage.value = 1;
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
            return `${import.meta.env.BASE_URL}img/shop/${imgUrl}`
        }

        return {
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