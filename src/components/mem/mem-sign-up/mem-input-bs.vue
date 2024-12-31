<!--회원가입 2단계 이메일 비밀번호 입력-->
<template>
    <div class="member">
        <div class="member-header">
            <h3 class="h-title">회원가입 (사업자)</h3>
        </div>
        <div class="member-step">
            <div class="step-txt">정보 입력</div>
            <div class="step-flow">
                <ul>
                    <li class="complete"><i>1단계 본인인증</i></li>
                    <li class="current"><i>2단계 정보입력</i></li>
                    <li><i>3단계 가입완료</i></li>
                </ul>
                <span class="blind">현재 2단계 진행중</span>
            </div>
        </div>
        <div class="member-text">
            <p class="text">회원가입을 위한 정보를 입력해주세요.</p>
        </div>
        <v-form ref="memPsnInfoPutForm" autocomplete="off" class="form-wrap" fast-fail validate-on="blur lazy"
            @keypress.enter.prevent @submit.prevent="submitForm">
            <div class="form-box">
                <div class="form-group">
                    <div class="ele-tit">
                        <v-label>이메일(아이디)</v-label>
                    </div>
                    <div class="email-wrap">
                        <div class="first">
                            <div class="input-wrap">
                                <v-text-field v-model="memPsnInfoPutInfo.em"
                                    :readonly="formCntrObj['noCertLockEmailSend'].disabled" :rules="validateEm"
                                    aria-label="이메일(아이디)" color="primary" density="comfortable" hide-details="none"
                                    maxlength="30" name="em" placeholder="" required title="이메일(아이디) 숫자 최대 50자리 입력"
                                    variant="outlined" @input="[lowerCase('em', memPsnInfoPutInfo.em)]"></v-text-field>
                            </div>
                        </div>
                        <span class="space">@</span>
                        <div class="last">
                            <div class="input-wrap">
                                <v-text-field v-model="memPsnInfoPutInfo.dns"
                                    :readonly="formCntrObj['noCertLockEmailSend'].disabled" :rules="validateDns"
                                    aria-label="도메인명" color="primary" density="comfortable" hide-details="none"
                                    maxlength="30" name="dns" placeholder="도메인명" required variant="outlined"
                                    @input="[lowerCase('dns', memPsnInfoPutInfo.dns)]"></v-text-field>
                            </div>
                        </div>
                    </div>
                    <p :class="formCntrObj['noStyl'].text">
                        {{ memInfoErrorObject['em']?.errorMessage }}
                    </p>
                </div>

                <div class="form-group">
                    <div class="ele-tit">
                        <v-label>비밀번호</v-label>
                    </div>
                    <div class="input-wrap">
                        <v-text-field v-model="memPsnInfoPutInfo.pin1" :rules="pinRules" aria-label="비밀번호"
                            color="primary" density="comfortable" hide-details="none" maxlength="20" name="pin1"
                            placeholder="비밀번호 입력" required title="비밀번호 입력" type="password" variant="outlined"
                            @input="submitBtnAct()"></v-text-field>
                    </div>

                    <p class="text-tip message">
                        비밀번호는 숫자,영문,특수문자( !@#$%^&*() )를 조합해 8~20자로 생성해주세요.
                    </p>

                    <p class="text-tip error">{{ memInfoErrorObject['pin1'].errorMessage }}</p>
                </div>
                <div class="form-group">
                    <div class="ele-tit">
                        <v-label>비밀번호 확인</v-label>
                    </div>
                    <div class="input-wrap">
                        <v-text-field v-model="memPsnInfoPutInfo.pin2" :rules="pinChkRules" aria-label="비밀번호 확인"
                            color="primary" density="comfortable" hide-details="none" maxlength="20" name="pin2"
                            placeholder="비밀번호 재입력" required title="비밀번호 재입력" type="password" variant="outlined"
                            @input="submitBtnAct()"></v-text-field>
                    </div>
                    <p class="text-tip error">{{ memInfoErrorObject['pin2'].errorMessage }}</p>
                </div>
                <div class="form-group">
                    <div class="ele-tit">
                        <v-label>사업자번호</v-label>
                    </div>
                    <div class="input-wrap">
                        <v-text-field v-model="memPsnInfoPutInfo.bsNum" :rules="bsNumChkRules" aria-label="사업자번호 입력"
                            color="primary" density="comfortable" hide-details="none" maxlength="20" name="bsNum"
                            placeholder="- 을 포함해서 입력해주세요" required title="사업자번호 입력" variant="outlined"
                            @input="submitBtnAct()"></v-text-field>
                    </div>
                    <p class="text-tip error">{{ memInfoErrorObject['bsNum'].errorMessage }}</p>
                </div>
            </div>
            <div class="btn-wrap">
                <v-btn :disabled="formCntrObj['submitBtn'].disabled" class="default" color="primary" rounded="lg"
                    size="x-large" type="submit" variant="flat">
                    다음
                </v-btn>
            </div>
        </v-form>
        <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="movePage" />
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref, toRef } from 'vue'
import { useRouter } from 'vue-router'
import useJoinPsnCusStore from '../../../stores/useJoinPsnCusStore'
import popUpAlert from '../../etc/pop-up/pop-up-alert.vue'
import validateUtil from '../../../utils/validateUtil'
import messageUtil from '../../../utils/messageUtil'
import commonUtil from '../../../utils/commonUtil'
import { getCurrentInstance } from 'vue';
import api from '../../api/mem'
const { proxy } = getCurrentInstance();

