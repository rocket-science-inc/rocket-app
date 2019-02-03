import actions from "./actions"
import ApiService from "../services"
import { AsyncStorage } from "react-native"

const getMatchInterests = (userId) => {
	return async (dispatch) => {
		const interests = await ApiService.getMatchInterests(userId)

		return dispatch(actions.getMatchInterestsSuccess(interests))
	}
}

export default {
	getMatchInterests
}
