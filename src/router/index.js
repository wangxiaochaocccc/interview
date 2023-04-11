import { createRouter, createWebHistory } from 'vue-router'
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login-register/login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes:publicRoutes
})

export default router