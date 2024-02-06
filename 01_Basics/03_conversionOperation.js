let score1 = "87abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // NaN (Not a Number)

// "87" => 87
// "87abc" => NaN
// ture => 1, false => 0
// null => 0
// undefined => NaN




let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

// "" => false
// "hulash" => true
// 1 => true
// 0 => false




let someNum = 33
let stringNum = String(someNum)
console.log(typeof stringNum); // string
console.log(stringNum); // 33


