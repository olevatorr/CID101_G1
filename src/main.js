import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import Cookies from 'js-cookie'



import App from './App.vue'
import router from './router'
// import  tool  from  "./utils/tool" ;

const app = createApp(App)

// app.use(tool);
app.use(createPinia())
app.use(router)
app.config.globalProperties.$cookies = Cookies;
router.isReady().then(() => {
    app.mount('#app');
});

app.use(vue3GoogleLogin, {
    clientId: '93978604812-d3d8681fgbufoa1gfl2tcirlos73nokc.apps.googleusercontent.com'
    
})