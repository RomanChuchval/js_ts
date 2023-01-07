import {CityType} from "../02/02";


export const cityBudgetChange = (s:CityType, balance:number, index:number) => {
    s.governmentBuildings[index].budget += balance
}

export function toHireStuff(building: CityType, staffToHire: number) {
    building.governmentBuildings[0].staffCount += staffToHire
}

export function toFireStuff(building: CityType, staffToFire: number) {
    building.governmentBuildings[1].staffCount -= staffToFire
}