import moment from "moment";

export class Date {

    static format(date:any, format:string):any {
        return moment(date).format(format)
    };

}