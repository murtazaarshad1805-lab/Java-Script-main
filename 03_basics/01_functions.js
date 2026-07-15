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

// Three Dots (...) is called Spread
// Three Dots (...) is called rest

function calculateCardPrice(...num1) {
    return num1
}
console.log(calculateCardPrice(100, 200, 300, 400, 500));                   // Aswer: [ 100, 200, 300, 400, 500 ]

function cardPriceCalculate(val1, val2, ...num1) {
    return num1
}
console.log(cardPriceCalculate(100, 200, 300, 400, 500));                   // Aswer: [ 300, 400, 500 ]

const user = {
  userName: "Muhammad Murtaz",
  price: 566,
};

function userDetails(anyObject) {
    console.log(`My name is ${anyObject.userName} and price is ${anyObject.price}.`);
}
userDetails(user);
userDetails({
  userName: "Ali Raza",
  price: 7856
});


const myNewArray = [5, 10, 15, 20, 25]

function arrayVallues(anyArray){
  return anyArray[2]
}

console.log(arrayVallues(myNewArray));
console.log(arrayVallues([10, 20, 30, 40, 50]));