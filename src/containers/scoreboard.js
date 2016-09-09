import React, {Component} from 'react'
import {connect} from 'react-redux'

class Scoreboard extends Component {
	render() {
		return (
			<div>Score: {this.props.score}</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		score: state.gameData.score
	}
}

export default connect(mapStateToProps)(Scoreboard)
