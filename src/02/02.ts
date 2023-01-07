
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentType>
    citizensNumber: number
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: {
        number: number
        street: {
            title: string
        }
    }
}

type GovernmentType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: {
        street: {
            title:string
        }
    }
}