import { defineStore } from 'pinia'
import { ref } from 'vue';


const userAuthStore = defineStore('login',()=> {

    const loginOrNot = ref(false);

    function setLogin(value) {
        loginOrNot.value = value;
    }
    function getLogin() {
        return loginOrNot.value;
    }   
    return { loginOrNot, setLogin,getLogin};
},{
    persist: {
        enabled: true,  // 영속화 활성화
        strategies: [
            {
                storage: localStorage,  // 데이터를 저장할 저장소 (localStorage 또는 sessionStorage)
                paths: ['loginOrNot']  // 저장할 상태 항목 (여기서는 loginOrNot만 저장)
            }
        ]
    }
})

export default userAuthStore;