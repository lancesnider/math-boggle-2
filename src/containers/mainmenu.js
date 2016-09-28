import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clickPlay} from '../actions/index'
import MainMenu from '../components/MainMenu'

function mapStateToProps(state) {
	return {
		isPlaying: state.gameData.isPlaying
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({clickPlay: clickPlay}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
