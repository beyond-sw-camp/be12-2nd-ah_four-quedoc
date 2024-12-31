<!--병원 상세 정보 카드-->
<template>
    <!-- 상품 카드 -->
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
            <div class="favorites">
                <v-btn
                    class="pa-0"
                    height="auto"
                    min-width="auto"
                    variant="flat"
                    @click.stop = "chToggle()"
                >
                    <v-icon
                        :icon="
                            toggle
                                  ? 'icon-pick-on'
                                  : 'icon-pick-off'
                        "
                    />
                </v-btn>
            </div>
        </div>
        <div class="middle-info">
            <div class="text">
                <div :title="prodInfo.productNm" class="subtitle-22">{{ hInfo.name }}</div>
                <div :title="prodInfo.productDesc" class="text-18">
                    {{ hInfo.info }}
                </div>
            </div>
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
                    @click="$router.push({ name : 'reserv'})"
                    >예약하기
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
import useHspStore from '../../stores/useHspStore'
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
                { analysisColorGroup: '01', analysisTypeNm: '시장분석' },
                { analysisColorGroup: '02', analysisTypeNm: '지역경제' },
                { analysisColorGroup: '03', analysisTypeNm: '대안신용' },
                { analysisColorGroup: '04', analysisTypeNm: '마이데이터' },
                { analysisColorGroup: '05', analysisTypeNm: '카드데이터' }
            ],
            productNm: '상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리',
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
.cur-rsv {
    position: absolute !important;
    margin-left: 50% !important;
}
</style>