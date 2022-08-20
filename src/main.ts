import { createApp } from 'vue'
const app = createApp(App)
import 'scss-flex/src/scss-flex.scss'
import dataV from '@jiaminghi/data-view'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as echarts from 'echarts'

// app.config.globalProperties.$echarts = echarts
app.use(store).use(router).use(dataV).mount('#app')
