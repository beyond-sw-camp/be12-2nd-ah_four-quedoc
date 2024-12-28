/**
 * 이메일 유효성 검증
 *
 * 해당 값이 '이메일' 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns true or false
 */
const email = (value) => {
    const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regExp.test(value)
}

/**
 * 비밀번호 유효성 검증
 *
 * 해당 값이 '비밀번호' 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns true or false
 */
const password = (value) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,20}$/
    return regExp.test(value)
}

/**
 * 주민번호 생년월일 6자리 유효성 검증
 *
 * 해당 값이 '주민번호' 생년월일 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns true or false
 */
const bdy = (value) => {
    const regExp = /^(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1,2]\d|3[0,1]))$/
    return regExp.test(value)
}

/**
 * 주민번호 뒷자리 첫번째 숫자 유효성 검증
 *
 * 해당 값이 '주민번호' 뒷자리 첫번째 숫자 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns
 */
const sex = (value) => {
    const regExp = /^([1-4])$/
    return regExp.test(value)
}

/**
 * 휴대전화번호 유효성 검증
 *
 * 해당 값이 '휴대전화번호' 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns
 */
const hon = (value) => {
    const regExp = /^(01[016789])\d{3,4}\d{4}$/
    return regExp.test(value)
}

/**
 * 사업자번호 유효성 검증
 *
 * 해당 값이 '사업자번호' 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns true or false
 */
const brn = (value) => {
    if (!value) return false

    const regExp = (value + '').match(/\d/g)
    // 넘어온 값의 정수만 추츨하여 문자열의 배열로 만들고 10자리 숫자인지 확인합니다.
    if (regExp?.length != 10) {
        return false
    }

    // 합 / 체크키
    let sum = 0,
        key = [1, 3, 7, 1, 3, 7, 1, 3, 5]

    // 0 ~ 8 까지 9개의 숫자를 체크키와 곱하여 합에 더합니다.
    for (let i = 0; i < 9; i++) {
        sum += key[i] * Number(value[i])
    }

    // 각 8번배열의 값을 곱한 후 10으로 나누고 내림하여 기존 합에 더합니다.
    // 다시 10의 나머지를 구한후 그 값을 10에서 빼면 이것이 검증번호 이며 기존 검증번호와 비교하면됩니다.
    return 10 - ((sum + Math.floor((key[8] * Number(value[8])) / 10)) % 10) === Number(value[9])
}

/**
 * 이메일 마스킹처리
 *
 * 마스킹위치 @앞자리 3-6자리
 * 예)sh****test@shinhan.com
 * 예)sh**@shinhan.com
 * @param {*} value
 * @returns value
 */
const emailMask = (value) => {
    const strLen = value.split('@')[0].length - 3
    if (value.split('@')[0].length <= 6) {
        return value.replace(new RegExp('.(?=.{0,' + strLen + '}@)', 'g'), '*')
    } else if (value.split('@')[0].length >= 7) {
        return value.substring(0, 2) + '****' + value.substring(7)
    }
}

/**
 * 만 19세 미만 유효성 검증
 *
 * @param {*} value
 * @returns true or false
 */
const uak = (value) => {
    //생년월일을 담을 객체
    const year = bdyChk(value.substr(0, 2))
    const month = parseInt(value.substr(2, 2)) - 1
    const day = parseInt(value.substr(4, 2))

    //현재 날짜를 담을 객체
    const currentDate = new Date()
    //생년월일 날짜를 담을 객체
    const birthday = new Date(year + 19, month, day)

    return currentDate > birthday
}

/**
 * 1900년대, 2000년대 유효성 검증
 *
 * 주민번호 첫자리가 3미만인 경우 2000년대로 취급
 *
 * @param {*} value
 * @returns number
 */
const bdyChk = (value) => {
    if (value.charAt(0) < 3) {
        return parseInt(value) + 2000
    } else {
        return parseInt(value) + 1900
    }
}

/**
 * '@'를 제외한 도메인 유효성 검증
 *
 * 해당 값이 '도메인' 형식에 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns true or false
 */
const domain = (value) => {
    const regExp = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regExp.test(value)
}

/**
 * 정수값 유효성 검증
 *
 * 해당 값이 '정수값' 맞는지 여부를 반환한다.
 * @param {*} value
 * @returns
 */
const numChk = (value) => {
    const regExp = /^\d*$/
    return regExp.test(value)
}

/**
 * 이름 유효성 검증
 *
 * 해당 값이 '이름값' 맞는지 여부를 반환한다.
 * @param {*} value
 * @return true or false
 */
const nameChk = (value) => {
    const regExp = /[0-9~!@#$%^*()+\-=?;:`",.<>{|}[\]\\/_'&\s]/g
    return !regExp.test(value)
}

/**
 * 계약일 검증
 *
 * 계약종료일이 지났으면(어제와 같거나 과거이면) return false
 * 계약종료일이 아직 지나지 않았으면(오늘이거나 미래이면) return true
 * @param {string} dateStr 'YYYYMMDD'형식의 날짜 스트링
 * @return true or false
 */
const validateContractDate = (dateStr) => {
    let sYear = dateStr.substring(0, 4)
    let sMonth = dateStr.substring(4, 6)
    let sDate = dateStr.substring(6, 8)
    const contractDt = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate))
    const checkDt = new Date(dateToYYYYMMDD())
    checkDt.setDate(checkDt.getDate() - 1)

    //contractDt : 계약종료일, checkDt : 어제
    //계약종료일이 지났으면(어제와 같거나 과거이면) false
    //계약종료일이 아직 지나지 않았으면(오늘이거나 미래이면) true
    return contractDt > checkDt
}

/**
 * 계약종료일+30일 검증
 *
 * 계약종료일+30일이 지났으면(어제와 같거나 과거이면) return false
 * 계약종료일+30일이 아직 지나지 않았으면(오늘이거나 미래이면) return true
 * @param {string} dateStr 'YYYYMMDD'형식의 날짜 스트링
 * @return true or false
 */
const validateAfter1MonthDate = (dateStr) => {
    let sYear = dateStr.substring(0, 4)
    let sMonth = dateStr.substring(4, 6)
    let sDate = dateStr.substring(6, 8)
    const contractDt = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate))
    contractDt.setDate(contractDt.getDate() + 30)
    const checkDt = new Date(dateToYYYYMMDD())
    checkDt.setDate(checkDt.getDate() - 1)

    //contractDt : 계약종료일, checkDt : 어제
    //계약일+30일이 지났으면(어제와 같거나 과거이면) false
    //계약종료일+30일이 아직 지나지 않았으면(오늘이거나 미래이면) true
    return contractDt > checkDt
}

/**
 * 날짜 형식 'YYYY-MM-DD'
 *
 * @param  Date
 * @return  string : 'YYYY-MM-DD'
 */
const dateToYYYYMMDD = (dt) => {
    if (!dt) dt = new Date()

    let month = dt.getMonth() + 1
    let day = dt.getDate()

    month = month >= 10 ? month : '0' + month
    day = day >= 10 ? day : '0' + day

    return dt.getFullYear() + '-' + month + '-' + day
}

export default {
    email,
    password,
    bdy,
    sex,
    hon,
    brn,
    emailMask,
    uak,
    domain,
    numChk,
    nameChk,
    validateContractDate,
    validateAfter1MonthDate,
    dateToYYYYMMDD
}