//라우터 정보 객체
const router = useRouter()

//부모 컴포넌트 통신 객체
const emits = defineEmits(['nextEvent'])


//저장소 정보 객체 획득
const joinPsnCusStore = useJoinPsnCusStore()

//저장소 회원가입-개인 정보 객체 획득
const joinPsnInfo = joinPsnCusStore.getJoinPsnCusStore()


//폼 정보 객체
const memPsnInfoPutForm = ref()

//에러 객체 정보 객체
const memInfoErrorObject = reactive({
    em: { errorMessage: null },
    dns: { errorMessage: null },
    ctsn: { errorMessage: null },
    pin1: { errorMessage: null },
    pin2: { errorMessage: null },
    bsNum: { errorMessage: null }
})

//회원가입(개인) 본인확인 정보 객체
const memPsnInfoPutInfo = reactive({
    em: '', //이메일(아이디)
    dns: '', //도메인명
    ctsn: '', //인증번호
    pin1: '', //비밀번호1
    pin2: '', //비밀번호2
    bsNum: '', //사업자번호 (사업자만)
    ctserverkeyem: '', //인증key(server) 이메일인증
    clnTcd: 'B', //고객유형코드(고객유형코드, U: 일반사용자, B: 사업자)
})

//인증번호 전송 여부
let isSendVerificationNumber = false

//타이머 만료 여부
let isTimerExpiring = false

//인증 종료 여부
let isVerificationEnd = false

//인증번호: 유효시간 정보 객체
let cssnVdInfo = null

/**
 * 폼 컨트롤 객체
 * 버튼 활성화 및 텍스트를 제어한다.
 */
const formCntrObj = reactive({
    noCertLockEmailSend: { disabled: false },
    noCertLockEmailCert: { disabled: false },
    noStyl: { text: 'text-tip error' },
    submitBtn: { disabled: true }
})

//약관동의 팝업 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: '',
    code: null
})

/**
 * 이메일(아이디) 유효성 룰
 *
 * 이메일(아이디) 유효성 룰을 정의한다.
 */
const regexEm = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*$/;
const validateEm = [
    console.log('validateEm'),
    (value) => {
        if (value) {
            if (regexEm.test(value) === false) {
                memInfoErrorObject['em'].errorMessage = '이메일 형식이 올바르지 않습니다.'
                return false;

            } else {
                memInfoErrorObject['em'].errorMessage = null
                return true
            }
        } else {
            memInfoErrorObject['em'].errorMessage = '이메일주소는 필수 입력입니다.'
            return false
        }
    }
]

/**
 * 도메인 유효성 룰
 *
 * 도메인 유효성 룰을 정의한다.
 */
