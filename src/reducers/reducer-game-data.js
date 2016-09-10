import checkUsedPatterns from './check-used-patterns'
import checkEquation from './check-equation'

const defaultGameData = {
	isPlaying: false,
	score: 0,
	clickedTiles: [],
	tileNumbers: [],
	equation: [],
	usedPatterns: [],
	feedback: ""
}

const randomTileNumbers = () => {
	var randomNumbersArray = []
	for (var i = 0; i < 25; i++) {
		randomNumbersArray[i] = Math.floor(Math.random() * 10)
	}
	return randomNumbersArray
}

export default function (state=defaultGameData, action) {

	switch(action.type) {
		case "CLICK_PLAY":
			if(state.isPlaying === true) {
				return state
			}
			return Object.assign({}, state, {
				isPlaying: true,
				tileNumbers: randomTileNumbers()
			})

		case "GAME_OVER":
			if(state.isPlaying === false) {
				return state
			}
			return Object.assign({}, state, {
				isPlaying: false,
				activeTiles: [],
				equation: [],
				usedPatterns: []
			})

		case "CLICK_OPERATOR":
			// check if valid equation
			  // end operation
			  // give feedback
			// check if repeat
				// end operation
				// give feedback
			return state

		case "CLICK_OPERAND":

			// check to see if this is an adjacent tile
			// check equation
			// checkEquation(state.equation, action.operatorClicked)
				// if wrong
					// end operation
					// give feedback
			  // if pending
			  	// update equation
				// if correct
				  // check if used pattern
				  	// give feedback
				  // add score
						// give feedback
				  // end operation

			return state

		default:
			return state
	}
}
