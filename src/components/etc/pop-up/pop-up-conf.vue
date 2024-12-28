<!--확인이랑 취소 버튼이 있는 alert vue-->
<template>
    <v-dialog v-model="dialogInfo.toggle" persistent width="auto">
        <div class="popup-alert-wrap">
            <div class="alert-cont">
                <p class="text">{{ dialogInfo.text }}</p>
            </div>
            <div class="alert-foot confirm">
                <v-btn class="cancel" variant="text" @click="cancel">취소</v-btn>
                <v-btn class="default" variant="text" @click="confirm">확인</v-btn>
            </div>
        </div>
    </v-dialog>
</template>

<script setup>
//defineModel 정의
const dialogInfo = defineModel('dialogInfo', { type: Object })

//defineEmits 정의
const emits = defineEmits(['confirmEvent', 'cancelEvent'])

//확인 버튼 이벤트
const confirm = () => {
    //emit 호출
    if (dialogInfo.value.code) {
        emits('confirmEvent', dialogInfo.value.code)
    } else {
        emits('confirmEvent')
    }
    //팝업 닫기
    dialogInfo.value.toggle = false
}

//취소 버튼 이벤트
const cancel = () => {
    //emit 호출
    emits('cancelEvent')
    //팝업 닫기
    dialogInfo.value.toggle = false
}
</script>

<style scoped>
.v-btn--size-default {
    font-size: 1.4rem;
}
.v-overlay__scrim {
    background: #111518;
    opacity: .7;
}
.v-dialog>.v-overlay__content {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
}
.v-dialog>.v-overlay__content, .v-dialog>.v-overlay__content>form {
    display: flex;
    flex-direction: column;
    min-height: 0;
}
.popup-alert-wrap {
    position: relative;
    width: 36rem;
    max-width: calc(100% - 9.6rem);
    max-height: calc(100% - 4.8rem);
    margin: 2.4rem 4.8rem;
    background-color: #fff;
    border-radius: 1.6rem;
}
.popup-alert-wrap .alert-foot {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.2rem;
    border-top: .1rem solid #e5e5e5;
}
.popup-alert-wrap .alert-cont {
    position: relative;
    padding: 2.8rem 2.4rem;
    text-align: center;
}
.popup-alert-wrap .alert-cont .text {
    font-size: 1.6rem;
    word-break: keep-all;
    white-space: pre-line;
}

.popup-alert-wrap .alert-foot.confirm .cancel {
    width: 50%;
    height: 100%;
    font-size: 1.6rem;
    color: #666;
}
.popup-alert-wrap .alert-foot .default {
    width: 50%;
    height: 100%;
    font-size: 1.6rem;
    color: #356cff;
}
@media only screen and (max-width: 960px) {
    .v-btn.v-btn--size-default {
        --v-btn-size: 1.2rem;
        --v-btn-height: 3.2rem;
        padding: 0 .8rem;
    }
}
</style>
