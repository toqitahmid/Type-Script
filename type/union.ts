type Identify = number | string;
let personInfo: Identify;



const showInfo = (info: number | string): number|string => {
    if (typeof info === 'string') {
        return `user pass his name ${info}`;
    }
    else {
        return `user pass his age ${info}`;
    }
}
personInfo = 'Araf';
console.log(showInfo(personInfo));
personInfo = 30;
console.log(showInfo(personInfo));
