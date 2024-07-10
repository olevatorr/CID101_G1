<script setup>
import { ref,onMounted,watch   } from 'vue'
import { RouterLink } from 'vue-router'
import { useMemberStore } from '@/stores/member';
import {storeToRefs} from 'pinia'
import { useRouter } from 'vue-router';

//從member.js調用useMemberStore方法
const store = useMemberStore();
//響應式資料 (包括 computed) 要使用的話要用 storeToRefs 來做提取
const { isLogging ,member } = storeToRefs(store)
//圖片路徑

const imageSrc = ref('');
const isMenuOpen = ref(false)
const isSubmenuDropDown = ref(false)
const router = useRouter();

const logout = () => {
    store.logout();
    router.push('/')
}
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}
const toggleSubmenuDropDown = () => {
    isSubmenuDropDown.value = !isSubmenuDropDown.value
}

// 設置頭像
const setAvatar = () => {
    if (member.value && member.value.U_AVATAR) {
        imageSrc.value =`${import.meta.env.VITE_IMG_URL}/member/${member.value.U_AVATAR}`;
    } else {
        imageSrc.value ="member15.jpg"; // 預設圖片
    }
};
onMounted(() => {
    store.getCookie(); // 調用 store 中的 getCookie 方法
    setAvatar();
});

watch(member, setAvatar);
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
                        <img v-if="member" :src="imageSrc" alt="User Avatar"  class="member-avatar">
                        <p>{{ member.U_NAME }}</p>
                    </RouterLink>
                    <RouterLink v-else to="/Member" @click="toggleMenu">
                        會員登入
                    </RouterLink>
                </li>
                <li v-if="isLogging" class="logoutbutton">
                        <button @click="logout">登出</button>
                </li>
            </ul>
        </nav>
    </header>
</template>