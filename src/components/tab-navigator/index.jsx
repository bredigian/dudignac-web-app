import React, { useState } from "react"

import { BiInfoCircle } from "react-icons/bi"
import { IoFootballOutline } from "react-icons/io5"
import { SlHome } from "react-icons/sl"
import TabNavigatorItem from "../tab-navigator-item/index"

const TabNavigator = () => {
  const [active, setActive] = useState("Home")
  const handleActive = (label) => {
    setActive(label)
  }
  return (
    <div className="sticky bottom-0 mx-auto w-tab p-4">
      <ul className="flex items-center justify-between">
        <TabNavigatorItem
          icon={<SlHome />}
          label="Home"
          route="/"
          active={active === "Home"}
          handleActive={handleActive}
        />
        <TabNavigatorItem
          icon={<IoFootballOutline />}
          label="Matches"
          route="/matches"
          active={active === "Matches"}
          handleActive={handleActive}
        />
        <TabNavigatorItem
          icon={<BiInfoCircle />}
          label="About"
          route="/about"
          active={active === "About"}
          handleActive={handleActive}
        />
      </ul>
    </div>
  )
}

export default TabNavigator
