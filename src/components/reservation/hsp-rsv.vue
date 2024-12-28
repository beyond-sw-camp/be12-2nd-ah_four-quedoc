<!-- 병원 예약 페이지-->
<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">병원예약</div>
        </div>
        <!-- 글쓰기 -->
        <div class="contents-detail">
            <v-form
                ref="qnaRegForm"
                autocomplete="off"
                fast-fail
                validate-on="blur lazy"
                @keypress.enter.prevent
                @input = "submitForm"
                @submit.prevent="submitForm"
            >
                <div class="insert-form-wrap">
                    <!-- 병원명 
                    <template v-if="qnaRegInfo.disProductCode != null">
                        <div class="insert-row">
                            <div class="ele-tit">문의상품</div>
                            <div class="ele-inp">
                                <v-text-field
                                    :value="qnaRegInfo.disProductName"
                                    color="primary"
                                    disabled
                                    hide-details
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    </template>  -->
                    <!-- 제목 -->
                    <div class="insert-row">
                        <div class="ele-tit">예약자 이름</div>
                        <div class="ele-inp">
                            <v-text-field
                                :maxlength="100"
                                :rules="validateTil"
                                clearable
                                color="primary"
                                hide-details="auto"
                                placeholder="이름을 입력해주세요"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div class="insert-row">
                        <div class="ele-tit">방문자 이름</div>
                        <div class="ele-inp">
                            <v-text-field
                                v-model="qnaRegInfo.qnaName"
                                :maxlength="100"
                                :rules="validateVisit"
                                clearable
                                color="primary"
                                hide-details="auto"
                                placeholder="이름을 입력해주세요"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div class="insert-row">
                        <div class="ele-tit">전화번호</div>
                        <div class="ele-inp">
                            <v-text-field
                                v-model="qnaRegInfo.qnaHon"
                                :maxlength="100"
                                :rules="validateHon"
                                clearable
                                color="primary"
                                hide-details="auto"
                                placeholder="전화번호를 입력해주세요"
                                variant="outlined"
                            
                            />
                        </div>
                    </div>
                    <!-- 공개여부 
                    <div class="insert-row">
                        <div class="ele-tit">공개여부</div>
                        <div class="ele-inp">
                            <div class="inp-radio">
                                <v-radio-group v-model="qnaRegInfo.qnaPublicType" density="compact" hide-details inline>
                                    <v-radio label="공개" value="Y" @click="registerBtnCntr" />
                                    <v-radio
                                        label="비공개(제목은 상시 공개됩니다)"
                                        value="N"
                                        @click="registerBtnCntr"
                                    />
                                </v-radio-group>
                            </div>
                        </div>
                    </div>-->
                    <!-- 내용 -->
                    <div class="insert-row">
                        <div class="ele-tit">요청사항</div>
                        <div class="ele-inp">
                            <v-textarea
                                v-model="qnaRegInfo.qnaContents"
                                :maxlength="1000"
                                :placeholder="
                                    qnaRegInfo.qnaTypeCode != null
                                        ? placeholderInfo
                                        : placeholderUtil.getQnaTypeplaceholder()
                                "
                                :rules="validateTt"
                                color="primary"
                                hide-details="auto"
                                no-resize
                                persistent-counter
                                rows="13"
                                variant="outlined"
                                @keypress.enter.stop
                            >
                                <template v-slot:counter>
                                    <strong>{{ qnaRegInfo.qnaContents?.length }}자</strong><span>/ 1000자</span>
                                </template>
                            </v-textarea>
                        </div>
                    </div>
                </div>
                <ul class="list-dot text-16">
                    <li>사이트에 대한 자세한 문의 사항은 <span>01081032900</span> 으로 문의 주시기 바랍니다.</li>
                    <li>
                        예약이 완료되고 병원에서 확정을 누르면 안내문자 발송할거임
                    </li>
                </ul>
                <div class="detail-btn-area">
                    <v-btn
                        color="secondary"
                        min-width="12.8rem"
                        rounded="lg"
                        size="x-large"
                        variant="flat"
                        @click="popUpConfInfo.toggle = true"
                        >돌아가기
                    </v-btn>
                    <v-btn
                        :disabled="formCntrObj['submitBtn'].disabled"
                        color="primary"
                        min-width="22.4rem"
                        rounded="lg"
                        size="x-large"
                        type="submit"
                        variant="flat"
                        @click="popUpConfInfo.toggle = true, popUpConfInfo.text= messageUtil.getMessage('CSC00301'), popUpConfInfo.url='comp'"
                        >예약하기
                    </v-btn>
                </div>
            </v-form>
        </div>
        <!--// 글쓰기 -->
    </div>

    <popUpConf :dialog-info="popUpConfInfo" @confirm-event="closeConfirmPop" />
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import placeholderUtil from '../../utils/placeholderUtil'
import messageUtil from '../../utils/messageUtil'
import popUpConf from '../etc/pop-up/pop-up-conf.vue'

