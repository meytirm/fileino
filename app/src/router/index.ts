import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/website/Index.vue'
import WebsiteLayout from '../layouts/WebsiteLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: WebsiteLayout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
