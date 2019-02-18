import moment from "moment";

const format = (date:any, format:string):any => {
    return moment(date).format(format)
};

export const date = {
    format
};