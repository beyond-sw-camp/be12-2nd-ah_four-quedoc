
import axios from 'axios';

const login = async (proxy, ui) => {
    const loginUserInfo = {
        email: ui.acc, //이메일주소
        password: ui.pin, //비밀번호
    }
    let data = {}
    console.log("er"+loginUserInfo.email);
    console.log(loginUserInfo.password);
   
    await axios
        .post('api/user/testLogin', loginUserInfo)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })
        console.log(data);
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
   
    await axios
        .post('api/user/signup', signUpUserInfo)
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
    
    await axios
        .post('api/user/update', updateInfo)
        .then((res) => {
            //성공:
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}

const getHsp = async (proxy) => {
    let data= {};

    await axios
    .get('api/hospitals')
    .then((res)=>{
        data=res.data;
    })
    .catch((error) => {
        data=error.data
    })
    return data;
}
const registerFav = async (proxy,fav) => {
    let data = {};
    console.log(fav);
    await axios
    .post('api/fav/register',fav)
    .then((res)=>{
        data = res.data;
    })
    .catch((error)=>{
        data=error.data;
    })
    return data;
}
export default { login,signUp,update,getHsp,registerFav} 