import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CheckinListScreen } from "./list.component";
import * as CheckinScreenOperations from "./../checkin.operations";

export const CheckinListScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(CheckinScreenOperations, dispatch)
})(CheckinListScreen);