import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';
import Cookies from "js-cookie";
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    
})

// router.beforeEach((to, from, next) => {
//     const token = Cookies.get("token");
//     if (to.name !== "LoginAdmin" && !token) next({ name: "LoginAdmin" });
//     if (to.name === "LoginAdmin" && token) next({ name: "DashboardAdmin" });
//     else next()
// })

router.beforeEach((to, from, next) => {
    const token = Cookies.get("token")
    if (to.name !== 'LoginAdmin' && !token) next({ name: 'LoginAdmin' })
    if (to.name === "LoginAdmin" && token) next({ name: "DashboardAdmin" });
    else next()
  })
export default router