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
                            <span class="data">test@test.com</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>이름</v-label>
                        </div>
                        <div class="data-wrap">
                            <span class="data">test</span>
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
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>마케팅동의</v-label>
                        </div>
                        <div class="check-wrap">
                            <div class="form-checkbox">
                                <v-checkbox
                                    v-model="memPsnIdentVerfInfo.svUeGeMktGeAll"
                                    class="check-all"
                                    hide-details
                                    label="전체동의"
                                    name="svUeGeMktGeAll"
                                    @change="checkedMktGe"
                                ></v-checkbox>
                                <v-divider vertical />
                                <v-checkbox
                                    v-model="memPsnIdentVerfInfo.svUeGeMktGeEm"
                                    class="check-media"
                                    hide-details
                                    label="이메일"
                                    name="svUeGeMktGeEm"
                                    @change="uncheckedMktlGe"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="memPsnIdentVerfInfo.svUeGeMktGeChgMsg"
                                    class="check-media"
                                    hide-details
                                    label="휴대폰메시지"
                                    name="svUeGeMktGeChgMsg"
                                    @change="uncheckedMktlGe"
                                ></v-checkbox>
                            </div>
                            <div class="agree-btn">
                                <v-btn variant="text">
                                    <span @click="agreePop('svUeGeMktGe', '마케팅 목적의 수집 및 이용 동의')"
                                        >마케팅 목적의 수집 및 이용 동의</span
                                    >
                                    <v-icon class="btn-arrow" />
                                </v-btn>
                            </div>
                        </div>
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

        <IdentVerf :dialog-info="IdentVerfInfo" @confirm-event="closeIdentVerfPop" />
    </v-form>
    </div>
</template>

<script>
import { reactive } from 'vue'
let IdentVerfInfo = reactive({
    toggle: false,
    text: ''
})
export default {
  data() {
    return {
      memInfo: {},
      memPsnIdentVerfInfo: {},
      IdentVerfInfo: {},
      BasePupScrollObj: {},
      BasePupAlertInfo: {},
      BasePupConfirmInfo: {},
      BasePupConfirmInfoOne: {}
    };
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      console.log('Form submitted');
    },
    identVerfPop() {
        console.log('IdentVerfInfo', IdentVerfInfo.toggle);
        IdentVerfInfo.toggle = true
        console.log('IdentVerfInfo', IdentVerfInfo.toggle);
    },
    checkedMktGe() {
      // Add your logic for checkedMktGe here
    },
    uncheckedMktlGe() {
      // Add your logic for uncheckedMktlGe here
    },
    agreePop(type, message) {
      // Add your logic for agreePop here
    },
    closeIdentVerfPop() {
      // Add your logic for closeIdentVerfPop here
    },
    closeAlertPop() {
      // Add your logic for closeAlertPop here
    },
    confirmEvent() {
      // Add your logic for confirmEvent here
    },
    cancelEvent() {
      // Add your logic for cancelEvent here
    },
    cancelEventOne() {
      // Add your logic for cancelEventOne here
    }
  }
};
</script>