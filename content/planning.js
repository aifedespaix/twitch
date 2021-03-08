import G from "~/content/games"

const date_from = new Date("2020-03-08T00:00:00")
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
          img: G.ww,
          from: 18,
          to: 22,
        },
        {
          img: G.layton,
          from: 22,
          to: 24,
        },
      ],
    },
    {
      name: "Mardi",
      games: [
        {
          img: G.ww,
          from: 18,
          to: 22,
        },
        {
          img: G.layton,
          from: 22,
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
          img: G.ww,
          from: 18,
          to: 21,
        },
        {
          img: G.botw,
          from: 21,
          to: 24,
        },
      ],
    },
    {
      name: "Vendredi",
      games: [
        {
          img: G.botw,
          from: 18,
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
          img: G.ssbu,
          from: 18,
          to: 21,
        },
        {
          img: G.acnh,
          from: 21,
          to: 24,
        },
      ],
    },
  ],
}
