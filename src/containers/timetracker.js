import React, {Component} from 'react'
import {connect} from 'react-redux'

class TimeTracker extends Component {
	render() {
		return (
			<div>Time Left: 157</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isPlaying: state.gameData.isPlaying
	}
}

export default connect(mapStateToProps)(TimeTracker)
