import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HomeScreen } from "./home.component";
import * as HomeScreenOperations from "./home.operations";

export const HomeScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(HomeScreenOperations, dispatch)
})(HomeScreen);