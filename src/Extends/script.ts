
interface animal{
    name:string
}

interface dog extends animal{
    legs:number
}

interface myDog extends dog{
    name:string
}

let myDogInfo:myDog;
myDogInfo = {
    name: 'puppy',
    legs:4
};

console.log(myDogInfo);