type User = {
    name:string;
    age:number;
};

let user1 :User;
let user2 :User;

user1 = {
    name:'Araf',
    age:21,
}
user2 = {
    name:'Toqi',
    age:16,
}

const logUserInfo = (user:User):void =>{
    console.log(`${user.name} is ${user.age} years old.`);
}

logUserInfo(user1)
logUserInfo(user2)