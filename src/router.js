import { createWebHistory, createRouter } from "vue-router";
import OSR_Service_List from "./components/OSR_Service_List.vue"

const routes = [
  {
    path: "/OSR_Service_List",
    component: OSR_Service_List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 