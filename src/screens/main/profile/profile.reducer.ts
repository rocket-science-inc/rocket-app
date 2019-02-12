import { TYPES } from "@configs/types";

const initState = {
	loading: false,
	refreshing: false,
	count: 25,
	page: 1,
	next: null,
	records: []
};

export function ProfileScreenReducer (state:any = initState, { type, payload }) {
	switch (type) {
		case TYPES.FEED_LOADED:
			return {
				...state,
				records: [...state.records, ...payload.records],
				page: payload.page,
				next: payload.next
			};
		case TYPES.LOADING:
			return { ...state, ...payload };
		default:
			return state
	}
};