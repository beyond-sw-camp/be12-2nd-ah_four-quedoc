<!-- 멤버 타입 정하는 뷰 -->
<template>
    <div class="member">
        <div class="member-header">
            <h3 class="h-title">회원가입</h3>
        </div>
        <div class="member-step">
            <div class="step-txt">회원 유형 선택</div>
        </div>
        <div class="member-text">
            <p class="text">사업자 회원의 경우, 승인 전까지 개인회원 등급으로 서비스 이용 가능합니다.</p>
        </div>
        <v-form ref="loginUserForm" fast-fail @submit.prevent="submitForm">
            <v-radio-group v-model="usertype" :rules="validateUserType" class="mb-type-wrap" hide-details="auto">
                <v-radio class="mb-type-radio" label="사업자 회원" value="memPsnEtk">
                    <p class="mb-type-stit">
                        회원 신청 후 관리자의 심사가 필요하며, 사업자등록 증빙 등을 요청드릴 수 있습니다. 
                    </p>
                </v-radio>
                <v-radio class="mb-type-radio" label="개인 회원" value="memPsn">
                    <p class="mb-type-stit">
                        Quedoc의 다양한 서비스를 이용해보세요. 주변병원 조회부터 예약까지 간편하게!
                    </p>
                </v-radio>
            </v-radio-group>
            <div class="btn-wrap">
                <v-btn
                    :disabled="formCntrObj['submitBtn'].disabled"
                    class="default"
                    color="primary"
                    rounded="lg"
                    size="x-large"
                    variant="flat"
                    @click="submitForm"
                >
                    다음
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

//라우터 정보 객체
const router = useRouter()

/**
 * 폼 컨트롤 객체
 *
 * 버튼 활성화 및 텍스트를 제어한다.
 */
const formCntrObj = reactive({
    submitBtn: { disabled: true }
})

const validateUserType = [
    (value) => {
        if (value) {
            //다음 버튼 활성화
            formCntrObj['submitBtn'].disabled = false
            return true
        } else {
            //다음 버튼 활성화
            formCntrObj['submitBtn'].disabled = true
            return false
        }
    }
]

//회원타입
const usertype = ref('')

const submitForm = () => {
    //개인회원
    if (usertype.value == 'memPsn') {
        usertype.value = 'memPsn'
        router.push({ name: usertype.value })
        //개인사업자 회원
    } else if (usertype.value == 'memPsnEtk') {
        usertype.value = 'memPsnBs'
        console.log(usertype.value);
        router.push({ name: usertype.value })
    } else {
        return false
    }
}


</script>

<style scoped>
@import '../../styles/MemType.css';
</style>