const regexDns = /^(?!:\/\/)([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;
const validateDns = [
    (value) => {
        if (value) {
            if (regexDns.test(value) === false) {

                memInfoErrorObject['em'].errorMessage = '도메인명 형식이 올바르지 않습니다.'
                return false;
            } else {

                memInfoErrorObject['em'].errorMessage = null
                return true
            }
        } else {
            memInfoErrorObject['em'].errorMessage = '도메인명은 필수 입력입니다.'
            return false
        }
    }
]

/**
 * 인증번호 유효성 룰
 *
 * 인증번호 유효성 룰을 정의한다.
 */
const validateCtsn = [
    () => {
        if (isTimerExpiring) {
            memInfoErrorObject['ctsn'].errorMessage = `입력시간을 초과하였습니다. 인증번호 재전송 후 다시 시도해주세요.`
            return false
        } else {
            memInfoErrorObject['ctsn'].errorMessage = null
            return true
        }
    },
    (value) => {
        if (value) {
            memInfoErrorObject['ctsn'].errorMessage = null
            return true
        } else {
            memInfoErrorObject['ctsn'].errorMessage = `인증번호는 필수 입력입니다.`
            return false
        }
    }
]

/**
 * 비밀번호 유효성 룰
 *
 * 비밀번호 유효성 룰을 정의한다.
 */
const regexPin = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,20}$/;
const pinRules = [
    (value) => {
        if (value) {
            if (regexPin.test(value) === false) {
                memInfoErrorObject['pin1'].errorMessage = '비밀번호 형식이 올바르지않습니다.'
                return false;
            } else {
                memInfoErrorObject['pin1'].errorMessage = null
                return true
            }
        } else {
            memInfoErrorObject['pin1'].errorMessage = '비밀번호를 입력해주세요.'
            return false
        }
    }
]

/**
 * 비밀번호 확인 유효성 룰
 *
 * 비밀번호 확인 유효성 룰을 정의한다.
 */
const pinChkRules = [
    (value) => {
        if (value) {
            console.log(value === memPsnInfoPutInfo.pin1)
            if (value === memPsnInfoPutInfo.pin1) {
                memInfoErrorObject['pin2'].errorMessage = null
                return true
            }
            else {
                memInfoErrorObject['pin2'].errorMessage = '비밀번호가 일치하지 않습니다. 입력하신 비밀번호와 동일하게 입력해 주세요.'
                return false

            }
        } else {
            memInfoErrorObject['pin2'].errorMessage = '비밀번호를 한번더 입력해주세요.'
            return false
        }
    }
]


/**
 * 
 * 사업자번호 유효성 룰
 * 
 * 사업자번호 유효성을 정의한다.
 *  
 * */ 
 const regexBsNum = /^\d{3}-\d{2}-\d{5}$/;
const bsNumChkRules = [
    (value) => {
        if (value) {
            if (regexBsNum.test(value) === false) {
                
                memInfoErrorObject['bsNum'].errorMessage = '-를 포함한 올바른 사업자번호를 입력해주세요.'
                return false;
            } else {
                if(isValidBusinessNumber(value)) {
                    memInfoErrorObject['bsNum'].errorMessage = null
                    return true;
                } else {
                    memInfoErrorObject['bsNum'].errorMessage = '올바른 사업자번호가 아닙니다.'
                    return false;
                }
            }
        } else {
            memInfoErrorObject['bsNum'].errorMessage = '사업자번호를 입력해주세요.'
            return false
        }
    }
]

const isValidBusinessNumber = (businessNumber) => {
  // 하이픈 제거
  const sanitized = businessNumber.replace(/-/g, "");
  
  // 숫자 10자리 확인
  if (!/^\d{10}$/.test(sanitized)) return false;

  // 검증 계산
  const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(sanitized[i]) * weights[i];
  }

  // 마지막 계산
  const checkDigit = (10 - ((sum + Math.floor((parseInt(sanitized[8]) * 5) / 10)) % 10)) % 10;
  console.log(checkDigit);
  console.log(sanitized[9]);
  // 마지막 자리와 검증 번호 비교
  return checkDigit === parseInt(sanitized[9]);
}
/**
 * 이메일(아이디) 및 도메인명 입력 이벤트
 *
 * 이메일(아이디) 및 도메인명 입력 이벤트 리스너
 *
 * @params type이 em이면 이메일(아이디), dns이면 도메인명
 */
