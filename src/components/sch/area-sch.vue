<template>
    <div class="hiraMap">
        <div class="hiraMenu">
            <h1>
                <img src="https://www.hira.or.kr/images/contents/hiraMap.png" alt="HIRA 건강지도" />
            </h1>
            <ul class="tabList">
                <li :class="{ on: activeTab === 1 }">
                    <a href="#" @click="setActiveTab(1)" title="선택됨">건강지도 홈</a>
                </li>
                <li :class="{ on: activeTab === 2 }">
                    <a href="#" @click="setActiveTab(2)">병원·약국 찾기</a>
                </li>
                <li :class="{ on: activeTab === 3 }">
                    <a href="#" @click="setActiveTab(3)">좋은병원 찾기</a>
                </li>
                <li :class="{ on: activeTab === 4 }">
                    <a href="#" @click="setActiveTab(4)">전문병원 찾기</a>
                </li>
            </ul>
        </div>

        <div class="hiraCont" v-if="activeTab === 1">
            <h2>지역으로 찾기</h2>
            <div class="searchArea2">
                <input type="text"  v-model="searchQuery"
                    @keypress.enter="searchHospital" placeholder="병원명 또는 약국명 입력" class="input" />
                <a href="https://www.hira.or.kr/ra/hosp/getHealthMap.do#none" class="btn_search2"
                    id="btnHelthMapSearch"><i class="icon-search">검색</i></a>
            </div>
            <div class="tot">
                검색결과 (총 <span class="fcR2">{{ searchResultCount }}</span>건)
            </div>
            <div class="map-around-list">
                <ul>
                    <li v-for="(result, index) in searchResults" :key="index">
                        {{ result.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <naver-map style="width: 100%; height: 400px" :map-options="mapOptions">
        <naver-marker latitude="37.51347" longitude="127.041722" />
    </naver-map>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 1,
            searchQuery: '',
            searchResultCount: 0,
            searchResults: []
        };
    },
    methods: {
        setActiveTab(tabNumber) {
            this.activeTab = tabNumber;
        },
        searchHospital() {
            // 예시: 검색 결과 데이터 패칭 로직
            this.searchResults = [
                { name: '서울대병원' },
                { name: '강남세브란스' }
            ];
            this.searchResultCount = this.searchResults.length;
        }
    }
};

import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'

const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 13,
}
</script>


<style lang="scss" scoped></style>

<style scoped>
@import '../../styles/area-sch.css';
</style>