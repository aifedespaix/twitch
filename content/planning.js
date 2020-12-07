import G from "~/content/games"

const date_from = new Date("2020-12-07T00:00:00")
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
          img: G.tp,
          from: 18,
          to: 24,
        },
      ],
    },
    {
      name: "Mardi",
      games: [
        {
          img: G.hw,
          from: 18,
          to: 21,
        },
        {
          img: G.tp,
          from: 21,
          to: 24,
        },
      ],
    },
    {
      name: "Mercredi",
      games: [
        {
          img: G.botw,
          from: 14,
          to: 18,
        },
      ],
    },
    {
      name: "Jeudi",
      games: [
        {
          img: G.among,
          from: 18,
          to: 24,
        },
      ],
    },
    {
      name: "Vendredi",
      games: [
        {
          img: G.flippe,
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
          img: G["botw-y"],
          from: 18,
          to: 24,
        },
      ],
    },
  ],
}
