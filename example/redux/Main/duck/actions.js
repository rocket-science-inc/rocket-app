import types from "./types"

const saveLocation = (latitude, longitude) => ({
	type: types.LOCATION_UPDATED,
	status: "success",
	payload: {
		latitude,
		longitude
	}
})

const saveAddress = (address) => ({
	type: types.ADDRESS_UPDATED,
	status: "success",
	payload: {
		address
	}
})

const foundMatch = (user, interests, place) => ({
	type: types.FOUND_MATCH,
	status: "success",
	payload: {
		user,
		interests,
		place
	}
})

const updateNavigationDuration = (duration) => ({
	type: types.UPDATE_NAVIGATION_DURATION,
	status: "success",
	payload: {
		duration
	}
})

export default {
	saveLocation,
	saveAddress,
	foundMatch,
	updateNavigationDuration
}
