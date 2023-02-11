import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "text-white",

})

export default router