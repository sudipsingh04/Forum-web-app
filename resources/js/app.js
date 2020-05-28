require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
Vue.component('vue-simplemde', VueSimplemde)

import md from 'marked'
window.md = md

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './Router/router.js'

import User from './Helpers/User'
window.User = User

import Exception from './Helpers/Exception'
window.Exception = Exception

window.EventBus = new Vue()

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});
