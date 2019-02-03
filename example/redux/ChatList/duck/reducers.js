import { combineReducers } from "redux"
import types from "./types"
import settingsTypes from "../../Settings/duck/types"

let dataState = { data: [] };

const conversations = (state = dataState, action) => {
	switch (action.type) {
		case types.CONVERSATIONS_LOADED_SUCCESS:
			return Object.assign({}, state, { data: action.payload.conversations })
		case settingsTypes.LOGOUT:
			return Object.assign({}, state, { data: [] })
		default:
			return state
	}
}

const reducers = combineReducers({
	conversations
})

export default reducers
