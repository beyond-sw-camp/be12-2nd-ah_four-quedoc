/**
 * 객체 값 변경
 *
 * target 객체 키 값에 대응하는 source 객체 값으로 변경한다.
 *
 * @param {{}} target 복사할 대상 객체
 * @param {{}} source 속성을 복사할 소스 객체
 * @returns Object
 */
const updateObejctValue = (target, source) => {
    let dest = { ...target }

    Object.keys(source).forEach((key) => {
        if (key in dest) {
            dest[key] = source[key]
        }
    })
    return dest
}

/**
 * 폼 아이템 검증
 *
 * 검증 배열에 속하는 폼 아이템의 유효성 검증을 실행한다
 *
 * @param {HTMLFormElement} form 폼 객체
 * @param {Array<any>} target 검증 배열
 */
const validateFormItems = async (form, target) => {
    //폼 객체 아이템
    const items = form.value.items

    //검증 배열에 속하는 폼 아이템 유효성 검증
    for (const item of items) {
        //아이템 아이디와 검증 대상 값이 같은 것
        const result = target.filter((e) => e === item.id)
        if (result.length) {
            //유효성 실행
            await item.validate()
        } else continue
    }
}

/**
 * 검증 객체 초기화
 *
 * 검증 배열 객체를 초기화한다.
 *
 * @param {HTMLFormElement} form 폼 객체
 * @param {Array<any>} target 검증 배열
 */
const initErrorMessages = (form, object) => {
    //에러 메시지 초기화
    const dest = {}
    //폼 객체 아이템
    const items = form.value.items

    //각 아이템별 초기화
    for (const item of items) {
        //에러 객체
        let errorObj = {}
        //유효성 여부
        errorObj['isValid'] = item.isValid
        //에러 메시지
        errorObj['errorMessage'] = item.errorMessages[0]
        //에러 객체 저장
        dest[item.id] = errorObj
        //객체 복사
        Object.assign(object, dest)
    }
}

/**
 * 에러 메시지 선별
 *
 * 폼 객체에 발생한 에러 메시지를 선별해 에러 메시지 배열에 저장한다.
 *
 * @param {HTMLFormElement} form 폼 객체
 * @param {object<any>} object 에러 객체
 */
const selectErrorMessages = async (form, object) => {
    //에러 메시지 초기화
    const dest = {}
    //폼 fastFail 속성
    const fastFail = form.value.fastFail
    //폼 객체 아이템
    const items = form.value.items

    //각 아이템별 에러 메시지 정보를 커스텀 에러 메시지 객체에 저장
    for (const item of items) {
        //에러 객체
        let errorObj = {}
        //유효성 여부
        errorObj['isValid'] = item.isValid
        //에러 메시지
        errorObj['errorMessage'] = item.errorMessages[0]
        //에러 객체 저장
        dest[item.id] = errorObj
        //객체 복사
        Object.assign(object, dest)

        //fastFail 속성 지정시 첫 번째 에레 메시지 처리후 종료
        if (fastFail && !errorObj['isValid']) break
        else continue
    }
}

/**
 * 필수 입력 검증 여부
 *
 * 검증 배열 대상의 유효성 여부를 리턴한다.
 *
 * @param {HTMLFormElement} form 폼 객체
 * @param {Array<any>} target 검증 배열
 * @param {object<any>} object 에러 객체
 * @returns Boolean
 */
const isRequiredInputValidation = async (form, targets, object) => {
    //폼 아이템 검증
    await validateFormItems(form, targets)
    //에러 메시지 선별
    await selectErrorMessages(form, object)
    //필수 입력 유효성 검증
    let result = true
    for (const target of targets) {
        if (!object[target].isValid) {
            result = false
            break
        } else continue
    }

    return result
}

/**
 * 모바일 여부
 *
 * 브라우저 정보 속성 객체에서 사용자 정보를 통해 모바일 여부를 반환한다.
 *
 * @returns Boolean
 */
const isMobile = () => {
    //결과
    let result = false
    //브라우저 사용자 정보
    const agent = navigator.userAgent

    //모바일 체크
    if (
        agent.indexOf('iPhone') > -1 ||
        agent.indexOf('Android') > -1 ||
        agent.indexOf('iPad') > -1 ||
        agent.indexOf('iPod') > -1
    ) {
        result = true
    }

    return result
}

/**
 * 스크롤 최상단 이동
 *
 * 스크롤을 최상단으로 이동한다.
 *
 * @returns Boolean
 */
const scrollTop = () => {
    window.scrollTo({
        top: 0
    })
}

/**
 * 이미지 경로
 *
 * @param {string} path
 * @returns 환경변수와 이미지 경로를 머지해 실제 주소를 반환한다.
 */
const getImageUrl = (path) => {
    return new URL(`/fil${path}`, import.meta.env.VITE_IMG_BASE_URL)
}

export default {
    updateObejctValue,
    validateFormItems,
    initErrorMessages,
    selectErrorMessages,
    isRequiredInputValidation,
    isMobile,
    scrollTop,
    getImageUrl
}
