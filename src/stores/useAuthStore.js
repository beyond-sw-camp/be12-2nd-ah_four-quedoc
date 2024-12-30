import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';


const useAuthStore = defineStore('login',()=> {

    const loginOrNot = ref(false);

    const uInfo =reactive({
        name: "",
        email: "",
        hon:"",
        userType: ""
    });
    function setInfo(info) {
        uInfo.name = info.name;
        uInfo.email = info.email;
        uInfo.hon = info.phoneNumber;
        uInfo.userType = info.customerTypeCode;
    }
    function getName() {
        return uInfo.name;
    }
    function getEmail() {
        return uInfo.email;
    }
    function getUserType() {
        return uInfo.userType;
    }
    function setLogin(value) {
        loginOrNot.value = value; 
    }
    function getHon() {
        return uInfo.hon;
    }
    function getLogin() {
        return loginOrNot.value;
    }   
    return { loginOrNot,uInfo, getLogin,getName,getUserType,setInfo,getEmail,getHon,setLogin};
},{
    persist: {
        enabled: true,  // 영속화 활성화
        strategies: [
            {
                storage: localStorage,  // 데이터를 저장할 저장소 (localStorage 또는 sessionStorage)
                paths: ['loginOrNot', 'uInfo']  // 저장할 상태 항목 (여기서는 loginOrNot만 저장)
            }
        ]
    }
})
/*
const userInfo = defineStore('info',(info)=> {
    const uInfo = {
        name: info.name
    
    }
    function getName() {
        return uInfo.name;
    }
},{
    persist: {
        enabled: true,  // 영속화 활성화
        strategies: [
            {
                storage: localStorage,  // 데이터를 저장할 저장소 (localStorage 또는 sessionStorage)
                paths: ['info']  // 저장할 상태 항목 (여기서는 loginOrNot만 저장)
            }
        ]
    }
})*/
export default  useAuthStore;