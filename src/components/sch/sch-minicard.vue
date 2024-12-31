<!-- 병원 간단정보 카드-->
<template>
  <v-card
    class="service-list cursor-pointer"
    variant="outlined"
    @click="router.push({ name: 'serv' })"
  >
    
      <div class="prod-flag-wrap">
        <template v-if="prodInfo.analysisTypeCodeList">
          <template v-for="item in prodInfo.analysisTypeCodeList.slice(0, 5)">
            <span
              :class="analysisClass[Number(item.analysisColorGroup)]"
              class="flag"
              >{{ item.analysisTypeNm }}</span
            >
          </template>
        </template>
      </div>
      <div class="top-area">
      <div class="category-title text-16">{{ hspInfo.type }}</div>
      <div class="icon-area">
        <div class="favorites">
          <v-btn
            class="pa-0"
            height="auto"
            min-width="auto"
            title="관심상품"
            variant="flat"
            @click.stop="updateFavoriteProduct(`${index}`)"
          >
            <v-icon :icon="toggle ? 'icon-pick-on' : 'icon-pick-off'" />
          </v-btn>
        </div>
      </div>
    </div>
    <div class="middle-area">
      <div :title="`${hspInfo.name}`" class="subtitle-22 text-truncate">
        {{ hspInfo.name }}
      </div>
      <div class="text-area">
        <div :title="`${hspInfo.name}`" class="text text-twolines">
          {{ hspInfo.info }}
        </div>
        <!--<template v-if="prodInfo.productIconImgPath">
                    <div class="img-thumbnail">
                        <img :src="commonUtil.getImageUrl(prodInfo.productIconImgPath)" alt="썸네일이미지" />
                    </div>
                </template>-->
        <template>
          <div class="img-thumbnail">
            <img alt="썸네일이미지" src="../../assets/images/hospital.png" />
          </div>
        </template>
      </div>
    </div>
    <div class="bottom-area text-truncate">
      <span class="hashtag text-16">{{ hspInfo.hNumber }}</span>
    </div>
  </v-card>

  <!-- 팝업 -->
  <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import commonUtil from "../../utils/commonUtil";
import popUpAlert from "../etc/pop-up/pop-up-alert.vue";
import useHspStore from "../../stores/useHspStore";
import useAuthStore from "../../stores/useAuthStore";
import api from "../api/mem";



const props = defineProps({
  hspInfo: {
    type: Object,
    default: {
      name: "병원이름",
      type: "병원타입",
      info: "병원정보",
      hNumber: "병원전화번호",
    },
    required: true,
  },
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
                { analysisColorGroup: '01', analysisTypeNm: '🔥인기 소아과🔥' },
                { analysisColorGroup: '02', analysisTypeNm: '어린이 국가예방접종' },
                { analysisColorGroup: '03', analysisTypeNm: '영유아검진' },
                { analysisColorGroup: '04', analysisTypeNm: '전문의' },
                { analysisColorGroup: '05', analysisTypeNm: '주차장' }
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
});

const { proxy } = getCurrentInstance();

const loginStore = useAuthStore();

const fav = {
  hospitalName: props.hspInfo.name,
  email: loginStore.getEmail(),
};

const hspStore = useHspStore();

//defineEmits 정의
const emits = defineEmits(["eliminateEvent"]);

//라우터 정보 객체
const router = useRouter();

//기본 팝업 정보 객체
let popUpAlertInfo = reactive({
  toggle: false,
  text: "로그인 후 관심상품으로 저장 가능합니다.",
  url: "",
});

//관심상품 토글
const toggle = ref(false);

//분석 타입 색상 클래스
const analysisClass = ["", "blue", "violet", "green", "yellow", "pink"];

//props 설정

/**
 * 관심상품 등록/해제
 *
 * 선택한 상품을 관심상품에 등록/해제 처리한다.
 * (추) 객체와 배열이 props로 전달되면, 자식 컴포넌트는 바인딩된 prop을 변경할 수는 없지만,
 * 객체 또는 배열의 중첩 속성을 변경할 수는 있습니다.
 */
const updateFavoriteProduct = async (id) => {
  //로그인 여부
  /*if (true) {
popUpAlertInfo.toggle = true
}*/
  toggle.value = !toggle.value;
  if (toggle.value) {
    console.log(fav);
    //const a = await api.registerFav(proxy,fav);
    console.log(a);
  }
};
onMounted(() => {});
</script>
<style scoped>
@import "../../styles/ServPddetlCrd.css";
img {
  display: block;
}

img,
fieldset {
  border: 0;
}
</style>
