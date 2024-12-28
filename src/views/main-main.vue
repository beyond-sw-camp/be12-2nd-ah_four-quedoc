<!-- main main으로 감싸진 뷰-->

<script setup>
import Header from '../components/main/main-header.vue'
import Footer from '../components/main/main-footer.vue'
import goTopBtn from '../components/etc/btn/go-top-btn.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main class="main">
        <router-view></router-view>
      </v-main>
      <Footer />
      <goTopBtn />
  </v-app>
</template>

<style scoped>

</style>