import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard'
import TimeTracker from './components/TimeTracker'

class App extends Component {
  render() {
    return (
      <div className="App math-boggle">
        <TimeTracker />
        <Scoreboard />
        <button className="button play green" disabled="true">Play</button>
        <div>
          <div className="feedback">
            <div className="hidden" >+10</div>
          </div>
          <div className="operands">
            <div>
              <div>
                <button className="button">0</button>
                <button className="button">9</button>
                <button className="button">7</button>
                <button className="button">0</button>
                <button className="button">1</button>
              </div>
            </div>
            <div>
              <div>
                <button className="button">1</button>
                <button className="button">7</button>
                <button className="button">8</button>
                <button className="button">7</button>
                <button className="button">6</button>
              </div>
            </div>
            <div>
              <div>
                <button className="button">6</button>
                <button className="button">6</button>
                <button className="button">9</button>
                <button className="button">4</button>
                <button className="button">3</button>
              </div>
            </div>
            <div>
              <div>
                <button className="button">3</button>
                <button className="button">6</button>
                <button className="button">2</button>
                <button className="button">0</button>
                <button className="button">4</button>
              </div>
            </div>
            <div>
              <div>
                <button className="button">8</button>
                <button className="button">7</button>
                <button className="button">6</button>
                <button className="button">9</button>
                <button className="button">5</button>
              </div>
            </div>
          </div>
          <div>
            <div className="operators">
              <button className="button">+</button>
              <button className="button">-</button>
              <button className="button">*</button>
              <button className="button">/</button>
              <button className="button">^</button>
            </div>
            <button className="button green equals">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
