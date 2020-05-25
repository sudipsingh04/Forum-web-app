<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.user }}</div>
                <div class="ml-2"> said {{data.created_at}}</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="data.reply"></v-card-text>
            <v-divider></v-divider>

            <v-card-actions v-if="own">
                <v-btn icon small class="ml-2">
                    <v-icon color="orange">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon small class="ml-2" @click="destroy">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>


        </v-card>
    </div>
</template>

<script>
export default {
    props: ['data', 'index'],
    computed: {
        own(){
            return User.own(this.data.user_id)
        }
    },
    methods:{
        destroy(){
            EventBus.$emit('deleteReply', this.index)
        }
    }
}
</script>

<style>

</style>
