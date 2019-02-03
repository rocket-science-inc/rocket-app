import types from "./types"

const authFacebookSuccess = (response) => ({
	type: types.AUTH_FACEBOOK_SUCCESS,
	status: "success",
	payload: {
		response
	}
})

const authFacebookFail = (error) => ({
	type: types.AUTH_FACEBOOK_FAIL,
	status: "fail",
	payload: {
		error
	}
})

const logOutFacebookSuccess = (response) => ({
	type: types.LOGOUT_FACEBOOK_SUCCESS,
	status: "success"
})

const getMyInterestsSuccess = (myInterests) => ({
	type: types.GET_MY_INTERESTS_SUCCESS,
	status: "success",
	payload: {
		myInterests
	}
})

export default {
	authFacebookSuccess,
	authFacebookFail,
	logOutFacebookSuccess,
	getMyInterestsSuccess
}
