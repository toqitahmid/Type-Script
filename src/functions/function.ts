
// let greetFun : (name:string) => string;
// greetFun = function(name:string) : string{

//     return `Hello ${name}`;
// }
// console.log(greetFun('Araf'));


function logInfo (name:string, sem:string, id?:string):string{
    return `${name} ${sem} ${id? id:''}`;
}

console.log(logInfo('Araf','5th','94'));
console.log(logInfo('Sams','5th',));

// default params 

function display(name:string, age:number = 21):void{
    console.log(name, age);
}

display('Toqi', 20);
display('Toqi');