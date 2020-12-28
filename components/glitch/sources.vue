<template>
  <v-list three-line>
    <template v-for="(source, index) in sources">
      <v-subheader :key="source.title" v-text="source.title"></v-subheader>

      <v-divider :key="index"></v-divider>

      <v-list-item :key="source.title">
      <div>{{ source.title }}</div>
      <div>{{ source.url }}</div>
      <div>{{ source.author.name }}</div>
      <div>{{ source.author.url }}</div>
      <div>{{ source.author.avatar }}</div>
        <v-list-item-avatar>
          <v-img :src="source.author.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="source.title"></v-list-item-title>
          <v-list-item-subtitle v-html="source.name"></v-list-item-subtitle>
          <v-list-item-subtitle v-html="source.author.url"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    sources: Array,
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
