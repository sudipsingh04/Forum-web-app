<template>
    <v-container>
        <v-form @submit.prevent="update">
            <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
            required
            ></v-text-field>

        <vue-simplemde v-model="form.body" />

        <v-card-actions>
            <v-btn class="ma-2" tile large color="success" type="submit">
                Save
            </v-btn>
            <v-btn class="ma-2" tile large @click="cancel">
                Cancel
            </v-btn>
        </v-card-actions>

        </v-form>
    </v-container>
</template>

<script>
import Axios from 'axios'
export default {
    props: ['data'],
    data(){
        return{
            form: {
                title: null,
                body: null
            }
        }
    },
    methods: {
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            Axios.patch(`/api/question/${this.form.slug}`, this.form)
            .then(res => this.cancel())
        }
    },
    mounted(){
        this.form = this.data
    }
}
</script>

<style>

</style>
