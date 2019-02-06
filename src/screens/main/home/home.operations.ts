import * as actions from "./home.actions";
import { Feed } from "@providers/feed";

export const loadFeed = () => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => Feed.query())
            .then((feed) => dispatch(actions.feedLoaded(feed)))
            .then(() => dispatch(actions.loading(false)))
            .catch(() => {})
    }
}