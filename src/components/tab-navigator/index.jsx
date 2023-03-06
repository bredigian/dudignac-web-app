import { BiInfoCircle } from "react-icons/bi"
import { IoFootballOutline } from "react-icons/io5"
import React from "react"
import { SlHome } from "react-icons/sl"
import TabNavigatorItem from "../tab-navigator-item/index"

const TabNavigator = ({ active }) => {
  return (
    <div className="sticky bottom-0 mx-auto w-tab p-4">
      <ul className="flex items-center justify-between">
        <TabNavigatorItem
          active={active}
          icon={<SlHome />}
          label="Home"
          route="/"
        />
        <TabNavigatorItem
          active={false}
          icon={<IoFootballOutline />}
          label="Matches"
          route="/matches"
        />
        <TabNavigatorItem
          active={active}
          icon={<BiInfoCircle />}
          label="About"
          route="/about"
        />
      </ul>
    </div>
  )
}

export default TabNavigator
