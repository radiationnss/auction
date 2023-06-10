import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Notices from '../views/NoticesView.vue';
import Categories from '../views/CategoriesView.vue';
import Auction from '../views/AboutView.vue';
import SingleCategory from '../views/SingleCategory.vue';
import Product from '../views/ProductView.vue'


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
        },
        {
            path: '/auction',
            name: 'auction',
            component: Auction
        },
        {
            path: '/category/:category_id',
            name: 'category',
            component: SingleCategory
        },
        {
            path: '/category/:category_id/:product_id',
            name: 'product',
            component: Product
        }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;