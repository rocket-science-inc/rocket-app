import { helpers, image, lorem, random, date, address } from "faker";

const event = () => ({
    id: random.uuid(),
    title: ((s) => s[0].toUpperCase() + s.slice(1))(lorem.words()),
    image: image.business(),
    start: date.future().getTime(),
    location: {
        streetAddress: address.streetAddress(),
        ...helpers.contextualCard().address
    }
});

export class Feed {

    static query():Promise<any> {
        return (() => {
            return Promise.resolve(new Array(10))
        })().then(events => {
            return events.fill(0)
        }).then(events => {
            return events.map(() => event())
        }).then(events => {
            return events
        })
    };

}