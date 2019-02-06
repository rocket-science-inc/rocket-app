import { TYPES } from "@configs/types";

let _state = { feed: [] };

export function HomeScreenReducer (state:any = _state, { type, payload }) {
	switch (type) {
        case TYPES.FEED_LOADED:
            return {...state, feed: [...state.feed, ...payload.feed] }
		default:
			return state
	}
};