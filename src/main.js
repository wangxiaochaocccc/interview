import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
