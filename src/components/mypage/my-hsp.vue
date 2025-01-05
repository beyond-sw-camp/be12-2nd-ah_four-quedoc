<!-- 병원 정보 -->
<template>
    <div class ="sub-group my-page">
   <v-divider class="svc-divide" />
   <div class="my-info">
       <div class="title">
           <v-icon class="icon-hsp" size="md" />
           병원정보
       </div>
       <div class="member">
           <div class="form-box">
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>병원 이름</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">아주대학교병원</span>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>병원 종류</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">대형병원</span>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>주소</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">병원주소 서울특별시 강남구 부타동</span>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>병원 번호</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">02-444-4444</span>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>진료과목</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">진료과목들</span>
                   </div>
               </div>
               <div class="form-group">
                   <div class="ele-tit">
                       <v-label>영업시간</v-label>
                   </div>
                   <div class="data-wrap">
                    <span class="data">영업시간</span>
                   </div>
               </div>
           </div>
       </div>
       
   </div>
   <div class="bottom-btn">
       <v-btn variant="text" @click="pwdConfPopBtn()">
            병원 정보변경
           <v-icon class="btn-arrow" />
       </v-btn>
   </div>
</div>
   <pwdCon :dialog-info="PwdConfPopCnclInfo" @confirm-event="closePwdConfCnclPop" />
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import pwdCon from '../etc/pwd/pwd-con.vue'

//라우터 객체 생성
const router = useRouter();

//패드워드 확인 팝업 정보 객체(병원 정보변경시 사용)
let PwdConfPopCnclInfo = reactive({
   toggle: false,
   text: ''
})


/**
* 정보변경화면/회원탈퇴 비밀번호 확인 팝업
*/
const pwdConfPopBtn = () => {
       PwdConfPopCnclInfo.toggle = true
}

/**
* 병원 정보 변경 페이지 이동 위한 비밀번호 확인 팝업 후처리
*/
const closePwdConfCnclPop = () => {
   PwdConfPopCnclInfo.toggle = false;
   // 병원 정보 변경 페이지로 이동
   router.push({ name: 'hspInfoChange' });
}

</script>
