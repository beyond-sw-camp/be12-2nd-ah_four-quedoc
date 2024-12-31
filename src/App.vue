<template>
  <div id="app">
    <HealthMap />
  </div>
  <div>
    <naver-map style="width: 100%; height: 400px" :map-options="mapOptions">
        <naver-marker latitude="37.51347" longitude="127.041722" />
    </naver-map>
  </div>
</template>

<script setup>
import HealthMap from "./components/sch/area-sch.vue";
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'
const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 13,
}

</script>

<style lang="scss" scoped>
#app {
  font-family: "Arial", sans-serif;
}
</style>
