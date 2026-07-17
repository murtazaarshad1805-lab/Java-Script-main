const userEmail = "ali@123gmail.com"

if (userEmail) {
    console.log("Got the user Email.");
} else {
    console.log("Dont have a user email.");
}


// Falsy Values:        ===>        false , 0 , -0 , BigInt 0n , "" ,  null , undefined , NaN

// Truthy Values:       ===>        "0" , 'false' , " " , {} , [] , function(){}