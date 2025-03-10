// 创建一个路由器，并暴露出去

// 引入
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// 创建路由器
const router = createRouter({
    // history:createWebHistory(),/* 路由器的工作模式 */
    history:createWebHashHistory(),/* 路由器的工作模式 */
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/news',
            component:News,
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

// 暴露出去router
export default router