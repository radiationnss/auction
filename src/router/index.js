import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Notices from '../views/NoticesView.vue';
import Categories from '../views/CategoriesView.vue';




const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/notices',
            name: 'notices',
            component: Notices
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categories
        }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;