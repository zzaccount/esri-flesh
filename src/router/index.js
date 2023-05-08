import { createRouter, createWebHashHistory } from "vue-router";
import store from '@/stores/index.js'
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path -> component
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue')
    }
  ]
})

export default router