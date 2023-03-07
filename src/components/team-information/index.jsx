import CardItem from "../card-item"
import React from "react"

const TeamInformation = () => {
  const teamInformation = {
    name: "Club Atlético y Social Dudignac",
    logo: "./assets/images/logo.png",
    nickname: "Dudi",
    born: "27 de Abril de 1924",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eveniet quas at odio iste, repudiandae delectus ratione nihil corrupti quis labore qui saepe, fuga optio facere atque suscipit aperiam? Necessitatibus!",
  }
  return (
    <CardItem className={"flex flex-col gap-4 items-center"}>
      <p className="text-base text-center">{teamInformation.name}</p>
      <p className="text-sm italic">{teamInformation.nickname}</p>
      <p className="text-xs font-bold">{teamInformation.born}</p>
      <p className="text-center italic">{teamInformation.description}</p>
    </CardItem>
  )
}

export default TeamInformation
