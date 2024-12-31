<!-- 병원 간단정보 카드-->
<template>

                <v-card class="service-list cursor-pointer" variant="outlined" @click="showDt()">
                    <div class="top-area">
                        <div class="category-title text-16">{{ hspInfo.type }}</div>
                        <div class="icon-area">
                            <div class="favorites">
                                <v-btn class="pa-0" height="auto" min-width="auto" title="관심상품" variant="flat"
                                    @click.stop="updateFavoriteProduct(`${index}`)">
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
                                {{  hspInfo.info }}
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
                            <span class="hashtag text-16">{{hspInfo.hNumber}}</span>
                    </div>
                </v-card>

    <!-- 팝업 -->
    <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref,getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import commonUtil from '../../utils/commonUtil'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'
import useHspStore from '../../stores/useHspStore'
import useAuthStore from '../../stores/useAuthStore'
import api from  '../api/mem'


const props = defineProps({
    hspInfo: {
      type: Object,
      default: {
        name:"꾸러기소아과",
        type:"소아청소년과",
        info:"장난꾸러기 의사선생님이 진료하는 소아과입니다.",
        hNumber:"02-432-3414"
      },
      required: true,
    },
  });

const {proxy} = getCurrentInstance();

const loginStore = useAuthStore();

const fav = {
    
    hospitalName: props.hspInfo.name,
    email: loginStore.getEmail()
}


const hspStore = useHspStore();

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
    if(toggle.value) {
        //const a = await api.registerFav(proxy,fav);
    }
    
}

const showDt = () => {

    hspStore.setHsp(props.hspInfo);
    router.push({ name: 'serv' });
}


onMounted(() => {
 
})
</script>
<style scoped>
img {
    display: block;
}

img,
fieldset {
    border: 0;
}
</style>
