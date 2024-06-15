import { reactive } from 'vue';

export const store = reactive({
    isLoging: false,
    memberAvatar: '',
    memberName: '',
    member: null,
});

export const login = (member) => {
    store.member = member
    store.isLoging = true;
    store.memberAvatar = member.U_AVATAR;
    store.memberName = member.U_NAME;
}
export const logout = (member) => {
    store.member = member
    this.isLoging = false;
    this.memberAvatar = '';
    this.memberName = '';
}
