<template>
  <v-card class="mx-auto">
    <v-card-title class="pb-0">
      Commandes
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
      />
    </v-card-title>

    <v-card-text class="text--primary">
      Liste des commandes du chat Twitch
    </v-card-text>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="commands"
        class="elevation-1"
        :search="search"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import cmds from "~/content/cmds.json"

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Commande",
          align: "start",
          sortable: true,
          value: "command",
        },
        { text: "Description", value: "description" },
      ],
      commands: cmds
        .map((c) => {
          return {
            command: c.name.map((n) => `!${n}`).join(", "),
            description: c.description,
          }
        })
        .sort((a, b) => (a.command > b.command ? 1 : -1)),
    }
  },
  head() {
    return this.$seo(
      "Liste des commandes Twitch",
      "Liste des commandes utilisables sur le chat Twitch",
      "commandes"
    )
  },
}
</script>
