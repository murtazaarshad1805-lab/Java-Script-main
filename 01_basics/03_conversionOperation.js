let score = "Abc";
let score1 = "33abc";
let score2 = "33";
let score3 = null;
let score4 = true;
let score5 = false;
let score6 = undefined;

//console.log(typeof score);              
//console.log(typeof (score));            

let valueInNumber = (Number(score))     
//console.log(typeof valueInNumber)       

// convert string to number
// score => valueInNumber (NaN)
// score1 => valueInNumber (NaN)
// score2 => valueInNumber (33)
// score3 => valueInNumber (0)
// score4 => valueInNumber (1)
// score5 => valueInNumber (0)
// score6 => valueInNumber (NaN)

//console.log(valueInNumber)   



// Boolean conversion
let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "abc" => true
// null => false
// undefined => false


// String conversion
let somenumber = 33;
let stringSomeNumber = String(somenumber);
//console.log(stringSomeNumber)                   // "33"
//console.log(typeof stringSomeNumber)            // string



// ******************************** Opeartions ++++++++++++++++++++++++++++++++++

let number = 3
let negativeNumber = -number

// console.log(number)             // 3
// console.log(negativeNumber)     // -3
// console.log(number + 3)         // 6

// console.log(2 + 3)              // 5 
// console.log(2 - 3)              // -1 
// console.log(2 * 3)              // 6 
// console.log(2 ** 3)             // 8 
// console.log(2 / 3)              // 0.6666666666666666 
// console.log(2 % 3)              // 2   


let value = 2
let newvalue = 4
// console.log(value + newvalue)   // 6

// console.log(1 + 2)   // 3
// console.log("1" + 2)   // "12"
// console.log(1 + "2")   // "12"
// console.log("1" + "2")   // "12"
// console.log(1 + 2 + "3")   // "33"
// console.log("1" + 2 + 3)   // "123"
// console.log((1 + 2) - (3 - 4))   // -9


let num = 4
num++
console.log(num)   // 5

let num1 = 4
++num1
console.log(num1)   // 5
