import { combineReducers } from "redux"
import types from "./types"
import interestTypes from "../../Interests/duck/types"
import mainTypes from "../../Main/duck/types"
import settingsTypes from "../../Settings/duck/types"

let dataState = { error: null, loggedIn: false, response: {}, myInterests: [], location: {} };

const auth = (state = dataState, action) => {
	switch (action.type) {
		case types.AUTH_FACEBOOK_SUCCESS:
			return Object.assign({}, state, { error: null, response: action.payload.response, loggedIn: true })
		case types.AUTH_FACEBOOK_FAIL:
			return Object.assign({}, state, { error: action.payload.error.message.replace("Error: ", ""), loggedIn: false })
		case settingsTypes.LOGOUT:
			return Object.assign({}, state, { error: null, response: {}, myInterests: [], location: {}, loggedIn: false })
		case types.GET_MY_INTERESTS_SUCCESS:
			return Object.assign({}, state, { myInterests: action.payload.myInterests })
		case interestTypes.SAVE_MY_INTERESTS:
			return Object.assign({}, state, { myInterests: action.payload.myInterests })
		case mainTypes.LOCATION_UPDATED:
			return Object.assign({}, state, { location: Object.assign({}, state.location, { latitude: action.payload.latitude, longitude: action.payload.longitude }) })
		case mainTypes.ADDRESS_UPDATED:
			return Object.assign({}, state, { location: Object.assign({}, state.location, { address: action.payload.address }) })
		default:
			return state
	}
}

const reducers = combineReducers({
	auth
})

export default reducers
