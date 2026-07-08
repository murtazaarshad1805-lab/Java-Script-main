// Primitive Data Types       (Call By Value)

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// 1. Number
let num = 42;
console.log(typeof num); // "number"

// 2. String
let str = "Hello, World!";
console.log(typeof str); // "string"

// 3. Boolean
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // "boolean"
console.log(typeof isFalse); // "boolean"

// 4. Undefined
let undefinedVar;
console.log(typeof undefinedVar); // "undefined"

// 5. Null
let nullVar = null;
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)

// 6. Symbol
let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId); // false (each Symbol is unique)
console.log(typeof id); // "symbol"
console.log(typeof anotherId); // "symbol"

// 7. BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // "bigint"


//_______________________________________________________________________________________________________________________________

// Non-Primitive Data Types        (Call By Reference)

// 1. Object
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // "object"

// 2. Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object" (arrays are a type of object in JavaScript)        

// 3. Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function / function object" (functions are a special type of object in JavaScript)

// 4. Date
let date = new Date();
console.log(typeof date); // "object"

// 5. RegExp
let regex = /ab+c/;
console.log(typeof regex); // "object"

// Summary of Data Types
console.log("Summary of Data Types:");
console.log("Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt");
console.log("Non-Primitive Data Types: Object, Array, Function, Date, RegExp");


/*

*** Important Note: *** 
JavaScript is a DYNAMICALLY typed language, which means that you don't have to declare the data type of a variable explicitly. 
The type is determined automatically based on the value assigned to the variable.

*/
