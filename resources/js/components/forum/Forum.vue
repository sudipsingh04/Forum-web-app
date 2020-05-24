<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question
                v-for="question in questions"
                :key="question.path"
                :data=question
                ></question>
            </v-flex>
            <v-flex xs4>
                <app-sidebar/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Question from './Question'
import AppSidebar from './AppSidebar'
import Axios from 'axios'

export default {
    data(){
        return{
            questions:{}
        }
    },
    components: {Question, AppSidebar},
    created(){
        Axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>

<style>

</style>
