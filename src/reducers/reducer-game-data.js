import randomTileNumbers from './random-tile-numbers'
import checkUsedPatterns from './check-used-patterns'
import {checkEquation, checkAdjacentTile, checkEasyEquations} from './check-equation'

const defaultGameData = {
	isPlaying: false,
	score: 0,
	clickedTiles: [],
	tileNumbers: [],
	equation: [],
	usedPatterns: [],
	feedback: ""
}

const equationOverGameData = {
	clickedTiles: [],
	equation: [],
	feedback: ""
}

const gameOverGameData = {
	isPlaying: false,
	clickedTiles: [],
	equation: [],
	usedPatterns: [],
	feedback: ""
}

const resetEquation = (stateChanges) => {
	return {
		...stateChanges,
		...equationOverGameData
	}
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

			// Check that the tile clicked is adjacent to the last tile clicked
			let newClickedTiles = checkAdjacentTile(state.clickedTiles, action.tileClicked)
			if( newClickedTiles === [] ) {
				return resetEquation()
			}

			let easyEquationFeedback = checkEasyEquations(state.equation, action.operandClicked)
			if( easyEquationFeedback !== "" ) {
				return resetEquation(easyEquationFeedback)
			}

			let newEquation = [ ...state.equation, state.operandClicked ]




			return Object.assign({}, state, {
				clickedTiles: newClickedTiles
			})
			// check to see if this is an adjacent tile
				// if not
					// end operation
				// if so, add to clicked tiles array

			// check if multiply/divide by zero
			// if there's an = sign
			// checkEquation(state.equation, action.operandClicked)
				// if wrong
					// end operation
					// give feedback
			  // if pending
			  	// update equation
			  	// update clicked tiles
				// if correct
				  // check if used pattern
				  	// give feedback
				  // add score
						// give feedback
				  // end operation

			// return state

		default:
			return state
	}
}
