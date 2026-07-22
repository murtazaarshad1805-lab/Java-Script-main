// For Each Loop *****************************


const programming = ["JS", "Java", "Ruby", "Node"]

programming.forEach(function (value) {
    // console.log(value);
})

programming.forEach( (item) => {
    // console.log(item);
})


function printMe(item) {
    // console.log(item);
}
programming.forEach(printMe)


programming.forEach( (item, index, arr) => {
    // console.log(item, index , arr);
})




const coding = [
    {
        languageName : "Javascript",
        fileName: "js"
    },
        {
        languageName : "Java",
        fileName: "java"
    },
        {
        languageName : "Paython",
        fileName: "py"
    },
]

coding.forEach( (itme) => {
    console.log(itme.languageName);
})




