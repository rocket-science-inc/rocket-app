let initState = { data: [] };

export const NotificationsScreenReducer = (state:any = initState, action:any) => {
	switch (action.type) {
        case "ANY":
            return {...state, data: [1]}
		default:
			return state
	}
};