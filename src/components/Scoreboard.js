import React from 'react'
import { connect } from 'react-redux'
// import { isPlaying } from '../actions'

const Scoreboard = ( {score} ) => {
	return (
		<div>
	    	Score: {score}
	    </div>	
	    )
}

// Scoreboard = connect()(isPlaying)

// Scoreboard.propTypes = {
// 	score: PropTypes.number
// }

export default Scoreboard
