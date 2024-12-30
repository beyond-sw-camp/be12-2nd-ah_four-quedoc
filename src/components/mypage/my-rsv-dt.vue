<!-- 예약정보 상세페이지-->
<template>
    <div class="product-area">
        <div class="top-info">
            <div class="prod-flag-wrap">
                <template v-if="prodInfo.analysisTypeCodeList">
                    <template v-for="item in prodInfo.analysisTypeCodeList.slice(0, 5)">
                        <span :class="analysisClass[Number(item.analysisColorGroup)]" class="flag">{{
                            item.analysisTypeNm
                        }}</span>
                    </template>
                </template>
            </div>
        </div>
        <div class="middle-info">
            <div class="text">
                <div :title="prodInfo.productNm" class="subtitle-22">{{ prodInfo.productNm }}</div>
                <div :title="prodInfo.productDesc" class="text-18">
                    {{ prodInfo.productDesc }}
                </div>
            </div>
            <template v-if="prodInfo.productIconImgPath">
                <div class="img">
                    <img src="../../assets/images/calm.png" alt="썸네일이미지" />
                </div>
            </template>
            <template v-else>
                <div class="img">
                    <img alt="썸네일이미지" src="../../assets/images/calm.png" />
                </div>
            </template>
        </div>
        <div class="bottom-info">
            <template v-if="prodInfo.productTagList">
                <template v-for="item in prodInfo.productTagList">
                    <span class="hashtag text-16">{{ item.productTag }}</span>
                </template>
            </template>
        </div>
        <div class="btn-area">
                <v-btn
                    color="primary"
                    rounded="md"
                    size="large"
                    variant="flat"
                    @click="$router.push({ name : ''})"
                    >예약취소
                </v-btn>
        </div>
    </div>
    <!--// 상품 카드 -->
    <!-- 팝업 -->
    <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'

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

const chToggle = () => {
    console.log(toggle.value);
    toggle.value = !toggle.value;
};

//분석 타입 색상 클래스
const analysisClass = ['', 'blue', 'violet', 'green', 'yellow', 'pink']

//props 설정
const props = defineProps({
    prodInfo: {
        type: Object,
        default: {
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
                { analysisColorGroup: '01', analysisTypeNm: '대기순서' },
            ],
            productNm: '예약상세페이지',
            productDesc:
                '여기에 예상 대기시간 표기',
            productTagList: [
                { productTag: '접수중' },
                { productTag: '접수완료' },
                { productTag: '진료대기' },
                { productTag: '진료완료' }
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
        }
    },
    keySet: String
})

/**
 * 자세히 보기 버튼 페이지 이동
 */
const movePage = (link) => {
    //페이지 이동
    if (link) {
        //자세히보기는 새창으로 직접 주소 이동 처리한다.
        window.open(link)
    }
}


</script>
<style scoped>
@import '../../styles/ServPdDetlCrd.css';
</style>