import { Event } from "@providers/event";
import * as Actions from "./events.list.actions";

export const getEvents = () => {
    return (dispatch) => {
        Event.all().then(events => {
            return dispatch(Actions.eventsLoaded(events))
        })
	}
    
}