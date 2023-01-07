import {StudentType} from "./student_type";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Roman',
        age: 28,
        isActive: false,
        address: {
            streetTitle: 'Novatorskaya 11',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: "React"
            },
            {
                id: 2,
                title: "HTML"
            },
            {
                id: 3,
                title: "CSS"
            }
        ]
    }
})

test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student,'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('Student should be change to isActive:true', ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('Does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Minsk')
    let result2 = doesStudentLiveIn(student, 'Moscow')

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})