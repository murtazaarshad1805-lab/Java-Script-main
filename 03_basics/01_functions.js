function myName() {
    console.log("Muhammad");
    console.log("Murtaza");
    console.log("Arshad");
}

// myName                                                   // Function Reference
// myName()                                                 // Function Exicution


// function addTwoNumber(num1, num2) {                         // (num1, num2) => Is called Parameter 
//     console.log(num1 + num2);
// }


function addTwoNumber(num1, num2) {                         // (num1, num2) => Is called Parameter 
    // let result = num1 + num2
    // return result
    return num1 + num2
} 

const result = addTwoNumber(3,97)                                           // (3,4) => Is called Arguments
console.log("Result: " , result);



function loginUserMessage(username) {
    if (!username) {
        return console.log("Please enter a Username.");
    } 
    return `${username} is loged In`;
}
console.log(loginUserMessage("Murtaza"));                               // Print: Murtaza is loged In
console.log(loginUserMessage(""));                                      // Print:   is loged In
console.log(loginUserMessage());                                        // Print: undefined is loged In




