import { TYPES } from "@configs/types"

const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});

const eventLoaded = (event) => ({
    type: TYPES.EVENT_LOADED,
	status: "success",
	payload: { event }
});

export const EventScreenActions = {
    loading,
    eventLoaded
};