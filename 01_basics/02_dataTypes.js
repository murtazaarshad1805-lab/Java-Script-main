"use strict"; //treat all JS code as newer version

//alert(3 + 3); // we are using nodejs, not Browser and we can use alert to show a pop up message.

console.log(3 + 3) 
console.log("Ali")

// Data Types in JavaScript
// 1. Primitive Data Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

let name = "Ali"                // Type: String
let age = 25                    // Type: Number
let isStudent = true            // Type: Boolean , true or false
let address = null              //  Null (Type: Object) , StandAlone value that represents "no value" or "empty"
let phoneNumber = undefined     // Type: Undefined , A variable that has been declared but not assigned a value
let uniqueId = Symbol("id")     // Type: Symbol, A unique identifier
let bigNumber = 1234567890123456789012345678901234567890n    // BigInt

console.log(name, age, isStudent, address, phoneNumber, uniqueId, bigNumber);
console.table({name, age, isStudent, address, phoneNumber, uniqueId, bigNumber});
console.table([name, age, isStudent, address, phoneNumber, uniqueId, bigNumber]);
console.table([typeof name, typeof age, typeof isStudent, typeof address, typeof phoneNumber, typeof uniqueId, typeof bigNumber]);


// 2. Non-Primitive Data Types: Object (Arrays, Functions, Objects)


// Object (Person)
let person = { 
    name: "Raza",
    age: 21,
    isStudent: false,
    address: null,
    phoneNumber: undefined,
    uniqueId: Symbol("id"),
    bigNumber: 1234567890123456789012345678901234567890n
}
console.log(person);


// Array (Numbers)
let numbers = [1, 2, 3, 4, 5] 
console.log(numbers);   


// Function (Greet)
let greet = function() {
    console.log("Hello, World!");
}
greet();

