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
		type: 'CLICK_CALCULATOR',
		itemClicked: operatorClicked,
		tileClicked: operatorClicked
	}
}

export const clickOperand = (operandClicked, tileClicked) => {
	return {
		type: 'CLICK_CALCULATOR',
		itemClicked: operandClicked,
		tileClicked: tileClicked
	}
}

export const updateFeedback = (newFeedback) => {
	return {
		type: 'NEW_FEEDBACK',
		newFeedback: newFeedback
	}
}
