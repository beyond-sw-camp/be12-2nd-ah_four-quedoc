<!-- 회원탈퇴 vue-->
<template>
    <v-divider class="svc-divide" />
    <v-form
        ref="memPsnInfoPutForm"
        autocomplete="off"
        class="form-wrap"
        fast-fail
        validate-on="blur lazy"
        @keypress.enter.prevent

    >
        <!-- 회원탈퇴 -->
        <div class="my-info">
            <div class="title">
                <v-icon class="icon-quit" size="md" />
                회원탈퇴
            </div>
            <ul class="quit-guide">
                <li>
                    탈퇴 시 DataBada 홈페이지에서 이용하신 서비스와 관련된 사항 (문의내역, 계약정보, 데이터 다운로드
                    등)은 더 이상 이용이 불가능함을 알려드립니다.
                </li>
                <li>
                    계약과 관련된 정보는 소속 기업과의 계약으로 DataBada에 보관되며 향후 소속 기업의 요청 시 새로운
                    담당자에게 이관되며 확인이 가능합니다.
                </li>
            </ul>
        </div>
        <div class="my-quit">
            <p class="title">회원탈퇴를 진행하시겠습니까?</p>
            <div class="form-checkbox">
                <v-checkbox
                    v-model="memPsnInfoPutInfo.cnclGe"
                    class="check-quit"
                    hide-details
                    label="안내사항을 모두 확인하였으며, 이에 동의합니다."
                    name="cnclGe"
                ></v-checkbox>
            </div>
        </div>
        <!--// 회원탈퇴 -->
        <div class="btn-wrap">
            <v-btn class="default prev" color="secondary" rounded="lg" size="x-large" variant="flat" @click="mveForm">
                이전
            </v-btn>
            <v-btn
                :disabled="formCntrObj['submitBtn'].disabled"
                class="default next"
                color="primary"
                rounded="lg"
                size="x-large"
                variant="flat"
                @click="submitForm"
            >
                확인
            </v-btn>
        </div>
    </v-form>
    <BasePupAlert :dialog-info="BasePupAlertInfo" @confirm-event="movePage" />
</template>

<script>
export default {
  data() {
    return {
      memPsnInfoPutInfo: {
        cnclGe: false
      },
      formCntrObj: {
        submitBtn: {
          disabled: false
        }
      },
      BasePupAlertInfo: {}
    };
  },
  methods: {
    mveForm() {
      // Your method implementation
      this.$router.back();
    },
    submitForm() {
      // Your method implementation
      this.$router.push({ name: 'home' });
    },
    movePage() {
      // Your method implementation
      this.$router.back();
    }
  }
};
</script>