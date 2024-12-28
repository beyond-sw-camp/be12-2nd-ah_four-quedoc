/**
 * 서비스 상품 아이디 매핑
 *
 * 정적 서비스 상품 아이디에 해당하는 데이터베이스 서비스 상품 아이디를 매핑한다.
 * 정적 서비스 상품 아이디는 고정되어 있으며 개발/운영에 맞는 서비스 상품 아이디로 대체한다.
 *
 * @param {string} id
 * @returns 개발/운영에 맞는 서비스 상품 아이디 또는 null을 반환한다.
 */
const mappingServiceProduct = {
    //서비스 상품 객체(운영/테스트/개발)
    production: [
        { id: 45, key: 'SLPD0401', name: 'SltnProdCont01', desc: '솔루션상품-MyBizmap상세' },
        { id: 44, key: 'SLPD0402', name: 'SltnProdCont02', desc: '솔루션상품-메모판Pro상세' },
        { id: 43, key: 'SLPD0403', name: 'SltnProdCont03', desc: '솔루션상품-BigFinance상세' },
        { id: 42, key: 'SLPD0404', name: 'SltnProdCont04', desc: '솔루션상품-GPS상세' },
        { id: 41, key: 'SLPD0405', name: 'SltnProdCont05', desc: '데이터전문기관 결합서비스 상세' },
        { id: 37, key: 'DTPD0101', name: 'DataProdCont01', desc: '맞춤Data' },
        { id: 38, key: 'ADPD0501', name: 'AdvtProdCont01', desc: '광고서비스-타겟마케팅' },
        { id: 39, key: 'ADPD0502', name: 'AdvtProdCont02', desc: '광고서비스-서베이대행서비스' },
        { id: 40, key: 'ADPD0503', name: 'AdvtProdCont03', desc: '광고서비스-SoL-Pay배너광고' }
    ],
    staging: [
        { id: 94, key: 'SLPD0401', name: 'SltnProdCont01', desc: '솔루션상품-MyBizmap상세' },
        { id: 95, key: 'SLPD0402', name: 'SltnProdCont02', desc: '솔루션상품-메모판Pro상세' },
        { id: 96, key: 'SLPD0403', name: 'SltnProdCont03', desc: '솔루션상품-BigFinance상세' },
        { id: 97, key: 'SLPD0404', name: 'SltnProdCont04', desc: '솔루션상품-GPS상세' },
        { id: 98, key: 'SLPD0405', name: 'SltnProdCont05', desc: '데이터전문기관 결합서비스 상세' },
        { id: 585, key: 'DTPD0101', name: 'DataProdCont01', desc: '맞춤Data' },
        { id: 598, key: 'ADPD0501', name: 'AdvtProdCont01', desc: '광고서비스-타겟마케팅' },
        { id: 599, key: 'ADPD0502', name: 'AdvtProdCont02', desc: '광고서비스-서베이대행서비스' },
        { id: 600, key: 'ADPD0503', name: 'AdvtProdCont03', desc: '광고서비스-SoL-Pay배너광고' }
    ],
    development: [
        { id: 94, key: 'SLPD0401', name: 'SltnProdCont01', desc: '솔루션상품-MyBizmap상세' },
        { id: 95, key: 'SLPD0402', name: 'SltnProdCont02', desc: '솔루션상품-메모판Pro상세' },
        { id: 96, key: 'SLPD0403', name: 'SltnProdCont03', desc: '솔루션상품-BigFinance상세' },
        { id: 97, key: 'SLPD0404', name: 'SltnProdCont04', desc: '솔루션상품-GPS상세' },
        { id: 98, key: 'SLPD0405', name: 'SltnProdCont05', desc: '데이터전문기관 결합서비스 상세' },
        { id: 585, key: 'DTPD0101', name: 'DataProdCont01', desc: '맞춤Data' },
        { id: 598, key: 'ADPD0501', name: 'AdvtProdCont01', desc: '광고서비스-타겟마케팅' },
        { id: 599, key: 'ADPD0502', name: 'AdvtProdCont02', desc: '광고서비스-서베이대행서비스' },
        { id: 600, key: 'ADPD0503', name: 'AdvtProdCont03', desc: '광고서비스-SoL-Pay배너광고' }
    ],
    getIdByKey: function (keyValue) {
        let id = null

        //환경 모드별 객체를 가져온다.
        const object = getProductInfo()
        const servPd = object.find((ele) => ele.key == keyValue)
        if (servPd) id = servPd.id
        return id
    },
    getKeyById: function (idValue) {
        let key = null

        //환경 모드별 객체를 가져온다.
        const object = getProductInfo()
        const servPd = object.find((ele) => ele.id == idValue)
        if (servPd) key = servPd.key
        return key
    },
    getNameByKey: function (keyValue) {
        let name = null

        //환경 모드별 객체를 가져온다.
        const object = getProductInfo()
        const servPd = object.find((ele) => ele.key == keyValue)
        if (servPd) name = servPd.name
        return name
    }
}

/**
 * 정적 서비스 상품 객체
 *
 * 현재 모드에 대한 정적 서비스 상품 객체를 가져온다.
 *
 * @returns 정적 서비스 상품 객체
 */
const getProductInfo = () => {
    let object = null

    if (import.meta.env.MODE === 'production') {
        object = mappingServiceProduct.production
    } else if (import.meta.env.MODE === 'staging') {
        object = mappingServiceProduct.staging
    } else if (import.meta.env.MODE === 'development') {
        object = mappingServiceProduct.development
    }

    return object
}

export default { mappingServiceProduct }
