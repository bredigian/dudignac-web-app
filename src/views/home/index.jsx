import { MatchItem, NewsItem, Table } from "../../components"

import React from "react"

const Home = () => {
  const lastNews = {
    title: "Dudignac puso primera con el pie derecho...",
    description:
      "El rojiblanco derrotó 5-0 a La Plata D en el debut de la Liga Universitaria del Interior.",
    img: "./assets/images/news/lastNews.jpg",
  }
  const lastMatch = {
    team1: {
      name: "Dudignac",
      img: "./assets/images/teams/dudignac.png",
      goals: 5,
    },
    team2: {
      name: "La Plata D",
      img: "./assets/images/teams/genericTeam.png",
      goals: 0,
    },
    date: "05/03/2023",
    day: "Fecha 1",
  }
  return (
    <div className="flex flex-col gap-4 my-10 min-h-screen">
      <NewsItem news={lastNews} />
      <MatchItem data={lastMatch} />
      <Table />
    </div>
  )
}

export default Home
