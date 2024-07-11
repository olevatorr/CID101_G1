import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import Cookies from 'js-cookie'
import 'sweetalert2/dist/sweetalert2.min.css';


import App from './App.vue'
import router from './router'
import { useCartStore } from './stores/cart'
import { useProductStore } from './stores/product'
// import  tool  from  "./utils/tool" ;

const app = createApp(App)
const pinia = createPinia()

// app.use(tool);
app.use(pinia)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$cookies = Cookies;

// 創建 store 實例
const cartStore = useCartStore()
const productStore = useProductStore()

// 初始化 stores
cartStore.initializeStore()

app.use(vue3GoogleLogin, {
    clientId: '93978604812-d3d8681fgbufoa1gfl2tcirlos73nokc.apps.googleusercontent.com'
})

router.isReady().then(() => {
    app.mount('#app');
});