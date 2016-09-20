import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateFeedback} from '../actions/index'
import Feedback from '../components/Feedback'

function mapStateToProps(state){
  return {
    feedback: state.gameData.feedback
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateFeedback: updateFeedback}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
