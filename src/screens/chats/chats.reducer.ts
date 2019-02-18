import { TYPES } from "@configs/types";

let initState = {
	conversations: []
};

export const ChatsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload.loading}
        case TYPES.CONVERSATIONS_LOADED:
            return {...state, conversations: [...state.conversations, ...payload.conversations]}
		default:
			return state
	}
};