// Two types of Objects Decleration: Literal / Constructor
// Singleton => Create a object through Contructor is called Sigelton Object 
// Object.create // Syntax of singleton object  


// Literal Object

const mySym = Symbol("Key1")            // Interview Question: create Symbol and access on a object way as a key

const objUser = {
    name: "Murtaza",
    "full name": "Muhammad Murtaza",
    [mySym]: "MyKey1",
    age: "22",
    email: "murtaza@gmail.com",
    location: "Lahore",
    isLloggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}                

// Two Types of Onject Access

console.log(objUser.email);                     // First Type 
console.log(objUser["email"]);                  // Second Type and Best Way 
console.log(objUser["full name"]);
console.log(objUser.mySym);                     // Run this line and Print the symbol Value but answer is undefined.
console.log(objUser[mySym]);                    // This way is correct to print the Symbol Value.


objUser.email = "ali123@gmail.com"
Object.freeze(objUser)
console.log(objUser);
objUser.email = "raza123@gmail.com"
console.log(objUser["email"]);


objUser.greetingOne = function() {
    console.log("Hello JS user ");
}

console.log(objUser.greetingOne);                   // Not the Function Exicute , only Funtion Reference 

objUser.greetingTwo = function() {
    console.log(`Hello JS User : ${this["full name"]}`);
}

console.log(objUser.greetingOne());
console.log(objUser.greetingTwo());