<template>
  <v-toolbar color="indigo" dark>
      <v-toolbar-title>
          <router-link class="white--text" to="/">Forum</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <app-notification v-if="loggedIn"/>

      <div class="hidden-sm-and-down">
        <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.to">
            <span v-if="item.show">
                <v-btn text>{{ item.title }}</v-btn>
            </span>
        </router-link>
      </div>
  </v-toolbar>
</template>

<script>
import AppNotification from './AppNotification'
export default {
    components: {AppNotification},
    data(){
        return{
            loggedIn: User.loggedIn(),
            items: [
                {title: 'Forum', to: '/forum', show: true},
                {title: 'Login', to: '/login', show: !User.loggedIn()},
                {title: 'Ask Question', to: '/ask', show: User.loggedIn()},
                {title: 'Category', to: '/category', show: User.admin()},
                {title: 'Logout', to: '/logout', show: User.loggedIn()},
            ]
        }
    },
    created(){
        EventBus.$on('logout', () => {
            User.logout()
        })
    }
}
</script>

<style>

</style>
