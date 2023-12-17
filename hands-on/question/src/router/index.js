import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BasicComponent from "../views/demo/BasicComponent.vue";
import UILibrary from "../views/demo/UILibrary.vue";
import API from "../views/demo/API.vue";
import Component from "../views/hands-on/Component.vue";
import Responsive from "../views/hands-on/Responsive.vue";
import UI from "../views/hands-on/UI.vue";
import BlogList from "../views/hands-on/BlogList.vue";
import Blog from "../views/hands-on/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/demo/component",
      name: "demo component",
      component: BasicComponent,
    },
    {
      path: "/demo/ui-library",
      name: "ui library",
      component: UILibrary,
    },
    {
      path: "/demo/api",
      name: "api demo",
      component: API,
    },
    {
      path: "/hands-on/component",
      name: "component",
      component: Component,
    },
    {
      path: "/hands-on/responsive",
      name: "responsive",
      component: Responsive,
    },
    {
      path: "/hands-on/ui-library",
      name: "ui",
      component: UI,
    },
    {
      path: "/hands-on/blogs",
      name: "blog list",
      component: BlogList,
    },
    {
      path: "/hands-on/blogs/:id",
      name: "blog detail",
      component: Blog,
    },
  ],
});

export default router;
