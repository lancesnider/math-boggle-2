import randomTileNumbers from './random-tile-numbers'
import checkUsedPatterns from './check-used-patterns'
import addToScore from './add-to-score'
import checkAdjacentTile from './check-adjacent-tile'
import checkEquation from './check-equation'
import checkEasyEquations from './check-easy-equations'

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
	equation: []
}

const gameOverGameData = {
	isPlaying: false,
	clickedTiles: [],
	equation: [],
	usedPatterns: []
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

			let equationWithNewOperand = [ ...state.equation, action.operatorClicked ]
			return Object.assign({}, state, {
				equation: equationWithNewOperand
			})
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
				return Object.assign({}, state, equationOverGameData)
			}

			// Don't allow easy equations, like multiplying by 0
			let easyEquationFeedback = checkEasyEquations(state.equation, action.operandClicked)
			if( easyEquationFeedback !== "" ) {
				return Object.assign({}, state, {
					...equationOverGameData,
					feedback: easyEquationFeedback
				})
			}

			let equationWithNewOperator = [ ...state.equation, action.operandClicked ]

			var checkedEquation = checkEquation(equationWithNewOperator)
			console.log(checkedEquation)
			if(checkedEquation == "pending"){
				return Object.assign({}, state, {
					clickedTiles: newClickedTiles,
					equation: equationWithNewOperator
				})
			}else if(checkedEquation == "correct"){
				var scoreData = addToScore(state.score, equation)
				return Object.assign({}, state, {
					...equationOverGameData,
					...scoreData,
					equation: equationWithNewOperator
				})
			}

			return Object.assign({}, state, {
				...equationOverGameData,
				feedback: checkedEquation
			})

		default:
			return state
	}
}
