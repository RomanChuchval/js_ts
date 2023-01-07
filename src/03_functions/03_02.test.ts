import {CityType} from "../02/02";
import {cityBudgetChange, toFireStuff, toHireStuff} from "./03_02";

let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test('budget should be added to HOSPITAL', () => {

    cityBudgetChange(city, 100000, 0)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('budget should be added to FIRE-STATION', () => {

    cityBudgetChange(city, -100000, 1)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('staff should be Hire to Hospital', () => {

    toHireStuff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('staff should de decreases to Fire-station', () => {

    toFireStuff(city, 300)
    expect(city.governmentBuildings[1].staffCount).toBe(700)
})