import { createApp } from 'vue'
import { createNaverMap } from "vue3-naver-maps";
import './styles/Main.css'
import './styles/MemPsn.css'
import './styles/myinpo.css'
import './styles/mypage.css'
import './styles/mypageMemberDel.css'
import './styles/myinpoChange.css'
import './style.css'
import './styles/SearchSetting.css'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
  });
app.config.globalProperties.$axios=axiosInstance;
app.use(router);
app.use(pinia);
app.use(createMetaManager);
app.use(vuetify);
app
  .use(createNaverMap, {
    clientId: "wgzhdbbhrd", // Required
    category: "ncp", // Optional
    subModules: [], // Optional
	});
app.mount('#app')

