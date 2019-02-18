import { AxiosInstance } from "axios";
import { image, lorem, name, date } from "faker";
import { $custom } from "./custom";

const conversations = new Array(20).fill(0).map(() => {
    return {
        avatar: image.avatar(),
        lastMessageText: lorem.sentences(),
        fullName: `${name.findName()}`,
        lastMessageTime: new Date(date.past()).getTime()
    }
});

class Messages {

    constructor(
        private graphql: AxiosInstance
    ){};

    public conversations():Promise<any> {
        return Promise.resolve(conversations);
    };

};

export const $messages = new Messages($custom);