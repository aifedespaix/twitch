<template>
  <v-card class="mx-auto">
    <v-card-title class="pb-0">
      Commandes
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-card-text class="text--primary">Liste des commandes du chat Twitch</v-card-text>

    <v-card-text>
      <v-data-table :headers="headers" :items="commands" class="elevation-1" :search="search"></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head() {
    return this.$seo(
      "Liste des commandes Twitch",
      "Liste des commandes utilisables sur le chat Twitch",
      "commandes"
    );
  },
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
          command: "!discord",
          description: "Obtenir le lien du serveur discord",
        },
        {
          command: "!davgen",
          description: "Obtenir le lien de la chaîne de Davgen",
        },
        {
          command: "!mariokart",
          description: "Informations pour le tournoi Mario Kart",
        },
        {
          command: "!ssbu",
          description: "Informations pour le tournoi Super Smash Bros Ultimate",
        },
        {
          command: "!jairatequoi",
          description: "Pour savoir ce que vous avez raté !",
        },
        {
          command: "!pkctoutnoir",
          description: "Pour savoir pourquoi c'est tout noir !",
        },
        {
          command: "!raid",
          description: "Définition d'un raid",
        },
        {
          command: "!youtube",
          description: "Obtenir le lien de ma chaîne Youtube",
        },
        {
          command: "!vod",
          description: "Obtenir le lien de ma chaîne VOD",
        },
        {
          command: "!twitter",
          description: "Obtenir le lien de mon compte Twitter",
        },
        {
          command: "!instagram",
          description: "Obtenir le lien de mon compte Instagram",
        },
        {
          command: "!onz",
          description: "Obtenir le lien du compte Soundcloud de Onz",
        },
        {
          command: "!pktutappellesaife",
          description: "Pourquoi tu t'appelles aife ?",
        },
        {
          command: "!ckoitonprenom",
          description: "C'est quoi ton prénom ?",
        },
        {
          command: "!ckoitonprenom",
          description: "C'est quoi ton prénom ?",
        },
        {
          command: "!botwconsole",
          description: "Tu joues sur quelle console ?",
        },
        {
          command: "!botwpktujouesuremulateur",
          description: "Pourquoi tu joues sur émulateur ?",
        },
        {
          command: "!botwquelemulateur",
          description: "Tu utilises quel émulateur ",
        },
        {
          command: "!tutocemu",
          description: "Comment configurer CEMU ?",
        },
        {
          command: "!botwclavier",
          description: "Tu joues sur clavier ?",
        },
        {
          command: "!botwckoitamanette",
          description: "Tu utilises quoi comme manette ?",
        },
        {
          command: "!botwpkta3coeurs",
          description: "Pourquoi t'as que 3 cœurs ?",
        },
        {
          command: "!botwpktactivepaslespouvoir",
          description: "Pourquoi tu active pas les pouvoirs ?",
        },
        {
          command: "!botwpktufaispasunshieldclip",
          description:
            "Pourquoi tu ne fait pas un shield clip durant les épreuves de l'épée ?",
        },
        {
          command: "!botwpktacettetenue",
          description: "Pourquoi tu as cette tenue ?",
        },
        {
          command: "!botwcommentonatatenue",
          description: "Comment on récupère ta tenue ?",
        },
        {
          command: "!botwtacombiendheuredejeu",
          description: "Tu as combien d'heure de jeu ?",
        },
        {
          command: "!config",
          description: "Quelle est ma config ?",
        },
        {
          command: "!commands",
          description: "Liste des commandes",
        },
      ].sort((a, b) => (a.command > b.command ? 1 : -1)),
    };
  },
  components: {
    Logo,
  },
};
</script>
 