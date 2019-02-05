import { TYPES } from "@configs/types";

export const sampleAction = () => {

};

export const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});