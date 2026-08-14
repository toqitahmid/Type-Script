//using union with user defined data types
let approval : 'reject' | 'pending' | 'approved' = 'pending';
console.log(approval);
approval = 'reject';
console.log(approval);

let airLineSeat: 'aisle' | 'middle' | 'window' = 'window';
console.log(airLineSeat);


let orders = [10,20,30,40,50]; 
let currentValue : number | undefined;
//avoid any to use undefined with union

for(let order of orders){
    if(order === 30){
        currentValue = order;
        break;
    }
    currentValue = 10;
}
console.log(currentValue);