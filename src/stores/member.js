import { defineStore } from 'pinia'
import { googleLogout, googleSdkLoaded } from 'vue3-google-login'
import Cookies from 'js-cookie'

export const useMemberStore = defineStore('member', {
  state: () => ({
    //判斷是否登入
    isLogging: false,
    //存放登入成功的json資料
    member: {}
  }),
  actions: {
    login(member) {
      console.log(member)
        this.member = member
        this.isLogging = true
        // 設置 Cookie，有效期為 7 天
        const memberdata = JSON.stringify(this.member)
        Cookies.set('name', memberdata, { expires: 7 })
    },
    logout() {
      googleLogout()
      googleSdkLoaded((google) => {
        google.accounts.id.revoke(this.member.email)
      })
      this.member = null
      this.isLogging = false
    // 清除 Cookie
    Cookies.remove('name')
    },
    getCookie() {
      // 獲取 Cookie
      const cookieValue = Cookies.get('name')
      if (cookieValue) {
          try {
              // 如果 Cookie 存在，將其解析為 JSON 對象並更新 member 和 isLogging
              this.member = JSON.parse(cookieValue)
              this.isLogging = true
              console.log('Cookie found:', this.member)
          } catch (error) {
              console.error('Failed to parse JSON from cookie:', error)
              // 如果解析失敗，重置 member 並設置 isLogging 為 false
              this.member = {}
              this.isLogging = false
          }
      } else {
          // 如果 Cookie 不存在，設置 isLogging 為 false
          this.member = {}
          this.isLogging = false
          console.log('No Cookie found for "name"')
      }
  },
    updateMember(updates) {
      if (this.member) {
        // 更新 member 對象的屬性
        Object.assign(this.member, updates);
        // 更新 Cookie
        const memberdata = JSON.stringify(this.member);
        Cookies.set('name', memberdata, { expires: 7 });
        console.log('Member updated and cookie set:', this.member);
      }
    }
    
  }
})
