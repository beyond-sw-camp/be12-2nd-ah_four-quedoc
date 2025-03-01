import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '../stores/useAuthStore';

import innerMain from '../views/inner-main.vue';
import mainMain from '../views/main-main.vue';

import loginForm from '../components/login/login-form.vue';
import main from '../components/main/main.vue';
import memType from '../components/mem/mem-type.vue';``
import memSignUp from '../components/mem/mem-sign-up.vue';
import memSignUpBs from '../components/mem/mem-sign-up-bs.vue';
import sch from '../components/sch/sch.vue';  
import recommend from '../components/sch/recommend.vue';
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
import sch_pedi from '../components/sch/sch-pedi.vue'
import hspInfoChange from '../components/mypage/hsp-info-change.vue';
import hspNotice from '../components/mypage/hsp-notice.vue';
import error from '../components/etc/error/error.vue';

const routes = createRouter({
  history: createWebHistory(), //createWebHistory(), -> for browser history
  // main main
  routes: [
    {
      path: '/',
      component: mainMain,
      children: [
        { path: '', component:   main, name: 'home' },
      { path: 'search', component:   sch , name: 'search'},
      { path: 'popular_pedi', component:  sch_pedi , name: 'pedi'},
      { path: 'recommend', component:   recommend , name: 'recommend'},
      { path: 'hi', component:   intro , name: 'hi'},
      { path: 'error', component:   error , name: 'error'},
      ]
    },
    // main container -> inner
    {
      path: '/login',
      component: innerMain,
      children: [
        { path: '', component: loginForm, name: 'login' },
        { path: 'memType', component: memType, name: 'memType' },
        { path: 'memPsn', component: memSignUp, name: 'memPsn' },
        { path: 'memPsnBs', component: memSignUpBs, name: 'memPsnBs' },
        { path: 'serv', component: hspInfo, name: 'serv' },
        { path: 'reserv', component: hspRsv, name: 'reserv' },
        { path: 'comp', component: rsvCmp, name: 'comp' },
        { path: 'it', component: introment, name: 'it' },
        { path: 'qi', component: quedocIntorduce, name: 'qI' },
        {
          path: 'mypage',
          component: myPageHeader,
          children: [
            {
              path: '',
              beforeEnter: (to, from, next) => {
                const authStore = useAuthStore();
                const isLoggedIn = authStore.getLogin();
                const isException = to.name === 'hspInfoChange';
              
                if (!isLoggedIn && !isException) {
                  return next({ name: 'login' });
                }
              
                // 기본 페이지 리디렉션
                if (to.path === '/mypage') {
                  return authStore.getUserType() === 'U' ? next({ name: 'myRsv' }) : next({ name: 'myHsp' });
                }
              
                next();
              }, name: 'mypage'
            },
            { path: 'changeInfo', component: myPageMain, name: 'changeInfo' },
            { path: 'fv', component: myFv, name: 'fvHospital' },
            { path: 'rv', component: myReview, name: 'myRv' },
            { path: 'mh', component: myHsp, name: 'myHsp' },
            { path: 'mr', component: myRsv, name: 'myRsv' },
            { path: 'ms', component: myHspRsv, name: 'myHspRsv' },
            { path: 'mrv', component: myHspRv, name: 'myHspRv' },
            { path: 'hic', component: hspInfoChange, name: 'hspInfoChange' },
            { path: 'hn', component: hspNotice, name: 'hspNotice' }
          ]
        },
        { path: 'detail', component: myRsvDt, name: 'reservDetail' },
      ]
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 기존 위치로 이동 (뒤로 가기/앞으로 가기)
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }; // 해시(anchor) 이동 시 부드럽게 스크롤
    } else {
      return { top: 0, behavior: 'smooth' }; // 기본적으로 최상단 이동
    }
  }
});


export default routes
