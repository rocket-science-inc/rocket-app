let _state = { data: [] };

export function EventsScreenListTabReducer (state:any = _state, action:any) {
	switch (action.type) {
        case "ANY":
            return {...state, data: [1]}
		default:
			return state
	}
};