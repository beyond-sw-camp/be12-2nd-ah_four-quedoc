import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import innerMain from '../views/inner-main.vue';
import mainMain from '../views/main-main.vue';

import loginForm from '../components/login/login-form.vue';
import main from '../components/main/main.vue';
import memType from '../components/mem/mem-type.vue';
import memSignUp from '../components/mem/mem-sign-up.vue';
import sch from '../components/sch/sch.vue';  
import hspInfo from '../components/hsp/hsp-info.vue';
import hspRsv from '../components/reservation/hsp-rsv.vue';
import rsvCmp from '../components/reservation/rsv-cmp.vue';
import myPageHeader from '../components/mypage/my-page-header.vue';
import myRsv from '../components/mypage/my-rsv.vue';
import intro from '../components/intro/introduce.vue';
import myPageMain from '../components/mypage/my-page-main.vue';
import hspMiniCard from '../components/hsp/hsp-mini-card.vue';
import myReview from '../components/mypage/my-review-list.vue';
import myRsvDt from '../components/mypage/my-rsv-dt.vue';

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
      { path: 'serv', component: () => hspInfo, name: 'serv' },
      { path: 'reserv', component: () => hspRsv, name: 'reserv' },
      { path: 'comp', component: () => rsvCmp, name: 'comp' },  
      { path: 'mypage',
        component: () => myPageHeader,
        children: [
          {path: '', component: () => myRsv, name: 'mypage'},
      { path: 'changeInfo', component: () => myPageMain, name: 'changeInfo' },
      { path: 'fv', component: () => hspMiniCard, name: 'fvHospital' },
      { path: 'rv', component: () => myReview, name: 'myRv' }
        ] },
        { path: 'detail', component: () => myRsvDt, name: 'reservDetail' },
    ]
  }
  
],
});


export default routes
