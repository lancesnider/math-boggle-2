import React, {Component} from 'react'
import imagePath from '../assets/instructions-correct.png'

class Instructions extends Component {
  render(){
    return (
      <div className="instructions">
        <h2>Instructions:</h2>
        <p>
          Find equations on the game board, like so:
        </p>
        <img src={imagePath} />
        <p>
          The longer the equation and the more difficult operators you use, the more points you'll earn.
        </p>
        <h3>Rules:</h3>
        <ul>
          <li>Each number you click needs to touch the previous number <span className="example">(for the equation <span className="code">1+2=3</span>, <span className="code">1</span> must touch <span className="code">2</span> and <span className="code">2</span> must touch <span className="code">3</span>)</span></li>
          <li>You need to remember the order of operations <span className="example">(<span className="code">1+3*2</span> equals <span className="code">7</span>, not <span className="code">8</span>)</span></li>
          <li>You can't multiply, divide, add to, or subtract from zero <span className="example">(bad: <span className="code">10*0=0</span>)</span></li>
          <li>There needs to be at least one operator to the left of the <span className="code">=</span> sign <span className="example">(bad: <span className="code">123=123</span>)</span></li>
          <li>Don't repeat equations, even if they're in a different order <span className="example">(<span className="code">1+2=3</span> is the same as <span className="code">3-1=3</span>)</span></li>
        </ul>
      </div>
    )
  }
}

export default Instructions
