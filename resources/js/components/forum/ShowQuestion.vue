<template>
  <v-card class="mx-auto blue-grey lighten-5">
    <v-card-text class="headline font-weight-bold">
      {{ data.title }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
              <div>{{ data.user }}</div>
              <div class="grey--text mt-1">{{ data.created_at }}</div>
          </v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mx-2" >mdi-reply-all</v-icon>
          <span class="subheading mr-2">{{ replyCount }} replies</span>

          <v-btn class="mx-2" fab dark color="orange" v-if="own" @click="edit">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark color="red" v-if="own" @click="destroy">
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>

    <v-card-text v-html="body"></v-card-text>
  </v-card>
</template>

<script>
import Axios from 'axios'
export default {
    props:['data'],
    data(){
        return {
            own: User.own(this.data.user_id),
            replyCount: this.data.reply_count
        }
    },
    computed: {
        body(){
            return md.parse(this.data.body)
        }
    },
    created(){
        EventBus.$on('newReply', () =>{
            this.replyCount++
        })

        Echo.private('App.User.' + User.id())
            .notification((notification) => {
                this.replyCount++
            });

        EventBus.$on('deleteReply', () =>{
            this.replyCount--
        })

        Echo.channel('deleteReplyChannel')
                .listen('DeleteReplyEvent', (e) => {
                    this.replyCount--
                });
    },
    methods: {
        destroy(){
            Axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style>

</style>
