<template>
    <div class="member">
        <div class="complete-box">
            <v-icon>icon-logout</v-icon>
            <div class="complete-text">
                <div>오류 페이지</div>
                <p>오류가 발생했습니다.<br />홈으로 가기를 눌러주세요.</p>
            </div>

            <div class="btn-wrap">
                <v-btn class="default" color="primary" rounded="lg" size="x-large" variant="flat" @click="goHome">
                    홈으로 가기
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
//라우터 정보 객체
const router = useRouter()


const goHome = () => {
    router.push({ name: 'home' })
}
</script>

<style scoped></style>