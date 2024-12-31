<!-- 병원 정보 페이지-->
<template>
    <div class="sub-group data-service">
        <div class="sub-title-area">
            <h4 class="sub-title">병원예약</h4>
        </div>

        <!-- 상품 카드 -->
        <hspDtCard :prodInfo="prodInfo" />

        <!-- 공지사항 -->
        <hspNotice />

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
import useHspStore from '../../stores/useHspStore'
import { useRouter } from 'vue-router'
import hspDtCard from './hsp-dt-card.vue'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'
import hspDt from './hsp-dt.vue'
import hspNotice from './hsp-dt-notice.vue'
//라우터 정보 객체
const router = useRouter()

const hspStore = useHspStore();

const hInfo = hspStore.getHsp();


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
