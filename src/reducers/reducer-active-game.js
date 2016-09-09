export default function (state=false, action) {
	switch(action.type) {
		case "CLICKED_PLAY": 
			return !action.payload
			break
	}
	return state
}
