import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsScreen } from "./events.component";
import * as EventsScreenActions from "./events.actions";

export const EventsScreenContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenActions, dispatch)
})(EventsScreen);