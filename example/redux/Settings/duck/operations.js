import actions from "./actions"

const logOut = () => {
	return async (dispatch) => {
		return dispatch(actions.logOut())
	}
}

const toggleInAppSounds = (value) => {
	return async (dispatch) => {
		return dispatch(actions.toggleInAppSounds(value))
	}
}

const toggleMessageLikes = (value) => {
	return async (dispatch) => {
		return dispatch(actions.toggleMessageLikes(value))
	}
}

export default {
	logOut,
	toggleInAppSounds,
	toggleMessageLikes
}
