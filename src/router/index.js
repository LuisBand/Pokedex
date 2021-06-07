import { createWebHistory, createRouter } from "vue-router";
import PokeFind from "../components/PokeFind.vue";
import Home from "../components/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/find",
    name: "pokeFind",
    component: PokeFind,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;