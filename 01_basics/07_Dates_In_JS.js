let myDate = new Date();  // Object

console.log(myDate);
console.log("String                     : " + myDate.toString());
console.log("Date String                : " + myDate.toDateString());
console.log("IOS String                 : " + myDate.toISOString());
console.log("JSON                       : " + myDate.toJSON());
console.log("Locale Date String         : " + myDate.toLocaleDateString());
console.log("Locale String              : " + myDate.toLocaleString());
console.log("Time String                : " + myDate.toTimeString());
console.log("Locale Time String         : " + myDate.toLocaleTimeString());
console.log("UTS String                 : " + myDate.toUTCString());
console.log("GET Time Zone of Set       : " + myDate.getTimezoneOffset());


let myCreatDate = new Date(2026, 0 , 9, 12, 55);        // Month start 0 in Java Script
console.log(myCreatDate.toLocaleString());
console.log(myCreatDate.getTime());
console.log(Math.floor(Date.now() / 1000));             // GET Second

let myCreatData1 = new Date("07-09-2026")
console.log(myCreatData1.toLocaleString());


let myTimeStamp = Date.now;
console.log(myTimeStamp());

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "long" 
})

console.log(newDate);

// Importand Note:
console.log(typeof myDate);     // Object