import React from "react"

const CardItem = ({ children, className }) => {
  return (
    <div className={`${className} w-card mx-auto p-4 rounded-base shadow-lg`}>
      {children}
    </div>
  )
}

export default CardItem
