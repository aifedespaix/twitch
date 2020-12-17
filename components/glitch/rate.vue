<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <div class="icons" v-bind="attrs" v-on="on">
        <v-icon :key="n" v-for="n in rate.max" large :color="rate.color">
          <template v-if="n + 1 <= rate.max">mdi-star</template>
          <template v-else>mdi-star-outline</template>
        </v-icon>
      </div>
    </template>
    <span>Difficulté : {{ rate.name }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    rate: Object,
  },
}
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
}
</style>
