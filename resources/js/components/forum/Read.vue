<template>

</template>

<script>
import Axios from 'axios'
export default {
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
