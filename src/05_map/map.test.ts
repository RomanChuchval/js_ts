import {createGreetingMessages, PeopleType} from "./map";


let people: Array<PeopleType> = [
    {name: 'Roman Chuchval', age: 28},
    {name: 'Alex Nikonov', age: 31},
    {name: 'Victor Litvin', age: 33},
]

beforeEach(() => {
    people = [
        {name: 'Roman Chuchval', age: 28},
        {name: 'Alex Nikonov', age: 31},
        {name: 'Victor Litvin', age: 33},
    ]
})

test('Array shoul be contain greeting messages for every person', () => {

    const greetingMessages = createGreetingMessages(people)

    expect(greetingMessages.length).toBe(3)
    expect(greetingMessages[0]).toBe('Hello, Roman. Welcome to Incubator!')
    expect(greetingMessages[1]).toBe('Hello, Alex. Welcome to Incubator!')
    expect(greetingMessages[2]).toBe('Hello, Victor. Welcome to Incubator!')
})