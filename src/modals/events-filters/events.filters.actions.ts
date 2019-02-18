import { TYPES } from "@configs/types";

const loading = (loading) => ({
    type: TYPES.LOADING,
	status: "success",
	payload: { loading }
});

const applyFilters = (filters) => ({
	type: TYPES.FILTERS_APPLIED,
	status: "success",
	payload: { filters }
});

export const EventsFiltersModalActions = {
	loading,
	applyFilters
}