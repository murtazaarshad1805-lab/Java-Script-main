// ****************** Comparison Operators ***************************

console.log(5 > 3);                 // true
console.log(5 < 3);                 // false
console.log(5 >= 3);                // true
console.log(5 <= 3);                // false
console.log(5 == 3);                // false
console.log(5 != 3);                // true
console.log(5 === 3);               // false
console.log(5 !== 3);               // true   

console.log("5" > 3);               // true
console.log("05" > 3);              // true
console.log("5" < 3);               // false
console.log("5" >= 3);              // true
console.log("5" <= 3);              // false
console.log("5" == 3);              // false
console.log("5" != 3);              // true
console.log("5" === 3);             // false
console.log("5" !== 3);             // true

console.log("5" > "3");             // true
console.log("5" < "3");             // false
console.log("5" >= "3");            // true
console.log("5" <= "3");            // false
console.log("5" == "3");            // false
console.log("5" != "3");            // true
console.log("5" === "3");           // false
console.log("5" !== "3");           // true   


console.log(null > 0);              // false
console.log(null < 0);              // false
console.log(null >= 0);             // true
console.log(null <= 0);             // true
console.log(null == 0);             // false
console.log(null != 0);             // true
console.log(null === 0);            // false
console.log(null !== 0);            // true

console.log(undefined > 0);         // false
console.log(undefined < 0);         // false
console.log(undefined >= 0);        // false
console.log(undefined <= 0);        // false
console.log(undefined == 0);        // false
console.log(undefined != 0);        // true

// ==  only checks for value equality, not type equality
// === checks for both value and type equality