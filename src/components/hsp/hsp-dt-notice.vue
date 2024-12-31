<template>
  <div class="notice-board">
    
    <h4 class="notice-title">병원 공지사항</h4>
    <div
      class="notice-card"
      v-for="notice in displayedNotices"
      :key="notice.id"
    >
      <p class="notice-title-text">{{ notice.title }}</p>
      <p class="notice-date">{{ notice.date }}</p>
      <p class="notice-content">{{ notice.content }}</p>
    </div>
    <button
      v-if="visibleCount < noticeStore.notices.length"
      class="load-more-button"
      @click="loadMore"
    >
      더보기
    </button>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useNoticeStore } from "../../stores/useNoticeStore"; 

// Pinia Store 사용
const noticeStore = useNoticeStore();

// 표시할 공지사항 개수
const visibleCount = ref(3);

// 더보기 버튼 클릭 시 추가 표시 개수
const incrementCount = 2;

// 최신 날짜순으로 정렬된 공지사항
const sortedNotices = computed(() =>
  [...noticeStore.notices].sort((a, b) => new Date(b.date) - new Date(a.date))
);

// 표시 중인 공지사항 계산
const displayedNotices = computed(() =>
  sortedNotices.value.slice(0, visibleCount.value)
);

// "더보기" 버튼 클릭 핸들러
const loadMore = () => {
  visibleCount.value += incrementCount;
};

// 컴포넌트 로드 시 데이터 호출
onMounted(() => {
  noticeStore.fetchNotices(); // Pinia 액션 호출
});
</script>

<style scoped>
@import "../../styles/hspnotice.css";
</style>
