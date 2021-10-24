import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import About from '~/pages/about.vue'

const routes = [
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
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
