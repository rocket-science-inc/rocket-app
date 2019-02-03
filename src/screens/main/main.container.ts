import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainScreen } from "./main.component";
import * as MainScreenActions from "./main.actions";

export const MainScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(MainScreenActions, dispatch)
})(MainScreen);