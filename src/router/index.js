import { createRouter, createWebHistory } from 'vue-router'


const routes = [
        {
            path:'/',
            redirect:'/home'
        },
        {
            name:'Home',
            path:'/home',
            component:import("../views/home.vue"),
        }

     

]


const router = createRouter({
    history:createWebHistory(process.env.url),
    routes
})

export default router;