import React, {Component} from 'react'
import T from 'i18n-react'

let totalTime = 99

class Timetracker extends Component {

  constructor(){
    super()
    this.state = {
      timeRemaining: totalTime
    }
  }

  startCountdown = () => {
    let intervalID = setInterval(this.countdown, 1000)
    this.setState({
      intervalID: intervalID,
      timeRemaining: totalTime
    })
  }

  countdown = () => {
    let newTimeRemaining = this.state.timeRemaining - 1
    console.log(newTimeRemaining)
    if(newTimeRemaining <= 0){
      this.setState({ timeRemaining: 0 })
      clearInterval(this.state.intervalID)
      this.props.gameOver()
    }else{
      this.setState({ timeRemaining: newTimeRemaining })
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isPlaying === true){
      this.startCountdown()
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalID)
  }

  render() {
    return (
      <div><T.span text="menu.timeLeft" />{this.state.timeRemaining}</div>
    )
  }
}

export default Timetracker
