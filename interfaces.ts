interface Student {
    id: number,
    name: string
}

const printStudentId = (student: Student) => {
    console.log(student.id)
    console.log(student.name)
}

let student = {id: 123, name: 'john'}
printStudentId(student)

