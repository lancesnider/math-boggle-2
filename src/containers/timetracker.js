import {connect} from 'react-redux'
import Timetracker from '../components/Timetracker'
import {bindActionCreators} from 'redux'
import {gameOver} from '../actions/index'

function mapStateToProps(state) {
	return {
		isPlaying: state.gameData.isPlaying
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    gameOver: gameOver
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timetracker)
