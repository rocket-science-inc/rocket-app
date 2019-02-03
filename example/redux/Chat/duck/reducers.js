import { combineReducers } from "redux"
import types from "./types"
import onboardingTypes from "../../Onboarding/duck/types"

let dataState = { data: [] };

const messages = (state = dataState, action) => {
	switch (action.type) {
		case types.MESSAGES_LOAD:
			return Object.assign({}, state, { data: action.payload.messages })
		case types.PENDING_MESSAGE:
			return Object.assign({}, state, { data: [...state.data, action.payload.message] })
		case onboardingTypes.LOGOUT:
			return Object.assign({}, state, { data: [] })
		default:
			return state
	}
}

const reducers = combineReducers({
	messages
})

export default reducers
