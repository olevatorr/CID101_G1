<template>
    <!-- v-for=" item in prodList" :key="item.id" -->
        <div class="col-6 col-md-4 col-lg-3" >
            <RouterLink to="/productinfo">
                <div class="shop-card" @mouseenter="showCart" @mouseleave="hideCart"> 
                            <div class="img"> 
                                <img :src="item.imgUrl" alt=""> 
                            </div> <div class="text"> 
                                <span>{{ item.title }}</span> 
                                <span>NT$ {{ item.price }}</span> 
                            </div> 
                            <div class="cart-wrapper">
                                <div class="cart" :class="{ show: item.isHovered }">
                                    <button class="add-to-cart">加入購物車</button>
                                </div>
                            </div>
                            <div class="collect" @mouseenter="toggleCollectHover(item, true)" @mouseleave="toggleCollectHover(item, false)"> 
                                <a href="javascript:void(0)">{{ item.isHovering ? '🩵' : '🤍' }}</a> 
                            </div> 
                            <div class="hot" v-if="item.id < 9">  
                                <span>熱銷商品</span> 
                            </div> 
                        </div> 
            </RouterLink>
        </div>
</template>

<script>
export default {
    props:['item'],

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
}
}
</script>