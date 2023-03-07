import React from "react"

const PlayersItem = ({ player }) => {
  return (
    <tr>
      <td className="text-start text-xs">{player.name}</td>
      <td className="text-end text-xs">{player.position.name}</td>
    </tr>
  )
}

export default PlayersItem
