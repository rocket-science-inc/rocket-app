import { AxiosInstance } from "axios";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { $custom } from "./custom";

export interface IQueryArgs {
    count: number,
    page: number
};

class Feed {

    constructor(
        private graphql: AxiosInstance
    ){};

    public query(args:IQueryArgs):Promise<any> {
        return this.graphql.get("", {
            params: {
                query: jsonToGraphQLQuery({
                    query: {
                        feed: {
                            __args: args,
                            count: true,
                            page: true,
                            records: {
                                id: true,
                                title: true,
                                image: true,
                                location: { streetAddress: true }
                            }
                        }
                    }
                })
            }
        }).then(({data}) => data.data.feed)
    };

};

export const $feed = new Feed($custom);