const lowerCase = (type, value) => {
    if (type === 'em') {
        memPsnInfoPutInfo.em = value.toLowerCase()
        if (memPsnInfoPutInfo.em.length > 30) {
            memPsnInfoPutInfo.em = memPsnInfoPutInfo.em.slice(0, 30)
        }
        return false
    } else {
        memPsnInfoPutInfo.dns = value.toLowerCase()
        if (memPsnInfoPutInfo.dns.length > 30) {
            memPsnInfoPutInfo.dns = memPsnInfoPutInfo.dns.slice(0, 30)
        }
        return false
    }
}

/**
 * 인증번호 입력 이벤트
 *
 * 인증번호 입력 이벤트 리스너
 */
const onlyNum = (value) => {
    //정수값 유효성 검증
    if (!validateUtil.numChk(value) || memPsnInfoPutInfo.ctsn.length > 5) {
        memPsnInfoPutInfo.ctsn = value.replace(/\D/g, '')
        return false
    }
}



/**
 * 유효성 실행
 *
 * 유효성을 실행한다.
 */
const validate = async (name) => {
    const validateObj = memPsnInfoPutForm.value.items.find((element) => element.id === name)

    //유효성 실행
    await validateObj.validate()
}

/**
 * 현재 페이지 이동
 *
 * 현재 페이지로 이동한다.
 */
const movePage = () => {
    //본인인증 만료일 경우 처음화면으로 이동한다.
    if (popUpAlertInfo.code === '41013') {
        //페이지로 이동
        router.go(0)
    } else {
        //값 초기화
        popUpAlertInfo.code = null
    }
}
const validationWithVerificationNumber = async () => {
    let validation = true

    //폼 아이템 검증 배열
    const targets = ['em', 'dns', 'pin1', 'pin2']
    //필수 입력 검증 여부
    validation = await commonUtil.isRequiredInputValidation(memPsnInfoPutForm, targets, memInfoErrorObject)


    return validation
}
/**
 * 비밀번호 및 비밀번호 확인 입력 이벤트
 *
 * 비밀번호 및 비밀번호 확인 입력 이벤트 리스너
 * 다음 버튼 활성화를 제어한다.
 */
const submitBtnAct = async () => {
    const validation = await validationWithVerificationNumber();
    console.log(validation);
    if (validation) {
        formCntrObj['submitBtn'].disabled = false;
    } else {
        formCntrObj['submitBtn'].disabled = true;
    }
    joinPsnCusStore.setJoinPsnCusStore(commonUtil.updateObejctValue(joinPsnInfo, memPsnInfoPutInfo))

        //pinia 초기화전 로그찍기
        const joinPsnInfoReq = joinPsnCusStore.getJoinPsnCusStore()

        console.log('joinPsnInfoReq', joinPsnInfoReq);
}

/**
 * 폼 서브밋
 *
 * 저장소 객체에 존재하는 키에 대응하는 값을 본인확인 객체 값으로 변경한다.
 * 서비스이용동의 화면으로 이동한다.
 */
const submitForm = async () => {

    const { valid } = await memPsnInfoPutForm.value.validate();

    if (!validateUtil.password(memPsnInfoPutInfo.pin1)) {
        memInfoErrorObject['pin1'].errorMessage = messageUtil.getMessage('COM00003')
    }
    if (memPsnInfoPutInfo.pin1 != memPsnInfoPutInfo.pin2) {
        memInfoErrorObject['pin2'].errorMessage =
            '비밀번호가 일치하지 않습니다. 입력하신 비밀번호와 동일하게 입력해 주세요.'
    }

    if (valid) {
        //1단계 내용 pinia 저장
        joinPsnCusStore.setJoinPsnCusStore(commonUtil.updateObejctValue(joinPsnInfo, memPsnInfoPutInfo))

        //pinia 초기화전 로그찍기
        const joinPsnInfoReq = joinPsnCusStore.getJoinPsnCusStore()

        const data = await api.signUp(proxy, joinPsnInfoReq);

        if (data.status === "ok") {
            
        console.log('joinPsnInfoReq', joinPsnInfoReq);
            console.log(data);
            emits('nextEvent', 2)
            return false
        } else {
            //에러 처리
            console.log(data);
            //오류 메시지 출력
        }

    }
}

</script>
