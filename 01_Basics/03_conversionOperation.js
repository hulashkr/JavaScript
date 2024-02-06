let score1 = "87abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // NaN (Not a Number)

// // "87" => 87
// // "87abc" => NaN
// // ture => 1, false => 0
// // null => 0
// // undefined => NaN




let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

// // "" => false
// // "hulash" => true
// // 1 => true
// // 0 => false




let someNum = 33
let stringNum = String(someNum)
console.log(typeof stringNum); // string
console.log(stringNum); // 33


// **************** Operations ******************

let val = 3
let negVal = -val
console.log(negVal); // -3

console.log(3+2); // 5
console.log(3-2); // 1
console.log(3*2); // 6
console.log(3/2); // 1.5
console.log(3%2); // 1
console.log(3**2); // 9



let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3); // hello world



console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+"2"+4); // 124
console.log(1+"2"+"4"); // 124
console.log("1"+2+3); // 123
console.log(1+2+"3"); // 33

// Write clean code so that others can understand your thought process

console.log(true); // true
console.log(+true); // 1

console.log(+""); // 0


let num1,num2,num3
num1=num2=num3=2+2
console.log(num1);


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101
++gameCounter
console.log(gameCounter); // 102


let a=10
const b = a++;
console.log(a) // 11
console.log(b) // 10

let x=10
const y=++x
console.log(x); // 11
console.log(y); // 11



