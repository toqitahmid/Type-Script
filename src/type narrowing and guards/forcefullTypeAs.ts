let response:any = '42';
let numericLength:number = (response as string).length;
console.log(numericLength);

type Book = {
    name: string
};

let bookString = '{"name":"Hablu Programmer"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);