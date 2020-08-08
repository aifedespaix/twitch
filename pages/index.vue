<template>
  <div>
    <h1>Bienvenue</h1>
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="pb-0">Commandes</v-card-title>

      <v-card-text class="text--primary">Liste des commandes du chat Twitch</v-card-text>

      <v-card-actions>
        <nuxt-link to="/commandes">
          <v-btn color="orange" text>Voir</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="pb-0">Merci</v-card-title>

      <v-card-text class="text--primary">Tous les remerciements !</v-card-text>

      <v-card-actions>
        <nuxt-link to="/merci">
          <v-btn color="orange" text>Voir</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {};
</script>
 