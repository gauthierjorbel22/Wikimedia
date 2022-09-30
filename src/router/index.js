import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue"
import Wikivoyage from "../views/Wikivoyage.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/wikivoyage",
    name: "wikivoyage",
    component: Wikivoyage
  },
  {
    path:'/:catchAll(.*)',
    name:"not-found",
    component: NotFound
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

// createWebHashHistory

export default router;
