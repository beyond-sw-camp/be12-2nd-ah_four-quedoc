/**
 * 회원가입-개인 정보 저장소 객체
 *
 * 회원가입-개인 정보를 저장소에 저장한다.
 */
import { defineStore } from 'pinia'

//로그인 정보 객체
const useJoinPsnCusStore = defineStore('joinPsn', () => {
    //회원가입-개인 정보 객체
    //1단계 모두 동일함
    //2단계 모두 동일함
    //3단계만 개인/개인사업자/법인사업자 항목이 조금씩 다름.
    let joinPsnInfo = {
        nm: '', //이름(1단계)
        nick: '', //닉네임(1단계)
        bdy: '', //생년월일(주민등록번호 앞6자리)(1단계)
        hon: '', //휴대전화번호(1단계)

        em: '', //이메일(3단계)(공통)
        dns: '', //이메일 도메인명(3단계)(공통)
        pin1: '', //패스워드1(3단계)(공통)
        pin2: '', //패스워드2(3단계)(공통)

        bsNum: '', //사업자번호(사업자만)

        clnTcd: '', //고객유형코드(고객유형코드, U: 일반사용자, B: 개인사업자)
    }

    /**
     * 회원가입-개인 정보 객체 획득
     *
     * 회원가입-개인 정보 객체를 획득한다.
     * @returns joinPsnInfo
     */
    function getJoinPsnCusStore() {
        return joinPsnInfo
    }

    /**
     * 회원가입-개인 정보 객체 설정
     *
     * 회원가입-개인 정보 객체를 설정한다.
     * @param {*} source
     */
    function setJoinPsnCusStore(source) {
        Object.assign(joinPsnInfo, source)
    }

    /**
     * 회원가입-개인 정보 객체 초기화
     *
     * 회원가입-개인 정보 객체를 초기화한다.
     */
    function initJoinPsnCusStore() {
        for (const [key, value] of Object.entries(joinPsnInfo)) {
            if (typeof value === 'string') {
                joinPsnInfo[key] = ''
            } else if (typeof value === 'boolean') {
                joinPsnInfo[key] = false
            }
        }
    }

    return { getJoinPsnCusStore, setJoinPsnCusStore, initJoinPsnCusStore }
})

export default useJoinPsnCusStore
