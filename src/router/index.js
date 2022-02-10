import VueRouter from "vue-router";

import Login from '../views/Login'
import Home from '../views/Home'

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            name:'login',
            component:Login,
        },
        {
            path:'/home',
            name:'home',
            component:Home,
        },
    ],
})