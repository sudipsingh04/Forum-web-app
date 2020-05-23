<template>
  <v-card class="mx-auto blue-grey lighten-5">
    <v-card-text class="headline font-weight-bold">
      {{ data.title }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
              <div>{{ data.user }}</div>
              <div class="grey--text mt-1">{{ data.created_at }}</div>
          </v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mx-2">mdi-reply-all</v-icon>
          <span class="subheading mr-2">256</span>

          <v-btn class="mx-2" fab dark color="orange" v-if="own">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark color="red" v-if="own">
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>

    <v-card-text v-html="body"></v-card-text>
  </v-card>
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            own: User.own(this.data.user_id)
        }
    },
    computed: {
        body(){
            return md.parse(this.data.body)
        }
    }
}
</script>

<style>

</style>
