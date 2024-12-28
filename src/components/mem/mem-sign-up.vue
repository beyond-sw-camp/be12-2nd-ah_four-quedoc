<!-- 회원가입-개인 -->
<template>
    <component :is="currentTab.component" @next-event="nextTab"></component>
</template>

<script setup>
import { shallowRef } from 'vue'
import memAuth from './mem-sign-up/mem-auth.vue'
import memInput from './mem-sign-up/mem-input.vue'
import memCmp from './mem-sign-up/mem-cmp.vue'

/**
 * 회원가입-개인 현재 탭
 *
 * 현재 탭 정보이며 deep 전파를 막기 위해 shallowRef 사용한다.
 */
const currentTab = shallowRef({
    menu: '본인확인',
    component: memAuth
})

/**
 * 회원가입-개인 전체 탭
 *
 * 총 4개 탭으로 구성되며 각 탭은 메뉴 명과 해당 컴포넌트 정보를 가지고 있다.
 */
const tabs = [
    {
        menu: '본인확인',
        component: memAuth
    },
    {
        menu: '정보입력',
        component: memInput
    },
    {
        menu: '가입완료',
        component: memCmp
    }
]

const nextTab = (ind, obj) => {
    currentTab.value = tabs[ind]
}
</script>

<style scoped>
h1 {
    font-weight: 700;
    margin-bottom: 50px;
}
</style>
