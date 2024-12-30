import { defineStore } from 'pinia';

export const useHospitalStore = defineStore('hospitalStore', {
    state: () => ({
        hospitals: [], // 병원 데이터 배열
        selectedHospital: null, // 선택된 병원
    }),
    actions: {
        // 병원 데이터 로드
        async fetchHospitals() {
            try {
                const response = await fetch(
                    'https://0ed0ec42-ebdd-4fc6-8ff9-3dbd21416732.mock.pstmn.io/search'
                );
                const data = await response.json();

                if (data.prodInfo && Array.isArray(data.prodInfo)) {
                    this.hospitals = data.prodInfo;
                } else {
                    console.error('API 응답이 올바르지 않습니다.');
                }
            } catch (error) {
                console.error('병원 데이터를 가져오는 중 오류 발생:', error);
            }
        },

        // ID로 병원 데이터 설정
        setSelectedHospital(id) {
            this.selectedHospital = this.hospitals.find(
                (hospital) => hospital.productId === Number(id)
            );
            if (!this.selectedHospital) {
                console.warn(`ID ${id}에 해당하는 병원이 없습니다.`);
            }
        },
    },
});