const user = {
    userName: "Murtaza", 
    price: "790",

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to the website.`);
    }
}

user.welcomeMessage()
user.userName = "Ali Raza"
user.welcomeMessage()

console.log(this);



// ++++++++++++++++++++++++++++++ Function ****************************************

function chai() {
    let username = "Ali"
    console.log(this.username);
}

chai()


const chai = function () {
    let username = "Ali"
    console.log(this.username);
}

chai()


// ******************************* Arrow Function ******************************

const chai = () => {
    let username = "Ali"
    console.log(this.username);
}

chai()

/* Basic Arrow Function
const addNumber = (num1, num2) => {
    return num1 + num2
}   */


// Implicit Return

const addNumber = (num1, num2) => num1 + num2
console.log(addNumber(3, 4));

const addNumber = (num1, num2) => (num1 + num2)
console.log(addNumber(3, 47));

const addNumber = (num1, num2) => ({Username: "Murtaza"})                // Object Pass
console.log(addNumber(3, 47));

