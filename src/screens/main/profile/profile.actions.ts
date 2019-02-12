import { TYPES } from "@configs/types";

export const sampleAction = () => {

};

export const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});

export const feedLoaded = (feed) => ({
	type: TYPES.FEED_LOADED,
	status: "success",
	payload: { ...feed }
});