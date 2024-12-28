<!--header-->
<script setup>
import { ref,reactive,watch,computed } from 'vue'
import useHeaderStore from '../../stores/useHeaderStore'
const show = ref(false)
const allmenu = ref(false)
const handleMouseLeave = () => {
  setTimeout(() => {
    show.value = false
  }, 350)
}

/* header display 상태관리 */
const headerStore = useHeaderStore();
import popUpAlert from '../etc/pop-up/pop-up-alert.vue';

let popUpAlertInfo = reactive({
    toggle: false,
    text: '준비중입니다',
    url: ''
});
const headerClass = computed(() => ({
  'header': !headerStore.state,
  'header off': headerStore.state,
}));

const pop =  () => {
    // 메인 카드 누르면 나옴
            popUpAlertInfo.toggle = true;
};
watch(
  () => headerStore.state, // Pinia의 반응형 상태 감지
  (newValue, oldValue) => {
    console.log(`State changed from ${oldValue} to ${newValue}`);
  }
);

</script>

<template>

  <header :class="headerClass" >
    <div class="head-inner">
      <div class="out-login-wrap">
        <button class="btn-daram" type="button" @click="$router.push({name: 'home'})">Quedoc</button>
        <ul>
          <li>
            <RouterLink :to="{ name: 'login'}">로그인</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'memType'}">회원가입</RouterLink>
          </li>
          <li>
            <RouterLink @click="pop" :to="{ name: ''}" >고객센터</RouterLink>
          </li>
        </ul>
      </div>
      <div class="gnb-wrap">
        <h1 class="logo-title">
          <RouterLink :to="{name: 'home'}"><img alt="" class="logo" src="../../assets/logo/icon.png" /></RouterLink>
        </h1>
        <nav :class="show ? 'active' : ''" class="gnb-menu" @click="show = true" @mouseleave="handleMouseLeave">
          <ul class="menu-list">
            <li><a href="javascript:;">소개</a></li>
            <li><a href="javascript:;">병원찾기</a></li>
            <li><a href="javascript:;">커뮤니티</a></li>
          </ul>
          <div class="gnb-menu-wrap">
            <div class="gnb-menu-inner">
              <div class="gnb-menu-list">
                <h2 class="title"><span class="title-link">소개</span></h2>
                <ul class="dep1-list">
                  <li class="item">
                    <RouterLink @click = 'pop' @click.stop="show = false" :to="{name:''}" >Quedoc 소개 </RouterLink>
                  </li>
                  <li class="item">
                    <RouterLink   @click.stop="show = false" :to="{name:''}" >인삿말 </RouterLink>
                  </li>
                  <li class="item">
                    <RouterLink  @click.stop="show = false" :to="{ name: 'hi'}">만든이 </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="gnb-menu-list">
                <h2 class="title"><span class="title-link">병원찾기</span></h2>
                <ul class="dep1-list">
                  <li class="item">
                    <RouterLink  @click = 'pop' @click.stop="show = false" :to="{name:''}">병원종류로 찾기 </RouterLink>
                  </li>
                  <li class="item">
                    <RouterLink @click = 'pop' @click.stop="show = false" :to="{name:''}">진료과목으로 찾기 </RouterLink>
                  </li>
                  <li class="item">
                    <RouterLink @click = 'pop' @click.stop="show = false" :to="{name:''}">지역으로 찾기 </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="gnb-menu-list">
                <h2 class="title"><a class="title-link" href="javascript:;">커뮤니티</a></h2>
                <ul class="dep1-list">
                  <li class="item">
                    <RouterLink @click = 'pop' @click.stop="show = false" :to="{name:''}">병원후기 </RouterLink>
                  </li>
                  <li class="item">
                    <RouterLink @click = 'pop' @click.stop="show = false" :to="{name:''}">소통해요 </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <!-- util -->
        <div class="util-area">
          <v-btn to="/my" size="x-small" title="MY" variant="text" @click="$router.push({name:'mypage'})">
            <v-icon class="icon-my" />
          </v-btn>
          <v-btn size="x-small" title="전체메뉴" variant="text" @click="allmenu = true">
            <v-icon class="icon-allmenu" />
          </v-btn>
        </div>
      </div>
    </div>
  </header>
  <div :class="show ? 'active' : ''" class="menu-dim"></div>
  <!--2024.05.31 추가 -->

  <!--  전체메뉴 -->
  <v-dialog v-model="allmenu" class="menu-full-popup" fullscreen>
    <div class="allmenu">
      <div class="allmenu-inner">
        <div class="allmenu-head">

          <div class="logo-title">
                        <RouterLink  @click.stop = "allmenu=false" :to = "{name: 'home'}"
                            ><img alt="" class="logo" src="../../assets/logo/icon.png"
                        /></RouterLink>
                    </div>
          <div class="allmenu-login-wrap">
            <ul class="login-txt-box">
              <li>
                <RouterLink class="menu-login" @click.stop = "allmenu=false" :to = "{name: 'login'}">
                  <v-icon>icon-login</v-icon>
                  로그인
                </RouterLink>
              </li>
              <li>
                <RouterLink  class="menu-login" @click.stop = "allmenu=false" :to = "{name: 'memType'}">
                  <v-icon>icon-join</v-icon>
                  회원가입
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="allmenu-list-wrap">
          <div class="allmenu-list">
            <h2 class="title"><span>QUEDOC</span></h2>
            <ul class="dep1_list">
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">QUEDOC 소개</RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">인삿말 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">만든이 </RouterLink>
              </li>
            </ul>
          </div>
          <div class="allmenu-list">
            <h2 class="title"><span>병원찾기</span></h2>
            <ul class="dep1_list">
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">병원종류로 찾기 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">진료과목으로 찾기 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">지역으로 찾기 </RouterLink>
              </li>
            </ul>
          </div>
          <div class="allmenu-list">
            <h2 class="title"><span>커뮤니티</span></h2>
            <ul class="dep1_list">
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">병원후기 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">소통해요 </RouterLink>
              </li>
            </ul>
          </div>
          <div class="allmenu-list">
            <h2 class="title"><span>MY</span></h2>
            <ul class="dep1_list">
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">MY예약 </RouterLink>
              </li>
              <!--  모바일경우 none 처리 -->
              <div class="mo-customer">
                <li class="item">
                  <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">MY정보 </RouterLink>
                </li>
              </div>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">MY리뷰 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">MY문의 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">알림 </RouterLink>
              </li>
            </ul>
          </div>

          <div class="allmenu-list mo-customer">
            <!--  모바일경우 none 처리 -->
            <h2 class="title"><span>고객센터</span></h2>
            <ul class="dep1_list">
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">공지사항 </RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">FAQ</RouterLink>
              </li>
              <li class="item">
                <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">고객문의 </RouterLink>
              </li>
            </ul>
          </div>
          <ul class="customer-box">
            <!--  모바일만 보임 -->
            <li>
              <RouterLink class="notice" @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">공지사항 </RouterLink>
            </li>
            <li>
              <RouterLink @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">FAQ</RouterLink>
            </li>
            <li>
              <RouterLink class="customer-center" @click = 'pop'  @click.stop="allmenu = false" :to="{name:''}">고객문의 </RouterLink>
            </li>
          </ul>
        </div>
        <v-btn block class="btn-popup-close" @click="allmenu = false">
          <span class="sr-only">닫기</span>
        </v-btn>
      </div>
    </div>
  </v-dialog>
  
  <popUpAlert :dialog-info="popUpAlertInfo" />
</template>

<style scoped>
@import '../../styles/header.css';
</style>
