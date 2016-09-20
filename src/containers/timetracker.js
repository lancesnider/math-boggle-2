import {connect} from 'react-redux'
import Timetracker from '../components/Timetracker'

function mapStateToProps(state) {
	return {
		isPlaying: state.gameData.isPlaying
	}
}

export default connect(mapStateToProps)(Timetracker)
