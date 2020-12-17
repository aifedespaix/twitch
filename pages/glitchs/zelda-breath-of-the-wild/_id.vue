<template>
  <div class="glitch">
    <h1>{{ glitch.title }}</h1>
    <p>{{ glitch.content }}</p>
    <Sources :author="glitch.sources" />
    <Rate :rate="glitch.difficulty" />
    <div>{{ glitch.sources }}</div>
    <div>{{ glitch.youtubeId }}</div>
    <div>{{ glitch.category }}</div>
    <div>{{ glitch.seo }}</div>
  </div>
  <!-- <Glitch :glitch="glitch" /> -->
</template>

<script>
export default {
  head() {
    return this.$seo("Accueil", "Page d'accueil de l'app Aife", "index")
  },

  // glitch: (any = glitchData),
  asyncData({ params }) {
    const glitch = require(`../../../content/glitches/zelda-breath-of-the-wild/${params.id}`)
    console.log(glitch)
    return {
      glitch: glitch.default,
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
}

.glitch {
  display: grid;
  grid-template-areas: "";
}
</style>
