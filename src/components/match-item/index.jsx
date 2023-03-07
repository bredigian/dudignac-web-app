import CardItem from "../card-item"
import React from "react"

const MatchItem = ({ data }) => {
  return (
    <CardItem className={"flex flex-col items-center gap-2"}>
      <div className="flex items-center justify-between w-container">
        <p className="italic text-xs">LUI - {data.day}</p>
        <p className="italic text-xs">{data.date}</p>
      </div>
      <div className="flex flex-row items-center justify-between w-container">
        <div className="flex flex-col items-center gap-2">
          <img className="w-logo" src={data.team1.img} alt={data.team1.name} />
          <p className="font-bold">{data.team1.name}</p>
        </div>
        <p className="font-bold text-base">
          {data.team1.goals} - {data.team2.goals}
        </p>
        <div className="flex flex-col items-center gap-2">
          <img className="w-logo" src={data.team2.img} alt={data.team2.name} />
          <p className="font-bold">{data.team2.name}</p>
        </div>
      </div>
    </CardItem>
  )
}

export default MatchItem
