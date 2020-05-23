<template>
  <v-container>
      <v-form @submit.prevent="create">
        <v-text-field
        v-model="form.title"
        label="Title"
        type="text"
        required
        ></v-text-field>

        <v-select
        :items="categories"
        item-text="name"
        item-value="id"
        v-model="form.category_id"
        label="Category"
        autocomplete
        ></v-select>

        <vue-simplemde v-model="form.body" />

        <v-btn
        color="green"
        type="submit">
        Create</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            form: {
                title: null,
                category_id: '',
                body: null
            },
            categories: [],
            errors: {}
        }
    },
    created(){
        Axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods: {
        create(){
            Axios.post('/api/question', this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => this.errors = error.response.data.error)
        }
    }
}
</script>

<style>
</style>
