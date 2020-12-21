<template>
  <div>
    <h1>Concours de dessins Décembre 2020</h1>
    <h2>Thème : Animal Humanoïde</h2>

    <p>
      Si vous êtes l'auteur d'un de ces dessins et que vous ne souhaitez pas le
      voir apparaitre ici, d'hésitez pas à me le faire savoir via Discord.
    </p>

    <p>Les images sont ordonnées de façon aléatoire.</p>
    <v-container>
      <v-row>
        <v-col
          v-for="(dessin, i) in dessins"
          :key="dessin.author"
          class="d-flex child-flex"
          cols="4"
          md="5"
        >
          <div>
            <v-img
              :src="dessinsSrc(dessin.path)"
              aspect-ratio="1"
              class="grey lighten-2 cursor"
              @click="onClick(i)"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div>{{ dessin.author }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <client-only>
      <vue-gallery-slideshow
        :images="dessins.map((d) => dessinsSrc(d.path))"
        :index="index"
        @close="index = null"
      />
    </client-only>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow"

export default {
  components: { VueGallerySlideshow },
  head() {
    return this.$seo(
      "Concours Desssins Septembre 2020",
      "Concours de dessins de Septembre 2020",
      "index"
    )
  },
  data: () => ({
    index: null,
    dessins: [
      {
        author: "Aife",
        path: "Aife.png",
      },
      {
        author: "Albose",
        path: "Albose.png",
      },
      {
        author: "Alex",
        path: "Alex.jpg",
      },
      {
        author: "Le Korogu",
        path: "Le Korogu.jpg",
      },
      {
        author: "Lolo",
        path: "Lolo.jpg",
      },
      {
        author: "Lophim",
        path: "Lophim.png",
      },
      {
        author: "Matsuda",
        path: "Matsuda.jpg",
      },
      {
        author: "Paulinette",
        path: "Paulinette.png",
      },
      {
        author: "Sabaigne",
        path: "Sabaigne.png",
      },
      {
        author: "Shadowadow",
        path: "Shadowadow.jpg",
      },
      {
        author: "Shi-Chan",
        path: "Shi-Chan.jpg",
      },
      {
        author: "Tim",
        path: "Tim.png",
      },
      {
        author: "Vaati La Renarde",
        path: "Vaati La Renarde.jpeg",
      },
      {
        author: "Virya",
        path: "Virya.png",
      },
    ].sort(() => 0.5 - Math.random()),
  }),
  methods: {
    dessinsSrc(path) {
      return `/concours/dessins/2020-12/${path}`
    },
    onClick(i) {
      this.index = i
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: zoom-in;
}
</style>
