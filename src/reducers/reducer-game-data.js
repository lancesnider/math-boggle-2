import randomTileNumbers from '../utils/random-tile-numbers'
import validateEquation from '../utils/validate-equation'

export const defaultGameData = {
	isPlaying: false,
	score: 0,
	clickedTiles: [],
	tileNumbers: [],
	equation: [],
	usedPatterns: [],
	feedback: ""
}

export const equationOverGameData = {
	clickedTiles: [],
	equation: []
}

const gameOverGameData = {
	isPlaying: false,
	clickedTiles: [],
	equation: [],
	usedPatterns: []
}

export default function (state=defaultGameData, action=-1) {

	switch(action.type) {
		case "CLICK_PLAY":
			if(state.isPlaying === true) {
				return state
			}
			return Object.assign({}, state, {
				isPlaying: true,
				score: 0,
				tileNumbers: randomTileNumbers()
			})

		case "GAME_OVER":
			if(state.isPlaying === false) {
				return state
			}
			return Object.assign({}, state, gameOverGameData)

		case "CLICK_CALCULATOR":
			let equationWithNewItem = [ ...state.equation, action.itemClicked ]
			return validateEquation(equationWithNewItem, state, action.tileClicked)

		case "NEW_FEEDBACK":
			return Object.assign({}, state, {
				feedback: action.newFeedback
			})

		default:
			return state
	}
}
