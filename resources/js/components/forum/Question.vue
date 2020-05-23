<template>
  <v-card class="mx-auto">
    <v-card-title class="text--primary">
        <div>
            <h3 class="headline mb-0">
                <router-link :to="data.path">
                    {{ data.title }}
                </router-link>
            </h3>
        </div>
    </v-card-title>
    <v-card-subtitle class="pb-0">
        <p class="grey--text">
            {{data.user}} said {{ data.created_at }}
        </p>
    </v-card-subtitle>
    <v-card-text>
        {{ data.body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>
