<template>
  <div>{{ glitch }}</div>
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
      glitch,
    }
  },
}
</script>
