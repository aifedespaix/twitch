<template>
  <v-app id="inspire">
    <v-app-bar app fixed color="purple darken-3" dark>
      <v-app-bar-nav-icon @click.stop="left = !left"></v-app-bar-nav-icon>
      <v-toolbar-title>Aife Twitch</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="left" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Aife Twitch</v-list-item-title>
          <v-list-item-subtitle>Naviguer sur l'application</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container data-app>
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
      { title: "Accueil", icon: "mdi-home", url: "/" },
      { title: "Merci", icon: "mdi-heart", url: "/merci" },
      { title: "Commandes", icon: "mdi-help-box", url: "/commandes" },
    ],
  }),
};
</script>
