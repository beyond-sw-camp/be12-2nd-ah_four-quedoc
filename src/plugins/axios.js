import axios from 'axios';

export default {
  install: (app) => {
    // Axios 인스턴스를 생성하거나 기본 Axios 사용
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080', // 기본 API URL
      timeout: 10000, // 요청 제한 시간
      headers: { 'Content-Type': 'application/json' }, // 기본 헤더
    });

    // Axios 인스턴스를 글로벌 프로퍼티로 등록
    app.config.globalProperties.$axios = axiosInstance;
  }
};
