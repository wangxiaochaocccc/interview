import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import App from './App.vue'
import myLibs from './libs/index'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(myLibs)
app.mount('#app')
