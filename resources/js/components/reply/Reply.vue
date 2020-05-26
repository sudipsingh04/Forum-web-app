<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.user }}</div>
                <div class="ml-2"> said {{data.created_at}}</div>
                <v-spacer></v-spacer>
                <like :content="data"/>
            </v-card-title>
            <v-divider></v-divider>

            <div v-if="editing">
                <edit-reply :reply=data v-if="editing" />
            </div>
            <div v-else>
                <v-card-text v-html="reply"></v-card-text>
            </div>
            <v-divider></v-divider>

            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small class="ml-2" @click="edit">
                        <v-icon color="orange">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon small class="ml-2" @click="destroy">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
import EditReply from './EditReply'
import Like from '../likes/Like'

export default {
    props: ['data', 'index'],
    components: {EditReply, Like},
    data(){
        return{
            editing: false
        }
    },
    created(){
        this.listen()
    },
    computed: {
        own(){
            return User.own(this.data.user_id)
        },
        reply(){
            return md.parse(this.data.reply)
        }
    },
    methods:{
        destroy(){
            EventBus.$emit('deleteReply', this.index)
        },
        edit(){
            this.editing = true
        },
        listen(){
            EventBus.$on('cancelEditing', () => {
                this.editing = false
            })
        }
    }
}
</script>

<style>

</style>
