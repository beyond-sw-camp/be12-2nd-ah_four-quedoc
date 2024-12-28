/**
 * message 정의
 *
 * 각 업무별로 화면에 출력할 메시지를 정의한다.
 */
const messageInfo = [
    {
        key: 'COM00001',
        code: 'COM',
        message: `일시적인 오류입니다.
  잠시후 다시 시도해주세요.`,
        desc: '공통메시지'
    },
    {
        key: 'COM00002',
        code: 'COM',
        message: `입력하신 정보와 계정정보가 일치하지 않습니다. 확인 후 다시 입력해주세요`,
        desc: '공통메시지'
    },
    {
        key: 'COM00003',
        code: 'COM',
        message: `비밀번호는 숫자,영문,특수문자( !@#$%^&*() )를 조합해 8~20자로 생성해주세요.`,
        desc: '공통메시지'
    },
    { key: 'PUP00001', code: 'PUP', message: `데이터 조회에 실패하였습니다.`, desc: '기업 팝업' },
    {
        key: 'GIN00001',
        code: 'GIN',
        message: `아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인 후 로그인해주세요. 5회 오류 시 로그인이 제한됩니다.`,
        desc: '로그인'
    },
    {
        key: 'GIN00002',
        code: 'GIN',
        message: `비밀번호를 5회 이상 잘못 입력하셨습니다. 비밀번호 변경을 통해 비밀번호를 재설정 후 로그인 해주세요.`,
        desc: '로그인'
    },
    {
        key: 'FIP00001',
        code: 'FIP',
        message: `입력하신 정보는 존재하지 않습니다.
    홈페이지 회원가입 후 로그인 해주세요.`,
        desc: '아이디찾기/비밀번호 변경'
    },
    {
        key: 'FIP00002',
        code: 'FIP',
        message: `본인인증 시간이 만료되었습니다.
        다시 시도하시려면 본인인증을 다시 진행해주세요.`,
        desc: '아이디찾기/비밀번호 변경'
    },
    { key: 'FIP00003', code: 'FIP', message: `비밀번호가 변경 되었습니다.`, desc: '아이디찾기/비밀번호 변경' },
    {
        key: 'FIP00004',
        code: 'FIP',
        message: `이전 및 현재 비밀번호는 사용할 수 없습니다.`,
        desc: '아이디찾기/비밀번호 변경'
    },
    { key: 'CMT00001', code: 'CMT', message: `데이터 조회에 실패하였습니다.`, desc: '커뮤니티' },
    { key: 'CMT00002', code: 'CMT', message: `데이터 등록에 실패하였습니다.`, desc: '커뮤니티' },
    { key: 'CMT00003', code: 'CMT', message: `데이터 수정에 실패하였습니다.`, desc: '커뮤니티' },
    { key: 'CMT00004', code: 'CMT', message: `데이터 삭제에 실패하였습니다.`, desc: '커뮤니티' },
    { key: 'CMT00005', code: 'CMT', message: `저장되었습니다.`, desc: '커뮤니티' },
    { key: 'CMT00006', code: 'CMT', message: `등록되었습니다.`, desc: '커뮤니티' },
    { key: 'CMT00007', code: 'CMT', message: `제목은 필수 입력입니다.`, desc: '커뮤니티' },
    { key: 'CMT00008', code: 'CMT', message: `내용은 필수 입력입니다.`, desc: '커뮤니티' },
    { key: 'CMT00009', code: 'CMT', message: `내용을 작성해주세요.`, desc: '커뮤니티' },
    { key: 'CMT00010', code: 'CMT', message: `비속어는 사용하실 수 없습니다.`, desc: '커뮤니티' },
    { key: 'CMT00011', code: 'CMT', message: `댓글을 삭제 하시겠습니까?`, desc: '커뮤니티' },
    {
        key: 'CMT00012',
        code: 'CMT',
        message: `삭제한 글은 복구되지 않습니다.
  삭제하시겠습니까?`,
        desc: '커뮤니티'
    },
    {
        key: 'CMT00013',
        code: 'CMT',
        message: `작성한 내용은 저장되지 않습니다.
  이전 화면으로 이동하시겠습니까?`,
        desc: '커뮤니티'
    },
    {
        key: 'CMT00014',
        code: 'CMT',
        message: `로그인이 필요합니다.
  계속하시려면 로그인해 주세요.`,
        desc: '커뮤니티'
    },
    { key: 'CSC00001', code: 'CSC', message: `데이터 조회에 실패하였습니다.`, desc: '고객센터' },
    { key: 'CSC00002', code: 'CSC', message: `데이터 등록에 실패하였습니다.`, desc: '고객센터' },
    { key: 'CSC00003', code: 'CSC', message: `데이터 수정에 실패하였습니다.`, desc: '고객센터' },
    { key: 'CSC00004', code: 'CSC', message: `데이터 삭제에 실패하였습니다.`, desc: '고객센터' },
    { key: 'CSC00005', code: 'CSC', message: `예약하시겠습니까?`, desc: '고객센터' },
    { key: 'CSC00006', code: 'CSC', message: `수정되었습니다.`, desc: '고객센터' },
    { key: 'CSC00007', code: 'CSC', message: `문의유형을 선택해주세요.`, desc: '고객센터' },
    { key: 'CSC00008', code: 'CSC', message: `예약자 이름은 필수 입력입니다.`, desc: '고객센터' },
    { key: 'CSC00009', code: 'CSC', message: `요청사항은 필수 입력입니다.`, desc: '고객센터' },
    { key: 'CSC00010', code: 'CSC', message: `비속어가 포함된 경우 서비스 이용이 제한됩니다.`, desc: '고객센터' },
    { key: 'CSC00011', code: 'CSC', message: `해당글은 비공개 상태입니다.`, desc: '고객센터' },
    
    { key: 'CSC00101', code: 'CSC', message: `방문자 이름은 필수 입력입니다.`, desc: '고객센터' },
    { key: 'CSC00201', code: 'CSC', message: `전화번호는 필수 입력입니다.`, desc: '고객센터' },
    { key: 'CSC00301', code: 'CSC', message: `작성한 정보로 예약하시겠습니까?`, desc: '고객센터' },
    {
        key: 'CSC00012',
        code: 'CSC',
        message: `작성한 내용은 저장되지 않습니다.
  이전 화면으로 이동하시겠습니까?`,
        desc: '고객센터'
    },
    {
        key: 'CSC00013',
        code: 'CSC',
        message: `현재 해당 문의에 대한 답변이 진행중이므로 수정하실 수 없습니다.`,
        desc: '고객센터'
    },
    {
        key: 'CSC00014',
        code: 'CSC',
        message: `삭제한 글은 복구되지 않습니다.
  삭제하시겠습니까?`,
        desc: '고객센터'
    },
    {
        key: 'CSC000015',
        code: 'CSC',
        message: `로그인이 필요합니다.
  계속하시려면 로그인해 주세요.`,
        desc: '고객센터'
    },
    { key: 'MYP00001', code: 'MYP', message: `데이터 조회에 실패하였습니다.`, desc: '마이페이지' },
    {
        key: 'MYP00002',
        code: 'MYP',
        message: `인증번호가 올바르지 않습니다.
    확인 후 다시 입력해주세요.`,
        desc: '마이페이지'
    },
    { key: 'MYP00003', code: 'MYP', message: `SMS 전송에 실패하였습니다.`, desc: '마이페이지' }
]

/**
 * 메세지 getter
 *
 * 메세지를 가져온다.
 *
 * @param {string} key
 * @returns message
 */
const getMessage = (keyValue) => {
    let message = null

    //키 값으로 해당 객체를 찾는다.
    const object = messageInfo.find((element) => element.key == keyValue)
    //객체의 값이 있을 경우
    if (object) {
        message = object.message
    }
    return message
}
/**
 * 객체를 동결한다
 *
 * 객체의 값을 변경하지 못하게 동결시킨다.
 */
Object.freeze(messageInfo)

export default { getMessage }
