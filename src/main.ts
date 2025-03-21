import {createApp} from 'vue'
import App from './App.vue'
// 引入pinia
import { createPinia } from 'pinia'

// 第一步 创建一个应用
const app = createApp(App)
// 第二步 创建pinia
const pinia = createPinia()
// 第三步 安装pinia
app.use(pinia)
app.mount('#app')