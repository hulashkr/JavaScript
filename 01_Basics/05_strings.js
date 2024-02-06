const name = "hulash"
const repoCount = 10

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way to declare string
const myStr = new String("hulashkr");
console.log(myStr[0]);

// how to access prototype
console.log(myStr.__proto__);

console.log(myStr.length);
console.log(myStr.toUpperCase()); // HULASHKR
console.log(myStr); // [String: 'hulashkr']
console.log(myStr.charAt(4)); // s
console.log(myStr.indexOf('s')); // 4

const newStr = myStr.substring(0,3)
console.log(newStr); // hul

const anotherStr = myStr.slice(-8,3)
console.log(anotherStr); // hul


const newStr1 = "    hulash    "
console.log(newStr1);
console.log(newStr1.trim()); // remove whitespaces from both beginning and end 


const url = "https://hulash.com/hulash%20kumar"
console.log(url.replace('%20','-'));
console.log(url.includes('kumar'));

const gameName = "hulash-paritosh-babloo-ratnesh"
console.log(gameName.split('-'));