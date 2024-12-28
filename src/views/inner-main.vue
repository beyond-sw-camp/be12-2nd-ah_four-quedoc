<!-- container, ly-inner로 감싸준 뷰 -->
<script setup>
import Header from '../components/main/main-header.vue'
import Footer from '../components/main/main-footer.vue'
import goTopBtn from '../components/etc/btn/go-top-btn.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main class="container">
      <div class="ly-inner">
        <RouterView/>
        </div>
      </v-main>
      <Footer />
      <goTopBtn />
  </v-app>
</template>

<style scoped>

</style>