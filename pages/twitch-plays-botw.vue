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
      Liste des commandes du chat Twitch pour le jeu Twitch Plays BOTW
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
      commands: [
        {
          command: "ju",
          description: "Jump Up : Sauter / Escalader vers l'avant",
        },
        {
          command: "jb",
          description: "Jump Back : Sauter en arrière",
        },
        {
          command: "jl",
          description: "Jump Left : Sauter / Escalader vers la gauche",
        },
        {
          command: "jtl",
          description: "Jump Top Left : Escalader en diagonale gauche",
        },
        {
          command: "jr",
          description: "Jump Right : Sauter / Escalader vers la droite",
        },
        {
          command: "jtr",
          description: "Jump Top Right : Escalader en diagonale droite",
        },
        {
          command: "dl",
          description: "Direction Left : Se tourner à 90° à gauche",
        },
        {
          command: "dl45",
          description: "Direction Left 45° : Se tourner à 45 à gauche",
        },
        {
          command: "dr",
          description: "Direction Left : Se tourner à 90° à droite",
        },
        {
          command: "dr45",
          description: "Direction Right 45° : Se tourner à 45 à droite",
        },
        {
          command: "db",
          description: "Direction Back : Se retourner à 180°",
        },
        {
          command: "vu",
          description: "View Up : Regarder légèrement plus haut",
        },
        {
          command: "vd",
          description: "View Down : Regarder légèrement plus bas",
        },
        {
          command: "vl",
          description: "View Left : Regarder légèrement à gauche",
        },
        {
          command: "vr",
          description: "View Right : Regarder légèrement à droite",
        },
        {
          command: "pu",
          description: "Pad Up : Appuyer 1s sur la flèche directionne du haut",
        },
        {
          command: "pl",
          description:
            "Pad Left : Appuyer 1s sur la flèche directionne de gauche",
        },
        {
          command: "pr",
          description:
            "Pad Right : Appuyer 1s sur la flèche directionne de droite",
        },
        {
          command: "pb",
          description: "Pad Back : Appuyer 1s sur la flèche directionne du bas",
        },
        {
          command: "l",
          description: "Appuyer sur la sous gachette de gauche",
        },
        {
          command: "r",
          description: "Appuyer sur la sous gachette de droite",
        },
        {
          command: "zl",
          description: "Appuyer sur la gachette de gauche",
        },
        {
          command: "zr",
          description: "Appuyer sur la gachette de droite",
        },
        {
          command: "x",
          description: "Appuyer sur X",
        },
        {
          command: "y",
          description: "Appuyer sur Y",
        },
        {
          command: "a",
          description: "Appuyer sur A",
        },
        {
          command: "b",
          description: "Appuyer sur B",
        },
        {
          command: "sl",
          description: "Appuyer sur le stick de gauche (s'accroupir)",
        },
        {
          command: "sr",
          description: "Appuyer sur le stick de droite (longue vue)",
        },
        {
          command: "arme+",
          description:
            "Se déplacer dans la roue des armes vers la droite (arme et arc)",
        },
        {
          command: "arme-",
          description:
            "Se déplacer dans la roue des armes vers la gauche (arme et arc)",
        },
        {
          command: "shield+",
          description: "Se déplacer dans la roue des boucliers vers la droite",
        },
        {
          command: "shield-",
          description: "Se déplacer dans la roue des boucliers vers la gauche",
        },
        {
          command: "power+",
          description:
            "Se déplacer dans la roue des modules Sheikah vers la droite",
        },
        {
          command: "power-",
          description:
            "Se déplacer dans la roue des modules Sheikah vers la gauche",
        },
        {
          command: "doff",
          description: "Annuler l'action en cours",
        },
        {
          command: "run",
          description: "Courrir pendant 3s",
        },
        {
          command: "runjump",
          description: "Courrir pendant 2s et sauter en avant",
        },
        {
          command: "walk",
          description: "Marcher pendant 2s",
        },
      ].sort((a, b) => (a.command > b.command ? 1 : -1)),
    }
  },
  head() {
    return this.$seo(
      "Liste des commandes de Twitch Plays BOTW",
      "Liste des commandes utilisables sur le chat Twitch pour le jeu Twitch Plays",
      "commandes"
    )
  },
}
</script>
