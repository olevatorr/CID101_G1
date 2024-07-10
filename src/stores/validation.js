import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation', {
  state: () => ({
    errors: {}
  }),
  actions: {
    validateField(field, context) {
      const validators = {
        account: () => {
          const accountRegex = /^[a-zA-Z0-9]{4,10}$/;
          if (!context.account) {
            return '*請輸入帳號';
          } else if (!accountRegex.test(context.account)) {
            return '*帳號格式不正確，應為4-10位字母加數字';
          }
          return '';
        },
        name: () => {
          return !context.name ? '*請輸入會員姓名' : '';
        },
        email: () => {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!context.email) {
            return '*請輸入信箱';
          } else if (!emailPattern.test(context.email)) {
            return '*信箱格式不正確';
          }
          return '';
        },
        newPassword: () => {
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;
          if (!context.newPassword || context.newPassword.trim() === '') {
            return '*請輸入新密碼';
          }
          if (!passwordRegex.test(context.newPassword)) {
            return '*請輸入至少英文加數字4碼';
          }
          return '';
        },
        confirmPassword: () => {
          if (!context.confirmPassword || context.confirmPassword.trim() === '') {
            return '*請再輸入一次密碼';
          } else if (context.confirmPassword !== context.newPassword) {
            return '*密碼不匹配';
          }
          return '';
        },
        phone: () => {
          const phonePattern = /^[0-9]{10}$/;
          if (!context.phone) {
            return '*請輸入電話';
          } else if (!phonePattern.test(context.phone)) {
            return '*電話號碼格式不正確';
          }
          return '';
        },
        address: () => {
          return !context.address ? '*請輸入地址' : '';
        }
      };

      const errorMessage = validators[field]();
      if (errorMessage) {
        this.errors[field] = errorMessage;
      } else {
        delete this.errors[field];
      }
    },
    clearErrors() {
      this.errors = {};
    }
  }
});
