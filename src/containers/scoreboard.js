import {connect} from 'react-redux'
import Scoreboard from '../components/Scoreboard'

function mapStateToProps(state) {
	return {
		score: state.gameData.score
	}
}

export default connect(mapStateToProps)(Scoreboard)
