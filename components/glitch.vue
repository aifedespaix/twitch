<template>
  <v-container v-if="glitch">
    <v-row>
      <v-col sm="12">
        <h1 v-h1>
          {{ glitch.title }}
        </h1>
        <div v-if="glitch.detail" v-html="$md.render(glitch.detail)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" sm="12" tag="article">
        <v-responsive
          v-if="glitch.youtubeId"
          :aspect-ratio="16 / 9"
          max-height="calc(100vh - 64px)"
        >
          <iframe
            :src="videoUrl"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class=""
            frameborder="0"
            height="100%"
            width="100%"
          />
        </v-responsive>

        <template v-if="glitch.content">
          <h3 v-h2>Fonctionnement du glitch</h3>
          <div v-html="$md.render(glitch.content)" />

          <ItemsCarousel
            v-if="glitch.items && glitch.items.length"
            :items="glitch.items"
          />

          <h3 v-if="glitch.sources && glitch.sources.length" v-h2>Sources</h3>
          <ul>
            <li v-for="source in glitch.sources" :key="source.id">
              <a :href="source.url" target="_blank" rel="noopener">
                {{ source.title }}
              </a>
              par {{ source.author }}
            </li>
          </ul>
        </template>
      </v-col>

      <v-col md="4" xs="12">
        <div class="d-flex justify-space-between">
          <span class="caption">
            Publié le {{ glitch.seo.createdAt | formatDate }}
          </span>
          <Share :category-slug="glitch.category.seo.slug" :glitch="glitch" />
        </div>

        <h3 v-h3>Difficulté</h3>
        <div class="d-flex justify-center">
          <Difficulty :difficulty="glitch.difficulty" />
        </div>

        <Reactions :reactions="glitch.reactions" />

        <h3 v-if="similarGlitchs && similarGlitchs.length" v-h3>
          Glitchs similaires
        </h3>
        <v-row v-if="similarGlitchs && similarGlitchs.length" dense>
          <v-col v-for="glitch in similarGlitchs" :key="glitch.id" cols="12">
            <GlitchCard :glitch="glitch" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

@Component({
  components: {
    Reactions,
    GlitchCard,
    ItemsCarousel,
    Difficulty,
    Share,
  },
})
class Glitch extends Vue {
  @Prop({ required: true })
  public glitch!: any

  public similarGlitchs = []

  get videoUrl() {
    return `https://www.youtube.com/embed/${this.glitch.youtubeId}`
  }
}

export default Glitch
</script>
