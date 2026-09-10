type ProductData = [number, number];
const item: ProductData = [15, 20];
item.push(30);
// console.log(item);


type UserData = readonly [number, string];
const user1: UserData = [110, "Araf"];
// user1.push(220);
console.log(user1);
