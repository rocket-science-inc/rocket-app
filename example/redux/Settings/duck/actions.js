import types from "./types"

const logOut = () => ({
	type: types.LOGOUT,
	status: "success"
})

const toggleInAppSounds = (value) => ({
	type: types.TOGGLE_IN_APP_SOUNDS,
	status: "success",
	payload: {
		value
	}
})

const toggleMessageLikes = (value) => ({
	type: types.TOGGLE_MESSAGE_LIKES,
	status: "success",
	payload: {
		value
	}
})

export default {
	logOut,
	toggleInAppSounds,
	toggleMessageLikes
}
