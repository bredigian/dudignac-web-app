import CardItem from "../card-item"
import PlayersItem from "../players-item"
import React from "react"

const Players = () => {
  const columns = [
    {
      id: 1,
      name: "Nombre",
    },
    {
      id: 2,
      name: "Posición",
    },
  ]
  const players = [
    {
      name: "Gianluca Bredice",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Dante Battista",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Daniel Gutierrez",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Leonel Filoni",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Diego Colman",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Sergio Damian Armesto",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Fernando Yarza",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Facundo Longarini",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Nahuel Garcia",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Nicolas Marti",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Tomas Primiani",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Mariano Lobosco",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Leandro Martinelli",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Agustin Gonzales",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Mirco Battista",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Alejandro Marquez",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Javier Ivan Torres",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Jesus Marcharoli",
      position: {
        id: 1,
        name: "Arquero",
      },
    },
    {
      name: "Valentin Zega",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Federico Ciani",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Pedro Ferreiro",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Felipe Castro",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Martin Oviedo",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Felix Venche",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Santino Meli",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Bautista Monjada",
      position: {
        id: 3,
        name: "Mediocampista",
      },
    },
    {
      name: "Juan Lorenzo Battista",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Guillermo Gatti",
      position: {
        id: 1,
        name: "Arquero",
      },
    },
    {
      name: "Ezequiel Carou",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Martin Farias",
      position: {
        id: 4,
        name: "Delantero",
      },
    },
    {
      name: "Emilio Fabiano",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Aurelio Huacán",
      position: {
        id: 1,
        name: "Arquero",
      },
    },
    {
      name: "Tomas Corti",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Rodrigo Ibarrola",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
    {
      name: "Justo Venezia",
      position: {
        id: 2,
        name: "Defensor",
      },
    },
  ]
  players.sort((player1, player2) => player1.position.id - player2.position.id)
  console.log(players)
  return (
    <CardItem className={"flex flex-col items-center gap-2"}>
      <h2 className="text-center font-bold text-base">Jugadores</h2>
      <table className="w-container">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className={column.name === "Nombre" ? "text-start" : "text-end"}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <PlayersItem player={player} />
          ))}
        </tbody>
      </table>
    </CardItem>
  )
}

export default Players
