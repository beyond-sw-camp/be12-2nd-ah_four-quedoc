<template>
    <div class="introment">
        <img id = 'img' src = '../../assets/logo/icon.png'>
        <h1>환영합니다!</h1>
        <p>저희 Quedoc을 이용해주셔서 감사합니다</p>
        <br>
        <p>-Quedoc 개발진 일동-</p>
    </div>
</template>

<script>
export default {
    name: 'Introment'
}
</script>
<style scoped>
.introment {
    text-align: center;
    margin-top: 50px;
}

.introment h1 {
    font-size: 12em;
    color: #333
}

.introment p {
    font-size: 6em;
    color: #666;
}
#img{
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
}
</style>