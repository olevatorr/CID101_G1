<template>
    <section class="section section-foget">
        <div class="container">
            <div class="row">
                <div class="foget-txt col-12">
                    <h1>忘記密碼</h1>
                    <div class="form-group input-ch2">
                        <label>會員帳號</label>
                        <input v-model="account" type="text" maxlength="20" placeholder="請輸入帳號"
                        @blur="validateField('account')">
                        <span v-if="errors.account" class="error-message">{{ errors.account }}</span>
                    </div>
                    <div class="form-group input-ch3">
                        <label>會員信箱</label>
                        <input v-model="email" type="email" placeholder="請輸入信箱"
                        @blur="validateField('email')">
                        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                    </div>
                    <div class="form-group input-ch1">
                        <label>新密碼</label>
                        <input v-model="newPassword" type="text" maxlength="20" placeholder="請輸入新密碼"
                        @blur="validateField('newPassword')">
                        <span v-if="errors.newPassword" class="error-message">{{ errors.newPassword }}</span>
                    </div>
                    <div class="form-group">
                        <label>確認新密碼</label>
                        <input v-model="confirmPassword" type="text" maxlength="20" placeholder="再輸入一次新密碼"
                        @blur="validateField('confirmPassword')">
                        <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
                    </div>
                    <button type="button" @click="submitForm">送出</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            account: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            errors: {}
        };
    },
    computed: {
        isFormValid() {
            return !['account', 'email', 'newPassword', 'confirmPassword'].every(field => this.errors[field]);
        }
    },
    methods: {
        validateField(field) {
            const validators = {
                account: () => !this.account && '帳號不能為空',
                email: () => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return (!this.email || !emailRegex.test(this.email)) && '請輸入有效的電子郵件地址';
                },
                newPassword: () => {
                    const passwordRegex =  /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;
                    return (!this.newPassword || !passwordRegex.test(this.newPassword)) && '新密碼至少4碼必須包含英文加數字';
                },
                confirmPassword: () => this.newPassword !== this.confirmPassword && '新密碼與確認密碼不一致'
            };

            const errorMessage = validators[field]();
            if (errorMessage) {
                this.errors[field] = errorMessage;  // 直接對 errors 物件進行賦值
            } else {
                delete this.errors[field];  // 刪除錯誤訊息
            }
        },
        async submitForm() {
            ['account', 'email', 'newPassword', 'confirmPassword'].forEach(this.validateField);

            if (!this.isFormValid) return;

            try {
                const response = await axios.post('http://localhost/cid101/g1/api/memberForget.php', {
                    account: this.account,
                    email: this.email,
                    newPassword: this.newPassword
                });
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: response.data.message
                });
                this.account = '';
                this.email = '';
                this.newPassword = '';
                this.confirmPassword = '';
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: '系統錯誤',
                    text: '系統錯誤，請稍後再試'
                });
            }
        }
    }
};
</script>
