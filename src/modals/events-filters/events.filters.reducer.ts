import { TYPES } from "@configs/types";

let initState = {
	filters: {}
};

export const EventsFiltersModalReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload.loading}
		case TYPES.FILTERS_APPLIED:
			return {...state, filters: payload.filters}
		default:
			return state
	}
};