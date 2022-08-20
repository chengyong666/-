import { createApp } from 'vue'
const app = createApp(App)
import 'scss-flex/src/scss-flex.scss'
import dataV from '@jiaminghi/data-view'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as echarts from 'echarts'

// app.config.globalProperties.$echarts = echarts
app.use(store).use(router).use(dataV).mount('#app')
