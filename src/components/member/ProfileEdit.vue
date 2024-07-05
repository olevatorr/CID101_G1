<template>
    <div class="profile-txt">
        <h1>會員專區</h1>
        <h2>會員資料修改</h2>
        <form @submit.prevent="updateProfile">
            <ul>
                <li v-for="field in fields" :key="field.key">
                    <label :for="field.key">{{ field.label }}</label>
                    <input :type="field.type" :id="field.key" v-model="formData[field.key]"
                        :maxlength="field.maxlength">
                </li>
            </ul>
            <div class="store">
                <button type="submit">儲存變更</button>
                <button type="button" @click="resetForm">取消變更</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
    props: {
        member: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const fields = [
            { key: 'U_NAME', label: '會員姓名', type: 'text', maxlength: 20 },
            { key: 'U_ACCOUNT', label: '會員帳號', type: 'text', maxlength: 20 },
            { key: 'U_EMAIL', label: '會員信箱', type: 'email' },
            { key: 'U_PHONE', label: '會員電話', type: 'tel', maxlength: 10 },
            { key: 'U_ADDRESS', label: '會員地址', type: 'text' }
        ]

        const formData = reactive({})

        const resetForm = () => {
            Object.assign(formData, props.member)
        }

        const updateProfile = () => {
            // Here you would typically make an API call to update the profile
            console.log('Updating profile with:', formData)
            // After successful update, you might want to emit an event to the parent component
            // this.$emit('profile-updated', formData)
        }

        onMounted(() => {
            resetForm()
        })

        return {
            fields,
            formData,
            resetForm,
            updateProfile
        }
    }
}
</script>