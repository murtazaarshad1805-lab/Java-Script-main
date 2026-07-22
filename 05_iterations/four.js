const myObject = {
    js : "Javascript",
    rb : "Ruby",
    db : "Data Base"
}

for (const key in myObject) {
    // console.log(key);                                                       // Only Keys Print
    // console.log(myObject[key]);                                             // Only Values Print
    // console.log(`${key} is stand for : ${myObject[key]}`);                  // Keys and Values Print
}


const array = ["JS", "Py", "Java", "NodeJS"]

for (const key in array) {
    // console.log(key);
    // console.log(array[key]);
}


// const map = new Map()
// map.set('PK' , "Pakistan")
// map.set(1 , "Number One")
                                        // MAP are not Iterate
// for (const key in map) {
//     console.log(key);
// }








