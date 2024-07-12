<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import { useSharesStore } from '@/stores/shares.js'
import axios from 'axios';
import { useMemberStore } from '@/stores/member'
import { useRouter } from 'vue-router'

const shares = useSharesStore()
const { showReportModal, reportDetails } = storeToRefs(shares)
const memberStore = useMemberStore()
const { isLogging, member } = storeToRefs(memberStore)
const router = useRouter()

// 定義檢舉原因
const reasons = ref([
  { label: '仇恨言論或歧視', value: 0 },
  { label: '侵犯隱私', value: 1 },
  { label: '暴力或威脅', value: 2 },
  { label: '騷擾或霸凌', value: 3 },
  { label: '虛假信息或誤導信息', value: 4 },
  { label: '色情或不當內容', value: 5 },
  { label: '非法活動', value: 6 },
  { label: '垃圾信息或廣告', value: 7 }
])
//存儲選擇的理由
const selectedReason = ref('')
//控制是否顯示警告提示
const showWarning = ref(false)
//每次關閉表單清空紀錄
watch(showReportModal, () => {
  selectedReason.value = ''
  showWarning.value = false
})

////監聽 selectedReason 的變化，如果為空且表單送出，則顯示警告
watch(selectedReason, (newValue) => {
  showWarning.value = newValue === ''
})
// 顯示警告
const submitForm = async () => {
  if(!isLogging.value){
    Swal.fire({
        icon: 'warning',
        title: '需要登入',
        text: '請先登入或加入會員以提交檢舉。',
        className: 'reportSubmission'
      }).then(() => {
        closeShareModal();
        router.push('/Member');
      });
      return
  }
  try {
   
      showReportModal.value = false;
      const updateData = {
        ER_ORIGIN: selectedReason.value,
        F_ID: reportDetails.value.F_ID,
        U_ID: reportDetails.value.U_ID,
        UR_ID: member.value.U_ID
      };
      console.log(reportDetails);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedReportAdd.php`, updateData);
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: '檢舉成功提交',
        text: '您的檢舉已成功提交，我們會進行審核。',
        className: 'reportSubmission'
      }).then(() => {
        shares.fetchselectedShareCardData()
      });
      closeShareModal();
  } catch (error) {
    console.error('檢舉提交失敗:', error);
  }
};



const closeShareModal = () => {
  showReportModal.value = false 
}
</script>
<template>
  <div class="section section-examine" v-if="showReportModal">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="CancelBtn">
          <span @click="closeShareModal">取消</span>
        </div>
        <h2>您檢舉此文章的理由是?</h2>
        <div class="box" v-for="(reason, index) in reasons" :key="index">
          <label :for="'no' + (index + 1)">{{ reason.label }}</label>
          <input type="radio" :name="reason" :id="'no' + (index + 1)" v-model="selectedReason" :value="reason.value" />
        </div>
        <transition name="flashing">
          <div v-if="showWarning" class="warning">*請至少勾選一個選項!</div>
        </transition>
        <button type="submit">送出</button>
      </form>
    </div>
  </div>
</template>
