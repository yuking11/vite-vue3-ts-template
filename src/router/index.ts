import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
