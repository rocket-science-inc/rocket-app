import * as actions from "./profile.actions";
import { $feed, IQueryArgs } from "@api/feed";

export interface IHomeScreenOperations {
    loadFeed(params:IQueryArgs): Promise<any>
};

export const loadFeed = (params:IQueryArgs) => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => $feed.query(params))
            .then((feed) => dispatch(actions.feedLoaded(feed)))
            .then(() => dispatch(actions.loading(false)))
            .catch(console.log)
    }
}