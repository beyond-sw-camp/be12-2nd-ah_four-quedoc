import { createApp } from 'vue'
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

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(createMetaManager);
app.use(vuetify);
app.mount('#app')
