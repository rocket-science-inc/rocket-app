import actions from "./actions"
import FirebaseService from "../services"

const loadMessages = (request) => {
	return async (dispatch) => {
		const messages = await FirebaseService.loadMessages()
		return dispatch(actions.messagesLoadedSuccess(messages))
	}
}

const sendMessage = (message) => {
	return async (dispatch) => {
		// Quickly display the pending message in the UI
		dispatch(actions.pendingMessage(message))

		// Save the message in Firestore
		await FirebaseService.sendMessage(message)
		return dispatch(actions.sendMessage(message))
	}
}

export default {
	loadMessages,
	sendMessage
}
