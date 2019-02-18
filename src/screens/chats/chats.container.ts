import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChatsScreen } from "./chats.component";
import * as ChatsScreenOperations from "./chats.operations";

export const ChatsScreenContainer = connect((state:any, props:any) => {
	return {
		conversations: state.chats.conversations
	}
}, (dispatch:any) => {
	return bindActionCreators(ChatsScreenOperations, dispatch)
})(<any>ChatsScreen);