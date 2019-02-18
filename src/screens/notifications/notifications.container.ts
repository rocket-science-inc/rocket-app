import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NotificationsScreen } from "./notifications.component";
import * as NotificationsScreenOperations from "./notifications.operations";

export const NotificationsScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(NotificationsScreenOperations, dispatch)
})(NotificationsScreen);