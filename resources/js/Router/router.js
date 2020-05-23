import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/auth/Logout'
import Read from '../components/forum/Read'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: Read, name: 'read' },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export default router
