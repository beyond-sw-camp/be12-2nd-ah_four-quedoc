import { defineStore } from 'pinia';
import { reactive } from 'vue';

const useHspStore = defineStore(
  'hospital', // 스토어 이름
  () => {
    // 상태: 병원 정보를 저장할 리스트
    const hospitalList = reactive({ list: [] });


    const hospital = reactive({
      name: "",
      type: "",
      info: "",
      hNumber: ""
    });

    function setHsp(h) {
      hospital.name = h.name;
      hospital.type = h.type;
      hospital.info = h.info;
      hospital.hNumber = h.hNumber;
    }
    function getHsp() {
      return hospital;
    }
    // 병원 추가 함수
    function addHospital(hospital) {
      hospitalList.list.push(hospital);
    }

    // 병원 삭제 함수 (인덱스를 기준으로 삭제)
    function removeHospital(index) {
      if (index >= 0 && index < hospitalList.length) {
        hospitalList.list.splice(index, 1);
      }
    }
    function getLength() {
      return hospitalList.list.length;
    }
    // 리스트 초기화 함수
    function resetHospitalList() {
      hospitalList.list = []; // 배열을 초기화
    }
    function getHospital() {
      return hospitalList.list;
    }

    return {
      hospitalList,
      hospital,
      addHospital,
      removeHospital,
      resetHospitalList,
      getLength,
      getHospital,
      setHsp,
      getHsp
    };
  },
  {
    persist: {
      enabled: true, // 영속화 활성화
      strategies: [
        {
          storage: localStorage, // 데이터를 저장할 저장소
          paths: ['hospitalList','hospital'] // 저장할 상태 항목
        }
      ]
    }
  }
);

export default useHspStore;
