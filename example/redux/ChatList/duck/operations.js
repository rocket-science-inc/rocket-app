import actions from "./actions"
import FirebaseService from "../services"

const loadConversations = (request) => {
	return async (dispatch) => {
		const conversations = await FirebaseService.loadConversations()
		return dispatch(actions.conversationsLoadedSuccess(conversations))
	}
}

export default {
	loadConversations
}
