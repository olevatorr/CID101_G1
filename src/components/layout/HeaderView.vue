<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isSubmenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
const toggleSubmenu = () => {
    isSubmenuOpen.value = !isSubmenuOpen.value
}
</script>

<template>
    <header :class="{ 'blend-unset': isMenuOpen }">
        <nav>
            <RouterLink to="/">
                <div class="nav-logo">
                    <img src="../../../public/img/LOGO-white.png" alt="BLUE ALER 藍色警戒" />
                </div>
            </RouterLink>
            <div class="hb" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="navbar" :class="{ active: isMenuOpen }">
                <li>
                    <RouterLink to="/about">關於我們</RouterLink>
                </li>
                <li class="subnav-toggle" @click="toggleSubmenu">
                    <RouterLink to="/KnowledgeView">教育中心</RouterLink>
                    <i class="fa-solid" :class="{ 'fa-caret-down': !isSubmenuOpen, 'fa-caret-up': isSubmenuOpen }"></i>
                    <ul class="subnav" :class="{ active: isSubmenuOpen }">
                        <li><a href="">教育</a></li>
                        <li>
                            <RouterLink to="/BeachgameView">淨灘大作戰</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Mbti">海廢人格測驗</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/Donate">捐款</RouterLink>
                </li>
                <li>
                    <RouterLink to="/shop">商品</RouterLink>
                </li>
                <li>
                    <RouterLink to="/events">活動</RouterLink>
                </li>
                <li><router-link to="/news">最新消息</router-link></li>
                <li class="nav-member">
                    <RouterLink to="/Member">會員登入</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>