<!-- footer -->
<script setup>

import { ref,reactive,watch,computed } from 'vue'
import useHeaderStore from '../../stores/useHeaderStore'
let basePupScrollObj = reactive({
    code: 'svUeGeDaBlue',
    title: 'DataBada이용약관',
    toggle: false

    
})

/* header display 상태관리 */
const headerStore = useHeaderStore();

const footer = computed(() => ({
  'footer': !headerStore.state,
  'footer off': headerStore.state,
}));

watch(
  () => headerStore.state, // Pinia의 반응형 상태 감지
  (newValue, oldValue) => {
    console.log(`State changed from ${oldValue} to ${newValue}`);
  }
);
</script>
<template>
    <v-footer :class="footer">
        <div class="foot-inner">
            <div class="bottom-logo"><span class="sr-only">QUEDOC</span></div>
            <div class="addr-wrap">
                <ul>
                    <li>
                        <a href="javascript:;" @click="basePupScrollObj.toggle = true">이용약관</a>
                    </li>
                    <li>
                        <a :href="psnIfPsUrl" target="blank">개인정보처리방침</a>
                    </li>
                </ul>
                <address>
                    <p><span>서울특별시 관악구 보라매로 87 4층</span></p>
                    <p><span>이메일: cksdudtj0221@gmail.com</span></p>
                </address>
                <p class="copyright">Copyright 2024 Shinhan Card DataBada. All Rights Reserved.</p>
            </div>
        </div>
    </v-footer>
</template>
<style scoped>
@import '../../styles/footer.css';
.off {
    display: none;
}
</style>