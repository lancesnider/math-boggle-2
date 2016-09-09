const defaultGameData = {
	isPlaying: false,
	score: 0,
	activeTiles: [],
	tileNumbers: [],
	equation: [],
	finishedEquations: []
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
				finishedEquations: []
			})

		case "CLICK_OPERATOR": 
			console.log(action.payload)
			return state

		default: 
			return state
	}
}
