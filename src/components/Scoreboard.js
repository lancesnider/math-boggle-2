import React, {Component} from 'react'
import T from 'i18n-react'

class Scoreboard extends Component {
  render() {
    return (
      <div><T.span text="menu.score" />{this.props.score}</div>
    )
  }
}

export default Scoreboard
