
const add = (x:number, y:number):number => {
    return x+y;
};
const sub = (x:number, y:number):number => {
    return x-y;
};
const multiply = (x:number, y:number):number => {
    return x*y;
};
const division = (x:number, y:number):number => {
    if(y === 0){
        throw new Error(`Can't divide by zero(${y})`);
    }
    else{

        return x/y;
    }
};

const power = (x:number, exponent: number = 2) => {
    return Math.pow(x,exponent);
}

const operations = (operator:string, x:number, y:number) => {
    switch(operator){
        case '+': return add(x,y);
        case '-': return sub(x,y);
        case '*': return multiply(x,y);
        case '/': return division(x,y);
        case 'pow': return power(x,y);
        default: console.log(`Invalide operator!`);
    }
}

console.log(operations('+',2,3));
console.log(operations('-',2,3));
console.log(operations('*',2,3));
console.log(operations('/',2,1));
console.log(operations('pow',2,5));
console.log(operations('/',2,0));