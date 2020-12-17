<template>
  <div class="sources">
    <div class="source" :key="n" v-for="(source, n) in sources">
      <!-- <img class="avatar" :src="source.author.avatar" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sources: Object,
  },
}
</script>

<style lang="scss" scoped>
.source {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
}
</style>
