import React, {Component} from 'react'
import T from 'i18n-react'

class Timetracker extends Component {
  render() {
    return (
      <div><T.span text="menu.timeLeft" />157</div>
    )
    // on when it hits zero, run gameOver()
  }
}

export default Timetracker
