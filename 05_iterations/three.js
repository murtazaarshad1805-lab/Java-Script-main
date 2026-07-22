// For Of Loop

// ["", "", ""]
// [{}, {}, {}]



const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Greeting char is: ${greet}`);
}


// Map ********************

const map = new Map()
map.set('PK' , "Pakistan")
map.set(1 , "Number One")

for (const [key , value] of map) {
    // console.log(key , `=> `, value);
}


// Object ********************

const myObject = {
    'game1': 'NFS',
    'game2': "GTA",
    'geme3': "Taken3"
}

for (const [key , value] of myObject) {
    // console.log(key , `=> `, value);
}
// Answer: myObject is not iterable


