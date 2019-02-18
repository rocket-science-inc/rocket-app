import { EventsFiltersModalActions as actions } from "./events.filters.actions";

export interface IEventsFiltersModalOperations {
    applyFilters(filters): void
};

export const applyFilters = (filters) => {
    return (dispatch) => {
        dispatch(actions.applyFilters(filters))
    }
};

export const EventsFiltersModalOperations:IEventsFiltersModalOperations = {
    applyFilters
}