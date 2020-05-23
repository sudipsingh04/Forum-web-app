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
          <v-icon class="mr-1">mdi-reply-all</v-icon>
          <span class="subheading mr-2">256</span>
        </v-row>
      </v-list-item>
    </v-card-actions>

    <v-card-text v-html="data.body">
      {{ data.body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>
