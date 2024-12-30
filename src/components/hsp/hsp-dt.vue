<!-- 병원 소개 페이지 -->
<template>
    <div class="static-content">
        <!-- 01 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">01</div>
                <v-divider vertical />
                <div class="title">병원주소</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">
                    경기도 수원시 영통구 월드컵로 164

                </div>
            </div>

        </div>
        <!-- 02 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">02</div>
                <v-divider vertical />
                <div class="title">자세한 소개</div>
            </div>
            <div class="cnt-text">
                <div class="finace-list-area">
                    <div class="title subtitle-22">병원 장점</div>
                    <div class="text-16 mgb40">
                        대한민국 최고의 의료진 보유
                    </div>
                    <div class="finace-box">
                        <div class="img">
                            <img id="doctor" alt=""
                                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjlfNjgg%2FMDAxNjgyNzQzNDMzMjU5.zFKtIyN5slU02R6Buxk4ef4d5GUP4luJQZQl3Sy6KFsg.CzC6x16ymk2qwF9CRz56nxYBHP2gSeYMMxd2Wph2YCgg.JPEG.dhsmile300%2FScreenshot_2023-04-29_at_13.35.39.JPG&type=sc960_832" />
                        </div>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 소개</div>
                                    <div class="text-16">
                                        아주대학교 의과대학 졸업
                                    </div>

                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 이름</div>
                                    <div class="text-16">
                                        이국종
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 경력</div>
                                    <div class="text-16">국군대전병원 병원장
                                        <br>
                                        ​아주대학교병원 외상외과 과장
                                        <br>
                                        ​아주대학교병원 권역외상센터 센터장
                                        <br>
                                        아주대학교 의과대학 외과학교실 교수
                                        <br>
                                        아주대학교 의과대학 응급의학교실 교수
                                        <br>
                                        아주대학교병원 외상외과 교수
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">평가</div>
                                    <div class="text-16">환자들이 믿고 맡길수 있는 신뢰감 있는 교수</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>
        <!-- 03 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">03</div>
                <v-divider vertical />
                <div class="title">진료시간</div>
            </div>
            <div class="example-list">
                <v-list>
                    <v-list-item>
                        <div class="item-avatar">
                            <div class="img">
                                <img id="time"
                                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjRfMjcg%2FMDAxNjA4ODAwMzQyMjY1.DOXrErjmCg7dXP2ksq7_k3mTnX6f-KLbzXuKj-4BK2Ig.Eu4Qq4RBR8OxHoPPQvCgsJb3CdVSUSi0uyPEbT-6ZZIg.JPEG.parkah177%2F%25C1%25F8%25B7%25E1%25BD%25C3%25B0%25A3%25BE%25C8%25B3%25BB.jpg&type=sc960_832" />
                            </div>
                        </div>
                    </v-list-item>
                </v-list>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHospitalStore } from '../../stores/UseHospitalStore';

const route = useRoute(); // 라우트 정보
const hospitalStore = useHospitalStore(); // Pinia 스토어

const selectedHospital = computed(() => hospitalStore.selectedHospital);

onMounted(async () => {
    if (hospitalStore.hospitals.length === 0) {
        await hospitalStore.fetchHospitals(); // 병원 데이터 로드
    }

    const id = Number(router.currentRoute.value.params.id); // URL에서 병원 ID 가져오기
    console.log('id is ' + id);
    hospitalStore.setSelectedHospital(id); // 선택된 병원 설정
});
</script>
<style scoped>
@import '../../styles/hdt.css';
</style>