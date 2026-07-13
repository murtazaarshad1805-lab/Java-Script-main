// Constructor Object / Singleton Object

const myApp = new Object();                     // Create a Sigleton Object and return empty object
console.log(myApp);                      

// const myApp = {};                            // Create a Non Sigleton Object and return empty object

const myApp2 = {};

myApp2.id = "123sdf"
myApp2.name = "Muhammad Murtaza"
myApp2.age = 22
myApp2.email = "murtaza123@gmail.com"
myApp2.isLoggedIn = false

console.log(myApp2);   

const newApp = {
    userId: "123Asd",
    userName: {
        fullName: {
            firstName: "Muhammad",
            secondName: "Murtaza"
        }
    }
}

console.log(newApp);
console.log(newApp.userName);
console.log(newApp.userName.fullName);
console.log(newApp.userName.fullName.firstName, newApp.userName.fullName.secondName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "x", 4: "y"}
const obj3 = {5: "a", 6: "x"}

const obj4 = Object.assign(obj1, obj2, obj3)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);

const obj6 = {...obj1, ...obj2, ...obj3}                        // Best way 
console.log(obj6);


// Database Value 

const users = [
    {
        id: 1,
        email: "ali123@gmail.com"
    },
        {
        id: 2,
        email: "ali123@gmail.com"
    },
        {
        id: 30,
        email: "ali123@gmail.com"
    },
]
console.log(users[0].id);
console.log(users[1].email);

console.log(myApp2);
console.log(Object.keys(myApp2));
console.log(Object.values(myApp2));
console.log(Object.entries(myApp2));

console.log(myApp2.hasOwnProperty("isLogged"));     // Property Find