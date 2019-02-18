import { TYPES } from "@configs/types";

let initState = { records: [] };

export const EventsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
        case TYPES.EVENTS_LOADED:
            return {...state, records: [...state.records, ...payload.records]}
		default:
			return state
	}
};