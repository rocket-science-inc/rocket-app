import { random, image, lorem, date, address, helpers } from "faker";

export const events = new Array(50).fill(0).map(() => {
    return {
        id: random.uuid(),
        title: ((s) => s[0].toUpperCase() + s.slice(1))(lorem.words()),
        image: image.business(),
        start: date.future().getTime(),
        details: `${lorem.paragraphs()}\n\n${lorem.paragraphs()}\n\n${lorem.paragraphs()}`,
        location: {
            streetAddress: address.streetAddress(),
            ...helpers.contextualCard().address
        }
    }
});