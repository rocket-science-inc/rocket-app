import { combineReducers } from "redux"
import types from "./types"

let dataState = {
	in_app_sounds_enabled: true,
	message_likes_enabled: false	
}

const settings = (state = dataState, action) => {
	switch (action.type) {
		case types.TOGGLE_IN_APP_SOUNDS:
			return Object.assign({}, state, { in_app_sounds_enabled: action.payload.value })
		case types.TOGGLE_MESSAGE_LIKES:
			return Object.assign({}, state, { message_likes_enabled: action.payload.value })
		default:
			return state
	}
}

const reducers = combineReducers({
	settings
})

export default reducers
