<template>
    <div v-if="question">
        <edit-question :data=question v-if="editing"></edit-question>
        <show-question :data=question v-else></show-question>
        <replies :replies="question.replies"/>
    </div>
</template>

<script>
import Axios from 'axios'
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../reply/Replies'

export default {
    components:{ShowQuestion, EditQuestion, Replies},
    data(){
        return {
            question: null,
            editing: false
        }
    },
    created(){
        this.listen()
        this.getQuestion()
    },
    methods: {
        listen(){
            EventBus.$on('startEditing', ()=> {
                this.editing = true
            })

            EventBus.$on('cancelEditing', ()=> {
                this.editing = false
            })
        },
        getQuestion(){
            Axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }
}
</script>

<style>

</style>
