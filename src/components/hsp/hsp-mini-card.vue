<!-- 병원 간단정보 카드-->
<template>
    
    <v-divider class="svc-divide" />
    <div class="service-list-area" style="margin-top: 3rem;">
        <v-row>
            <v-col cols="12" md="6">
    <v-card
        class="service-list cursor-pointer"
        variant="outlined"
        @click="router.push({ name: 'serv' })"
    >
        <div class="top-area">
            <div class="category-title text-16">{{ prodInfo.productTypeNm }}</div>
            <div class="icon-area">
                <div class="favorites">
                    <v-btn
                        class="pa-0"
                        height="auto"
                        min-width="auto"
                        title="관심상품"
                        variant="flat"
                        @click.stop="updateFavoriteProduct(`${prodInfo.productId}`)"
                    >
                        <v-icon
                            :icon=" toggle ? 'icon-pick-on' : 'icon-pick-off'"
                        />
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="middle-area">
            <div class="prod-flag-wrap">
                <template v-for="item in prodInfo.analysisTypeCodeList.slice(0, 5)">
                    <span :class="analysisClass[Number(item.analysisColorGroup)]" class="flag">{{
                        item.analysisTypeNm
                    }}</span>
                </template>
            </div>
            <div :title="`${prodInfo.productNm}`" class="subtitle-22 text-truncate">
                {{ prodInfo.productNm }}
            </div>
            <div class="text-area">
                <div :title="`${prodInfo.productDesc}`" class="text text-twolines">
                    {{ prodInfo.productDesc }}
                </div>
                <template v-if="prodInfo.productIconImgPath">
                    <div class="img-thumbnail">
                        <img :src="commonUtil.getImageUrl(prodInfo.productIconImgPath)" alt="썸네일이미지" />
                    </div>
                </template>
                <template v-else>
                    <div class="img-thumbnail">
                        <img alt="썸네일이미지" src="../../assets/images/hospital.png" />
                    </div>
                </template>
            </div>
        </div>
        <div class="bottom-area text-truncate">
            <template v-for="item in prodInfo.productTagList">
                <span class="hashtag text-16">{{ item.productTag }}</span>
            </template>
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
import commonUtil from '../../utils/commonUtil'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'

//defineEmits 정의
const emits = defineEmits(['eliminateEvent'])

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

//props 설정
const props = defineProps({
    prodInfo: {
        type: Object,
        default: {
            productId: 0,
            productTypeCode: '00',
            productIconImgPath: '',
            productTypeNm: '대학병원',
            productPick: 'N',
            productLink: '',
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
                '최고의 의료진을 보유한 대학병원입니다.',
            productTagList: [
                { productTag: '문의처 : 1688-6114' },
                { productTag: '' },
                { productTag: '' }
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
const updateFavoriteProduct =  () => {
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
img, fieldset {
    border: 0;
}

</style>
