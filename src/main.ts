import { createApp } from 'vue'
const app = createApp(App)
import App from './App.vue'
import router from './router'
import store from './store'
// import * as echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
// app.config.globalProperties.$echarts = echarts
app.use(store).use(router).use(dataV).mount('#app')
