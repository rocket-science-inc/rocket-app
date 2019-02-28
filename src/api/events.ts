import { AxiosInstance } from "axios";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { $custom } from "./custom";
import { events } from "./store";

export interface IQueryArgs {
    count: number,
    page: number
};

class Events {

    constructor(
        private graphql: AxiosInstance
    ){};

    public query({page, count}:IQueryArgs):Promise<any> {
        return Promise.resolve(events).then(events => {
            return {
                count, page,
                next: events.length >= (page + 1) * count ? page + 1 : null,
                records: events.filter((item, index) => {
                    return index >= (page - 1) * count && index < page * count
                })
            }
        })
    };

    public getById(eventId:string) {
        return Promise.resolve(events).then(events => {
            return events.filter(({ id }) => {
                return id == eventId
                //return true
            })[0]
        })
    };

};

export const $events = new Events($custom);