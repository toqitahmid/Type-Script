type Division = readonly [number, number];

const divide = (num1: number, num2: number): Division => {
    return [num2 / num1, num2%num1];
}

const result: Division = divide(5,20);
console.log(Array.isArray(result));
console.log(result);