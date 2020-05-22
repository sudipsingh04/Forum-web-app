require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './Router/router.js'

import User from './Helpers/User'
window.User = User

window.EventBus = new Vue()

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});
