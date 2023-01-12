
export type PeopleType = {
    name: string
    age: number
}

export const createGreetingMessages = (people:Array<PeopleType>) => {
    return people.map(p => `Hello, ${p.name.split(' ')[0]}. Welcome to Incubator!`)
}

