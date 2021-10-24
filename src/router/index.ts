import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '~/pages/index.vue'
import About from '~/pages/about.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
