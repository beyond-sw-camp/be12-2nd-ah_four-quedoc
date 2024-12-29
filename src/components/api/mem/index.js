
import { getCurrentInstance } from 'vue';
const login = async (proxy, ui) => {
    const loginUserInfo = {
        acc: ui.acc, //이메일주소
        pin: ui.pin, //비밀번호
        ecrPin: '', //암호화비밀번호
    }
    let data = {}
   
    await proxy.$axios
        .post('http://localhost:8080/api/user/login', loginUserInfo)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}
const signUp = async (proxy, ui) => {
    const signUpUserInfo = {
        email: ui.em+"@"+ui.dns,
        name: ui.nm,
        password: ui.pin1,
        nickname: ui.nick,
        birthDate: "010101",
        gender: ui.sex,
        phoneNumber: ui.hon,
        customerTypeCode: ui.clnTcd,
        emailDomain: ui.dns
    }
    let data = {}
   
    await proxy.$axios
        .post('http://localhost:8080/api/user/register', signUpUserInfo)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}
const update = async (proxy, ui) => {
    const updateInfo = {
        email: ui.email,
        pass: ui.curPin,
        newpass: ui.pin1
    }
    let data = {}
   
    await proxy.$axios
        .post('http://localhost:8080/api/user/update', updateInfo)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}
export default { login,signUp,update} 