<template>
    <!-- tab4 - 데이터전문기관 -->
            <div class="data-consultant">
                <div class="sub-gruop">
                    <div class="static-content">
                    
                    <!-- 01 -->
                    <div class="cnt-group">
                        <div class="cnt-title subtitle-24">
                            <div class="num">Q.</div>
                            <v-divider vertical />
                            <div class="title"><span class="shinhan-life--text">Why</span> Quedoc을 선택해야 하는 이유?</div>
                        </div>
                        <div class="cnt-text">
                            <div class="text-16">편리한 병원 이용과 실시간 예약 확인 시스템을 제공합니다.</div>
                            <div class="card-list-area case02">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-sheet class="outlined" rounded="lg">
                                            <div class="col">
                                                <v-icon class="why01" />
                                                <div class="subtitle-22">고객분석</div>
                                                <div class="text-18">"우리 고객은 병원 예약을 어떻게 할까?"</div>
                                            </div>
                                        </v-sheet>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-sheet class="outlined" rounded="lg">
                                            <div class="col">
                                                <v-icon class="why02" />
                                                <div class="subtitle-22">병원위치분석</div>
                                                <div class="text-18">"가까운 병원 위치는 어디일까?"</div>
                                            </div>
                                        </v-sheet>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-sheet class="outlined" rounded="lg">
                                            <div class="col">
                                                <v-icon class="why03" />
                                                <div class="subtitle-22">진료대기</div>
                                                <div class="text-18">"어떤 방식이면 진료대기할 시간을 줄일까?"</div>
                                            </div>
                                        </v-sheet>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-sheet class="outlined" rounded="lg">
                                            <div class="col">
                                                <v-icon class="why04" />
                                                <div class="subtitle-22">병원정보</div>
                                                <div class="text-18">"어떤 병원이 고객에게 적합한 병원일까?"</div>
                                            </div>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup>
import { ref } from 'vue'

const active = ref(true)
const expandRow = ref(false)

</script>
<style scoped>
@import '../../styles/quedocIntroduce.css';
</style>
