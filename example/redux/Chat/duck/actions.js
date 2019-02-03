import types from "./types"

const messagesLoadedSuccess = (messages) => ({
	type: types.MESSAGES_LOAD,
	status: "success",
	payload: {
		messages
	},
})

const sendMessage = (message) => ({
	type: types.SEND_MESSAGE,
	status: "success",
	payload: {
		message
	},
})

const pendingMessage = (message) => ({
	type: types.PENDING_MESSAGE,
	status: "success",
	payload: {
		message
	},
})

export default {
	messagesLoadedSuccess,
	sendMessage,
	pendingMessage
}
