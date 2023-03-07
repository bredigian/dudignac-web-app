import { NavLink } from "react-router-dom"
import React from "react"

const TabNavigatorItem = ({ route, label, icon, active, handleActive }) => {
  return (
    <NavLink
      to={`${route}`}
      onClick={() => handleActive(label)}
      className={`flex flex-col p-2 border border-primary rounded-mid items-center w-tabIcon h-tabIcon grid place-items-center ${
        active ? "bg-primary" : "bg-secondary"
      }`}
    >
      <div
        className={`text-base ${active ? "text-terciary" : "text-secondary"}`}
      >
        {icon}
      </div>
      <p className={`text-2xs ${active ? "text-terciary" : "text-secondary"}`}>
        {label}
      </p>
    </NavLink>
  )
}

export default TabNavigatorItem
