<!-- 개인 회원정보 조회 -->
<template>
    <div class="sub-group my-page">
        <v-divider class="svc-divide" />
        <!-- 회원정보 -->
        <div class="my-info">
            <div class="title">
                <v-icon class="icon-hsp" size="md" />
                병원정보등록
            </div>
            <div class="member">
                <div class="form-box">
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>병원 이름</v-label>
                        </div>
                        <div class="input-wrap side-btn">
                            <div class="input-wrap">
                                <v-text-field aria-label="병원이름" color="primary" density="comfortable"
                                    hide-details="auto" name="name" variant="outlined"></v-text-field>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>병원 종류</v-label>
                        </div>
                        <div class="input-wrap">
                            <v-text-field aria-label="병원종류" color="primary" density="comfortable" hide-details="auto"
                                name="type" variant="outlined"></v-text-field>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>주소</v-label>
                        </div>
                        <div style="display: flex;">
                            <v-autocomplete style="width: 10px;" v-model="selectedCity" placeholder="시" :items="cities"
                                variant="outlined"> </v-autocomplete>
                            <v-autocomplete style="margin-left: 1rem; width: 10px;" v-model="selectedDistrict"
                                placeholder="구" :items="filteredDistricts" variant="outlined"> </v-autocomplete>
                        </div>
                        <div class="input-wrap">
                            <v-text-field aria-label="병원종류" color="primary" density="comfortable" hide-details="auto"
                                placeholder="상세주소" name="type" variant="outlined"></v-text-field>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>전화번호</v-label>
                        </div>
                        <div class="input-wrap">
                            <v-text-field aria-label="전화번호" color="primary" density="comfortable" hide-details="auto"
                                name="number" variant="outlined"></v-text-field>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>진료과목</v-label>
                        </div>
                        <v-autocomplete width=300 placeholder="진료과목" :items="departments"
                            variant="outlined"></v-autocomplete>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>영업시간</v-label>
                        </div>
                        <div class="data-wrap">
                            <v-chip-group selected-class="text-primary" multiple>
                                <v-chip style="font-size: small;" v-for="tag in tags" :key="tag" :text="tag"></v-chip>
                            </v-chip-group>
                        </div>
                        <div style="display: flex; margin-top: 2rem; width: 300px;">
                            <v-autocomplete width=30 placeholder="오픈시간" :items="timeData"
                                variant="outlined"></v-autocomplete>
                            <v-autocomplete width=30 style="margin-left: 1rem;" placeholder="마감시간" :items="timeData"
                                variant="outlined"> </v-autocomplete>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom-btn" style="display: flex; justify-content: flex-end;">
            <v-btn>
                저장
            </v-btn>
        </div>
    </div>
    <pwdCon :dialog-info="PwdConfPopCnclInfo" @confirm-event="closePwdConfCnclPop" />
</template>

<script setup>
import { reactive, ref } from 'vue'
import pwdCon from '../etc/pwd/pwd-con.vue'

//패드워드 확인 팝업 정보 객체(병원 정보변경시 사용)
let PwdConfPopCnclInfo = reactive({
    toggle: false,
    text: ''
})


/**
* 정보변경화면/회원탈퇴 비밀번호 확인 팝업
*/
const pwdConfPopBtn = () => {
    PwdConfPopCnclInfo.toggle = true
}

/**
* 병원 정보 변경 페이지 이동 위한 비밀번호 확인 팝업 후처리
*/
const closePwdConfCnclPop = () => {
    PwdConfPopCnclInfo.toggle = false
    // 병원 정보 변경 페이지로 이동
}

</script>
<script>
export default {
    data() {
        return {
            // 첫 번째 Autocomplete 값
            selectedCity: null,
            // 두 번째 Autocomplete 값
            selectedDistrict: null,
            // 진료요일 데이터
            tags: ["월", "화", "수", "목", "금", "토", "일"],
            // 30분단위 시간 데이터
            timeData: ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"],
            // 진료과목 데이터
            departments: ["내과", "외과", "정형외과", "신경외과", "피부과", "안과", "이비인후과", "비뇨기과", "산부인과", "소아청소년과", "치과", "한의원", "약국", "기타"],
            // 전체 데이터
            cities: ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"],
            districts: {
                서울: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
                부산: ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"],
                인천: ["계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "중구"],
                대구: ["남구", "달서구", "달서군", "동구", "북구", "서구", "수성구", "중구"],
                대전: ["대덕구", "동구", "서구", "유성구", "중구"],
                울산: ["남구", "동구", "북구", "중구", "울주군"],
                광주: ["광산구", "남구", "동구", "북구", "서구"],
                제주: ["서귀포시", "제주시"],
                세종: ["세종시"],
                경기: ["가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"],
                강원: ["강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍천군", "화천군", "횡성군"],
                충북: ["괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "증평군", "진천군", "청주시", "충주시"],
                충남: ["계룡시", "공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시", "서천군", "아산시", "예산군", "천안시", "청양군", "태안군", "홍성군"],
                경북: ["경산시", "경주시", "고령군", "구미시", "군위군", "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시"],
                경남: ["거제시", "거창군", "고성군", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시", "하동군", "함안군", "함양군", "합천군"],
                전북: ["고창군", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시", "진안군"],
                전남: ["강진군", "고흥군", "곡성군", "광양시", "구례군", "나주시", "담양군", "목포시", "무안군", "보성군", "순천시", "신안군", "여수시", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
            },
        };
    },
    computed: {
        // 첫 번째 선택 값에 따라 두 번째 목록 필터링
        filteredDistricts() {
            return this.districts[this.selectedCity] || [];
        },
    },
    watch: {
        // 첫 번째 값이 변경되면 두 번째, 세 번째 선택 초기화
        selectedCity() {
            this.selectedDistrict = null;
            this.selectedNeighborhood = null;
        },
    },
};
</script>