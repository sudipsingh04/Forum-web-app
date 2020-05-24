import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/auth/Logout'
import Read from '../components/forum/Read'
import Create from '../components/forum/Create'
import CreateCategory from '../components/category/CreateCategory'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/category', component: CreateCategory },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/ask', component: Create },
    { path: '/question/:slug', component: Read, name: 'read' },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export default router
