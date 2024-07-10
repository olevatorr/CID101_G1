<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMemberStore } from '@/stores/member';
import Swal from 'sweetalert2'
import axios from 'axios';
import {storeToRefs } from 'pinia'
import { decodeCredential } from "vue3-google-login"


const store = useMemberStore();
const { isLogging } = storeToRefs(store)


const router = useRouter();
const username = ref('');
const password = ref('');
const usernameError = ref('');
const passwordError = ref('');
const passwordVisible = ref(false);


const validateUsername = () => {
    if (!username.value) {
        usernameError.value = '請輸入帳號';
    } else if (!/^[a-zA-Z0-9]{4,10}$/.test(username.value)) {
        usernameError.value = '帳號必須是4到10個字母加數字組合';
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



const ProcessingLogin = async () => {
    validateUsername();
    validatePassword();

    if (usernameError.value || passwordError.value) {
        return;
    }

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/memberLogin.php`, {
            username: username.value,
            password: password.value
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response:', response.data);
        if (!response.data.error) {
            // Login successful
            Swal.fire({
                icon: "success",
                title: "登入成功!"
            });
            store.login(response.data.user); // 使用从后端返回的用户信息
            router.push('/');
        } else {
            // 根据错误信息显示不同的提示
            if (response.data.msg === '用戶名不存在') {
                Swal.fire({
                    icon: 'error',
                    title: '用戶名不存在'
                });
            } else if (response.data.msg === '用戶帳號已被停權') {
                Swal.fire({
                    icon: 'error',
                    title: '帳號已被停權'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '登入失敗',
                    text: response.data.msg
                });
            }
        }
    } catch (error) {
        console.error('Error during login', error);
        Swal.fire({
            icon: "warning",
            title: "登入錯誤",
            text: error.response?.data?.message || '發生錯誤，請稍後再試。'
        });
    }
};


const handleKeyDown = (event) => {
    // 檢查是否按下 Enter 鍵（鍵碼 13）
    if (event.key === 'Enter') {
        ProcessingLogin(); // 當按下 Enter 鍵時呼叫登入函數
        event.preventDefault() //防止表單默認提交
    }
};

const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};

//google預設按鈕
const callback = async (response) => {
    try {
        console.log('Google response:', response);
        
        // Ensure decodeCredential is defined and works as expected
        const userData = decodeCredential(response.credential);
        console.log("Handle the userData:", userData);
        
        const userEmail = userData.email;
        const userName = userData.name;
        const googleindex = userEmail.indexOf('@');
        const thirdpart = userEmail.substring(0,googleindex);
        
        // Send request to backend to check if user exists or create new user
        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/memberGoogle.php`,
            JSON.stringify({
                email: userEmail,
                name: userName,
                account: thirdpart
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        
        const resData = res.data;
        
        if (resData.success) {
            // User logged in or registered successfully
            store.login({
                U_EMAIL: userEmail,
                U_NAME: userName,
                U_ACCOUNT: thirdpart
            });
            Swal.fire({
                icon: "success",
                title: resData.message
            });
            router.push('/');
        } else {
            // Error occurred
            Swal.fire({
                icon: "error",
                title: "登入錯誤",
                text: resData.message
            });
        }
    } catch (error) {
        console.error('Error handling Google login callback:', error);
        Swal.fire({
            icon: "error",
            title: "登入錯誤",
            text: "處理登入時發生錯誤，請稍後再試。"
        });
    }
};

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
                        <input v-model="username" 
                        type="text" maxlength="10" 
                        placeholder="請輸入帳號"
                            @blur="validateUsername" @keydown="handleKeyDown">
                        <div class="errorspan">
                            <span v-if="usernameError" class="membererror error">
                                {{ usernameError}}</span>
                        </div>
                        <label>密碼</label>
                        <div class="password-container">
                            <input v-model="password" 
                            :type="passwordVisible ? 'text' : 'password'" 
                            maxlength="10" placeholder="請輸入密碼"
                            @blur="validatePassword" @keydown="handleKeyDown">
                            <i :class="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" @click="togglePasswordVisibility"></i>
                        </div>
                        <div class="errorspan2">
                            <span v-if="passwordError" class="membererror2 error">
                            {{ passwordError}}
                            </span>
                        </div>
                    </div>
                    <span class="forgot">
                        <RouterLink to="/ForgetPasswordView">忘記密碼?</RouterLink>
                        <div class="member-button">
                            <RouterLink to="/RegisterView"><button class="add">加入會員</button></RouterLink>
                            <button @click="ProcessingLogin" type="button">&emsp;&emsp;登入&emsp;&emsp;</button>
                        </div>
                    </span>
                    <p>其他登入方式</p>
                    <div class="third-party">
                        <GoogleLogin :key="isLogging" :callback="callback" :button-config="{
                            type: 'icon',
                            size: 'large',
                            shape: 'pill'
                        }"/>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><img src="/img/member/line.ico" alt="" class="fa-line"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
