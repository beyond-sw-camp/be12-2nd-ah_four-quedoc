<!-- 병원 정보 페이지-->
<template>
    <div class="sub-group data-service">
        <div class="sub-title-area">
            <h4 class="sub-title">솔루션상품</h4>
        </div>

        <!-- 상품 카드 -->
        <hspDtCard :prodInfo="prodInfo" />
        <!--// 상품 카드 -->    
        <hspDt/>

        <!--// 상품 상세 -->

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
    </div>
    <!-- 팝업 -->
    <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="movePage" />
    <!-- 토스트팝업 -->
    <BaseSnackBar />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import hspDtCard from './hsp-dt-card.vue'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'
import hspDt from './hsp-dt.vue'
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

//상품ID 객체
const productId = router.currentRoute.value.params.id

//상품 상세 정보 객체
const prodInfo = ref({
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
        { analysisColorGroup: '01', analysisTypeNm: '시장분석' },
        { analysisColorGroup: '02', analysisTypeNm: '지역경제' },
        { analysisColorGroup: '03', analysisTypeNm: '대안신용' },
        { analysisColorGroup: '04', analysisTypeNm: '마이데이터' },
        { analysisColorGroup: '05', analysisTypeNm: '카드데이터' }
    ],
    productNm: '상품명은 로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리',
    productDesc:
        '2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우',
    productTagList: [
        { productTag: '스타벅스' },
        { productTag: '전국' },
        { productTag: '시간대별결제데이터' },
        { productTag: '해시태그 한줄까지' }
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
