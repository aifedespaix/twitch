import G from "~/content/games"

const date_from = new Date("2020-01-25T00:00:00")
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
          img: G.oot,
          from: 18,
          to: 24,
        },
      ],
    },
    {
      name: "Mardi",
      games: [
        {
          img: G.oot,
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
          img: G.chat,
          from: 18,
          to: 21,
        },
        {
          img: G.smo,
          from: 21,
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
          img: G.flippe,
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
          to: 24,
        },
        {
          img: G.acnh,
          from: 18,
          to: 24,
        },
      ],
    },
  ],
}
