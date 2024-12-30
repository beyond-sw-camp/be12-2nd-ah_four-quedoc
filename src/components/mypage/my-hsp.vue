<!-- 개인 회원정보 조회 -->
<template>
    <div class ="sub-group my-page">
   <v-divider class="svc-divide" />
   <!-- 회원정보 -->
   <div class="my-info">
       <div class="title">
           <v-icon class="icon-member" size="md" />
           병원정보
       </div>
       <div class="member">
           <div class="form-box">
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>병원 이름</v-label>
                   </div>
                   <div class="data-wrap">
                       <div id = 'hspname'>아주대학교병원</div>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>주소</v-label>
                   </div>
                   <div class="data-wrap">
                       <div id = 'hspaddress'>경기도 수원시 영통구 월드컵로 164</div>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>병원 번호</v-label>
                   </div>
                   <div class="data-wrap">
                    <div id = 'hspnum'>1688-6114</div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="bottom-btn">
       <v-btn variant="text" @click="pwdConfPopBtn('memCncl')">
           회원탈퇴
           <v-icon class="btn-arrow" />
       </v-btn>
   </div>
</div>
   <pwdChange :dialog-info="PwdUpdPopInfo" @confirm-event="closeUpdPop" />
   <pwdCon :dialog-info="PwdConfPopCnclInfo" @confirm-event="closePwdConfCnclPop" />
   <pwdCon :dialog-info="PwdConfPopChgInfo" @confirm-event="closePwdConfChgPop" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import pwdChange from '../etc/pwd/pwd-change.vue'
import pwdCon from '../etc/pwd/pwd-con.vue'
import useAuthStore from '../../stores/useAuthStore'

const loginStore = useAuthStore();

//회원정보
const memInfo = ref({
   email: loginStore.getEmail(),
   name: loginStore.getName(),
   hon: loginStore.getHon()
})


//마케팅동의 문구
const mktGeTxt = ref('')

const emits = defineEmits(['nextEvent'])


//비밀번호변경 팝업 정보 객체
let PwdUpdPopInfo = reactive({
   toggle: false,
   text: ''
})

//패드워드 확인 팝업 정보 객체(회원탈퇴시 사용)
let PwdConfPopCnclInfo = reactive({
   toggle: false,
   text: ''
})

//패드워드 확인 팝업 정보 객체(정보변경시 사용)
let PwdConfPopChgInfo = reactive({
   toggle: false,
   text: ''
})

/**
* 비밀번호변경 팝업
*/
const pwdUpdPopBtn = () => {
   PwdUpdPopInfo.toggle = true
}

/**
* 정보변경화면/회원탈퇴 비밀번호 확인 팝업
*/
const pwdConfPopBtn = (code) => {
   if (code === 'memInfoChg') {
       //정보변경화면 이동
       PwdConfPopChgInfo.toggle = true
   } else if (code === 'memCncl') {
       //회원탈퇴 화면 이동
       PwdConfPopCnclInfo.toggle = true
   }
}

/**
* 비밀번호 변경 후처리
*/
const closeUpdPop = () => {
   PwdUpdPopInfo.toggle = false
}

/**
* 회원탈퇴 화면 이동 위한 비밀번호 확인 팝업 후처리
*/
const closePwdConfCnclPop = () => {
   PwdConfPopCnclInfo.toggle = false
   //회원탈퇴 화면 이동
   emits('nextEvent', 2)
}

/**
* 정보변경 화면 이동 위한 비밀번호 확인 팝업 후처리
*/
const closePwdConfChgPop = (v) => {
   PwdConfPopChgInfo.toggle = false
   //회원변경 화면 이동
   emits('nextEvent', 1, v)
}
</script>
