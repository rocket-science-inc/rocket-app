import { TYPES } from "@configs/types";

export const eventsLoaded = (events) => ({
    type: TYPES.EVENTS_LOADED,
	status: "success",
	payload: { events }
});

export const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});