<template>
    <!-- v-for=" item in prodList" :key="item.id" -->
        <div class="col-6 col-md-4 col-lg-3" >
            <div class="shop-card" @mouseenter="showCart" @mouseleave="hideCart"> 
                <RouterLink :to="'/productinfo?id=' + productInfo.P_ID">
                    <div class="img"> 
                        <img :src="getImageUrl(productInfo.P_IMG1)" alt="">
                    </div>
                </RouterLink>    
                    <div class="cart-wrapper">
                        <div class="cart" :class="{ show: productInfo.isHovered }">        
                            <button class="add-to-cart" @click="addToCart(productInfo)">加入購物車</button>
                        </div>
                    </div>
                <RouterLink :to="'/productinfo?id=' + productInfo.P_ID">
                    <div class="text"> 
                        <span>{{ productInfo.P_NAME }}</span> 
                        <span>NT$ {{ productInfo.P_PRICE }}</span> 
                    </div>
                </RouterLink>
                <div class="collect" @click="toggleClicked" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)">
                    <a href="javascript:void(0)">{{ productInfo.isClicked ? '🩵' : '🤍' }}</a>
                </div>
                <div class="hot" v-if="productInfo.P_ID < 9">  
                    <span>熱銷商品</span>
                </div> 
            </div>
        </div>
</template>

<script>
import Cookies from 'js-cookie';
import { store } from '@/store.js'; // 引入store
import Swal from 'sweetalert2'; // 引入sweetalert2

export default {
    props:['productInfo'],
    methods: {
    showCart(event) {
        const cartButton = event.target.closest('.shop-card').querySelector('.cart');
        cartButton.classList.add('show');
    },
    hideCart(event) {
        const cartButton = event.target.closest('.shop-card').querySelector('.cart');
        cartButton.classList.remove('show');
    },
    toggleHover(isHovering) {
        this.productInfo.isHovered = isHovering;
    },
    toggleClicked() {
        this.productInfo.isClicked = !this.productInfo.isClicked;
        if (!store.isLoging) {
                Swal.fire({
                icon: 'error',
                title: '未登入',
                text: '請先登入會員才能進行收藏商品'
                }).then(() => {
                this.$router.push('/Member');
                // 未登入跳轉至會員登入頁面
                });
                return;
            } else{
                Swal.fire({
                icon: 'success',
                title: '已成功加入收藏',
                });
            }
    },
    addToCart(item) {
        // 檢查localStorage裡有無資料
        console.log(localStorage.getItem('cartItems'));
        
        // localStorage.getItem是取得localStorage資料
        if (!localStorage.getItem('cartItems')) { 
            console.log(localStorage.getItem('cartItems'));
            let arr = [];
            let obj = { ...item }
            obj.amount = 1;
            arr.push(obj);
            // 把資料存在localStorage
            localStorage.setItem('cartItems', JSON.stringify(arr));
        } else{
            // 找到已存在購物車裡的商品列表,透過localsrortage方式取得
            let productList = JSON.parse(localStorage.getItem('cartItems'));
            console.log(productList)

            // 檢查商品列表裡有無資料
            if(!productList || !productList.length){
                let arr = [];
                let obj = { ...item }
                obj.amount = 1;
                arr.push(obj);
                // 把資料存在localStorage
                localStorage.setItem('cartItems', JSON.stringify(arr));
            } else{
                let isReduce = false;

                productList.forEach(element => {
                    if(item.P_ID == element.id){
                        if(!element.amount){
                            element.amount = 1;
                        }
                        element.amount = element.amount + 1 ;
                        isReduce = true;
                    }
                });

                
                // 判斷isReduce有沒有在購物車裡面,沒有商品要push
                if(!isReduce){
                    let obj = { ...item }
                    obj.amount = 1;
                    productList.push(obj);
                    // 把資料存在localStorage
                }
                localStorage.setItem('cartItems', JSON.stringify(productList));
            } 
        }
    },
    getImageUrl(imgUrl) {
        return `${import.meta.env.BASE_URL}img/shop/${imgUrl}`;
    }
}
}
</script>