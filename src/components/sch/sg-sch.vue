<!-- 추천검색어 -->
<template>
    <template v-for="item in items">
        <div class="hashtag cursor-pointer" href="javascript:;" @click="selectRecommendedSearchTerms(`${item}`)">
            #{{ item }}
        </div>
    </template>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
//defineEmits 정의
const emits = defineEmits(['selectEvent'])

//추천 검색어
const items = reactive([])
items.push('인기소아과', '주변병원', '정형외과', '대학병원')
/**
 * 추천 검색어 조회
 *
 * 메인 검색 영역에 사용할 추천 검색어를 조회한다.
 
const inquiryRecommendedSearchTerms = () => {

    if (data.success) {
        //추천 검색어 추가
        items.push('example1', 'example2', 'example3', 'example4', 'example5')
    } else {
        //추천 검색어 초기화
        items.splice(0)
    }
}
*/
/**
 * 추천 검색어 선택
 *
 * 추천 검색어 선택 시 검색어로 세팅한다.
 */
const selectRecommendedSearchTerms = (terms) => {
    emits('selectEvent', terms)
}

/**
 * 컴포넌트 마운트
 *
 * 추천 검색어를 조회한다.
 */
</script>
