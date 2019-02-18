import { TYPES } from "@configs/types";

export const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});

export const evetsLoaded = (events) => ({
	type: TYPES.EVENTS_LOADED,
	status: "success",
	payload: { ...events }
});