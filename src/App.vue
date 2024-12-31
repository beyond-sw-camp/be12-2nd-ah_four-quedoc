<script setup>
import HealthMap from "./components/sch/area-sch.vue";
import Header from "./components/main/main-header.vue";
import Footer from "./components/main/main-footer.vue";
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'
const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 13,
}

</script>

<template>
  <div class="map" >
    <Header></Header>
  </div>
  <div class="map" id="app" >
    <HealthMap />
  </div>
  <div>
    <naver-map style="width: 100vw; height: 100vh;" :map-options="mapOptions">
        <naver-marker latitude="37.51347" longitude="127.041722" />
    </naver-map>
  </div>
  <div>
    <Footer></Footer>
  </div>
</template>


<style lang="scss" scoped>
#app {
  font-family: "Arial", sans-serif;
}
</style>
