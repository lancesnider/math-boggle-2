
//import {tileClicked} from './actions'

const initialState = {
  isPlaying: false,
  score: 10, 
  tileNumbers: [],
  activeTiles: [],
  equation: []
}

function mathBoggle(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_PLAYING':
			return action.isPlaying
		case 'ADD_TO_EQUATION':
			return action.newEquationItem
		case 'TILE_CLICKED':
			return action.tile
		default:
			return state
	}
}

export default mathBoggle
