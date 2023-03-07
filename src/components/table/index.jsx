import CardItem from "../card-item/index"
import React from "react"

const Table = () => {
  const stats = ["team", "points", "played", "dif"]
  const teams = [
    {
      name: "Dudignac",
      points: 3,
      played: 1,
      won: 1,
      drawn: 0,
      lost: 0,
      goalsDiff: +5,
    },
    {
      name: "La Plata D",
      points: 0,
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsDiff: -5,
    },
    {
      name: "Azul B",
      points: 3,
      played: 1,
      won: 1,
      drawn: 0,
      lost: 0,
      goalsDiff: +2,
    },
    {
      name: "Coronel Dorrego",
      points: 3,
      played: 1,
      won: 1,
      drawn: 0,
      lost: 0,
      goalsDiff: +1,
    },
    {
      name: "Loberia",
      points: 1,
      played: 1,
      won: 0,
      drawn: 1,
      lost: 0,
      goalsDiff: 0,
    },
    {
      name: "Lincoln",
      points: 1,
      played: 1,
      won: 0,
      drawn: 1,
      lost: 0,
      goalsDiff: 0,
    },
    {
      name: "Quemú Quemú",
      points: 0,
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsDiff: -1,
    },
    {
      name: "General Madariaga",
      points: 0,
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsDiff: -2,
    },
  ]
  teams
    .sort((team1, team2) => team2.points - team1.points)
    .sort((team1, team2) => team2.goalsDiff - team1.goalsDiff)
  return (
    <CardItem>
      <table className="table-auto w-container">
        <thead>
          <tr>
            {stats.map((stat) => (
              <th
                className={`px-4 text-2xs text-primary ${
                  stat === "team" ? "text-start" : "text-center"
                }`}
                key={stat}
              >
                {stat.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.name}>
              <td className="text-2xs text-start text-primary">{team.name}</td>
              <td className="text-2xs text-center text-primary">
                {team.points}
              </td>
              <td className="text-2xs text-center text-primary">
                {team.played}
              </td>
              <td className="text-2xs text-center text-primary">
                {team.goalsDiff}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardItem>
  )
}

export default Table
