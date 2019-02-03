import actions from "./actions"
import AuthService from "../services"

const getInterests = () => {
	return async (dispatch) => {
		const response = await AuthService.getInterests()

		// TODO: Handle error
		return dispatch(actions.getInterestsSuccess(response))
	}
}

const selectInterest = (id) => {
	return (dispatch) => {
		return dispatch(actions.selectedInterest(id))
	}
}

const saveMyInterests = (userId, interests, selectedInterests) => {
	return async (dispatch) => {
		const myInterests = await AuthService.saveMyInterests(userId, interests, selectedInterests)
		if (myInterests.length > 0) {
			return dispatch(actions.saveMyInterests(myInterests))
		}
	}
}

export default {
	getInterests,
	selectInterest,
	saveMyInterests
}
