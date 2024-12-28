import servPdUtil from './servPdUtil'

/**
 * placeholder 정의
 *
 * 문의유형 또는 정적 서비스 상품에 대한 placeholder를 정의한다.
 */

/**
 * 문의유형 정보 객체
 *
 * 문의유형의 정보를 정의한다.
 * 키 값은 고정되어 있으며, 키 값으로 객체를 컨트롤한다.
 */
const qnaTypeInfo = [
    { key: null, name: '선택', placeholder: `※ 문의 내용을 입력해 주시면 담당자가 답변드리도록 하겠습니다.` },
    { key: 'Q01', name: '이용문의', placeholder: `※ 문의 내용을 입력해 주시면 담당자가 답변드리도록 하겠습니다.` },
    { key: 'Q02', name: '제휴문의', placeholder: `※ 문의 내용을 입력해 주시면 담당자가 답변드리도록 하겠습니다.` },
    { key: 'Q03', name: '기술문의', placeholder: `※ 문의 내용을 입력해 주시면 담당자가 답변드리도록 하겠습니다.` },
    {
        key: 'Q04',
        name: 'Data상품',
        placeholder: `※데이터 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - Data 상품 구매 질의
           - Data 상품 관련 상세 질의
           - 맞춤형 Data 상품 개발 질의
       
      ○ 사용관련 문의 
           - Data 제공 주기 및 수령 방법 문의`
    },
    {
        key: 'Q05',
        name: '솔루션서비스',
        placeholder: `※ 솔루션 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 솔루션 구매 질의 
           - 솔루션 상품 관련 상세 질의`
    },

    {
        key: 'Q06',
        name: 'API서비스',
        placeholder: `※ API 이용, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
       
       예시) 
       ○ 상품관련 문의
            - API 상품 구매 질의
            - API 상품 관련 상세 질의
        
       ○ 사용관련 문의 
            -  API 개발 관련 문의 등`
    },
    {
        key: 'Q07',
        name: '광고서비스',
        placeholder: `※ 광고서비스 이용, 견적 및 상세 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
       
       예시) 
       ○ 상품관련 문의
            - 광고서비스 신청 문의
            - 광고서비스 관련 상세 질의`
    }
]

/**
 * 정적 서비스 상품 정보 객체
 *
 * 정적 서비스 상품의 정보를 정의한다.
 * 키 값은 고정되어 있으며, 키 값으로 객체를 컨트롤한다.
 *
 * 정적 서비스 상품 키 값을 통해 정적 서비스 상품을 매핑한다.
 */
const productionInfo = [
    {
        key: 'SLPD0401',
        name: 'SltnProdCont01',
        placeholder: `※ 솔루션 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 솔루션 구매 질의 
           - 솔루션 상품 관련 상세 질의`
    },
    {
        key: 'SLPD0402',
        name: 'SltnProdCont02',
        placeholder: `※ 솔루션 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 솔루션 구매 질의 
           - 솔루션 상품 관련 상세 질의`
    },
    {
        key: 'SLPD0403',
        name: 'SltnProdCont03',
        placeholder: `※ 솔루션 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 솔루션 구매 질의 
           - 솔루션 상품 관련 상세 질의`
    },
    {
        key: 'SLPD0404',
        name: 'SltnProdCont04',
        placeholder: `※ 솔루션 구매, 견적 및 상세 항목 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 솔루션 구매 질의 
           - 솔루션 상품 관련 상세 질의`
    },
    {
        key: 'SLPD0405',
        name: 'SltnProdCont05',
        placeholder: `※ 신한카드 데이터전문기관 담당자가 확인 후 연락드리도록 하겠습니다.

  예시)
  ○ 결합 관련 문의    
    - 희망하시는 결합 상대 : (회사명, 업종 등)    
    - 희망하시는 결합 데이터 :     
    - 기타 결합 관련 문의 : 
  `
    },
    {
        key: 'ADPD0501',
        name: 'AdvtProdCont01',
        placeholder: `※ 타겟마케팅 이용, 견적 및 상세 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
      
      예시) 
      ○ 상품관련 문의
           - 타겟마케팅 신청 문의
           - 타겟마케팅 관련 상세 질의
               ① 마케팅 주제
               ② 희망 마케팅 기간 : 2099.00.00~2099.00.00 
               ③ 희망 타겟 대상 
                 - 연령, 성별, 지역 등 
               ④ 희망 발송 채널 및 발송 규모
                  -  LMS,앱푸시  / 5만, 10만 등`
    },
    {
        key: 'ADPD0502',
        name: 'AdvtProdCont02',
        placeholder: `※ 모바일서베이 이용, 견적 및 상세 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
       
       예시) 
       ○ 상품관련 문의
            - 모바일 서베이 신청 문의
            - 모바일 서베이 관련 상세 질의`
    },
    {
        key: 'ADPD0503',
        name: 'AdvtProdCont03',
        placeholder: `※ SOL페이베너광고 이용, 견적 및 상세 문의 등은 법인사업자만 가능합니다.  
        (법인사업자전환: MY - 사업자계정전환)
       
       예시) 
       ○ 상품관련 문의
            - SOL페이베너광고 신청 문의
            - SOL페이베너광고 관련 상세 질의`
    }
]

/**
 * 문의유형 placeholer
 *
 * 문의유형 placeholer를 가져온다.
 *
 * @param {string} key
 * @returns 문의유형 placeholder 또는 null을 반환한다.
 */
const getQnaTypeplaceholder = (keyValue) => {
    let placeholder = null

    //키 값으로 해당 객체를 찾는다.
    const object = qnaTypeInfo.find((element) => element.key == keyValue)
    //객체의 값이 있을 경우
    if (object) {
        placeholder = object.placeholder
    }

    return placeholder
}

/**
 * 정적 서비스 상품 placeholer
 *
 * 정적 서비스 상품 placeholer를 가져온다.
 *
 * @param {string} id
 * @returns 정적 서비스 상품 placeholder 또는 null을 반환한다.
 */
const getProductplaceholder = (idValue) => {
    //정적 서비스 키 값을 가져온다.
    const serviceProductKey = servPdUtil.mappingServiceProduct.getKeyById(idValue)

    let placeholder = null

    //키 값으로 해당 객체를 찾는다.
    const object = productionInfo.find((element) => element.key == serviceProductKey)
    //객체의 값이 있을 경우
    if (object) {
        placeholder = object.placeholder
    }

    return placeholder
}

/**
 * 객체를 동결한다
 *
 * 객체의 값을 변경하지 못하게 동결시킨다.
 */
Object.freeze(qnaTypeInfo)
Object.freeze(productionInfo)

export default { getQnaTypeplaceholder, getProductplaceholder }
