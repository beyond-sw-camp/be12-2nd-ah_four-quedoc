import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://222.112.156.89:107', // 실제 API 서버 주소
        changeOrigin: true, // 원본 헤더의 호스트를 대상 URL로 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // /api를 제거하고 실제 서버에 전달
      },
    },
  },
})
