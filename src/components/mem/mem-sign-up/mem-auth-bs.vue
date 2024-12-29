<!-- 회원가입 1단계 본인인증 vue를 포함함-->
<template>
    <div class="member">
        <div class="member-header">
            <h3 class="h-title">회원가입 (사업자)</h3>
        </div>
        <div class="member-step">
            <div class="step-txt">본인 인증</div>
            <div class="step-flow">
                <ul>
                    <li class="current"><i>1단계 본인인증</i></li>
                    <li><i>2단계 정보입력</i></li>
                    <li><i>3단계 가입완료</i></li>
                </ul>
                <span class="blind">현재 1단계 진행중</span>
            </div>
        </div>
        <!-- 본인 인증 컴포넌트 -->
        <signUpInput @next-event="submitForm" />
    </div>
</template>

<script setup>
import signUpInput from '../mem-input/sign-up-input.vue';

//부모 컴포넌트 통신 객체
const emits = defineEmits(['nextEvent'])
const submitForm = (v) => {
    //1단계 내용 pinia 저장

    //다음단계 버튼(다음 컴포넌트로 이동)
    emits('nextEvent', 1, v)
}
</script>