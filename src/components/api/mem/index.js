
import { getCurrentInstance } from 'vue';
const login = async (proxy, ui) => {
    const loginUserInfo = {
        acc: ui.acc, //이메일주소
        pin: ui.pin, //비밀번호
        ecrPin: '', //암호화비밀번호
    }
    let data = {}
   
    await proxy.$axios
        .post('http://localhost:8080/api/data', loginUserInfo)
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
export default { login} 