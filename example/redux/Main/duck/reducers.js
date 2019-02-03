import { combineReducers } from "redux"
import types from "./types"
import settingsTypes from "../../Settings/duck/types"

let dataState = { matchedPlace: {}, navigationDuration: null, matchedUser: null }

const main = (state = dataState, action) => {
	switch (action.type) {
		case types.FOUND_MATCH:
			return Object.assign({}, state, { matchedPlace: action.payload.place, matchedUser: action.payload.user, matchedInterests: action.payload.interests })
		case types.UPDATE_NAVIGATION_DURATION:
			return Object.assign({}, state, { navigationDuration: action.payload.duration })
		case settingsTypes.LOGOUT:
			return Object.assign({}, state, { matchedPlace: {}, navigationDuration: null, matchedUser: null })
		default:
			return state
	}
}

const reducers = combineReducers({
	main
})

export default reducers
