<template>
    <!-- v-for=" item in prodList" :key="item.id" -->
        <div class="col-6 col-md-4 col-lg-3" >
            <div class="shop-card" @mouseenter="showCart" @mouseleave="hideCart"> 
                <RouterLink :to="'/productinfo?id=' + productInfo.id">
                    <div class="img"> 
                        <img :src="parseImg(productInfo.imgUrl)" alt="">
                    </div>
                </RouterLink>    
                    <div class="cart-wrapper">
                        <div class="cart" :class="{ show: productInfo.isHovered }">        
                            <button class="add-to-cart" @click="addToCart(productInfo)">加入購物車</button>
                        </div>
                    </div>
                <RouterLink :to="'/productinfo?id=' + productInfo.id">
                    <div class="text"> 
                        <span>{{ productInfo.title }}</span> 
                        <span>NT$ {{ productInfo.price }}</span> 
                    </div>
                </RouterLink>
                <div class="collect" @mouseenter="toggleCollectHover(productInfo, true)"
                    @mouseleave="toggleCollectHover(productInfo, false)">   
                    <a href="javascript:void(0)">{{ productInfo.isHovering ? '🩵' : '🤍' }}</a> 
                </div> 
                <div class="hot" v-if="productInfo.id < 9">  
                    <span>熱銷商品</span>
                </div> 
            </div>
        </div>
</template>

<script>

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
    toggleCollectHover(item, isHovering) {
        item.isHovering = isHovering;
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
                    if(item.id == element.id){
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
    parseImg(img){
        return `/img/shop/${img}`
    }
}
}
</script>