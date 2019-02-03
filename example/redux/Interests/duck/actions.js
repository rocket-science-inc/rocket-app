import types from "./types"

const getInterestsSuccess = (interests) => ({
	type: types.GET_INTERESTS_SUCCESS,
	status: "success",
	payload: {
		interests
	}
})

const selectedInterest = (id) => ({
	type: types.SELECT_INTEREST,
	status: "success",
	payload: {
		id
	}
})

const saveMyInterests = (myInterests) => ({
	type: types.SAVE_MY_INTERESTS,
	status: "success",
	payload: {
		myInterests
	}
})

export default {
	getInterestsSuccess,
	selectedInterest,
	saveMyInterests
}
