<template>
    <div>
        <button @click="filter(1)">⭐</button>
        <button @click="filter(2)">⭐⭐</button>
        <button @click="filter(3)">⭐⭐⭐</button>
        <button @click="filter(4)">⭐⭐⭐⭐</button>
        <button @click="filter(5)">⭐⭐⭐⭐⭐</button>
        <button @click="clear()">X</button>
        <div v-if="displayList.length === 0">
            Loading...
        </div>
        <div v-else>
            <ProductList
                v-for="prod in displayList" 
                :key="prod.id"
                :item="prod"
            />
        </div>
    </div>    
</template>
<script>
import ProductList from '@/component/ProductList.vue';
export default {
    components:{
        ProductList
    },
    data(){
        return {
            product: [],
            displayList: [],
            }
        },
    mounted() {
        fetch("/product.json")
        .then(data => data.json())
        .then(res => {
            //備份用
            this.product = res
            //顯示用
            this.displayList = res
        })
    },
    methods: {
        clear(){
            this.displayList = this.product
        },
        filter(star){
            console.log(star);
            this.displayList = this.product.filter(item=>{
                return item.rating === star
            })
        },
        payMoney(){
            this.pay += 100
        },
        parseIcon(file){
            return new URL(`../../assets/test/${file}` , import.meta.url).href
        }
    },
}
</script>

<style lang="scss">
    img{
        height: 5rem;
    }
    .card{
        width: 10rem;
        height: 10rem;
        // background-image: url('@/assets/test/01.jpg');
        // background-size: cover;
    }
    header{
        display: none;
    }
</style>