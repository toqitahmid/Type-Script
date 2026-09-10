let numbers: number[] = [10, 20, 30, 40, 50];
let names: string[] = ['Araf', 'Toqi', 'Tahmid'];

const showValue = <T>(vlaue: T): T => {
    return vlaue;
}

console.log(showValue(numbers[0]))
console.log(showValue(names[0]))