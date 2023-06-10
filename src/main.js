import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import store from './store'


axios.defaults.baseURL = 'http://localhost:8000'


createApp(App).use(store).use(router, axios).mount('#app')

import "bootstrap/dist/js/bootstrap.js"