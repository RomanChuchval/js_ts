export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type TechType = {
    id: number
    title: string
}

