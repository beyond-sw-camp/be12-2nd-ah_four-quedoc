import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '../stores/useAuthStore';

import innerMain from '../views/inner-main.vue';
import mainMain from '../views/main-main.vue';

import loginForm from '../components/login/login-form.vue';
import main from '../components/main/main.vue';
import memType from '../components/mem/mem-type.vue';
import memSignUp from '../components/mem/mem-sign-up.vue';
import memSignUpBs from '../components/mem/mem-sign-up-bs.vue';
import sch from '../components/sch/sch.vue';  
import hspInfo from '../components/hsp/hsp-info.vue';
import hspRsv from '../components/reservation/hsp-rsv.vue';
import rsvCmp from '../components/reservation/rsv-cmp.vue';
import myPageHeader from '../components/mypage/my-page-header.vue';
import myRsv from '../components/mypage/my-rsv.vue';
import intro from '../components/intro/introduce.vue';
import myPageMain from '../components/mypage/my-page-main.vue';
import myFv from '../components/hsp/mini-card-container.vue';
import myReview from '../components/mypage/my-review-list.vue';
import myRsvDt from '../components/mypage/my-rsv-dt.vue';
import myHsp from '../components/mypage/my-hsp.vue';
import introment from '../components/intro/introment.vue';
import quedocIntorduce from '../components/intro/quedoc-introduce.vue';
import myHspRsv from '../components/mypage/my-hsp-rsv.vue'
import myHspRv from '../components/mypage/my-hsp-rv.vue'

const routes = createRouter({ 
  history: createWebHistory(), //createWebHistory(), -> for browser history
  // main main
  routes: [
    {
      path: '/',
      component: mainMain,
      children: [
        { path: '', component: () => main, name: 'home' },
      { path: 'search', component: () => sch , name: 'search'},
      { path: 'hi', component: () => intro , name: 'hi'}
      ]
    },
    // main container -> inner
  {
    path: '/login',
    component: innerMain,
    children: [
      { path: '', component: () => loginForm, name: 'login' },
      { path: 'memType', component: () => memType, name: 'memType' },
      { path: 'memPsn', component: () => memSignUp, name: 'memPsn' },
      { path: 'memPsnBs', component: () => memSignUpBs, name: 'memPsnBs' },
      { path: 'serv', component: () => hspInfo, name: 'serv' },
      { path: 'reserv', component: () => hspRsv, name: 'reserv' },
      { path: 'comp', component: () => rsvCmp, name: 'comp' },  
      { path: 'it', component: () => introment , name: 'it'},
      { path: 'qi', component: () => quedocIntorduce , name: 'qI'},
      { path: 'mypage',
        component: () => myPageHeader,
        beforeEnter: (to, from, next) => {
          const authStore = useAuthStore();  // Pinia 스토어에서 로그인 상태 확인
          if (authStore.getLogin()) {
            next();  // 로그인되어 있으면 mypage로 이동
          } else {
          next({ name: 'login' });  // 로그인 안 되어 있으면 로그인 페이지로 리디렉션
          }
        },
        children: [
          {path: '', 
            beforeEnter: (to, from, next) => {
              const authStore = useAuthStore(); 
              if (authStore.getUserType() === 'U') {
                next({ name: 'myRsv' });  // 로그인되어 있으면 mypage로 이동
              } else {
                
              next({ name: 'myHsp' });  // 로그인 안 되어 있으면 로그인 페이지로 리디렉션
              }
            }, name: 'mypage'},
      { path: 'changeInfo', component: () => myPageMain, name: 'changeInfo' },
      { path: 'fv', component: () => myFv, name: 'fvHospital' },
      { path: 'rv', component: () => myReview, name: 'myRv' },
      { path: 'mh', component: () => myHsp, name: 'myHsp' },
      { path: 'mr', component: () => myRsv, name: 'myRsv' },
      { path: 'ms', component: () => myHspRsv, name: 'myHspRsv' },
      { path: 'mrv', component: () => myHspRv, name: 'myHspRv' }
        ] },
        { path: 'detail', component: () => myRsvDt, name: 'reservDetail' },
    ]
  }
  
],
});


export default routes
