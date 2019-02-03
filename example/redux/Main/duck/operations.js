import actions from "./actions"
import FirebaseService from "../services"

const saveLocation = (latitude, longitude) => {
	return async (dispatch) => {
		return dispatch(actions.saveLocation(latitude, longitude))
	}
}

const saveAddress = (address) => {
	return async (dispatch) => {
		await FirebaseService.saveAddress(address)
		return dispatch(actions.saveAddress(address))
	}
}

const findMatch = (type, lat, lng, gender) => {
	return async (dispatch) => {
		const match = await FirebaseService.findMatchedUser(gender)
		const place = await FirebaseService.findNearbyPlace(type, lat, lng)
		return dispatch(actions.foundMatch(match.user, match.interests, place))
	}
}

const updateNavigationDuration = (duration) => {
	return (dispatch) => {
		return dispatch(actions.updateNavigationDuration(duration))
	}
}

export default {
	saveLocation,
	saveAddress,
	findMatch,
	updateNavigationDuration
}
