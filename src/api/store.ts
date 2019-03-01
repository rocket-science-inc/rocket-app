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
        },
        agenda: new Array(random.number({
            min: 5,
            max: 20
        })).fill(0).map(() => {
            return {
                id: random.uuid(),
                speaker: {
                    ...helpers.userCard(),
                    avatar: image.avatar(),
                },
                description: lorem.paragraph(),
                title: ((s) => s[0].toUpperCase() + s.slice(1))(lorem.words()),
                startTime: ((_date) => {
                    return date.between(new Date(_date), new Date(_date + 259200000))
                })(new Date().getTime()).getTime(),
                endTime: ((_date) => {
                    return date.between(new Date(_date), new Date(_date + 259200000))
                })(new Date().getTime()).getTime()
            }
        })
    }
});