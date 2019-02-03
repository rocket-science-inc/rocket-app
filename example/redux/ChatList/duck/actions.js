import types from "./types"

const conversationsLoadedSuccess = (conversations) => ({
	type: types.CONVERSATIONS_LOADED_SUCCESS,
	status: "success",
	payload: {
		conversations
	}
})

export default {
	conversationsLoadedSuccess
}
