let userValue:any = 'Araf' as string;
userValue = 25;
userValue = [10,30,50];

console.log(userValue.toUpperCase());


let value:unknown = 'Toqi';
// value = [10,20];

if(typeof value === 'string'){
    console.log(value.toUpperCase());
}