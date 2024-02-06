// Based on how the datas are stored in memory and how they are accessed
// There are two types of data

// 1. Primitive
// 2. Non-primitive (Reference type)

// Primitive :-
// 7 types:
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

const userName = "hulash"
const score=100
const scoreVal=100.3
const isLoggedIn=false
const temperature=null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId); // false

const bigNum = 1236547896541236547n; // BigInt

// JavaScript is a dynamically typed language


// Reference (Non-primitive):-
// Array
// Objects
// Functions


// Array
const arr=[1,5,2,4,80]; 

// Object
let myObj = {
    name: "hulash",
    age: 21
}

// Function
const myFunc = function() {
    console.log("hello");
}


