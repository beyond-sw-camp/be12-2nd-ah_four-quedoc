<!-- 검색 태그 -->
<template>
    <!-- search - pc -->
    <div class="service-search-area">
        <div class="search-row">
            <div class="search-title">병원 종류</div>
            <div class="search-form filtering">
                <v-checkbox
                v-for="item in store"
                
                    :key="item"
                    
                    :class="state ? 'v-btn--active' : ''"
                    :model-value="test"
                    class="chk-btn"
                    hide-details
                    :label="item"
                    @click="toggleSelectAllCustomer"
                />
            </div>
        </div>
        <div class="search-row">
            <div class="search-title">진료과목</div>
            <div class="search-form filtering">
                <v-checkbox
                v-for="item in store2"
                    :key="item"
                    :class="selectAllAnalysis ? 'v-btn--active' : ''"
                    :model-value="test"
                    class="chk-btn"
                    hide-details
                    :label="item"
                    @update:model-value="toggleSelectAllAnalysis"
                />
                
            </div>
        </div>
        <div class="search-row">
            <div class="search-title">지역</div>
            <div class="search-form filtering">
                <v-checkbox
                v-for="item in store3"
                    :key="item"
                    :class="selectAllAnalysis ? 'v-btn--active' : ''"
                    :model-value="test"
                    class="chk-btn"
                    hide-details
                    :label="item"
                    @update:model-value="toggleSelectAllAnalysis"
                />
                
            </div>
        </div>
        
    </div>
    <!--// search -->

    <!--// search - mobile -->
</template>

<script setup>

let state = false;
//defineEmits 정의
const emits = defineEmits(['searchEvent'])


const store = ['한의원', '일반병원', '대학병원', '종합병원', '진료소']

const store2 = ['내과', '외과', '마취과', '물리학과', '소아과']

const store3 = ['경기도', '서울', '인천','충청도', '강원도', '전라도','경상도']

/**
 * 분석목적 전체버튼 선택시
 *
 */
const toggleSelectAllAnalysis = (value) => {
    if (value == selectAllAnalysis.value) value = !value
    historyStore.state[keySet]['options']['analysis'].forEach((item) => (item.checked = value))
    if (value) {
        selectAllAnalysis.value = true
    } else {
        selectAllAnalysis.value = false
    }
}

/**
 * 데이타기준 전체버튼 선택시
 *
 */
const toggleSelectAllData = (value) => {
    if (value == selectAllData.value) value = !value
    historyStore.state[keySet]['options']['data'].forEach((item) => (item.checked = value))
    if (value) {
        selectAllData.value = true
    } else {
        selectAllData.value = false
    }
}

/**
 * 고객사기준 전체버튼 선택시
 *
 */
const toggleSelectAllCustomer = (value) => {
    state=!state;
    console.log(state)
}

/**
 * watch
 *
 * 분석목적의 필터버튼 선택시
 */


/**
 * watch
 *
 * 데이터기준의 필터버튼 선택시
 */

/**
 * watch
 *
 * 고객사기준의 필터버튼 선택시
 */


/**
 * 초기화
 *
 * 선택된 값들을 초기화한다.
 */
const reset = () => {
    //이력 저장소 옵션 초기화
    historyStore.initHistoryStoreOptions()
    //검색어 초기화
    historyStore.state[keySet]['word'] = null
    //분석목적 초기화
    selectAllAnalysis.value = false
    toggleSelectAllAnalysis()
    //데이터기준 초기화
    selectAllData.value = false
    toggleSelectAllData()
    //고객사기준 초기화
    selectAllCustomer.value = false
    toggleSelectAllCustomer()
    //검색
    search()
}

//부모 컴포넌트에서 접근할 수 있도록 초기화 허용
defineExpose({ reset })

/**
 * 검색
 *
 * emit 함수를 호출한다.
 */
const search = () => {
    emits('searchEvent')
}

/**
 * 공통코드 조회
 *
 * 공통코드를 조회한다.
 */
const inquiryCode = async (cd, tp) => {
    //API: 공통코드 조회
    const data = await api.code(cd)

    if (data.success) {
        const list = data.results.subCode

        //검색 결과
        if (list.length) {
            //===> 검색 결과 존재
            //초기화
            historyStore.state[keySet]['options'][tp].splice(0)
            //검색 결과 추가
            historyStore.state[keySet]['options'][tp].push(...list)
            //필터처리 동기화
            if (tp == 'analysis')
                historyStore.state[keySet]['options']['selectedAnalysis'] =
                    historyStore.state[keySet]['options']['analysis']
            if (tp == 'data')
                historyStore.state[keySet]['options']['selectedData'] = historyStore.state[keySet]['options']['data']
            if (tp == 'customer')
                historyStore.state[keySet]['options']['selectedCustomer'] =
                    historyStore.state[keySet]['options']['customer']
        } else {
            //===> 검색 결과 없음
            //검색 저장소 초기화
            //초기화
            historyStore.state[keySet]['options'][tp].splice(0)
        }
    } else {
        //검색 저장소 초기화
        //초기화
        historyStore.state[keySet]['options'][tp].splice(0)
    }
}

/**
 * 컴포넌트 마운트
 *
 * 공통코드를 조회한다.
 */

</script>
