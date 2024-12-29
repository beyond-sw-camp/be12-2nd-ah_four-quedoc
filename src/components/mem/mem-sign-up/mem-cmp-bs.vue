<!--회원가입 완료 창-->
<template>
    <div class="member">
        <div class="member-header">
            <h3 class="h-title">회원가입 (사업자)</h3>
        </div>
        <div class="member-step">
            <div class="step-txt">가입 완료</div>
            <div class="step-flow">
                <ul>
                    <li class="complete"><i>1단계 본인인증</i></li>
                    <li class="complete"><i>2단계 정보입력</i></li>
                    <li class="current"><i>3단계 가입완료</i></li>
                </ul>
                <span class="blind">현재 3단계 진행중</span>
            </div>
        </div>
        <div class="complete-box">
            <v-icon>icon-success</v-icon>
            <div class="complete-text">
                <div>회원가입 완료</div>
                <p>회원가입이 완료되었습니다.<br />Quedoc의 서비스를 경험해보세요.</p>
            </div>
        </div>
        <div class="btn-wrap">
            <v-btn class="default" color="primary" rounded="lg" size="x-large" variant="flat" @click="submitForm">
                로그인
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
//라우터 정보 객체
const router = useRouter()

// 초기설정
onMounted(() => {})

const submitForm = () => {
    router.push({ name: 'login' })
}
</script>

<style scoped>
.btn-wrap .default {
    width: 22.4rem;
}
@media only screen and (max-width: 960px) {
    .btn-wrap .default {
        width: 100%;
    }
}
</style>
