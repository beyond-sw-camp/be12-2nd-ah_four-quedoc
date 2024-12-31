<template>
    <div class="inner-wrapper">
        <div class="sub-group">
            <div class="sub-title-area">
                <h4 class="sub-title">병원예약</h4>
            </div>
            <div class="sub-title-area">
                <h1>{{ currentQuestion.question }}</h1>
            </div>

            <ul class="options-list">
                <li v-for="(option, index) in currentQuestion.options" :key="index" @click="handleOptionClick(option)"
                    class="option-item">
                    {{ option }}
                </li>
            </ul>

        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

// 질문 데이터 정의
const questions = [
    {
        id: 1,
        question: '어떤 종류의 병원을 찾으시나요?',
        options: ['한의원', '일반병원', '대학병원', '종합병원', '진료소'],
    },
    {
        id: 2,
        question: '어떤 진료를 원하시나요?',
        options: ['내과', '외과', '소아과', '산부인과', '치과', '기타 전문 과목'],
    },
    {
        id: 3,
        question: '어디에서 병원을 찾으시나요?',
        options: ['서울', '경기', '인천', '충청도', '강원도', '전라도', '경상도'],
    },
    {
        id: 4,
        question: '지금 바로 예약 가능한 병원을 찾으시나요?',
        options: ['예', '아니오'],
    },
];

// 현재 질문 상태 관리
const currentIndex = ref(0);
const currentQuestion = ref(questions[currentIndex.value]);
// 선택한 옵션을 저장할 배열
const selectedOptions = ref([]);

// 옵션 클릭 이벤트 처리
const handleOptionClick = (selectedOption) => {
    selectedOptions.value.push({
        answer: selectedOption
    });

    console.log(`선택한 옵션: ${selectedOption}`);
    if (selectedOption === '한의원') {
        currentIndex.value += 1;
    }
    if (currentIndex.value < questions.length - 1) {
        currentIndex.value += 1;
        currentQuestion.value = questions[currentIndex.value];
    } else {
        console.log('모든 질문이 완료되었습니다.');
        router.push({ name: 'search' });
        // 모든 질문 완료 시 추가 작업
    }
};
</script>

<style scoped>
@import '../../styles/searchView.css';

.service-search-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 1.6rem 3.2rem 3.2rem ;
    border: 1px solid #e5e5e5;
    border-radius: 2.4rem;
    background-color: #356cff;
    color: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* 화면의 너비를 모두 차지 */
}

.option {
    display: flex;
    flex-direction: column;
    padding: 3.2rem 3.2rem;
    border: 1px solid #e5e5e5;
    border-radius: 2.4rem;
    justify-content: center;
    align-items: center;
    width: 100%;
}

h1 {
    font-family: OneShinhan, sans-serif;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
}



.options-list {
    list-style: none;
    padding: 0;
    padding: 3.2rem 3.2rem;
        border-radius: 2.4rem;
        justify-content: center;
        align-items: center;
        width: 100%;
}

.option-item {
    font-size: 2.8rem;
    padding: 1rem 2rem;
    margin: 0.5rem 0;
    background-color: white;
    color: #356cff;
    border: 1px solid #e5e5e5;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.option-item:hover {
    background-color: #2c54cc;
    color: white;
}
</style>