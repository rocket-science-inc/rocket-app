import { combineReducers } from "redux"
import types from "./types"
import onboardingTypes from "../../Onboarding/duck/types"

let dataState = { interests: [], selectedInterests: [] };

const interests = (state = dataState, action) => {
	switch (action.type) {
		case types.GET_INTERESTS_SUCCESS:
			return Object.assign({}, state, { interests: action.payload.interests })
		case onboardingTypes.LOGOUT:
			return Object.assign({}, state, { selectedInterests: [] })
		case types.SELECT_INTEREST:
			let selectedInterests = [...state.selectedInterests]

			// Save the selected interest state
			if (selectedInterests.indexOf(action.payload.id) == -1) {
				selectedInterests.push(action.payload.id)
			} else {
				selectedInterests.splice(selectedInterests.indexOf(action.payload.id), 1)
			}
			return Object.assign({}, state, { selectedInterests: selectedInterests })
		default:
			return state
	}
}

const reducers = combineReducers({
	interests
})

export default reducers
