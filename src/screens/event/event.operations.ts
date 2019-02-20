import { ActionCreatorsMapObject } from "redux";
import { EventScreenActions as actions } from "./event.actions";
import { $events } from "@api/events";

const getEvents = (id:string) => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => $events.getById(id))
            .then((event) => dispatch(actions.eventLoaded(event)))
            .then(() => dispatch(actions.loading(false)));
    }
};

export interface IEventScreenOperations {
    getEvents(id:string): void
};

export const EventScreenOperations:(ActionCreatorsMapObject & IEventScreenOperations) = {
    getEvents
};