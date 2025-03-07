<!-- 메인 뷰 -->
<script setup>

import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import router from '../../router'
import sgSch from '../sch/sg-sch.vue'
import mainCard from './main-card.vue'
import api from '../api/mem'
import useHspStore from '../../stores/useHspStore'

const hspStore = useHspStore();


const { proxy } = getCurrentInstance();
const searchTerms = ref(null)
const selectTerms = (terms) => {
    searchTerms.value = terms
}
// const searchService = async () => {

//     const data = await api.getHsp(proxy);
//     //서비스 검색 호출
//     if (data) {
//         console.log(data);
//         hspStore.resetHospitalList();
//         data.forEach(element => {
//             hspStore.addHospital(element);
            
//         });
//         console.log(hspStore.getLength());
//         router.push({ name: 'search' })
//     } else {

//     }
// }

const searchService = async () => {
    console.log("🔍 검색어:", searchTerms.value); // 검색어 확인

    let data;
    if (!searchTerms.value) {
        console.log("✅ 검색어 없음 → 전체 병원 리스트 요청");
        data = await api.getHsp(proxy); // 🔥 검색어 없이 모든 병원 요청
    } else {
        console.log("✅ 검색어 있음 → 필터링된 병원 리스트 요청");
        data = await api.getHspByKeyword(proxy, searchTerms.value); // 검색어 포함 요청
    }

    console.log("✅ API 응답:", data);

    if (!Array.isArray(data)) {
        console.error("❌ API 응답이 배열이 아닙니다.", data);
        return;
    }

    hspStore.resetHospitalList();
    data.forEach(element => {
        hspStore.addHospital(element);
    });

    console.log("병원 개수:", hspStore.getLength());
    router.push({ name: 'search' });
};
</script>
<template>
    <div class="main-wrap">
        <div class="main-search-wrap">
            <div class="main-search-inner">
                <div class="input-wrap">
                    <v-text-field v-model="searchTerms" clearable color="primary" hide-details="auto"
                        placeholder="병원 이름 검색" variant="outlined" @keypress.enter="searchService"></v-text-field>
                    <v-btn block class="btn-search" @click="searchService">
                        <span class="sr-only">검색</span>
                    </v-btn>
                </div>
                <div class="hashtags">
                    <!-- 추천 검색어 -->
                    <sgSch @select-event="selectTerms" />
                </div>
            </div>
        </div>
        <div class="main-card-wrap">
            <mainCard />
        </div>
    </div>
</template>
<style scoped></style>