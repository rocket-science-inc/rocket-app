import moment from "moment";

const format = (date:any, format:string):any => {
    return moment(date).format(format)
};

const day = (date:any):any => {
    return moment(date).day()
};

export const date = {
    format, day
};