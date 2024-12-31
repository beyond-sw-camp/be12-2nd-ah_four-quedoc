<!-- 비밀번호 확인하는 vue-->

<template>
    <v-dialog v-model="dialogInfo.toggle" persistent>
        <!-- 비밀번호 변경 -->
        <div class="popup-wrap member medium fixed">
            <div class="popup-head">
                <h3 class="h-title">비밀번호 확인</h3>
            </div>
            <v-form ref="memPsnInfoPutForm" autocomplete="off" class="form-wrap" fast-fail validate-on="blur lazy"
                @keypress.enter.prevent="submitForm" @submit.prevent="submitForm">
                <div class="popup-cont">
                    <div class="form-box form-type">
                        <div class="form-group">
                            <div class="ele-tit">
                                <v-label>비밀번호 확인</v-label>
                            </div>
                            <div class="input-wrap">
                                <v-text-field ref="curPinRef" v-model="memPsnInfoPutInfo.curPin" :rules="curPinRules"
                                    aria-label="비밀번호" clearable color="primary" density="comfortable"
                                    hide-details="none" maxlength="20" name="curPin" placeholder="비밀번호 입력" required
                                    title="현재 비밀번호 입력" type="password" variant="outlined"></v-text-field>
                            </div>
                            <p class="text-tip error">{{ memInfoErrorObject['curPin']?.errorMessage }}</p>
                        </div>
                    </div>
                    <div class="btn-popwrap">
                        <v-btn :disabled="formCntrObj['submitBtn'].disabled" class="default" color="primary"
                            rounded="lg" size="x-large" type="submit" variant="flat">
                            확인
                        </v-btn>
                    </div>
                </div>

                <div class="popup-foot">
                    <div class="btn-popwrap">
                        <v-btn :disabled="formCntrObj['submitBtn'].disabled" class="default" color="primary"
                            rounded="lg" size="x-large" type="submit" variant="flat">
                            확인
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
</template>

<script setup>
import { onMounted, onUpdated, reactive, ref } from 'vue'
import commonUtil from '../../../utils/commonUtil'
import useAuthStore from '../../../stores/useAuthStore'

const loginStore = useAuthStore();

//에러 객체 정보 객체
const memInfoErrorObject = reactive({})

//폼 정보 객체
const memPsnInfoPutForm = ref()

//defineModel 정의
const dialogInfo = defineModel('dialogInfo', { type: Object, default: () => ({ toggle: true }) })

//defineEmits 정의
const emits = defineEmits(['confirmEvent'])

const curPinRef = ref()

// 초기설정
onMounted(() => { })

//회원가입(개인사용자) 본인확인 정보 객체
const memPsnInfoPutInfo = reactive({
    curPin: '' //현재비밀번호
})

/**
 * 폼 컨트롤 객체
 * 버튼 활성화 및 텍스트를 제어한다.
 */
const formCntrObj = reactive({
    submitBtn: { disabled: true }
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
    (value) => {
        if (value) {
            console.log(value)
            console.log(loginStore.getPw());
            //다음 버튼 활성화
            if (value === loginStore.getPw()) {
                formCntrObj['submitBtn'].disabled = false
                return true
            }
            else {
            }
           return true;
        } else {
            memInfoErrorObject['curPin'].errorMessage = '비밀번호를 입력해주세요.'
            return false
        }
    }
])

/**
 * 폼 서브밋
 *
 * 저장소 객체에 존재하는 키에 대응하는 값을 본인확인 객체 값으로 변경한다.
 * 서비스이용동의 화면으로 이동한다.
 */
const submitForm = async () => {
    if (memPsnInfoPutInfo.curPin === '') {
        memInfoErrorObject['curPin'].errorMessage = '비밀번호를 입력해주세요.'
        return false
    }

    const { valid } = await memPsnInfoPutForm.value.validate()

    //에러 메시지 출력
    commonUtil.selectErrorMessages(memPsnInfoPutForm, memInfoErrorObject)

    if (valid) {
        //API: 회원가입(개인사용자)
        emits('confirmEvent', 'U')
    }

    return true
}

/**
 * 컴포넌트가 업데이트된 후 실행
 *
 * 객체를 초기화한다.
 */

onUpdated(() => {
    if (memPsnInfoPutForm.value) commonUtil.initErrorMessages(memPsnInfoPutForm, memInfoErrorObject)
    memPsnInfoPutInfo.curPin = ''
    curPinRef.value?.focus()
})
</script>
<style scoped>
@import '../../../styles/pwdPop.css';

.v-btn--size-default {
    font-size: 1.4rem;
}
</style>
