<template>
  <div :class="isLargeScreen ? 'large' : 'square'" class="planning">
    <div class="header">
      <div class="delete">Planning de la semaine</div>
      <img
        class="logo"
        src="/planning-v2/logo_only_F-alpha.png"
        alt="Logo aife"
      />
      <div>Du {{ planning.from }} au {{ planning.to }}</div>
    </div>
    <div class="infos">
      <div class="day" :key="day.name" v-for="day in planning.days">
        <div class="dayName">{{ day.name }}</div>
        <div
          class="game"
          :style="gameStyle(game)"
          :key="id"
          v-for="(game, id) in day.games"
        >
          <div class="game_start">{{ game.from ? `${game.from}h` : "" }}</div>
          <div class="game_logo">
            <img :src="logo(game.img)" alt="" />
          </div>
          <div class="game_end">{{ game.to ? `${game.to}h` : "" }}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <a target="_blank" href="https://twitch.tv/aifedesglitch"
        >twitch.tv/aifedesglitch</a
      >
    </div>
  </div>
</template>

<script>
import { Planning } from "~/content/planning"

export default {
  layout: "clear",
  data: () => ({
    planning: Planning,
    isLargeScreen: false,
  }),
  methods: {
    logo(name) {
      return `/planning-v2/${name}.png`
    },
    banner(name) {
      return `/planning-v2/${name}.jpg`
    },
    gameStyle(game) {
      return {
        "background-image": `url(${this.banner(game.img)})`,
      }
    },
    onResize() {
      if (process.server) {
        this.isLargeScreen = false
      } else {
        this.isLargeScreen = window.innerWidth > window.innerHeight
      }
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener("resize", this.onResize)
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
.planning {
  width: 100%;
  height: 100%;
  background: linear-gradient(0.5turn, #028f4c, #1b4091);
  overflow: hidden;
  font-family: "Poppins";
  color: #fff;
  display: grid;
}

.game_logo img {
  object-fit: contain;
}

.day {
  position: relative;
  display: grid;
}

.header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem;
  }
}

.logo {
  width: 100px;
}

.infos {
  display: grid;
  grid-gap: 3px;
  max-width: 100vw;
}

.day {
  display: flex;
  :hover {
    filter: saturate(150%);
    .game {
      &_start,
      &_end {
        text-align: center;
        font-size: 3rem;
      }
    }
  }
}

.game {
  flex: 1;
  display: grid;
  justify-content: space-between;
  background-position: center center;
  background-size: cover;
  &_start,
  &_end {
    text-align: center;
    font-size: 2rem;
    text-shadow: #000 0 0 5px;
    padding: 0.5rem;
  }
  &_logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.large {
  grid-template-rows: auto 1fr auto;

  .infos {
    grid-template-columns: repeat(7, 1fr);
  }
  .day {
    grid-template-rows: auto 1fr;
    flex-direction: column;
  }
  .game {
    grid-template-rows: auto 1fr auto;

    &_logo {
      img {
        width: 100%;
      }
    }
  }

  .dayName {
    text-align: center;
  }
}

.square {
  .header {
    max-width: 100vw;
    .delete {
      display: none;
    }
    grid-template-columns: 1fr auto;
  }
  grid-template-rows: auto 1fr auto;

  .infos {
    grid-template-rows: repeat(7, 1fr);
  }
  .day {
    position: relative;
  }
  .game {
    grid-template-columns: auto 1fr auto;

    &_logo {
      img {
        height: 100px;
        max-width: 50vw;
      }
    }
  }
  .dayName {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    font-size: 1.5rem;
    padding: 0.5rem;
    text-shadow: #000 0 0 5px;
  }
}

.footer {
  text-align: center;

  a {
    font-size: 3rem;
    text-decoration: none;
    color: #fff !important;
  }
}
</style>
