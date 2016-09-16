import {combineReducers} from 'redux'
import GameDataReducer from './reducer-game-data'

const allReducers = combineReducers({
	gameData: GameDataReducer
})

export default allReducers
