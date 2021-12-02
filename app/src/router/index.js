import { createRouter, createWebHistory } from 'vue-router'
import Website from '../views/website/Index'
import WebsiteLayout from '../layouts/WebsiteLayout'
import Login from '../views/website/auth/Login'

const routes = [
  {
    path: '/',
    name: 'Website',
    component: Website,
    meta: { layout: WebsiteLayout },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
