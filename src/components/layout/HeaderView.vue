<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { store, fetchProfile, logout as logoutStore } from '@/store.js';

fetchProfile()

const isMenuOpen = ref(false)
const isSubmenuDropDown = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
const toggleSubmenuDropDown = () => {
    isSubmenuDropDown.value = !isSubmenuDropDown.value
}

const logout = () => {
    logoutStore();
}

</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">
                <div class="nav-logo">
                    <img src="../../../public/img/LOGO-short.png" alt="BLUE ALER 藍色警戒" />
                </div>
            </RouterLink>
            <div class="hb" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
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
                    <RouterLink v-if="store.isLoging" to="/ProfileView" @click="toggleMenu">
                        <img :src="store.memberAvatar" alt="Member Avatar" class="member-avatar">
                        <p>{{ store.memberName }}</p>
                    </RouterLink>
                    <RouterLink v-else to="/Member" @click="toggleMenu">會員登入</RouterLink>
                </li>
                <li v-if="store.isLoging" class="logoutbutton"><button @click="logout">登出</button></li>
            </ul>
        </nav>
    </header>
</template>