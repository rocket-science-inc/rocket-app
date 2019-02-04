import { helpers, image, lorem } from "faker";

const event = () => ({
    title: ((s) => s[0].toUpperCase() + s.slice(1))(lorem.words()),
    address: helpers.contextualCard().address,
    logo: image.avatar()
});

export class Event {

    static all():Promise<any[]> {
        return (() => {
            return Promise.resolve(new Array(10))
        })().then(events => {
            return events.fill(0)
        }).then(events => {
            return events.map(() => event())
        }).then(events => {
            console.log(events)
            return events
        })
    };

};