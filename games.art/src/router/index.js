import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tendencias from '../components/tendencias.vue'
import desarrollo from '../components/desarrollo.vue'
import login from '../components/login.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/tendencias',
        name: 'tendencias',
        component: tendencias
    },
    {
        path: '/desarrollo',
        name: 'desarrollo',
        component: desarrollo
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = new VueRouter({
    routes
})

export default router