<template>
  <v-container>
      <v-form @submit.prevent="submit">
        <v-text-field
        v-model="form.name"
        label="Category name"
        type="text"
        required
        ></v-text-field>

        <v-btn type="submit" color="teal">Create</v-btn>
      </v-form>

        <v-card>
            <v-toolbar color="indigo" dark dense class="mt-2">
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-list-item-action>
                            <v-btn class="mx-2" fab dark color="orange">
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title v-text="category.name"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn class="mx-2" fab dark color="red" @click="destroy(category.slug, index)">
                                <v-icon dark>mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>

  </v-container>
</template>

<script>
export default {
    data(){
        return{
            form :{
                name: null
            },
            categories: {}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods: {
        submit(){
            axios.post('/api/category', this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },
        destroy(slug, index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index,1))
        }
    }
}
</script>

<style>

</style>
