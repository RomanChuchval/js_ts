import {StudentType} from "./student_type";

export const sum = (a:number, b:number) => {
    return a + b;
}
export const addSkill = (s:StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}