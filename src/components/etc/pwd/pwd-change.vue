<!-- 비밀번호 변경하는 vue-->
<template>
    <v-dialog v-model="dialogInfo.toggle" persistent>
        <!-- 비밀번호 변경 -->
        <div class="popup-wrap member medium fixed">
            <div class="popup-head">
                <h3 class="h-title">비밀번호 변경</h3>
            </div>
            <v-form
                ref="memPsnInfoPutForm"
                autocomplete="off"
                class="form-wrap"
                fast-fail
                validate-on="input lazy"
                @keypress.enter.prevent
                @submit.prevent="submitForm"
            >
                <div class="popup-cont">
                    <div class="form-box form-type">
                        <div class="form-group">
                            <div class="ele-tit">
                                <v-label>현재 비밀번호</v-label>
                            </div>
                            <div class="input-wrap">
                                <v-text-field
                                    ref="curPinRef"
                                    v-model="memPsnInfoPutInfo.curPin"
                                    :rules="curPinRules"
                                    aria-label="비밀번호"
                                    clearable
                                    color="primary"
                                    density="comfortable"
                                    hide-details="none"
                                    maxlength="20"
                                    name="curPin"
                                    placeholder="비밀번호 입력"
                                    required
                                    title="현재 비밀번호 입력"
                                    type="password"
                                    variant="outlined"
                                ></v-text-field>
                            </div>

                            <p class="text-tip error">{{ memInfoErrorObject['curPin']?.errorMessage }}</p>
                        </div>
                        <div class="form-group">
                            <div class="ele-tit">
                                <v-label>새 비밀번호</v-label>
                            </div>
                            <div class="input-wrap">
                                <v-text-field
                                    ref="pin1Ref"
                                    v-model="memPsnInfoPutInfo.pin1"
                                    :rules="pin1Rules"
                                    aria-label="비밀번호"
                                    clearable
                                    color="primary"
                                    density="comfortable"
                                    hide-details="none"
                                    maxlength="20"
                                    name="pin1"
                                    placeholder="비밀번호 입력"
                                    required
                                    title="새 비밀번호 입력"
                                    type="password"
                                    variant="outlined"
                                ></v-text-field>
                            </div>
                            <div class="desc text-14">
                                {{ messageUtil.getMessage('COM00003') }}
                            </div>
                            <p class="text-tip error">{{ memInfoErrorObject['pin1']?.errorMessage }}</p>
                        </div>
                        <div class="form-group">
                            <div class="ele-tit">
                                <v-label>새 비밀번호 확인</v-label>
                            </div>
                            <div class="input-wrap">
                                <v-text-field
                                    ref="pin2Ref"
                                    v-model="memPsnInfoPutInfo.pin2"
                                    :rules="pin2Rules"
                                    aria-label="비밀번호 확인"
                                    clearable
                                    color="primary"
                                    density="comfortable"
                                    hide-details="none"
                                    maxlength="20"
                                    name="pin2"
                                    placeholder="비밀번호 재입력"
                                    required
                                    title="새 비밀번호 재입력"
                                    type="password"
                                    variant="outlined"
                                ></v-text-field>
                            </div>
                            <p class="text-tip error">{{ memInfoErrorObject['pin2']?.errorMessage }}</p>
                        </div>
                    </div>
                    <div class="btn-popwrap">
                        <v-btn
                            :disabled="formCntrObj['submitBtn'].disabled"
                            class="default"
                            color="primary"
                            rounded="lg"
                            size="x-large"
                            type="submit"
                            variant="flat"
                        >
                            비밀번호 변경
                        </v-btn>
                    </div>
                </div>

                <div class="popup-foot">
                    <div class="btn-popwrap">
                        <v-btn
                            :disabled="formCntrObj['submitBtn'].disabled"
                            class="default"
                            color="primary"
                            rounded="lg"
                            size="x-large"
                            type="submit"
                            variant="flat"
                        >
                            비밀번호 변경
                        </v-btn>
                    </div>
                </div>
                <v-btn class="btn-popup-close" variant="text" @click="closeBtn">
                    <span class="sr-only">닫기</span>
                </v-btn>
            </v-form>
        </div>
        <!-- // 비밀번호 변경 -->
    </v-dialog>
    <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="closeAlertPop" />
