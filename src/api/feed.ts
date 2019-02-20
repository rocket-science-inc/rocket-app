import { AxiosInstance } from "axios";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { $custom } from "./custom";
import { events } from "./store";

export interface IQueryArgs {
    count: number,
    page: number
};

class Feed {

    constructor(
        private graphql: AxiosInstance
    ){};

    public query({count, page}:IQueryArgs):Promise<any> {
        return Promise.resolve(events).then(events => {
            return {
                count, page,
                next: events.length >= (page + 1) * count ? page + 1 : null,
                records: events.filter((item, index) => {
                    return index >= (page - 1) * count && index < page * count
                })
            }
        })
        // return this.graphql.get("", {
        //     params: {
        //         query: jsonToGraphQLQuery({
        //             query: {
        //                 feed: {
        //                     __args: args,
        //                     count: true,
        //                     page: true,
        //                     records: {
        //                         id: true,
        //                         title: true,
        //                         image: true,
        //                         location: { streetAddress: true }
        //                     }
        //                 }
        //             }
        //         })
        //     }
        // }).then(({data}) => data.data.feed)
    };

};

export const $feed = new Feed($custom);