import { combineReducers } from "redux"
import types from "./types"
import settingsTypes from "../../Settings/duck/types"

let dataState = { matchInterests: null }

const userProfile = (state = dataState, action) => {
	switch (action.type) {
		case types.GET_MATCH_INTERESTS_SUCCESS:
			return Object.assign({}, state, { matchInterests: action.payload.interests })
		case settingsTypes.LOGOUT:
			return Object.assign({}, state, { matchInterests: null })
		default:
			return state
	}
}

const reducers = combineReducers({
	userProfile
})

export default reducers
