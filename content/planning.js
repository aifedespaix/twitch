import G from "~/content/games"

const date_from = new Date("2020-02-22T00:00:00")
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
          img: G.off,
          from: 18,
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
          to: 24,
        },
      ],
    },
    {
      name: "Mercredi",
      games: [
        {
          img: G.smo,
          from: 15,
          to: 17,
        },
        {
          img: G.botw,
          from: 17,
          to: 20,
        },
      ],
    },
    {
      name: "Jeudi",
      games: [
        {
          img: G.smo,
          from: 18,
          to: 20,
        },
        {
          img: G.ww,
          from: 20,
          to: 24,
        },
      ],
    },
    {
      name: "Vendredi",
      games: [
        {
          img: G.smo,
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
