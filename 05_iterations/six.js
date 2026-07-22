// const coding = ["JS", "Java", "Ruby", "Node"]

// const code = coding.forEach( (item) => {
//     console.log(item);
//     // return item
// })
// console.log(code);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNum = number.filter( (num) => num > 4 )

// const myNum = number.filter( (num) => {
//     return num > 4
// })

// const myNum = []

// number.filter( (num) => {
//     if (num > 4) {
//         myNum.push(num)
//     }
// })

// console.log(myNum);

// EXAMPLE *********************************************************************************************************************

const userInfo = [
  {
    gender: "female", email: "christina.jones@example.com", age: 59, phone: "01728 332351",
},
  {
    gender: "male", email: "christina.jones@example.com", age: 21, phone: "01728 332351",
},
  {
    gender: "male", email: "christina.jones@example.com", age: 45, phone: "01728 332351",
},
  {
    gender: "female", email: "christina.jones@example.com", age: 25, phone: "01728 332351",
},
  {
    gender: "male", email: "christina.jones@example.com", age: 41, phone: "01728 332351",
},
  {
    gender: "female", email: "christina.jones@example.com", age: 35, phone: "01728 332351",
},
  {
    gender: "female", email: "christina.jones@example.com", age: 23, phone: "01728 332351",
},
];

const user = userInfo.filter( (ud) => {
    return ud.age <= 35 && ud.gender === "female"
})

console.log(user);