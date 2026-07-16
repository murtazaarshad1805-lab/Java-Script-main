// Java Script Execution Context

const { useContext } = require("react")

// Two Phase 
// 1. Global Executin Context
// 2. Functional Execution Context
// 3. Eval Execution Context     => Mongos 

let val1 = 10
let val2 = 20

function addNumber(num1, num2){
    let total = num1 + num2
    return total
}

let result = addNumber(val1, val2)
let result1 = addNumber(3, 4)

// console.log(`Result: ` , result , `, Result1: `, result1);

// 1. Global Execution Context                      
//     val1        -> undefined
//     val2        -> undefined
//     addNumber   -> Function Defination
//     result      -> undefined
//     result1     -> undefined











// ********************************************************************************************************************************
// Immediately Invoked Function Expression      (IIFE)

/* 
Why Use IIFE ?
    1. function imediatly excute and under the IIFE function variable create only access in IIFE function not the global side.
    2. Global variable pollution se bachna 
    3. Important Note: Every IIFE function close on semicolon (;). 
    4. Semicolon are not use end of function then ERROR and functon are not execute.
*/

// Syntax
// (function chai() {
//     console.log(`DB CONNECTING...`);                                        // NAMED IIFE FUNCTION
// })();

// ( () => {
//     console.log(`DB CONNECTED.`);                                           // UNNAMED IIFE FUNCTION
// })();

// ( (name) => {
//     console.log(`${name} DB CONNECTED SUCCESSFULLY. `);                     // IIFE FUNCTION USING PARAMETER
// })(`Murtaza`);



















