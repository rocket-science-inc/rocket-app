const initState = {
	checkedin: false
};

export function CheckinScreenReducer (state:any = initState, action:any) {
	switch (action.type) {
        case "ANY":
            return {...state, data: [1]}
		default:
			return state
	}
};