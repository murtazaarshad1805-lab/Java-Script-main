// For Loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("best Number is 5");
    }
    // console.log(element);  
}


const myArray = [1, "Super Man", 2, "Spider Man", 3, "Iron Man", 4, "Ant Man"]
// console.log(`Array Length : ${myArray.length}`);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}




// Break vs Continue

for (let i = 1; i < 20; i++) {
    if (i == 7) {
        console.log("Detected 7");
        break
    }
    // console.log(`value of I is : ${i}`);
}



for (let i = 1; i < 20; i++) {
    if (i == 7) {
        console.log("Detected 7");
        continue
    }
    console.log(`value of I is : ${i}`);
}