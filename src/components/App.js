import React from 'react'
import Scoreboard from '../containers/scoreboard'
import TimeTracker from '../containers/timetracker'
import MainMenu from '../containers/mainmenu'
import Calculator from '../containers/calculator'

const App = () => (
  <div className="App math-boggle">
    <TimeTracker />
    <Scoreboard />
    <MainMenu />
    <Calculator />
  </div>
)

export default App
