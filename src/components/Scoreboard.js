import React, {Component} from 'react'

class Scoreboard extends Component {
  render() {
    return (
      <div>Score: {this.props.score}</div>
    )
  }
}

export default Scoreboard
