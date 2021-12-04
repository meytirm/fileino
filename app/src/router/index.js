import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/website/Index";
import WebsiteLayout from "../layouts/WebsiteLayout";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: WebsiteLayout,
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