//라우터 정보 객체
const router = useRouter()

//폼 정보 객체
const qnaRegForm = ref()

//고객문의 식별자 정보 객체
let qnaDtnKInfo = null


//고객문의 등록 정보 객체
let qnaRegInfo = ref({
    qnaTypeCode: null,
    qnaTitle: '',
    qnaName: '',
    qnaHon: '',
    qnaContents: '',
    qnaPublicType: 'N',
    disProductCode: null,
    disProductName: null,
    dbsnMktPtN: null,
    dbsnCusN: null
})

//문의유형 리스트 정보 객체
let qnaTypeCodeList = reactive([])

//placeholer 정보 객체
let placeholderInfo = ref()

/**
 * 폼 컨트롤 객체
 *
 * 버튼 활성화를 제어한다.
 */
const formCntrObj = reactive({
    submitBtn: { disabled: true }
})


//popUpConf 정보 객체
let popUpConfInfo = reactive({
    toggle: false,
    text: messageUtil.getMessage('CSC00012'),
    url: ''
})


/**
 * 예약자 이름 유효성 룰
 *
 * 예약자 이름 유효성 룰을 정의한다.
 */
const validateTil = [
    (value) => {
        if (value) {
            return true
        } else {
            formCntrObj['submitBtn'].disabled = true
            return messageUtil.getMessage('CSC00008')
        }
    }
]

/**
 * 방문자 이름 유효성 룰
 *
 * 방문자 이름 유효성 룰을 정의한다.
 */
 const validateVisit = [
    (value) => {
        if (value) {
            return true
        } else {
            formCntrObj['submitBtn'].disabled = true
            return messageUtil.getMessage('CSC00101')
        }
    }
]

/**
 * 전화번호 유효성 룰
 *
 * 전화번호 유효성 룰을 정의한다.
 */
 const validateHon = [
    (value) => {
        if (value) {
            return true
        } else {
            formCntrObj['submitBtn'].disabled = true
            return messageUtil.getMessage('CSC00201')
        }
    }
]

/**
 * 내용 유효성 룰
 *
 * 내용 유효성 룰을 정의한다.
 */
const validateTt = [
    (value) => {
        if (value) {
            return true
        } else {
            formCntrObj['submitBtn'].disabled = true
            return messageUtil.getMessage('CSC00009')
        }
    }
]



/**
 * 폼 서브밋
 *
 * 고객문의 정보를 등록한다.
 */
const submitForm = async () => {
    //저장 버튼 비활성화
    formCntrObj['submitBtn'].disabled = true

    const { valid } = await qnaRegForm.value.validate();

    if(valid) {
        formCntrObj['submitBtn'].disabled = false;
    }
    console.log(valid);
    console.log(formCntrObj['submitBtn'].disabled);

/*

    //값이 있을 경우
    if (valid) {

        //응답 값이 성공일 경우
        if (data.success) {
            BasePupAlertInfo.toggle = true
            BasePupAlertInfo.result = true
            BasePupAlertInfo.text = messageUtil.getMessage('CSC00005')
            //고객문의 식별자 정보 저장
            qnaDtnKInfo = data.results.qnaIdentity
        }
       
        //비속어가 포함될 경우
        else if (data.code == '42940' || data.code == '42941') {
            BasePupAlertInfo.toggle = true
            BasePupAlertInfo.result = false
            BasePupAlertInfo.text = messageUtil.getMessage('CSC00010')
        }
        //아닐 경우
        else {
            BasePupAlertInfo.toggle = true
            BasePupAlertInfo.result = false
            BasePupAlertInfo.text = messageUtil.getMessage('CSC00002')
        }
    }
    //값이 없을 경우
    else {
        BasePupAlertInfo.toggle = true
        BasePupAlertInfo.result = false
        BasePupAlertInfo.text = messageUtil.getMessage('CSC00007')
    }
    */
}

/**
 * Alert 팝업 이벤트
 *
 * 고객문의 상세 화면으로 이동
 * error일 경우 목록화면으로 이동
 */

/**
 * Confirm 팝업 이벤트
 *
 * 이전 경로로 이동
 */
const closeConfirmPop = () => {
    if (popUpConfInfo.url) {
        router.push({ name: popUpConfInfo.url })
        
        popUpConfInfo.url=""
    } else {
        
    router.back();
    }
}

</script>
<style scoped>
@import '../../styles/reserv.css';
</style>