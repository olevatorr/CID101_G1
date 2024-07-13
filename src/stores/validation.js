import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation',{
  state: () => ({
    errors: {},
    fields: {
      account: '',
      name: '',
      email: '',
      newPassword: '',
      confirmPassword: '',
      phone: '',
      address: ''
    }
  }),
  actions: {
    validateField(field) {
      const validators = {
        account: () => {
          const accountRegex = /^[a-zA-Z0-9]{4,10}$/;
          if (!this.fields.account) {
            return '*請輸入帳號';
          } else if (!accountRegex.test(this.fields.account)) {
            return '*帳號格式不正確，應為4-10位字母加數字';
          }
          return '';
        },
        name: () => {
          return !this.fields.name ? '*請輸入會員姓名' : '';
        },
        email: () => {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!this.fields.email) {
            return '*請輸入信箱';
          } else if (!emailPattern.test(this.fields.email)) {
            return '*信箱格式不正確';
          }
          return '';
        },
        newPassword: () => {
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;
          if (!this.fields.newPassword) {
            return '*請輸入新密碼';
          } else if (!passwordRegex.test(this.fields.newPassword)) {
            return '*請輸入至少英文加數字4碼';
          }
          return '';
        },
        confirmPassword: () => {
          if (!this.fields.confirmPassword) {
            return '*請再輸入一次密碼';
          } else if (this.fields.confirmPassword !== this.fields.newPassword) {
            return '*密碼不匹配';
          }
          return '';
        },
        phone: () => {
          const phonePattern = /^[0-9]{10}$/;
          if (!this.fields.phone) {
            return '*請輸入電話';
          } else if (!phonePattern.test(this.fields.phone)) {
            return '*電話號碼格式不正確';
          }
          return '';
        },
        address: () => {
          return !this.fields.address ? '*請輸入地址' : '';
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
    },
    setField(field, value) {
      this.fields[field] = value;
    }
  }
});
