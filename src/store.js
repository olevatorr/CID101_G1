import { reactive } from 'vue';

export const store = reactive({
    isLoging: false,
    memberAvatar: '',
    memberName: '',
    member: null,
});


export const fetchProfile = () => {
    const memberName = localStorage.getItem('web_name');
    const memberAvatar = localStorage.getItem('web_img');
    const member = JSON.parse(localStorage.getItem('web_member')); // Fetch the entire member object
    if(memberName){
        store.memberName = memberName
    }
    if(memberAvatar){
        store.memberAvatar = memberAvatar
    }
    store.isLoging = !!memberName && !!memberAvatar;
    if (member) {
        store.memberName = member.U_NAME;
        store.memberAvatar = member.U_AVATAR;
        store.isLoging = true;
        store.member = member;
    } else {
        store.memberName = '';
        store.memberAvatar = '';
        store.isLoging = false;
    }
    
};
export const login = (member) => {
    store.member = member;
    store.isLoging = true;
    store.memberAvatar = member.U_AVATAR;
    store.memberName = member.U_NAME;

    localStorage.setItem('web_name', member.U_NAME);
    localStorage.setItem('web_img', member.U_AVATAR);
    localStorage.setItem('web_member', JSON.stringify(member)); // Store the entire member object
};

export const logout = () => {
    store.member = null;
    store.isLoging = false;
    store.memberAvatar = '';
    store.memberName = '';
    localStorage.removeItem('web_name');
    localStorage.removeItem('web_img');
    localStorage.removeItem('web_member'); // Remove the member object
};
