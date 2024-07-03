<script setup>
import { ref,onMounted  } from 'vue'
import { RouterLink } from 'vue-router'
import { useMemeberStore } from '@/stores/member';
import {storeToRefs} from 'pinia'
//從member.js調用useMemeberStore方法
const store = useMemeberStore();
//響應式資料 (包括 computed) 要使用的話要用 storeToRefs 來做提取
const { isLogging ,member } = storeToRefs(store)
//圖片路徑
const imageHostUrl = import.meta.env.VITE_IMAGE_URL

const isMenuOpen = ref(false)
const isSubmenuDropDown = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}
const toggleSubmenuDropDown = () => {
    isSubmenuDropDown.value = !isSubmenuDropDown.value
}
const navlogout = () => {
    store.logout()  // Call the logout method from the store
}

onMounted(() => {
    store.getCookie()  // Call the getCookie method from the store
})

</script>
<template>
    <header>
        <nav>
            <RouterLink to="/">
                <div class="nav-logo">
                    <img src="../../../public/img/LOGO-short.png" alt="BLUE ALER 藍色警戒" />
                </div>
            </RouterLink>
            <div class="hb" @click="toggleMenu" :class="{ 'sidebar-hidden': !isMenuOpen }">
                <div class="hb-icon"></div>
            </div>
            <ul class="navbar" :class="{ active: isMenuOpen }">
                <li>
                    <RouterLink to="/about" @click="toggleMenu">關於我們</RouterLink>
                </li>
                <li class="subnav-toggle"   
                    @mouseenter="toggleSubmenuDropDown"
                    @mouseleave="toggleSubmenuDropDown"
                    >
                    <RouterLink to="/Knowledge" @click="toggleMenu">教育中心
                    </RouterLink>
                    <ul class="subnav" :class="{ hover: isSubmenuDropDown }">
                        <li>
                            <RouterLink to="/Beachgame" @click="toggleMenu">淨灘大作戰</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Mbti" @click="toggleMenu">海廢人格測驗</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/Donate" @click="toggleMenu">捐款</RouterLink>
                </li>
                <li>
                    <RouterLink to="/shop" @click="toggleMenu">商品</RouterLink>
                </li>
                <li>
                    <RouterLink to="/events" @click="toggleMenu">活動</RouterLink>
                </li>
                <li><router-link to="/news" @click="toggleMenu">最新消息</router-link></li>
                <li class="nav-member">
                    <RouterLink v-if="isLogging" to="/ProfileView" @click="toggleMenu">
                        <img v-if="member" :src="`${imageHostUrl}/member/${member.U_AVATAR}`" alt="User Avatar"  class="member-avatar">
                        <p>{{ member.U_NAME }}</p>
                    </RouterLink>
                    <RouterLink v-else to="/Member" @click="toggleMenu">會員登入</RouterLink>
                </li>
                <li v-if="isLogging" class="logoutbutton">
                    <RouterLink to="/Member">
                        <button @click="navlogout">登出</button>
                    </RouterLink></li>
            </ul>
        </nav>
    </header>
</template>