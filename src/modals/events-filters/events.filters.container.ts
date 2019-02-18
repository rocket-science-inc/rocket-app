import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsFiltersModal } from "./events.filters.component";
import { EventsFiltersModalOperations } from "./events.filters.operations";

export const EventsFiltersLightboxContainer = connect((state:any, props:any) => {
	return {
		filters: state.eventsFilters
	}
}, (dispatch:any) => {
	return bindActionCreators(<any>EventsFiltersModalOperations, dispatch)
})(<any>EventsFiltersModal);