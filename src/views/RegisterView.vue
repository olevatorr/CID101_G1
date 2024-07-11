<script>
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  data() {
    return {
      account: "",
      name: "",
      password: "",
      confirmPassword: "",
      phone: "",
      email: "",
      address: "",
      errorMessage: {
        account: '',
        name: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
        address: ''
      }
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    validateForm() {
      this.checkAccount();
      this.checkName();
      this.checkPassword();
      this.checkConfirmPassword();
      this.checkPhone();
      this.checkEmail();
      this.checkAddress();

      return Object.values(this.errorMessage).every(msg => msg === "");
    },
    checkAccount() {
      const accountRegex = /^[a-zA-Z0-9]{4,10}$/;
      if (this.account === "") {
        this.errorMessage.account = "*請輸入帳號";
      } else if (!accountRegex.test(this.account)) {
        this.errorMessage.account = "*帳號格式不正確，應為4-10位字母或數字";
      } else {
        this.errorMessage.account = "";
      }
    },
    checkName() {
      this.errorMessage.name = this.name === "" ? "*請輸入會員姓名" : "";
    },
    checkPassword() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;

      if (!passwordRegex.test(this.password)) {
        this.errorMessage.password = "*請輸入至少4碼英文加數字";
      } else {
        this.errorMessage.password = "";
      }
    },
    checkConfirmPassword() {
      if (this.confirmPassword === "") {
        this.errorMessage.confirmPassword = "*請再輸入一次密碼";
      } else if (this.confirmPassword !== this.password) {
        this.errorMessage.confirmPassword = "*密碼不匹配";
      } else {
        this.errorMessage.confirmPassword = "";
      }
    },
    checkPhone() {
      const phonePattern = /^[0-9]{10}$/;
      if (this.phone === "") {
        this.errorMessage.phone = "*請輸入電話";
      } else if (!phonePattern.test(this.phone)) {
        this.errorMessage.phone = "*電話號碼格式不正確";
      } else {
        this.errorMessage.phone = "";
      }
    },
    checkEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.email === "") {
        this.errorMessage.email = "*請輸入信箱";
      } else if (!emailPattern.test(this.email)) {
        this.errorMessage.email = "*信箱格式不正確";
      } else {
        this.errorMessage.email = "";
      }
    },
    checkAddress() {
      this.errorMessage.address = this.address === "" ? "*請輸入地址" : "";
    },
    async handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/memberRegister.php`, 
            JSON.stringify({
              account: this.account,
              name: this.name,
              password: this.password,
              phone: this.phone,
              email: this.email,
              address: this.address
            }),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          
          if (response.data.message === "註冊成功") {
            Swal.fire({
              icon: "success",
              title: "註冊成功!",
              titleText: '3秒後跳轉到登入頁面',
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then(() => {
              this.router.push('/Member');
            });
          } else {
            this.error = true;
            this.errorMsg = response.data.message;
            Swal.fire({
              icon: "error",
              title: "註冊失敗!",
              text: this.errorMsg,
            });
          }
        } catch (error) {
          this.error = true;
          this.errorMsg = error.response ? error.response.data.message : '請稍後再試';
          Swal.fire({
            icon: "error",
            title: "註冊失敗!",
            text: this.errorMsg,
          });
        }
      } else {
        console.log("表單無效。請更正錯誤。");
        const firstErrorField = Object.keys(this.errorMessage).find(field => this.errorMessage[field] !== "");
        if (firstErrorField) {
          this.$refs[firstErrorField].$el.focus();
        }
      }
    }
}
}
</script>

<template>
    <section class="section section-register">
        <div class="container">
            <div class="register-box row">
                <div class="register-txt col-12 col-md-7 col-lg-6">
                    <div class="register-login ">
                        <div class="from-group">
                            <label>會員姓名</label>
                            <input type="text" maxlength="20" placeholder="請輸入姓名"
                            @blur="checkName" 
                            v-model="name">
                            <div class="registererror"><span>{{ errorMessage.name }}</span></div>
                        </div>
                        <div class="from-group">
                            <label>會員帳號</label>
                            <input type="text" name="" id="" maxlength="20" placeholder="請輸入帳號" @blur="checkAccount" 
                            v-model="account">
                            <div class="registererror"><span>{{ errorMessage.account }}</span></div>
                        </div>
                        <div class="from-group">
                            <label>會員密碼</label>
                            <input type="text" name="" id="" maxlength="20" 
                            placeholder="請輸入至少英文加數字4碼"
                            @blur="checkPassword"
                            v-model="password">
                            <div class="registererror"><span>{{ errorMessage.password }}</span></div>
                        </div>
                        <div class="from-group">
                            <label>確認密碼</label>
                            <input type="text" name="" id="" maxlength="20" placeholder="再輸入一次密碼" @blur="checkConfirmPassword"
                            v-model="confirmPassword">
                            <div class="registererror"><span>{{ errorMessage.confirmPassword }}</span></div>
                        </div>
                        <div class="from-group">
                            <label>電話號碼</label>
                            <input type="tel" name="" id="" maxlength="10" placeholder="請輸入電話"
                            @blur="checkPhone"
                            v-model="phone">
                            <div class="registererror"><span>{{ errorMessage.phone }}</span></div>
                        </div>
                        <div class="from-group ">
                            <label>會員信箱</label>
                            <input type="email" name="" id="" placeholder="請輸入信箱"
                            @blur="checkEmail" v-model="email">
                            <div class="registererror"><span>{{ errorMessage.email }}</span></div>
                        </div>
                        <div class="from-group ">
                            <label>會員地址</label>
                            <input type="text" name="" id="" placeholder="請輸入地址"
                            @blur="checkAddress" v-model="address">
                            <div class="registererror"><span>{{ errorMessage.address }}</span></div> 
                        </div>
                        <button type="submit" @click="handleSubmit">立即註冊</button>
                        <div class="other-login">
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
                <div class="register-box-img col-12 col-md-5 col-lg-6">
                    <div class="register-logo-box">
                        <div class="img">
                            <img src="/img/member/logo.png" alt="logo">
                        </div>
                        <span>潔淨海洋&emsp;綠色明天</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

