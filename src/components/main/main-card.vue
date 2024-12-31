<!-- main 아래 카드-->
<template>
    <div class="main-card-inner">
        <v-btn @click = 'pop' class="card-box">
            <div class="title-area">
                <span class="card-stit">편리한</span>
                <strong class="card-title">QUEDOC</strong>
            </div>
            <v-icon class="card-icon ico-main-data"></v-icon>
            <span class="card-text">병원예약을 손쉽게!</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn @click = "router.push({ name: 'pedi' })" class="card-box">
            <div class="title-area">
                <span class="card-stit">인기있는</span>
                <strong class="card-title">QUEDOC</strong>
            </div>
            <v-icon class="card-icon ico-main-solution"></v-icon>
            <span class="card-text">내 주변 인기소아과 찾기</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn @click = 'pop' class="card-box">
            <div class="title-area">
                <span class="card-stit">스마트한</span>
                <strong class="card-title">QUEDOC</strong>
            </div>
            <v-icon class="card-icon ico-main-ad"></v-icon>
            <span class="card-text">대기열만 보고가면 끝!</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn @click = 'pop' class="card-box">
            <div class="title-area">
                <span class="card-stit">안심되는</span>
                <strong class="card-title">QUEDOC</strong>
            </div>
            <v-icon  class="card-icon ico-main-api"></v-icon>
            <span class="card-text">생생한 리뷰로 걱정은 그만!</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
    </div>
    <popUpAlert :dialog-info="popUpAlertInfo" />
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import popUpAlert from '../etc/pop-up/pop-up-alert.vue';
import { useRouter } from 'vue-router';

let popUpAlertInfo = reactive({
    toggle: false,
    text: '준비중입니다',
    url: ''
});

const router = useRouter();

const pop =  () => {
    // 메인 카드 누르면 나옴
            popUpAlertInfo.toggle = true;
};
</script>