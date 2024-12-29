<!-- 로그인 폼 -->
<template>
  <div class="login">
      <div class="login-header">
          <h3 class="h-title">로그인</h3>
      </div>
      <v-form
          ref="loginUserForm"
          autocomplete="off"
          class="form-wrap"
          fast-fail
          validate-on="blur lazy"
          @keypress.enter.prevent
           @submit.prevent="submitForm"
      >
          <div class="form-group">
              <v-label>아이디</v-label>
              <v-text-field
                  v-model="loginUserInfo.acc"
                  :rules="accRules"
                  aria-label="아이디"
                  autocomplete="nope"
                  clearable
                  color="primary"
                  density="comfortable"
                  hide-details="auto"
                  maxlength="60"
                  name="acc"
                  placeholder="이메일 아이디 입력"
                  required
                  variant="outlined"
              ></v-text-field>
          </div>
          <div class="form-group">
                  <v-label>비밀번호</v-label>
                  <v-text-field
                      v-model="loginUserInfo.pin"
                      :rules="pinRules"
                      aria-label="비밀번호"
                      autocomplete="nope"
                      clearable
                      color="primary"
                      density="comfortable"
                      hide-details="auto"
                      maxlength="20"
                      name="pin"
                      placeholder="비밀번호 입력"
                      required
                      type="password"
                      variant="outlined"
                  ></v-text-field>
          </div>
          <div class="form-checkbox">
              <v-checkbox
                  v-model="loginUserInfo.recycle"
                  class="check-all"
                  hide-details="none"
                  label="아이디 저장"
              ></v-checkbox>
          </div>
          <v-btn block color="primary" rounded="lg" size="large" type="submit" variant="flat" > 로그인</v-btn>
      </v-form>
      <div class="link-wrap">
        <RouterLink :to="{ name: 'memType'}" class="txt-link">회원가입</RouterLink>
        <RouterLink  class="txt-link">아이디 찾기·비밀번호 변경</RouterLink>
      </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api/mem'

import { getCurrentInstance } from 'vue';
import useAuthStore from '../../stores/useAuthStore';
const { proxy } = getCurrentInstance();

//라우터 정보 객체
const router = useRouter()

// 로그인 상태 관리

const loginStore = useAuthStore();

//로딩상태(토글)
const loginTry = ref(false)
const loginUserForm = ref();
const NOS_COMPONENT = ref(null);
const state = reactive({
    dynamicFields: false,
    modelValues: {},
    decryptDebug: '',
    NOS_SERIALIZED: '',
    NOS_INSTANCE: {}
})
const loginUserInfo = reactive({
    acc: '', //이메일주소
    pin: '', //비밀번호
    ecrPin: '', //암호화비밀번호
    recycle: false, //아이디 저장
    keypad: false //보안키패드
})
const pinRules = [(v) => !!v || '비밀번호를 입력해주세요.'] //비밀번호 룰
const accRules = [
    (v) => !!v || '아이디는 필수 입력입니다.',
    (v) => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요.'
]
const submitForm = async () => {
    const { valid } = await loginUserForm.value.validate()

    const data = await api.login(proxy,loginUserInfo);
    //폼 유효성 및 api pending으로 인한 로그인 중복오류 방지
    /*if (valid && !loginTry.value) {
        loginTry.value = true*/
        if (data.status === "ok") {
            //로그인
            const s = loginStore.getLogin();
            console.log(s.value);
            loginStore.setLogin(!s);
            //메인 페이지 이동

            console.log(data.user);
            loginStore.setInfo(data.user);
            console.log(loginStore.getName());
            console.log(loginStore.getUserType());


            router.push({ name: 'home' })
        } else {
            //에러 처리
            

            console.log(data);
            //오류 메시지 출력
        }
    //}
    loginTry.value = false
}
</script>
<style scoped>
@import '../../styles/login.css';
</style>