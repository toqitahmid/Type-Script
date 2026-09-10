type UserInfo = {
    id: number;
    email: string;
    password: string;
}

const users: UserInfo[] = [];
let lastId: number = 0;

const addUser = (email: string, password: string): UserInfo => {
    const user: UserInfo = {
        id: ++lastId,
        email,
        password,
    }
    users.push(user);
    return user;
}

addUser('araf@gmail.com', 'Araf-99@');
addUser('Toqi@gmail.com', 'Toqi-99@');

console.log(users)