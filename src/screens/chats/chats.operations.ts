import * as actions from "./chats.actions";
import { $messages } from "@api/messages";

export interface IChatsScreenOperations {
    getConversations(): void
};

export const getConversations = () => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => $messages.conversations())
            .then((conversations) => dispatch(actions.conversationsLoaded(conversations)))
            .then(() => dispatch(actions.loading(false)))
            .catch(console.log)
    }
};