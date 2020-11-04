<template>
  <div class="main">
    <div class="titlec">Planning du 02/11 au 08/11</div>
    <div />
    <div class="flex-center">Lundi</div>
    <div class="flex-center">Mardi</div>
    <div class="flex-center">Mercredi 15h/20h</div>
    <div class="flex-center">Jeudi</div>
    <div class="flex-center">Vendredi</div>
    <div class="flex-center">Samedi</div>
    <div class="flex-center">Dimanche</div>

    <div class="planning">
      <div
        v-for="game in planning"
        :key="game.day + game.infos.name"
        :style="gameStyle(game)"
        class="game"
      >
        <v-img class="logo" :src="`/planning/${game.infos.name}-logo.png`" />
      </div>
    </div>

    <div class="flex-top">18h</div>
    <div class="flex-top">19h</div>
    <div class="flex-top">20h</div>
    <div class="flex-top">21h</div>
    <div class="flex-top">22h</div>
    <div class="flex-top">23h</div>
    <!-- <div class="tournoi flex-center">Tournois du Dimanche</div>
    <div
      v-for="tournament in tournaments"
      :key="tournament.message"
      :style="tournamentStyle(tournament)"
      class="game flex-center tournament"
    >
      {{ tournament.message }}
    </div> -->
  </div>
</template>

<script>
const games = {
  botw: {
    name: "botw",
  },
  botwlol: {
    name: "botwlol",
  },
  horror: {
    name: "horror",
  },
  botwx: {
    name: "botwx",
  },
  sunshine: {
    name: "sunshine",
  },
  fallguys: {
    name: "fallguys",
  },
  roboquest: {
    name: "roboquest",
  },
  mariokart: {
    name: "mariokart",
  },
  blairwitch: {
    name: "blairwitch",
  },
  ssbu: {
    name: "ssbu",
  },
  off: {
    name: "off",
  },
  free: {
    name: "libre",
  },
  horizon: {
    name: "horizon",
  },
  acnh: {
    name: "acnh",
  },
  amongus: {
    name: "amongus",
  },
  nintendologie: {
    name: "nintendologie",
  },
  smo: {
    name: "odyssey",
  },
  chat: {
    name: "chat",
  },
  trackmania: {
    name: "trackmania",
  },
  undertale: {
    name: "undertale",
  },
  hitman: {
    name: "hitman",
  },
  mars: {
    name: "mars",
  },
  skyrim: {
    name: "skyrim",
  },
  chathorror: {
    name: "chathorror",
  },
  mm: {
    name: "mm",
  },
  halflife: {
    name: "halflife",
  },
  halflife2: {
    name: "halflife2",
  },
}

export default {
  layout: "clear",
  data: () => ({
    tournaments: [
      {
        message: "Off Air",
        start: 2,
        end: 9,
        infos: games.off,
      },
      // {
      //   message: "Mario Kart 8 de 14h à 15h",
      //   start: 2,
      //   end: 5,
      //   infos: games.mariokart,
      // },
      {
        // message: "?",
        message: "Tournois de 15h à 17h",
        // message: "ANNULÉ",
        start: 2,
        end: 9,
        // infos: games.ssbu,
        infos: games.ssbu,
      },
    ],
    planning: [
      { day: 1, infos: games.mm, start: 1, duration: 6 },

      { day: 2, infos: games.halflife2, start: 1, duration: 6 },

      { day: 3, infos: games.free, start: 1, duration: 2 },
      { day: 3, infos: games.botw, start: 3, duration: 3 },

      { day: 4, infos: games.amongus, start: 1, duration: 6 },

      { day: 5, infos: games.horror, start: 1, duration: 6 },

      { day: 6, infos: games.off, start: 1, duration: 6 },

      { day: 7, infos: games.free, start: 1, duration: 6 },
    ],
  }),
  methods: {
    gameStyle(game) {
      return {
        "grid-column": game.day,
        "grid-row": `${game.start} / ${game.start + game.duration}`,
        "background-image": this.background(game),
      }
    },
    tournamentStyle(tournament) {
      return {
        "grid-column": `${tournament.start} / ${tournament.end}`,
        "grid-row": 9,
        "background-image": this.background(tournament, "-h"),
      }
    },
    background(game, suffix = "") {
      return `url(/planning/${game.infos.name}${suffix}.jpg)`
    },
    time(h) {
      return h < 24 ? h : h - 24
    },
  },
  head() {
    return {
      ...this.$seo(
        "Planning de la semaine",
        "Retrouve le planning de la semaine de ma chaîne Twitch",
        "planning"
      ),
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Poppins:wght@1,500;1,900&display=swap",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1b4091, #028f4c);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto repeat(6, 1fr);
  font-family: "Poppins";
  color: #fafafa;
  text-align: center;
  font-size: 1.6rem;

  .titlec {
    grid-column: span 8;
    text-align: center;
    font-size: 3rem;
  }

  .planning {
    grid-column: 2 / 9;
    grid-row: 3 / 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 2px;
  }
  .game {
    position: relative;
    background-size: cover;
    background-position: center center;
    margin-bottom: 3px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 18px 6px rgba(255, 255, 255, 0.75);
    }
  }
  .logo {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-top {
    display: flex;
    justify-content: center;
  }
  .tournoi {
    grid-column: 1;
    grid-row: 9;
  }
  .tournament {
    color: #ffffff;
    background: #ece9e9;
    font-weight: bold;
    text-shadow: #000 5px 5px, #000 2px 2px, #000 1px 1px, #000 3px 3px,
      #000 4px 4px;
    background-size: cover;
    background-position: center center;
  }
}
</style>
