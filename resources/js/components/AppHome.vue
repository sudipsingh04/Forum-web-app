<template>
    <div>
        <toolbar/>
        <router-view></router-view>
        <app-footer/>
    </div>
</template>

<script>
import toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Login from './auth/Login'

export default {
    components:{
        toolbar,
        AppFooter,
        Login
    }
}
</script>

<style>

</style>
