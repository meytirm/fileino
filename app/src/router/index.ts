import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/website/Index.vue'
import Signin from '../views/website/auth/Signin.vue'
import Signup from '../views/website/auth/Signup.vue'
import AdminIndex from '../views/admin/Index.vue'
import UserIndex from '../views/user/Index.vue'

import WebsiteLayout from '../layouts/WebsiteLayout.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/admin',
    name: 'AdminIndex',
    component: AdminIndex,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/user',
    name: 'UserIndex',
    component: UserIndex,
    meta: { layout: WebsiteLayout, requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/')
    return
  }
  next()
})

export default router
