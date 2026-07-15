/*    
    {
        This is a BLOCK SCOPE in curly brasis
        Out side Function is called GLOBAL SCOPE
        DOM Stand For: Document Object Modal
    }
*/

let a = 100

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner: ", a);
}

console.log("Outer: ", a);




Closure 

function one(){
    const userName = "Murtaza"

    function two() {
        let userSubject = "Java Script"
        console.log(userName);
    }

    // console.log(userSubject);
    two()

}

one()

if (true) {
    const userName = "Ali"

    if (userName == "Ali") {
        const secondName = " Raza"
        console.log(userName , secondName);
    }
    console.log(secondName);

}

console.log(userName);




// ************************** Intresting ++++++++++++++++++++++++++++++++++++



console.log(addOne(4));                   // This line Execute
function addOne(num) {
    return num + 1
}

console.log(addOne(4));

// console.log(addTwo(5));                 Error: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));



