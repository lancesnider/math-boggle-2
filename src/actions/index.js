export const clickPlay = () => {
	return {
		type: 'CLICK_PLAY',
		payload: true
	}
}

export const gameOver = () => {
	return {
		type: 'GAME_OVER',
		payload: false
	}
}

export const clickOperator = (operatorClicked) => {
	return {
		type: 'CLICK_OPERATOR', 
		payload: operatorClicked
	}
}
