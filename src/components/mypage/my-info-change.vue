<!-- 개인 회원정보 변경 -->
<template>
     <div class ="sub-group my-page">
    <v-form
        ref="memPsnInfoPutForm"
        autocomplete="off"
        class="form-wrap"
        fast-fail
        validate-on="blur lazy"
        @keypress.enter.prevent
        @submit.prevent="submitForm"
    >
        <v-divider class="svc-divide" />
        <!-- 회원정보 -->
        <div class="my-info">
            <div class="title">
                <v-icon class="icon-member" size="md" />
                회원정보
            </div>
            <div class="member">
                <div class="form-box">
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>로그인아이디</v-label>
                        </div>
                        <div class="data-wrap">
                            <span class="data">{{ memPsnIdentVerfInfo.em }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>이름</v-label>
                        </div>
                        <div class="data-wrap">
                            <span class="data">{{ memPsnIdentVerfInfo.nm }}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>휴대폰번호</v-label>
                        </div>
                        <div class="input-wrap side-btn">
                            <div class="input-wrap">
                                <v-text-field
                                    v-model="memPsnIdentVerfInfo.hon"
                                    :maxlength="11"
                                    aria-label="휴대폰번호"
                                    color="primary"
                                    density="comfortable"
                                    disabled
                                    hide-details="auto"
                                    name="hon"
                                    variant="outlined"
                                ></v-text-field>
                            </div>
                            <v-btn
                                class="line-blue"
                                color="primary"
                                rounded="md"
                                size="large"
                                variant="outlined"
                                @click="identVerfPop"
                            >
                                번호변경
                            </v-btn>
                        </div>
                        <p class="text-tip message">번호변경은 본인인증을 통해 진행할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--// 회원정보 -->
        <div class="btn-wrap">
            <v-btn class="default" color="primary" rounded="lg" size="x-large" type="submit" variant="flat">
                저장
            </v-btn>
        </div>

    </v-form>
    </div>
    <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="closeAlertPop" />
</template>

<script setup>
import { reactive, ref } from 'vue'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue';
import useAuthStore from '../../stores/useAuthStore';
import { useRouter } from 'vue-router'

const loginStore = useAuthStore();

const router = useRouter();

const memPsnInfoPutForm = ref();

let popUpAlertInfo = reactive({
  toggle: false,
  text: '준비중입니다',
  url: ''
});

const memPsnIdentVerfInfo = reactive({
    nm: loginStore.getName(), //이름
    em: loginStore.getEmail(), //이메일
    hon: loginStore.getHon() //휴대전화번호
})
const identVerfPop = async () => {
    popUpAlertInfo.toggle = true
        popUpAlertInfo.text='번호변경하는 vue.'
}
const submitForm = async () => {

    if (true) {
        popUpAlertInfo.toggle = true
        popUpAlertInfo.text='저장되었습니다.'
        
    }
    
}
const closeAlertPop = () => {
    router.push({ name: 'mypage' });
}
</script>