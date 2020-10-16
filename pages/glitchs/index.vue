<template>
  <div>
    <h1>Glitchs</h1>
    <v-row dense :key="category.path" v-for="category in categories">
      <v-card
        max-width="344"
        class="mx-auto"
        v-for="item in category.items"
        :key="item.path"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              item.title
            }}</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="194"
        ></v-img>

        <v-card-text>
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </v-card-text>

        <v-card-actions>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :to="glitchUrl(category.path, item.path)"> Lire </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  head() {
    return this.$seo("Accueil", "Page d'accueil de l'app Aife", "index")
  },
  data: () => ({
    categories: [
      {
        title: "Breath of the Wild",
        path: "zelda-breath-of-the-wild",
        items: [{ title: "rubis", path: "1-million-rubis-rapidement" }],
      },
    ],
  }),
  methods: {
    glitchUrl(categoryPath, glitchpath) {
      return `./glitchs/${categoryPath}/${glitchpath}`
    },
  },
}
</script>
