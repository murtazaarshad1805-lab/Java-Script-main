const userName  = "Ali"
const userAge = 30
let userEmail = "ali@example.com"

//console.log(name + age) // Not recommended and bad practice to print a String.

console.log(`My name is ${userName} and my age is ${userAge} and my personal email is ${userEmail}.`) // Recommended way and new way to print a String. (Template Literals)


const gamerName = new String('Murtaza')

console.log(gamerName.length)
console.log(gamerName.toLowerCase());
console.log(gamerName.toUpperCase())
console.log(gamerName.charAt(5));
console.log(gamerName.indexOf('z'))


let departmentName = "Qwerty";
console.log(departmentName.substring(0,3));

let courceName = "Computer";
console.log(courceName.slice(0, 3));
console.log(courceName.slice(-8, 4));

let otherCource = courceName.slice(-8, 3)
console.log(otherCource);


const fatherName = "     Arshad Nasir    ";
console.log(fatherName);
console.log(fatherName.trim());
console.log(userEmail.split('.'));
console.log(fatherName.replace(' ', '_'));