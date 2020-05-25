<template>
    <div>
        <vue-simplemde v-model="reply.reply" />
        <v-btn icon small class="ml-2" @click="update">
            <v-icon color="green">mdi-file</v-icon>
        </v-btn>
        <v-btn icon small class="ml-2" @click="cancel">
            <v-icon color="red">mdi-cancel</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: ['reply'],
    methods: {
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
            .then(res => this.cancel())
        }
    }
}
</script>

<style>

</style>
