import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateFeedback} from '../actions/index'

class Feedback extends Component {

  componentWillReceiveProps(nextProps){
    setTimeout(this.setVisibility, 1000)
  }

  setVisibility = (visibility) => {
    this.props.updateFeedback("")
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
