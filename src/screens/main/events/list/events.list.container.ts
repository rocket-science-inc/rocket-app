import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsScreenListTab } from "./events.list.component";
import * as EventsScreenListTabActions from "./events.list.actions";

export const EventsScreenListTabContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenListTabActions, dispatch)
})(EventsScreenListTab);