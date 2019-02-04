import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SampleScreen } from "./sample.component";
import * as SampleScreenActions from "./sample.actions";

export const SampleScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(SampleScreenActions, dispatch)
})(SampleScreen);