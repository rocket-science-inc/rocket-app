import { TYPES } from "@configs/types";

let _state = {
	events: []
};

export function EventsScreenListTabReducer (state:any = _state, {type, payload}) {
	switch (type) {
		case TYPES.EVENTS_LOADED:
            return {...state, events: payload.events}
		default:
			return state
	}
};