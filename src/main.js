import { createApp } from 'vue'
import './assets/css/index.css'
import "normalize.css"
import App from './App.vue'
import router from './router/index'
import pinia from './stores'
import DataVVue3 from '@kjgl77/datav-vue3'
/* 导入esri地图样式 */
import "@arcgis/core/assets/esri/themes/light/main.css";

createApp(App).use(router).use(pinia).use(DataVVue3).mount('#app')
