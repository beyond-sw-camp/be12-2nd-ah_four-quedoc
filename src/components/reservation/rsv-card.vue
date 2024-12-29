<!--예약 정보 card-->
<template>
    <div class="total-area">
        <div class="total">
            총&nbsp; <span>1건</span>

        </div>


    </div>

    <v-divider class="svc-divide" />
    <div class="service-list-area" style="margin-top: 3rem;">
        <v-row>
            <v-col cols="12" md="6">

                <v-card class="service-list cursor-pointer" variant="outlined" @click="router.push({ name: 'reservDetail' })">
                    <div class="top-area">
                        <div class="category-title text-16">{{ prodInfo.productTypeNm }}</div>
                        <div class="icon-area">
                            <div class="favorites">
                                <v-btn class="pa-0" height="auto" min-width="auto" title="관심상품" variant="flat"
                                    @click.stop="handleClick">
                                    <v-icon :class="{ 'icon-reload': true, spin: isSpinning }"
                                        :icon="'icon-reload'" />
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="middle-area">
                        <div :title="`${prodInfo.productNm}`" class="subtitle-22 text-truncate">
                            017번
                        </div>
                        <div class="text-area">
                            <div :title="`${prodInfo.productDesc}`" class="text text-twolines">
                                {{ prodInfo.productDesc }}
                            </div>
                        </div>
                    </div>
                    <div class="bottom-area text-truncate">
                        <v-row justify="space-between" class="button-container">
                            <template v-for="item in prodInfo.productTagList">
                                <v-col cols="auto" class="button-wrapper">
                                    <v-btn :class="item.productTag" rounded="xl" size="x-small" disabled="true" block>{{
                                        item.stateName }}</v-btn>
                                </v-col>
                            </template>
                        </v-row>
                    </div>
                </v-card>

            </v-col>
        </v-row>
    </div>
    <!-- 팝업 -->
    <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'

//defineEmits 정의
const emits = defineEmits(['eliminateEvent'])

//라우터 정보 객체
const router = useRouter()

const isSpinning = ref(false); // 애니메이션 상태

const handleClick = () => {
    isSpinning.value = true; // 애니메이션 시작
    setTimeout(() => {
        isSpinning.value = false; // 애니메이션 종료
    }, 1000); // 애니메이션 지속 시간 (1초)
};

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

//props 설정
const props = defineProps({
    prodInfo: {
        type: Object,
        default: {
            productId: 0,
            productTypeCode: '00',
            productIconImgPath: '',
            productTypeNm: '대기순서',
            productPick: 'N',
            productLink: '',
            linkPopupYn: 'N',
            analysisTypeCodeList: [
                { analysisColorGroup: '01', analysisTypeNm: '좋은병원' },
                { analysisColorGroup: '02', analysisTypeNm: '인기병원' },
                { analysisColorGroup: '03', analysisTypeNm: '이런것들' }
            ],
            productNm: '병원이름 - 한줄까지가능',
            productDesc:
                '예상대기시간 : 35분',
            productTagList: [
                { productTag: 'state', stateName: '접수중 ' },
                { productTag: 'current state', stateName: '접수완료' },
                { productTag: 'state', stateName: '진료대기' },
                { productTag: 'state', stateName: '진료완료' }
            ]
        }
    },
    keySet: String
})


/**
 * 관심상품 등록/해제
 *
 * 선택한 상품을 관심상품에 등록/해제 처리한다.
 * (추) 객체와 배열이 props로 전달되면, 자식 컴포넌트는 바인딩된 prop을 변경할 수는 없지만,
 * 객체 또는 배열의 중첩 속성을 변경할 수는 있습니다.
 */
const updateFavoriteProduct = () => {
    //로그인 여부
    if (true) {
        popUpAlertInfo.toggle = true
    }

    //토글 값 변경
    toggle.value = !toggle.value
}

</script>
<style scoped>
img {
    display: block;
}

img,
fieldset {
    border: 0;
}

.icon-reload {
    background-image: url('../../assets/images/reload.png');
    width: 4rem !important;
    height: 4rem !important;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
    /* 부드러운 초기 클릭 효과 */
}

.icon-reload.spin {
    animation: spin 1s linear;
    /* 1초 동안 한 바퀴 회전 */
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.subtitle-22 {
    font-size: xx-large !important;
}

.bottom-area {
    float: left;
}

.button-container {
    display: flex;
    justify-content: flex-start;
    /* 버튼들을 수평으로 배치 */
}

.button-wrapper {
    position: relative;
}

.button-wrapper:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    /* 선과 버튼 간 간격 */
    height: 1px;
    background-color: #ccc;
    /* 선 색상 */
}

.current {
    background-color: #5270f7 !important;
    /* 활성화된 버튼 색상 */
    color: white !important;
    /* 활성화된 버튼 글자색 */
}
</style>
