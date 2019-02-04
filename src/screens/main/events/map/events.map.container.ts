import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsScreenMapTab } from "./events.map.component";
import * as EventsScreenMapTabActions from "./events.map.actions";

export const EventsScreenMapTabContainer = connect((state:any, props:any) => {
	return {
		// userId: state.authReducers.auth.response.uid,
		// messages: state.chatReducers.messages.data
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenMapTabActions, dispatch)
})(EventsScreenMapTab);