<template>
  <v-app id="inspire">
    <v-app-bar app fixed color="purple darken-3" dark>
      <v-app-bar-nav-icon @click.stop="left = !left" />
      <v-toolbar-title>Aife</v-toolbar-title>
      <v-spacer />
      <v-switch v-model="$vuetify.theme.dark" primary label="Dark" />
      <v-icon v-if="$vuetify.theme.dark"> mdi-lightbulb </v-icon>
      <v-icon v-else> mdi-lightbulb-outline </v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="left" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Aife </v-list-item-title>
          <v-list-item-subtitle>
            Naviguer sur l'application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item in item.items"
            :key="item.title"
            link
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container data-app fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    left: false,
    items: [
      {
        title: "Vidéos",
        active: true,
        action: "mdi-video",
        items: [{ title: "Glitchs", icon: "mdi-bug", url: "/glitchs" }],
      },
      {
        title: "Events",
        active: true,
        action: "mdi-calendar",
        items: [
          {
            title: "Concours Dessin Septembre",
            icon: "mdi-draw",
            url: "/concours/dessins/2020-09",
          },
          {
            title: "Concours Dessin Décembre",
            icon: "mdi-draw",
            url: "/concours/dessins/2020-12",
          },
        ],
      },
      {
        title: "Twitch",
        active: true,
        action: "mdi-twitch",
        items: [
          { title: "Planning", icon: "mdi-calendar", url: "/planning" },
          { title: "Merci", icon: "mdi-heart", url: "/remerciements" },
          {
            title: "Commandes",
            icon: "mdi-book-open-outline",
            url: "/commandes",
          },
        ],
      },
    ],
  }),
}
</script>
