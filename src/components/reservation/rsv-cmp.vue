<!-- 예약 완료 페이지-->
<template>
    <div class="img-wrapper">
        <img  src="../../images/gif/complete.gif" >
    </div>
    <div class="text-wrapper">
        <p class="font-weight-bold">
            예약이 완료되었습니다.
        </p>
    </div>
    <div class="btn-wrapper">
        <v-btn 
            class="back"
            color="primary"
            min-width="22.4rem"
            rounded="lg"
            size="x-large"
            variant="flat"
            @click="$router.push({name:'home'})"
        >
            돌아가기
        </v-btn>
    </div>
</template>

<script setup>
</script>

<style scoped>
.img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
.img-wrapper img {
    width: 300px;
    height: 300px;
}
.text-wrapper {
    
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-wrapper {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-wrapper p {
    font-size: xx-large;
}
.back {
    display: flex;
}
</style>