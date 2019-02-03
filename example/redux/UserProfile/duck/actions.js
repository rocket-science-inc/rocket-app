import types from "./types"

const getMatchInterestsSuccess = (interests) => ({
	type: types.GET_MATCH_INTERESTS_SUCCESS,
	status: "success",
	payload: {
		interests
	}
})

export default {
	getMatchInterestsSuccess
}
