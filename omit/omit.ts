type Student = {
    id: number;
    email: string;
    password: string;
}

const students: Student[] = [];
let currId = 0;

const addStudent = (student: Omit<Student, "id">): Student => {

    const newStudent: Student = {
        id: ++currId,
        ...student,
    }
    students.push(newStudent);
    return newStudent;
}

addStudent({email:'araf@gmail.com', password: 'Araf-99@'});
addStudent({email:'Toqi@gmail.com', password: 'Toqi-99@'});

console.log(students)

