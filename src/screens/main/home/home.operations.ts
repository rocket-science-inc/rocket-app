import * as actions from "./home.actions";

export const getFeed = () => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => {
                console.log(123)
            }).catch(() => {})
    }
}