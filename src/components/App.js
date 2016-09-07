import React, { Component } from 'react';
import Scoreboard from '../containers/scoreboard'
import TimeTracker from '../containers/timetracker'
import MainMenu from '../containers/mainmenu'
import Calculator from '../containers/calculator'

class App extends Component {
  render() {
    return (
      <div className="App math-boggle">
        <TimeTracker />
        <Scoreboard />
        <MainMenu />
        <Calculator />
      </div>
    );
  }
}

export default App;
