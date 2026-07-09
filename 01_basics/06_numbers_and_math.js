// ************************* Numbers ***************************

const score = 400;
console.log(score);

const num = new Number(100);
console.log(num);
console.log(num.toString());
console.log(num.toString().length);
console.log(num.toFixed(2)); 
console.log(num.toFixed(3)); 


const balance = 323.9867
console.log(balance.toPrecision(4)); 

const countNumber = 1000000
console.log(countNumber.toLocaleString());              // Currancey USA Type
console.log(countNumber.toLocaleString('en-PK'));       // Cuurancey Pakistan Type
console.log(countNumber.toLocaleString('en-EG'));       // Currancey Arabic Type
console.log(countNumber.toLocaleString('en-IN'));       // Currancey Indian Type
console.log(countNumber.toLocaleString('en-BG'));       // Currancey British Type
console.log(countNumber.toLocaleString('en-KR'));       // Currancey Korian Type

// ************************* Msths ***************************

console.log(Math); // Object [Math] {}    

console.log("Abolute value: " + Math.abs(-5));
console.log("4.3 to Round Figure: " + Math.round(4.3));
console.log("Max Value: " + Math.max(4,9,8,2,3,1,7,6));
console.log("Min Value: " + Math.min(4,9,8,2,3,7,6));
console.log("4.8 value round and choose Higher value: " + Math.ceil(4.8));
console.log("4.4 value round and choose Lower value: " + Math.floor(4.4));

console.log(Math.random());         // Every time print a Random Number Between 0 to 1.

console.log(Math.random() * 10);
console.log(Math.floor((Math.random() * 10) + 1));      // only Single Value print

const max = 50
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     // print value between 10 to 30.