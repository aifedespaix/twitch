import G from "~/content/games"

const date_from = new Date("2020-01-18T00:00:00")
const date_to = new Date(date_from)
date_to.setDate(date_from.getDate() + 6)

export const Planning = {
  from: date_from,
  to: date_to,
  days: [
    {
      name: "Lundi",
      games: [
        {
          img: G.minish,
          from: 18,
          to: 24,
        },
      ],
    },
    {
      name: "Mardi",
      games: [
        {
          img: G.minish,
          from: 18,
          to: 24,
        },
      ],
    },
    {
      name: "Mercredi",
      games: [
        {
          img: G.botw,
          from: 15,
          to: 20,
        },
      ],
    },
    {
      name: "Jeudi",
      games: [
        {
          img: G.retro,
          from: 18,
          to: 24,
          more: "",
        },
      ],
    },
    {
      name: "Vendredi",
      games: [
        {
          img: G.chat,
          from: 18,
          to: 20,
        },
        {
          img: G.among,
          from: 20,
          to: 24,
        },
      ],
    },
    {
      name: "Samedi",
      games: [
        {
          img: G.off,
          from: null,
          to: null,
        },
      ],
    },
    {
      name: "Dimanche",
      games: [
        {
          img: G.free,
          from: 18,
          to: 24,
        },
      ],
    },
  ],
}
