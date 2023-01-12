import {CoursesType, ShoppingListType} from "./filter";

test('should be only mans who age < 56', () => {

    const ages = [18, 32, 56, 67, 100, 96, 44]

    const checkAge = ((age:number) => age < 56)
    const filteredArray = ages.filter(checkAge)

    expect(filteredArray.length).toBe(3)
})

test('array should be contain only courses that price < 150', () => {

    const courses: Array<CoursesType> = [
        {title: 'CSS', price: 100},
        {title: 'React', price: 136},
        {title: 'JS', price: 155},
    ]

    const checkPrice = ((course:CoursesType) => course.price < 150)

        const filteredCourses = courses.filter(checkPrice)

        expect(filteredCourses.length).toBe(2)
        expect(filteredCourses[0].title).toBe('CSS')
        expect(filteredCourses[1].title).toBe('React')
})

test('array should be contain only products was buy', () => {

    const shoppingList: Array<ShoppingListType> = [
        {product: 'milk', isBuy: true, price: 2},
        {product: 'salt', isBuy: false, price: 3},
        {product: 'oranges', isBuy: true, price: 6},
        {product: 'bread', isBuy: false, price: 2},
        {product: 'fish', isBuy: true, price: 9},
        {product: 'meat', isBuy: true, price: 12},
        {product: 'pepper', isBuy: false, price: 1},
    ]

    const filteredShoppingList = shoppingList.filter(el => el.isBuy)

    expect(filteredShoppingList.length).toBe(4)
    expect(filteredShoppingList[0].product).toBe('milk')
    expect(filteredShoppingList[3].product).toBe('meat')
})

test('array should be contain only products was not buy',() => {

    const shoppingList: Array<ShoppingListType> = [
        {product: 'milk', isBuy: true, price: 2},
        {product: 'salt', isBuy: false, price: 3},
        {product: 'oranges', isBuy: true, price: 6},
        {product: 'bread', isBuy: false, price: 2},
        {product: 'fish', isBuy: true, price: 9},
        {product: 'meat', isBuy: true, price: 12},
        {product: 'pepper', isBuy: false, price: 1},
    ]

    const filteredShoppingList = shoppingList.filter(el => !el.isBuy)

    expect(filteredShoppingList.length).toBe(3)
    expect(filteredShoppingList[0].product).toBe('salt')
    expect(filteredShoppingList[2].product).toBe('pepper')
})

test('array should be contain only products prices < 6',() => {

    const shoppingList: Array<ShoppingListType> = [
        {product: 'milk', isBuy: true, price: 2},
        {product: 'salt', isBuy: false, price: 3},
        {product: 'oranges', isBuy: true, price: 6},
        {product: 'bread', isBuy: false, price: 2},
        {product: 'fish', isBuy: true, price: 9},
        {product: 'meat', isBuy: true, price: 12},
        {product: 'pepper', isBuy: false, price: 1},
    ]

    const filteredShoppingList = shoppingList.filter(el => el.price < 6)

    expect(filteredShoppingList.length).toBe(4)
    expect(filteredShoppingList[0].product).toBe('milk')
    expect(filteredShoppingList[2].product).toBe('bread')
})