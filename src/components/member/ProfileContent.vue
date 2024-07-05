<template>
    <div class="profile-content col-12 col-sm-8 col-md-8">
        <component :is="currentComponent" 
        :member="member" 
        :paginatedData="paginatedData" 
        :totalPages="totalPages"
        :currentPage="currentPage" @go-to-page="$emit('go-to-page', $event)"
        @toggle-shop-table="$emit('toggle-shop-table', $event)" :isShopTableVisible="isShopTableVisible"
        :currentPoId="currentPoId" :filteredShoplists="filteredShoplists" />
    </div>
</template>

<script>
import { computed } from 'vue'
import ProfileEdit from './ProfileEdit.vue'
import PasswordEdit from './PasswordEdit.vue'
import ActivityList from './ActivityList.vue'
import OrderList from './OrderList.vue'
import DonationList from './DonationList.vue'
import FavoriteList from './FavoriteList.vue'

export default {
    components: {
        ProfileEdit,
        PasswordEdit,
        ActivityList,
        OrderList,
        DonationList,
        FavoriteList
    },
    props: {
        currentSection: String,
        member: Object,
        paginatedData: Array,
        totalPages: Number,
        currentPage: Number,
        isShopTableVisible: Boolean,
        currentPoId: String,
        filteredShoplists: Array
    },
    emits: ['go-to-page', 'toggle-shop-table'],
    setup(props) {
        const currentComponent = computed(() => {
            switch (props.currentSection) {
                case 'profile': return 'ProfileEdit'
                case 'password': return 'PasswordEdit'
                case 'activity': return 'ActivityList'
                case 'orders': return 'OrderList'
                case 'donations': return 'DonationList'
                case 'favorites': return 'FavoriteList'
                default: return 'ProfileEdit'
            }
        })

        return {
            currentComponent
        }
    }
}
</script>