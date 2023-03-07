import { About, Home, Matches } from "./views"
import { Header, TabNavigator } from "./components"
import {
  Route,
  BrowserRouter as RouterNavigator,
  Routes,
} from "react-router-dom"

import React from "react"

const App = () => {
  return (
    <RouterNavigator>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/matches" element={<Matches />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <TabNavigator />
    </RouterNavigator>
  )
}

export default App
