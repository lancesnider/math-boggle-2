import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clickOperator, clickOperand} from '../actions/index'
import Calculator from '../components/Calculator'

function mapStateToProps(state) {
  return {
    tileNumbers: state.gameData.tileNumbers,
    clickedTiles: state.gameData.clickedTiles
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clickOperator: clickOperator,
    clickOperand: clickOperand
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Calculator)
