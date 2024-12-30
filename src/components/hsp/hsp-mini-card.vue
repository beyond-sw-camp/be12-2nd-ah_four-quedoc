<template>
    <div class="service-list-area" style="margin-top: 3rem;">
        <v-row>
            <v-col v-for="hospital in hospitals" :key="hospital.productId" cols="12" md="6">
                <v-card class="service-list cursor-pointer" variant="outlined" @click="navigateToDetails(hospital)">
                    <div class="top-area">
                        <div class="category-title text-16">{{ hospital.productTypeNm }}</div>
                        <div class="icon-area">
                            <div class="favorites">
                                <v-btn class="pa-0" height="auto" min-width="auto" title="관심상품" variant="flat"
                                    @click.stop="updateFavoriteProduct(hospital.productId)">
                                    <v-icon :icon="hospital.productPick === 'Y' ? 'icon-pick-on' : 'icon-pick-off'" />
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="middle-area">
                        <div class="prod-flag-wrap">
                            <template v-if="hospital.analysisTypeCodeList">
                                <template v-for="item in hospital.analysisTypeCodeList.slice(0, 5)"
                                    :key="item.analysisTypeNm">
                                    <span :class="analysisClass[Number(item.analysisColorGroup)]" class="flag">
                                        {{ item.analysisTypeNm }}
                                    </span>
                                </template>
                            </template>
                        </div>
                        <div :title="hospital.productNm" class="subtitle-22 text-truncate">
                            {{ hospital.productNm }}
                        </div>
                        <div class="text-area">
                            <div :title="hospital.productDesc" class="text text-twolines">
                                {{ hospital.productDesc }}
                            </div>
                            <template v-if="hospital.productIconImgPath">
                                <div class="img-thumbnail">
                                    <img :src="hospital.productIconImgPath" alt="썸네일이미지" />
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
                        <template v-for="tag in hospital.productTagList" :key="tag.productTag">
                            <span class="hashtag text-16">{{ tag.productTag }}</span>
                        </template>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
    <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useHospitalStore } from '../../stores/UseHospitalStore';
import popUpAlert from '../etc/pop-up/pop-up-alert.vue';

const router = useRouter();
const hospitalStore = useHospitalStore(); // Pinia 스토어 사용

// Pinia 상태에서 병원 데이터 가져오기
const hospitals = computed(() => hospitalStore.hospitals);

// 병원 데이터 로드
onMounted(async () => {
    if (hospitalStore.hospitals.length === 0) {
        console.log('Fetching hospitals...');
        await hospitalStore.fetchHospitals();
        console.log('Hospitals loaded:', hospitals.value);
    } else {
        console.log('Hospitals already loaded:', hospitals.value);
    }
});


// 병원 상세 페이지로 이동
const navigateToDetails = (hospital) => {
    router.push({
        name: 'serv', // 라우트 이름
        params: { id: hospital.productId }, // 병원 ID 전달
    });
    console.log('Navigating to /login/serv with hospital:', hospital);
};

// 관심 상품 상태 관리
const updateFavoriteProduct = (productId) => {
    console.log(`관심 상품 상태 변경: ${productId}`);
    // 관심 상품 상태 변경 로직 추가 (예: API 호출)
};

// 팝업 정보
let popUpAlertInfo = reactive({
    toggle: false,
    text: '로그인 후 관심상품으로 저장 가능합니다.',
    url: '',
});

// 분석 타입 색상 클래스
const analysisClass = ['', 'blue', 'violet', 'green', 'yellow', 'pink'];
</script>

<style scoped>
.v-row {
    margin-bottom: 5rem;
}
@media (min-width: 960px) {
    .v-col-md-6 {
        flex: 50%;
        max-width: 100%;
    }
}
img {
    display: block;
}
fieldset {
    border: 0;
}
</style>
