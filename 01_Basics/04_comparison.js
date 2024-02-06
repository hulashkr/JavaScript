console.log(5>2); // true
console.log(5<2); // false
console.log(5>=2); // true
console.log(5<=2); // false
console.log(5==2); // false
console.log(5!=2); // true


console.log("5" > 2); // true
console.log("05" > 2); // true

// when you compare any two values, make sure that data type is same for both


console.log(null>0); // false
console.log(null>=0); // true
console.log(null<0); // false
console.log(null<=0); // true
console.log(null==0); // false
console.log(null!=0); // true

// the reason is that an equality check == and comparisons
// >,<,>=,<= work differently 
// comparisons convert null to a number, treating it as 0
// that's why null>=0 is true and null>0 is false


console.log(undefined>0); // false
console.log(undefined>=0); // false
console.log(undefined<0); // false
console.log(undefined<=0); // false
console.log(undefined==0); // false
console.log(undefined!=0); // true


// strict check (===)
console.log("2"==2); // true
console.log("2"===2); // false