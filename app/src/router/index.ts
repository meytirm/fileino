import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/website/Index.vue'
import Login from '../views/website/auth/Login.vue'
import Signup from '../views/website/auth/Signup.vue'

import WebsiteLayout from '../layouts/WebsiteLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { layout: WebsiteLayout },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
