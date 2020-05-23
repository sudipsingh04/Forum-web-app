<template>
    <show-question :data=question></show-question>
</template>

<script>
import Axios from 'axios'
import ShowQuestion from './ShowQuestion'
export default {
    components:{ShowQuestion},
    data(){
        return {
            question: {}
        }
    },
    created(){
        Axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res => this.question = res.data.data)
    }
}
</script>

<style>

</style>
