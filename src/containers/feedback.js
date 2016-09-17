import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateFeedback} from '../actions/index'

class Feedback extends Component {

  constructor(){
    super()
    this.state = {
      timeouts: []
    }
  }

  componentWillReceiveProps(nextProps){
    this.clearTimeouts()
    let newTimeout = setTimeout(this.setVisibility, 1000)
    this.setState({
      timeouts: [newTimeout]
    })
  }

  setVisibility = (visibility) => {
    this.props.updateFeedback("")
    this.clearTimeouts()
  }

  clearTimeouts = () => {
    for(let timeout of this.state.timeouts) {
      clearInterval(timeout)
    }
    this.setState({
      timeouts: []
    })
  }

  render(){
    return (
      <div className="feedback">
        <div>{this.props.feedback}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    feedback: state.gameData.feedback
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateFeedback: updateFeedback}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
