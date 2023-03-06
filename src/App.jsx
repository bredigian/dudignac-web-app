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
        <Route exact path="/" component={<Home />} />
        <Route exact path="/matches" component={<Matches />} />
        <Route exact path="/about" component={<About />} />
      </Routes>
      <TabNavigator />
    </RouterNavigator>
  )
}

export default App
