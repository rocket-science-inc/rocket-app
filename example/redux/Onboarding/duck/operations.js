import actions from "./actions"
import AuthService from "../services"
import { AsyncStorage } from "react-native"

const authFacebook = (request) => {
	return async (dispatch) => {
		const response = await AuthService.getAuthFacebook(request)
		if (response.message && response.stack) {
			return dispatch(actions.authFacebookFail(response))
		}
		return dispatch(actions.authFacebookSuccess(response))
	}
}

const logOutFacebook = () => {
	return async (dispatch) => {
		AuthService.logOutFacebook()

		return dispatch(actions.logOutFacebookSuccess())
	}
}

const logOut = () => {
	return async (dispatch) => {
		await AsyncStorage.removeItem('userId');

		return dispatch(actions.logOutSuccess())
	}
}

const getMyInterests = (userId) => {
	return async (dispatch) => {
		const myInterests = await AuthService.getMyInterests(userId)

		// TODO: Handle error
		return dispatch(actions.getMyInterestsSuccess(myInterests))
	}
}

export default {
	authFacebook,
	logOutFacebook,
	logOut,
	getMyInterests
}
