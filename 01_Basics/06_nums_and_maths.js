const score = 400
console.log(score); // 400

const balance = new Number(100.3)
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100.3
console.log(typeof balance.toString()); // string
console.log(balance.toString().length); // 5
console.log(balance.toFixed(2)); // 100.30

const otherNum = 13.8967
console.log(otherNum.toPrecision(3)); // 13.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ********************** MATHS **************************

console.log(Math); // Object [Math] {}
console.log(Math.abs(-8)); // 8
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.2)); // 4
console.log(Math.min(4,2,8,9,15,5,21)); // 2
console.log(Math.max(4,2,8,9,15,5,21)); // 21

console.log(Math.random()); // prints random value between [0,1]
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min)


