import Players from "../../components/players"
import React from "react"
import { TeamInformation } from "../../components"

const About = () => {
  return (
    <div className="flex flex-col gap-4 my-10 min-h-screen">
      <TeamInformation />
      <Players />
    </div>
  )
}

export default About
