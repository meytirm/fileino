import { createRouter, createWebHistory } from 'vue-router'
import Website from '../views/website/Index'
import WebsiteLayout from '../layouts/WebsiteLayout'

const routes = [
  {
    path: '/',
    name: 'Website',
    component: Website,
    meta: { layout: WebsiteLayout },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
