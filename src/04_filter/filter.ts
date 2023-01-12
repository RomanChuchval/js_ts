const ages = [18, 32, 56, 67, 100, 96, 44]

const checkAge = (age: number) => {
    return age < 56
}


export type CoursesType = {
    title: string
    price: number
}
const courses: Array<CoursesType> = [
    {title: 'CSS', price: 100},
    {title: 'React', price: 136},
    {title: 'REACT', price: 155},
]

const checkPrice = (course: CoursesType) => {
    return course.price < 150
}

export type ShoppingListType = {
    product: string
    isBuy: boolean
    price: number
}

const shoppingList: Array<ShoppingListType> = [
    {product: 'milk', isBuy: true, price: 2},
    {product: 'salt', isBuy: false, price: 3},
    {product: 'oranges', isBuy: true, price: 6},
    {product: 'bread', isBuy: false, price: 2},
    {product: 'fish', isBuy: true, price: 9},
    {product: 'meat', isBuy: true, price: 12},
    {product: 'pepper', isBuy: false, price: 1},
]