import { TYPES } from "@configs/types";

export const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});

export const conversationsLoaded = (conversations) => ({
	type: TYPES.CONVERSATIONS_LOADED,
	status: "success",
	payload: { conversations }
});