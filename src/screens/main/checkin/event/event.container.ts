import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CheckinEventScreen } from "./event.component";
import * as CheckinScreenOperations from "./../checkin.operations";

export const CheckinEventScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(CheckinScreenOperations, dispatch)
})(CheckinEventScreen);