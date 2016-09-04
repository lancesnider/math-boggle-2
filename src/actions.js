/*

	isPlaying
		toggle is playing
	equation
		add to equation 
			validate
	score
			add to score
	activeTiles
		tileClicked
			active all tiles
			deactivate all tiles

*/

export const togglePlaying = (isPlaying) => {
	return {
		type: 'TOGGLE_PLAYING',
		isPlaying
	}
}

export const addToEquation = (newEquationItem) => {
	return {
		type: 'ADD_TO_EQUATION',
		newEquationItem
	}
}

export const tileClicked = (tile) => {
	return {
		type: 'TILE_CLICKED',
		tile
	}
}
