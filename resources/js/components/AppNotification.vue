<template>
  <div class="text-center">
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon :color="color">mdi-bell</v-icon> <b>{{ unreadCount }}</b>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="item in unread" :key="item.id">
                <router-link :to="item.path">
                    <v-list-item-title @click="readIt(item)">{{ item.question }}</v-list-item-title>
                </router-link>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="item in read" :key="item.id">
                <v-list-item-title>{{ item.question }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    data(){
        return{
            read: {},
            unread: {},
            unreadCount: 0,
            sound: "http://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3"
        }
    },
    created(){
        if(User.loggedIn()){
            this.getNotifications()
        }

        Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.playSound()
                    this.unread.unshift(notification)
                    this.unreadCount++
                });
    },
    methods: {
        playSound(){
            let alert = new Audio(this.sound)
            alert.play()
        },
        getNotifications(){
            axios.post('/api/notifications')
            .then(res => {
                this.read = res.data.read
                this.unread = res.data.unread
                this.unreadCount = res.data.unread.length
            })
            .catch(error => Exception.handle(error))
        },
        readIt(notification){
            axios.post('/api/markAsRead', {id: notification.id})
            .then(res => {
                this.unread.splice(notification, 1)
                this.read.push(notification)
                this.unreadCount--
            })
        }
    },
    computed: {
        color(){
            return this.unreadCount > 0 ? 'red' : 'red lighten-4'
        }
    }
}
</script>

<style>

</style>
