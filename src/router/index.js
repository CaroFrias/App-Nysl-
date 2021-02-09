import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Maps from "../views/Maps.vue";
import ListadodePartidos from "../views/ListadodePartidos.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps
  },
  { 
    path: "/ListadodePartidos",
    mane: "ListadodePartidos",
    component: ListadodePartidos

  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