</template>

<script setup>
import { onMounted, onUpdated, reactive, ref, getCurrentInstance } from 'vue'
import commonUtil from '../../../utils/commonUtil'
import validateUtil from '../../../utils/validateUtil'
import messageUtil from '../../../utils/messageUtil'
import popUpAlert from '../pop-up/pop-up-alert.vue'
import api from '../../api/mem'
import useAuthStore from '../../../stores/useAuthStore';


const { proxy } = getCurrentInstance();

const loginStore = useAuthStore();

//에러 객체 정보 객체
const memInfoErrorObject = reactive({})

//폼 정보 객체
const memPsnInfoPutForm = ref()

//defineModel 정의
const dialogInfo = defineModel('dialogInfo', { type: Object, default: () => ({ toggle: true }) })

//defineEmits 정의
const emits = defineEmits(['confirmEvent'])

// 초기설정
onMounted(() => {})

//회원가입(개인사용자) 본인확인 정보 객체
const memPsnInfoPutInfo = reactive({
    email: loginStore.getEmail(),
    curPin: '', //현재비밀번호
    pin1: '', //비밀번호1
    pin2: '' //비밀번호2
})

/**
 * 폼 컨트롤 객체
 * 버튼 활성화 및 텍스트를 제어한다.
 */
const formCntrObj = reactive({
    submitBtn: { disabled: false }
})

//popUpAlert 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: '저장되었습니다.',
    result: false
})

//닫기 버튼 이벤트
const closeBtn = () => {
    //팝업 닫기
    dialogInfo.value.toggle = false
}

/**
 * 현재비밀번호 형식 체크
 */
const curPinRules = ref([
    () => {
        formCntrObj['submitBtn'].disabled = true
        return true
    },
    (value) => {
        if (value) {
            memInfoErrorObject['curPin'].errorMessage = ''
            return true
        } else {
            memInfoErrorObject['curPin'].errorMessage = '현재 비밀번호를 입력해주세요.'
            return false
        }
    },
    (value) => {
        if (validateUtil.password(value)) {
            memInfoErrorObject['curPin'].errorMessage = ''
            return true
        }
    },
    (value) => {
        if (
            validateUtil.password(memPsnInfoPutInfo.curPin) &&
            validateUtil.password(memPsnInfoPutInfo.pin1) &&
            validateUtil.password(memPsnInfoPutInfo.pin2) &&
            memPsnInfoPutInfo.curPin.length >= 8 &&
            memPsnInfoPutInfo.pin1.length >= 8 &&
            memPsnInfoPutInfo.pin2.length >= 8
        ) {
            //다음 버튼 활성화
            formCntrObj['submitBtn'].disabled = false
        }
        return true
    }
])

/**
 * 비밀번호1 형식 체크
 */
const pin1Rules = ref([
    () => {
        formCntrObj['submitBtn'].disabled = true
        return true
    },
    (value) => {
        if (value) {
            memInfoErrorObject['pin1'].errorMessage = ''
            return true
        } else {
            memInfoErrorObject['pin1'].errorMessage = messageUtil.getMessage('COM00003')
            return false
        }
    },
    (value) => {
        if (validateUtil.password(value)) {
            memInfoErrorObject['pin1'].errorMessage = ''
            return true
        }
    },
    (value) => {
        if (
            validateUtil.password(memPsnInfoPutInfo.curPin) &&
            validateUtil.password(memPsnInfoPutInfo.pin1) &&
            validateUtil.password(memPsnInfoPutInfo.pin2) &&
            memPsnInfoPutInfo.curPin.length >= 8 &&
            memPsnInfoPutInfo.pin1.length >= 8 &&
            memPsnInfoPutInfo.pin2.length >= 8
        ) {
            //다음 버튼 활성화
            formCntrObj['submitBtn'].disabled = false
        }
        return true
    }
])

