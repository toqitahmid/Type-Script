type Student = {

    name : string,
    id : number,
    semester : string,
    mark : number[],
    info: [string, number, boolean]
}

const student1: Student = {
    name: 'Araf',
    id: 94,
    semester: '5th',
    mark: [80,90,95],
    info:['Araf',94,true]
}

function logInfo(student: Student):void {
console.log(`Name: ${student.name}`);
console.log(`Id: ${student.id}`);
console.log(`Semester: ${student.semester}`);
console.log(`Marks: ${student.mark}`);
console.log(`Info: ${student.info}`);
}; 

logInfo(student1);