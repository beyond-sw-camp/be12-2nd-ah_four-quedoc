

const memPsnRegReq = async (req) => {
    //요청 정보
    const memPsnInfo = {
        cusNm: req.nm,
        vrfRqSsn: `${req.bdy}${req.sex}`,
        hon: req.hon,

        clnEmAr: `${req.em}${'@'}${req.dns}`,
        pin: req.pin1,

        rePin: req.pin2,
        cusTcd: req.clnTcd,

        etkEmAr: req.clnTcd === 'U' ? '' : `${req.em}${'@'}${req.dns}`
    }

    //결과
    let data = {}

    //전송데이터 조회

    //API 호출
    await $axios
        .post('/api/v1/user/join', memPsnInfo)
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
export default {memPsnRegReq} 