import { BiChevronDown } from "react-icons/bi"
import CardItem from "../card-item"
import { IoFootball } from "react-icons/io5"
import React from "react"

const MatchItem = ({ data, details }) => {
  const [showDetails, setShowDetails] = React.useState(false)
  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }
  return (
    <CardItem
      className={"flex flex-col items-center gap-2 ease-in-out duration-300"}
    >
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
      {details && (
        <BiChevronDown
          className={`text-lg ${showDetails && "rotate-180"}`}
          onClick={handleShowDetails}
        />
      )}
      {showDetails && (
        <div className="flex items-start justify-between gap-2 w-container">
          <div className="flex flex-col items-start">
            {data.team1.details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-2">
                <IoFootball />
                <p className="text-xs w-description">
                  {detail.player} {detail.time}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end">
            {data.team2.details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-2">
                <IoFootball />
                <p className="text-xs w-description">
                  {detail.player} {detail.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </CardItem>
  )
}

export default MatchItem
