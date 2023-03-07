import CardItem from "../card-item/index"
import React from "react"

const NewsItem = ({ news }) => {
  const { title, description, img } = news
  return (
    <CardItem className={"flex flex-col items-center gap-2"}>
      <img className="rounded-base" src={img} alt={title} />
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-bold text-xs">{title}</h3>
        <p className="text-center italic text-2xs">{description}</p>
      </div>
    </CardItem>
  )
}

export default NewsItem
