<!-- 고객센터-고객문의-등록 -->
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
                        <div class="ele-tit">제목</div>
                        <div class="ele-inp">
                            <v-text-field
                                :maxlength="100"
                                :rules="validateTil"
                                clearable
                                color="primary"
                                hide-details="auto"
                                placeholder="제목 입력"
                                variant="outlined"
                                @input="registerBtnCntr"
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
                                @input="registerBtnCntr"
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
                        >예약하기
                    </v-btn>
                </div>
            </v-form>
        </div>
        <!--// 글쓰기 -->
    </div>

    <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="closeAlertPop" />
    <popUpConf :dialog-info="popUpConfInfo" @confirm-event="closeConfirmPop" />
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import placeholderUtil from '../../utils/placeholderUtil'
import messageUtil from '../../utils/messageUtil'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'
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

//popUpAlert 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: messageUtil.getMessage('CSC00005'),
    result: false,
    url: ''
})

//popUpConf 정보 객체
let popUpConfInfo = reactive({
    toggle: false,
    text: messageUtil.getMessage('CSC00012')
})

/**
 * 문의유형 유효성 룰
 *
 * 문의유형 유효성 룰을 정의한다.
 */
const validateTypeCode = [
    (value) => {
        if (value) {
            return true
        } else {
            formCntrObj['submitBtn'].disabled = true
            return false
        }
    }
]

/**
 * 제목 유효성 룰
 *
 * 제목 유효성 룰을 정의한다.
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
 * 저장 버튼
 *
 * 버튼 활성화를 제어한다.
 */
const registerBtnCntr = () => {
    if (qnaRegInfo.value.qnaTypeCode && qnaRegInfo.value.qnaTitle && qnaRegInfo.value.qnaContents) {
        formCntrObj['submitBtn'].disabled = false
    } else {
        formCntrObj['submitBtn'].disabled = true
    }
}

/**
 * 문의 유형 셀렉트 이벤트
 *
 * 문의 유형 이벤트 리스너
 *
 * @param {string} key
 */
const changeQnaTypeCode = (keyValue) => {
    //문의유형 placeholer를 가져온다.
    const placeholder = placeholderUtil.getQnaTypeplaceholder(keyValue)

    if (placeholder) {
        placeholderInfo.value = placeholder
    }
    //문의상품코드 값 초기화
    qnaRegInfo.value.disProductCode = null
    //타겟마케팅 신청번호 값 초기화
    qnaRegInfo.value.dbsnMktPtN = null
    //회원번호 값 초기화
    qnaRegInfo.value.dbsnCusN = null
}



/**
 * 폼 서브밋
 *
 * 고객문의 정보를 등록한다.
 */
const submitForm = async () => {
    //저장 버튼 비활성화
    formCntrObj['submitBtn'].disabled = true

    //값이 있을 경우
    if (valid) {

        //응답 값이 성공일 경우
        if (data.success) {
            popUpAlertInfo.toggle = true
            popUpAlertInfo.result = true
            popUpAlertInfo.text = messageUtil.getMessage('CSC00005')
            //고객문의 식별자 정보 저장
            qnaDtnKInfo = data.results.qnaIdentity
        }
        //비속어가 포함될 경우
        else if (data.code == '42940' || data.code == '42941') {
            popUpAlertInfo.toggle = true
            popUpAlertInfo.result = false
            popUpAlertInfo.text = messageUtil.getMessage('CSC00010')
        }
        //아닐 경우
        else {
            popUpAlertInfo.toggle = true
            popUpAlertInfo.result = false
            popUpAlertInfo.text = messageUtil.getMessage('CSC00002')
        }
    }
    //값이 없을 경우
    else {
        popUpAlertInfo.toggle = true
        popUpAlertInfo.result = false
        popUpAlertInfo.text = messageUtil.getMessage('CSC00007')
    }
}

/**
 * Alert 팝업 이벤트
 *
 * 고객문의 상세 화면으로 이동
 * error일 경우 목록화면으로 이동
 */
const closeAlertPop = (url) => {
    //url이 있을경우 목록화면으로 이동
    if (url) {
        router.push({ name: url })
    }
    //결과값이 성공일 경우
    if (popUpAlertInfo.result) {
        router.push({ name: 'cscQnaDetl', params: { id: qnaDtnKInfo } })
    } else {
        //저장 버튼 활성화
        formCntrObj['submitBtn'].disabled = false
    }
}

/**
 * Confirm 팝업 이벤트
 *
 * 이전 경로로 이동
 */
const closeConfirmPop = () => {
    router.back()
}

</script>
<style scoped>
@import '../../styles/reserv.css';
</style>