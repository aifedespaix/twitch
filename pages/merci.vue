<template>
  <v-card class="mx-auto">
    <v-card-title class="pb-0">
      Merci !
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-card-text class="text--primary">Merci à vous tous</v-card-text>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="thanks"
        class="elevation-1"
        :search="search"
        :items-per-page="10"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  head() {
    return this.$seo(
      "Merci à vous tous",
      "Je remercie l'ensemble de mes viewers contribuant financièrement à l'évolution de la chaîne !",
      "merci"
    );
  },
  async asyncData({ $content }) {
    const donationsList = await $content("donations").fetch();
    const work = {};

    donationsList.body.forEach((d) => {
      if (!d.Amount) {
        return;
      }
      const anonyme = "_anonyme";
      const name = d.Name ? d.Name : anonyme;
      if (!work[name]) {
        work[name] = {};
      }
      if (work[name].donations) {
        work[d.Name ? d.Name : anonyme].donations += parseFloat(
          d.Amount.split("€")[1],
          10
        );
      } else {
        work[d.Name ? d.Name : anonyme].donations = parseFloat(
          d.Amount.split("€")[1],
          10
        );
      }
    });

    const subscribersList = await $content("subscribers").fetch();
    subscribersList.body.forEach((s) => {
      if (!s.Name) {
        return;
      }
      if (!work[s.Name]) {
        work[s.Name] = {};
      }
      if (work[s.Name].subs) {
        work[s.Name].subs++;
      } else {
        work[s.Name].subs = 1;
      }
    });

    const thanks = [];
    for (const [key, value] of Object.entries(work)) {
      const subs = value.subs ? value.subs : 0;
      const donations = value.donations ? value.donations : 0;
      thanks.push({
        name: key,
        donations: donations ? `${donations} €` : "-",
        subs: subs,
        score: 5 * subs + donations,
      });
    }

    return {
      thanks: thanks.sort((a, b) => b.score - a.score),
    };
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Pseudo",
          align: "start",
          value: "name",
        },
        { text: "Dons", value: "donations" },
        { text: "Abonnements", value: "subs" },
      ],
    };
  },
};
</script>
 