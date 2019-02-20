import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { EventScreen } from "./event.component";
import { EventScreenOperations } from "./event.operations";
import { IEventScreenProps } from "./event.component";
import { IEventScreenState } from "./event.reducer";

export const EventScreenContainer = connect((state:any, props:IEventScreenProps):(IEventScreenProps & IEventScreenState) => {
	return {
		id: props.id,
		title: props.title,
		event: state.event.event,
		loading: state.event.loading
	}
}, (dispatch:Dispatch) => {
	return bindActionCreators(EventScreenOperations, dispatch)
})(EventScreen);