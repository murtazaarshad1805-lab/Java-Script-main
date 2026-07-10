// Array Declaration

const myArr = [1, 2, 3, 4, 5]
console.log(myArr[4]);

const myHeros = ["SuperMen", "SpiderMen", "IronMen", "Spider Noir", "Captain America"]
console.log(myHeros[4]);

const numbers = [3, 5, 6, 7, 2, true, "Ali Raza"]
console.log(numbers[3]);

const myArray = new Array(4, 5, 564, 6, 46, 87, 7)
console.log(myArray.length);


// Array Methods

const myArrayMethods = new Array(0, 1, 2, 3, 4, 5)

myArrayMethods.push(4)                                   // Add Element in Array using parameter
myArrayMethods.pop()                                     // Last Element Remove in Array without parameter
myArrayMethods.unshift(7)                                // Add Element in Array of first index using parameter
myArrayMethods.shift()                                   // First Elemnt remove in Array without parameter
console.log(myArrayMethods.includes(3));                 // Question is Element exist in this Array using parameter and Anser is Boolean Type (True , False)
console.log(myArrayMethods.indexOf(2));                  // Element exist in Array IF Yes, print the Element of index and No, print is (-1 => mean No) 


const arrayMethods = myArrayMethods.join()               // Create new array and Old Array JOIN then answer is String Type mean only Array Element print not Array
console.log(myArrayMethods);

// Slice Vs Splice Method

console.log("A " , myArrayMethods);

const myArray1 = myArrayMethods.slice(1, 3)              // Slice method using two parameter mean range: (1, 4) then include index 1,2,3 and 4 not iclude but orignal Array not changed
console.log(myArray1);
console.log("B " , myArrayMethods);

const myArray2 = myArrayMethods.splice(1, 3)             // Splice method using two parameter mean range: (1, 4) then include index 1,2,3 and 4 but orignal Array are changed
console.log(myArray2);
console.log("C " , myArrayMethods);


