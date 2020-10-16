<template>
  <div>
    <h1>Concours de dessins Septembre 2020</h1>
    <h2>Thème : Monstre</h2>

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
        author: "¦Suicide¦®",
        path: "5.jpg",
      },
      {
        author: "Aife (N)",
        path: "aife_a.png",
      },
      {
        author: "Aife",
        path: "Aife.jpg",
      },
      {
        author: "Aife (S)",
        path: "aife_b.png",
      },
      {
        author: "AlexDu841",
        path: "AlexDu841.jpg",
      },
      {
        author: "Athalya",
        path: "Athalya.jpg",
      },
      {
        author: "babaswitch",
        path: "babaswitch.jpg",
      },
      {
        author: "bluesun",
        path: "bluesun.png",
      },
      {
        author: "Celestial_DFgeek",
        path: "Celestial_DFgeek.jpg",
      },
      {
        author: "Clémentvial92",
        path: "Clémentvial92.png",
      },
      {
        author: "dayFOx",
        path: "dayFOx.jpg",
      },
      {
        author: "Dladeo",
        path: "Dladeo.jpg",
      },
      {
        author: "Fafox.into.the.akuma",
        path: "Fafox.into.the.akuma.jpg",
      },
      {
        author: "InoxTheCat_YT",
        path: "InoxTheCat_YT.jpg",
      },
      {
        author: "le mega gamer Jaipasdenom35",
        path: "le mega gamer Jaipasdenom35.jpg",
      },
      {
        author: "LeKorogu",
        path: "LeKorogu.jpg",
      },
      {
        author: "Lophim",
        path: "Lophim.png",
      },
      {
        author: "Meganoval",
        path: "Meganoval.jpg",
      },
      {
        author: "MIMS nathoon",
        path: "MIMS nathoon.jpg",
      },
      {
        author: "Nicolas(LOVE)",
        path: "Nicolas(LOVE).jpg",
      },
      {
        author: "Nnta",
        path: "Nnta.jpg",
      },
      {
        author: "oohmygoat",
        path: "oohmygoat.jpg",
      },
      {
        author: "Oussayed",
        path: "Oussayed.jpg",
      },
      {
        author: "Ranpo",
        path: "Ranpo.jpg",
      },
      {
        author: "SMAPeZ_BX",
        path: "SMAPeZ_BX.jpg",
      },
      {
        author: "Sunny",
        path: "Sunny.jpg",
      },
      {
        author: "TimothyDalton269_",
        path: "TimothyDalton269_.jpg",
      },
      {
        author: "Vaati La Renarde",
        path: "Vaati La Renarde.jpg",
      },
      {
        author: "Warwaild",
        path: "Warwaild.jpg",
      },
      {
        author: "Wip",
        path: "Wip.jpg",
      },
      {
        author: "zazoum 92",
        path: "zazoum 92.jpg",
      },
    ].sort(() => 0.5 - Math.random()),
  }),
  methods: {
    dessinsSrc(path) {
      return `/concours/dessins/2020-09/${path}`
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
