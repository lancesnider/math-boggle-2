import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clickPlay} from '../actions/index'

class MainMenu extends Component {
	render() {
		return (
			<button 
				onClick={() => this.props.clickPlay()}
				className="button play green" 
				disabled={this.props.isPlaying}
			>Play</button>
		)
	}
}

function mapStateToProps(state) {
	return {
		isPlaying: state.gameData.isPlaying
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({clickPlay: clickPlay}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MainMenu)
