<!-- 회원정보변경 vue를 관리하는 뷰 -->
<template>
    
    <component :is="currentTab.component" :ctsN="ctsN" @next-event="nextTab"></component>

</template>

<script setup>
import { onMounted, onUpdated, ref, shallowRef } from 'vue'
import myInfoCheck from './my-info-check.vue'
import myInfoChange from './my-info-change.vue'
import myPageQuit from './my-page-quit.vue'

import commonUtil from '../../utils/commonUtil'

const ctsN = ref('')
//회원정보
const memInfo = ref({})

const srchComponent = shallowRef(null)
const updComponent = shallowRef(null)

/**
 * 회원정보변경  전체 탭
 *
 * 총 2개 탭으로 구성되며 각 탭은 메뉴 명과 해당 컴포넌트 정보를 가지고 있다.
 */
let tabs = []

/**
 * 컴포넌트 마운트
 *
 * 컴포넌트가 마운트된 후 호출될 콜백을 등록한다.
 */

/**
 * 컴포넌트 업데이트
 *
 * 컴포넌트 DOM 트리가 업데이트된 후 호출될 콜백을 등록한다.
 */
onUpdated(() => {
    //스크롤 최상단 이동
    commonUtil.scrollTop()
})

/**
 * 회원정보 조회
 */


/**
 * 권한별 화면 생성
 */
 const authView = () => {
    //고객유형코드
    if (true) {
        // U: 개인
        srchComponent.value = myInfoCheck
        updComponent.value = myInfoChange
    }
    tabs.push(
        {
            menu: '회원정보조회',
            component: srchComponent.value
        },
        {
            menu: '회원정보변경',
            component: updComponent.value
        },
        {
            menu: '회원탈퇴',
            component: myPageQuit
        }
    )

    nextTab(0)
}
onMounted(() => {
    authView();
})

/**
 * 회원정보변경  현재 탭
 *
 * 현재 탭 정보이며 deep 전파를 막기 위해 shallowRef 사용한다.
 */
const currentTab = shallowRef({
    menu: '회원정보조회',
    component: srchComponent.value
})

const nextTab = (ind, v) => {
    ctsN.value = v
    currentTab.value = tabs[ind]
}
</script>

<style scoped>

@import '../../styles/ServPdCtg.css';
h1 {
    font-weight: 700;
    margin-bottom: 50px;
}

</style>