/**
 * 비밀번호2 형식 체크
 */
const pin2Rules = ref([
    () => {
        formCntrObj['submitBtn'].disabled = true
        return true
    },
    (value) => {
        if (value) {
            memInfoErrorObject['pin2'].errorMessage = ''
            return true
        } else {
            memInfoErrorObject['pin2'].errorMessage = messageUtil.getMessage('COM00003')
            return false
        }
    },
    (value) => {
        if (validateUtil.password(value)) {
            memInfoErrorObject['pin2'].errorMessage = ''
            return true
        }
    },
    (value) => {
        if (memPsnInfoPutInfo.pin1 === memPsnInfoPutInfo.pin2) {
            memInfoErrorObject['pin2'].errorMessage = ''
            return true
        } else {
            memInfoErrorObject['pin2'].errorMessage =
                '비밀번호가 일치하지 않습니다. 위 입력 비밀번호와 동일하게 입력해 주세요.'
            return false
        }
    },
    (value) => {
        if (
            validateUtil.password(memPsnInfoPutInfo.curPin) &&
            validateUtil.password(memPsnInfoPutInfo.pin1) &&
            validateUtil.password(memPsnInfoPutInfo.pin2) &&
            memPsnInfoPutInfo.curPin.length >= 8 &&
            memPsnInfoPutInfo.pin1.length >= 8 &&
            memPsnInfoPutInfo.pin2.length >= 8
        ) {
            //다음 버튼 활성화
            formCntrObj['submitBtn'].disabled = false
        }
        return true
    }
])

/**
 * 폼 서브밋
 *
 * 저장소 객체에 존재하는 키에 대응하는 값을 본인확인 객체 값으로 변경한다.
 * 서비스이용동의 화면으로 이동한다.
 */
const submitForm = async () => {
    const { valid } = await memPsnInfoPutForm.value.validate()

    if (!validateUtil.password(memPsnInfoPutInfo.pin1)) {
        memInfoErrorObject['pin1'].errorMessage = messageUtil.getMessage('COM00003')
        return false
    }
    if (!validateUtil.password(memPsnInfoPutInfo.pin2)) {
        memInfoErrorObject['pin2'].errorMessage = messageUtil.getMessage('COM00003')
        return false
    }

    if (memPsnInfoPutInfo.pin1 != memPsnInfoPutInfo.pin2) {
        memInfoErrorObject['pin2'].errorMessage =
            '비밀번호가 일치하지 않습니다. 입력하신 비밀번호와 동일하게 입력해 주세요'
        return false
    }

    //에러 메시지 출력
    commonUtil.selectErrorMessages(memPsnInfoPutForm, memInfoErrorObject)

    if (valid) {
        //API: 회원가입(개인사용자)
        
        const data = await api.update(proxy,memPsnInfoPutInfo);
        if(data) {
            popUpAlertInfo.toggle = true
            popUpAlertInfo.result = true
            popUpAlertInfo.text = '비밀번호가 변경 되었습니다.'
            return true
        } else {
            popUpAlertInfo.toggle = true
            popUpAlertInfo.result = true
            popUpAlertInfo.text = '변경 안됐습니다.'
            return false
        }
    }

    return false
}

/**
 * 비밀번호 변경 팝업창 닫기
 */
const closeAlertPop = () => {
    emits('confirmEvent')
}

/**
 * 컴포넌트가 업데이트된 후 실행
 *
 * 객체를 초기화한다.
 */

onUpdated(() => {
    if (memPsnInfoPutForm.value) commonUtil.initErrorMessages(memPsnInfoPutForm, memInfoErrorObject)

    memPsnInfoPutInfo.curPin = ''
    memPsnInfoPutInfo.pin1 = ''
    memPsnInfoPutInfo.pin2 = ''
})
</script>
<style scoped>
@import '../../../styles/pwdPop.css';
.v-btn--size-default {
    font-size: 1.4rem;
}

</style>
