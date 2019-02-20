import { TYPES } from "@configs/types";

let initState:IEventScreenState = {
	event: {},
	loading: false
};

export interface IEventScreenState {
	event: any,
	loading: boolean
};

export const EventScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload.loading};
        case TYPES.EVENT_LOADED:
            return {...state, event: payload.event}
		default:
			return state
	}
};