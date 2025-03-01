
import axios from 'axios';
import HspDt from '../../hsp/hsp-dt.vue';

const login = async (ui) => {
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
const signUp = async (ui) => {
    console.log(ui);
    const signUpUserInfo = {
        email: ui.em+"@"+ui.dns,
        name: ui.nm,
        password: ui.pin1,
        nickname: ui.nick,
        birthDate: ui.bdy,
        phoneNumber: ui.hon,
        customerTypeCode: ui.clnTcd
    }
    let data = {}
   
    await axios
        .post('/api/user/signup', signUpUserInfo)
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
const update = async (ui) => {
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

const getHsp = async () => {
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
const registerFav = async (fav) => {
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
const registerHsp = async (Hsp) => {
    let data = {};
    console.log(Hsp);
    await axios
    .post('/api/hospital/registerTest',Hsp)
    .then((res)=>{
        data = res.data;
    })
    .catch((error)=>{
        data=error.data;
    })
    return data;
}
export default { login,signUp,update,getHsp,registerFav,registerHsp} 