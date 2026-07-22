const number = [1, 2, 3]

// const totalNum = number.reduce( function (acc, currval) {
//     console.log(`Accomulatior: ${acc} and Current value: ${currval}`);
//     return acc + currval
// }, 0 )

const totalNum = number.reduce( (acc , currval) => acc + currval , 0 )

// console.log(totalNum);

const shoppingCart = [
    {
        courceName: "Javascript",
        courcePrice: 5999
    },
        {
        courceName: "Java",
        courcePrice: 3999
    },
        {
        courceName: "Paython",
        courcePrice: 4999
    },
        {
        courceName: "Data Scince",
        courcePrice: 7999
    },
        {
        courceName: "AI",
        courcePrice: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.courcePrice , 0)

console.log(`Total Bill: ${priceToPay} Rs.`);