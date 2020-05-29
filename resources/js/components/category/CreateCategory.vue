<template>
  <v-container>
      <v-form @submit.prevent="submit">
        <v-text-field
        v-model="form.name"
        label="Category name"
        type="text"
        required
        ></v-text-field>

        <v-btn type="submit" :disabled="disabled" color="pink" v-if="editSlug">Update</v-btn>
        <v-btn type="submit" :disabled="disabled" color="teal" v-else>Create</v-btn>
      </v-form>

        <v-card>
            <v-toolbar color="indigo" dark dense class="mt-2">
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-list-item-action>
                            <v-btn class="mx-2" fab dark color="orange" @click="edit(index)">
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
            categories: {},
            editSlug: null
        }
    },
    created(){
        if(!User.admin()){
            this.$router.push('/forum')
        }
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods: {
        submit(){
            this.editSlug ? this.update() : this.create()
        },
        create(){
            axios.post('/api/category', this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },

        destroy(slug, index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index,1))
        },
        edit(index){
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
            this.categories.splice(index,1)
        }
    },
    computed: {
        disabled(){
            return !this.form.name
        }
    }
}
</script>

<style>

</style>
