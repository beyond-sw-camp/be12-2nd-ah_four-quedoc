import { defineStore } from 'pinia';
import axios from 'axios';

export const useNoticeStore = defineStore('noticeStore', {
  state: () => ({
    notices: []
  }),
  actions: {
    async fetchNotices() {
      try {
        const response = await axios.get('https://fb03824f-00b2-45fc-8a2f-dea734448d9d.mock.pstmn.io/api/hospital/detail/notice');
        this.notices = response.data;
      } catch (error) {
        console.error('공지사항 데이터를 가져오는 중 오류:', error);
      }
    }
  }
});