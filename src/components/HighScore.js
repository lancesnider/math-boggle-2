import React, {Component} from 'react'
import T from 'i18n-react'

class HighScore extends Component {
  render() {
    return (
      <div><T.span text="menu.highScore" />{this.props.highScore}</div>
    )
  }
}

export default HighScore
