<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import { useSharesStore } from '@/stores/shares.js'
import axios from 'axios';

const shares = useSharesStore()
const { showReportModal, reportDetails } = storeToRefs(shares)

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
  console.log(reportDetails.value);
  try {
    if (!selectedReason.value) {
      showWarning.value = true
    } else {
      showReportModal.value = false;
      const updateData = {
        ER_Origin: selectedReason.value,
        F_ID: reportDetails.value.F_ID,
        U_ID: reportDetails.value.U_ID,
      };
      console.log(reportDetails);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedReportAdd.php`, updateData)
      if (!response.error) {
        Swal.fire({
          icon: 'success',
          title: '檢舉成功提交',
          text: '您的檢舉已成功提交，我們會進行審核。',
          className: 'reportSubmission'
        })
        closeShareModal()
      }
    }
  } catch (error) {
    console.error('檢舉提交失敗:', error);
  }
}


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
