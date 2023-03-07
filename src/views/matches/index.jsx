import { MatchItem } from "../../components"
import React from "react"

const Matches = () => {
  const matches = [
    {
      id: 1,
      team1: {
        name: "Dudignac",
        img: "./assets/images/teams/dudignac.png",
        goals: 5,
        details: [
          {
            id: 1,
            player: "Keke",
            time: "10'",
          },
          {
            id: 2,
            player: "Keke",
            time: "20'",
          },
          {
            id: 3,
            player: "Keke",
            time: "30'",
          },
          {
            id: 4,
            player: "Gonzales",
            time: "60'",
          },
          {
            id: 5,
            player: "Vasco",
            time: "80'",
          },
        ],
      },
      team2: {
        name: "La Plata D",
        img: "./assets/images/teams/genericTeam.png",
        goals: 0,
        details: [],
      },
      date: "05/03/2023",
      day: "Fecha 1",
    },
  ]
  matches.sort((match1, match2) => match2.date - match1.date)
  return (
    <div className="flex flex-col gap-4 my-10 min-h-screen">
      {matches.map((match) => (
        <MatchItem key={match.id} data={match} details={true}></MatchItem>
      ))}
    </div>
  )
}

export default Matches
