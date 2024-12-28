<!-- Introduce team -->
<template>
    <div class="intro-wrap">
        <div class="first hi show">
            <h1>팀원소개</h1>
        </div>
        <div class="hi show">
            <h1>서찬영</h1>
        </div>
        <div class="hi show">
            <h1>박동휘</h1>
        </div>
        <div class="hi show">
            <h1>김기성</h1>
        </div>
        <div class="hi show">
            <h1>김지원</h1>
        </div>
        <div class="hi show">
            <h1>정지수</h1>
        </div>
        <v-btn icon  @click="changeHeader" variant="text"> 
            <img src="../../assets/logo/icon.png" alt="Custom Icon" style="width: 200px; height: 200px;" class='endBtn' />
        </v-btn>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useHeaderStore from '../../stores/useHeaderStore';

const headerStore = useHeaderStore();

const changeHeader = () => {
    const state = headerStore.getState();
    headerStore.setState(!state);
    console.log(state);
}

onMounted(() => {
    const div = document.querySelectorAll('.hi');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        });
    });

    div.forEach((e) => {
        observer.observe(e);
    })

    changeHeader();
});
</script>

<style scoped>
.hi {
    font-size: xx-large;
    margin-top: 800px;
    margin-bottom: 500px;

    color: white;
    text-align: center;

    transform: translateX(100px);
    opacity: 0;
    transition: all 0.6s;
}
.intro-wrap .hi {
    margin-top: 100px !important;
}

.intro-wrap {
    background-color: black !important;
    padding-top: 100px;
    padding-bottom: 500px;
    justify-items: center;
    align-content: center;
}

.show {
    opacity: 1 !important;
    transform: translateX(0px);
}

.endBtn {
    background: none;
}
</style>