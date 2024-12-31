
<template>
  
<RouterView/>
</template>

<script setup>
import { RouterView } from "vue-router";

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
