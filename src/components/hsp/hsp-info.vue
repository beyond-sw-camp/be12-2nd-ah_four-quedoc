<!-- 병원 정보 페이지-->
<template>
    <div v-if="prodInfo">
        <div class="sub-group data-service">
            <div class="sub-title-area">
                <h4 class="sub-title">병원예약</h4>
            </div>

            <!-- 상품 카드 -->
            <hspDtCard :prodInfo="prodInfo" />
            <!-- 공지사항 -->
            <hspNotice />
            <!--// 상품 카드 -->
            <hspDt :prodInfo="prodInfo" />

        <div class="btn-list">
            <v-btn
                color="primary"
                rounded="lg"
                size="x-large"
                variant="flat"
                @click=" $router.push({ name: 'search' })"
                >돌아가기
            </v-btn>
        </div>
        <!-- 팝업 -->
        <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="movePage" />
        <!-- 토스트팝업 -->
        <BaseSnackBar />
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import hspDtCard from './hsp-dt-card.vue'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'
import hspDt from './hsp-dt.vue'
import hspNotice from './hsp-dt-notice.vue'
import { useHospitalStore } from '../../stores/UseHospitalStore';


const hospitalStore = useHospitalStore(); // Pinia 스토어 사용
const prodInfo = ref(null); // 병원 데이터

// URL의 라우트 정보에서 ID 가져오기
const route = useRoute(); // URL 정보 가져오기
const productId = computed(() => Number(route.params.id)); // URL에서 ID 가져오기

console.log('Product ID:', productId.value);

// Pinia 상태에서 선택된 병원 가져오기
const selectedHospital = computed(() => hospitalStore.selectedHospital);

onMounted(async () => {
    if (hospitalStore.hospitals.length === 0) {
        console.log('Fetching hospital data...');
        await hospitalStore.fetchHospitals(); // 병원 데이터 로드
        console.log('Hospitals loaded:', hospitalStore.hospitals);
    }

    if (productId.value) {
        hospitalStore.setSelectedHospital(productId.value); // 병원 데이터 설정
        prodInfo.value = hospitalStore.selectedHospital; // 상태 업데이트
        console.log('Selected Hospital:', hospitalStore.selectedHospital);
    } else {
        console.warn('No valid product ID found.');
    }

    console.log('Final prodInfo:', prodInfo.value);
});


//라우터 정보 객체
const router = useRouter()



//기본 팝업 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: '로그인 후 관심상품으로 저장 가능합니다.',
    url: ''
})

//관심상품 토글
const toggle = ref(false)

//분석 타입 색상 클래스
const analysisClass = ['', 'blue', 'violet', 'green', 'yellow', 'pink']

// //상품 상세 정보 객체
const prodInfos = ref({
    productId: 0,
    productTypeCode: '00',
    productIconImgPath: '',
    productTypeNm: 'Data/API서비스',
    productNew: 'Y',
    productHot: 'Y',
    productPick: 'N',
    productLink: '',
    productEtcLink: '',
    linkPopupYn: 'N',
    analysisTypeCodeList: [
        { analysisColorGroup: '01', analysisTypeNm: '어린이 국가예방접종' },
        { analysisColorGroup: '02', analysisTypeNm: '실손청구가능' },
        { analysisColorGroup: '03', analysisTypeNm: '영유아검진' },
        { analysisColorGroup: '04', analysisTypeNm: '주차장' },
        { analysisColorGroup: '05', analysisTypeNm: '전문의' }
    ],
    productNm: '아주대학교병원',
    productDesc:
        '병원 상세 정보',
    productTagList: [
        { productTag: '문의처 : 1688-6114' },
        { productTag: '' },
        { productTag: '' },
        { productTag: '' }
    ],
    productInfo1: '',
    productInfoImgPath1: '',
    productInfo2: '',
    productInfoImgPath2: '',
    productFileList: null,
    productDataCycle: '',
    productDataMethod: '',
    productDataExt: '',
    productUseCase1: '',
    productUseCaseImgPath1: '',
    productUseCase2: '',
    productUseCaseImgPath2: '',
    productRecommendList: null
})


//페이지 이동
const movePage = (url) => {
    if (url) {
        router.push({ name: url })
    }
}


</script>
