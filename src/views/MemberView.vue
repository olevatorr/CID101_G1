<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login as loginStore } from '@/store.js'; // Adjust the import path as necessary
import Swal from 'sweetalert2'

const username = ref('');
const password = ref('');
const router = useRouter();

const usernameError = ref('');
const passwordError = ref('');


const validateUsername = () => {
    if (!username.value) {
        usernameError.value = '請輸入帳號';
    } else if (!/^[a-zA-Z0-9]{4,10}$/.test(username.value)) {
        usernameError.value = '帳號必須是4到10個字母或數字';
    } else {
        usernameError.value = '';
    }
};

const validatePassword = () => {
    if (!password.value) {
        passwordError.value = '請輸入密碼';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(password.value)) {
        passwordError.value = '密碼必須是4到10個字母和數字組合';
    } else {
        passwordError.value = '';
    }
};



const login = async () => {
    validateUsername();
    validatePassword();

    if (usernameError.value || passwordError.value) {
        return;
    }

    try {
        const response = await fetch(`${import.meta.env.BASE_URL}json/membertext.json`);
        if (!response.ok) {
            throw new Error('網路回應不好');
        }
        const members = await response.json();
        const member = members.find(member => member.U_ACCOUNT === username.value && member.U_PSW === password.value);
        if (member) {
            // Login successful
            Swal.fire({
                icon: "success",
                title: "登入成功!",
            });
            loginStore(member);
            router.push('/');
        } else {
            // Login failed
            Swal.fire({
                icon: "error",
                title: "使用者名稱或密碼無效!",
            });
        }
    } catch (error) {
        console.error('Error fetching member data', error);
        Swal.fire({
            icon: "warning",
            title: "尚未註冊會員!",
        });
    }
};

const handleKeyDown = (event) => {
    // 檢查是否按下 Enter 鍵（鍵碼 13）
    if (event.keyCode === 13) {
        login(); // 當按下 Enter 鍵時呼叫登入函數
        event.preventDefault() //防止表單默認提交
    }
}
</script>



<template>
    <section class="section section-member">
        <div class="container">
                <div class="member-box row">
                    <div class="member-box-img col-12 col-md-6">
                        <div class="member-logo-box">
                            <div class="img">
                                <img src="/img/member/logo.png" alt="logo">
                            </div>
                            <span>潔淨海洋&emsp;綠色明天</span>
                            <RouterLink to="/RegisterView"><button>加入會員</button></RouterLink>
                        </div>
                    </div>
                    <div class="member-txt col-12 col-md-6">
                        <div class="member-login">
                            <label>帳號</label>
                            <input v-model="username" type="text" maxlength="10" placeholder="請輸入帳號" 
                            @blur="validateUsername"
                            @keydown="handleKeyDown"
                            >
                            <div class="errorspan"><span v-if="usernameError" class="membererror error">{{ usernameError }}</span></div>
                            <label>密碼</label>
                            <input v-model="password" type="password" maxlength="10" placeholder="請輸入密碼" @blur="validatePassword"
                            @keydown="handleKeyDown"
                            >
                            <div class="errorspan2"><span v-if="passwordError" class="membererror2 error">{{ passwordError }}</span></div>
                        </div>
                        <span class="forgot">
                            <RouterLink to="/ForgetPasswordView">忘記密碼?</RouterLink>
                            <div class="member-button">
                                <RouterLink to="/RegisterView"><button class="add">加入會員</button></RouterLink>
                                <button @click="login">&emsp;&emsp;登入&emsp;&emsp;</button>
                            </div>
                        </span>
                        <p>其他登入方式</p>
                        <div class="third-party">
                            <a href="#"><img src="/img/member/google.png" alt="" class="fa-google"></a> 
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><img src="/img/member/line.ico" alt="" class="fa-line"></a>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>
