import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsScreenListTab } from "./events.list.component";
import * as EventsScreenListTabOperations from "./events.list.operations";

export const EventsScreenListTabContainer = connect((state:any, props:any) => {
	return {
		events: state.eventsList.events
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenListTabOperations, dispatch)
})(EventsScreenListTab);