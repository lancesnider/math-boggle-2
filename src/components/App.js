import React from 'react'
import Scoreboard from '../containers/scoreboard'
import TimeTracker from '../containers/timetracker'
import MainMenu from '../containers/mainmenu'
import Calculator from '../containers/calculator'
import Feedback from '../containers/feedback'
import Instructions from './Instructions'

const App = () => (
  <div className="App math-boggle">
    <div className="game-info">
      <TimeTracker />
      <Scoreboard />
    </div>
    <Feedback />
    <MainMenu />
    <Calculator />
    <Instructions />
  </div>
)

export default App
