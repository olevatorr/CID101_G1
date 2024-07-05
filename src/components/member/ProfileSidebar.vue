<template>
    <div class="profile-box col-12 col-sm-4 col-md-3">
        <div class="avatar">
            <img v-if="member" :src="imageSrc" alt="User Avatar" id="image" />
            <input type="file" id="theFile" @change="$emit('file-change', $event)" ref="fileInput">
            <button @click="$refs.fileInput.click()">Upload</button>
            <p>{{ member?.U_NAME }}</p>
        </div>

        <div class="profile-button">
            <button v-for="section in sections" :key="section.value" class="btn"
                @click="$emit('change-section', section.value)">
                {{ section.label }}
            </button>
            <button class="btn logouts" @click="$emit('logout')">會員登出</button>
        </div>

        <select v-model="selectedOption" @change="$emit('change-section', selectedOption)" class="profile-pets">
            <option v-for="section in sections" :key="section.value" :value="section.value">
                {{ section.label }}
            </option>
        </select>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        member: Object,
        imageSrc: String
    },
    emits: ['file-change', 'logout', 'change-section'],
    setup() {
        const selectedOption = ref('profile')

        const sections = [
            { value: 'profile', label: '會員資料修改' },
            { value: 'password', label: '密碼修改' },
            { value: 'activity', label: '活動查詢' },
            { value: 'orders', label: '訂單查詢' },
            { value: 'donations', label: '捐款查詢' },
            { value: 'favorites', label: '商品收藏' }
        ]

        return {
            selectedOption,
            sections
        }
    }
}
</script>