<!-- 누르면 화면 맨 위로 올라오는 버튼-->
<template>
    <transition name="fade-ani">
        <v-btn v-show="screenY > 100" class="top-btn" variant="flat" @click="toTop">
            <v-icon class="btn-arrow-top" />
            <span class="sr-only">위로가기</span>
        </v-btn>
    </transition>
</template>


<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const screenTimer = ref(0);
const screenY = ref(0)
const handleScroll = () => {
    if (screenTimer.value) return
    screenTimer.value = setTimeout(() => {
        screenY.value = window.scrollY
        clearTimeout(screenTimer.value)
        screenTimer.value = 0
    }, 100)
}
const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import '../../../styles/GoTopBtn.css';
</style>