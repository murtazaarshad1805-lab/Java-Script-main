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


// ************************************************************************************************************************

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


// ************************************************************************************************************************
// Two Types of Memories 

// Stack Memory and Heap Memory

// Stack Memory: 
// Used for static memory allocation, stores primitive data types and function calls. 
// It has a limited size and is faster to access.

// Heap Memory: 
// Used for dynamic memory allocation, stores non-primitive data types (objects, arrays, functions). 
// It has a larger size and is slower to access compared to stack memory.

let user = "Ali";              // Storing a primitive data type (string) in stack memory

let otherUser = user;          // Copying the value of 'user' to 'otherUser' (Call By Value)
console.log(user);             // Output: "Ali" (original value remains unchanged)
console.log(otherUser);        // Output: "Ali" (new value assigned to 'otherUser')

otherUser = "Raza";            // Changing the value of 'otherUser'

console.log(user);             // Output: "Ali" (original value remains unchanged)
console.log(otherUser);        // Output: "Raza" (new value assigned to 'otherUser')


let userDetais = {                      // Storing a non-primitive data type (object) in heap memory
    username: "Fahad",
    userAge: 25
};                                      

let otherUserDetails = userDetais;      // Copying the reference of 'userDetais' to 'otherUserDetails' (Call By Reference)
console.log(userDetais);                // Output: { username: "Fahad", userAge: 25 } (original object remains unchanged)
console.log(otherUserDetails);          // Output: { username: "Fahad", userAge: 25 } (new reference points to the same object)

otherUserDetails.username = "Ali";     // Changing the value of 'username' property in 'otherUserDetails'
console.log(otherUserDetails);          // Output: { username: "Ali", userAge: 25 } (new reference points to the same object)
console.log(userDetais);               // Output: { username: "Ali", userAge: 25 } (original object is changed because both references point to the same object)
