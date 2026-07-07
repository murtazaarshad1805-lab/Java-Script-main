const accountId = 13548
let accountEmail = "qwertty@gmail.com"
var accountPassword = "qwertty123"
accountCity = "New York"
let accountCountry; // Undefined variable, can be assigned later

// accountId = 13549 // This will throw an error because accountId is a constant

accountEmail = "newemail@gmail.com"
accountPassword = "newpassword123"
accountCity = "Los Angeles"


/*
Prefer not to use var, because it is function scoped and block-scoped. Can lead to unexpected behavior. 
Use let for variables that may change and const for variables that should not change.
*/

console.log(accountId, accountEmail, accountPassword, accountCity, accountCountry);

console.table({ accountId, accountEmail, accountPassword, accountCity, accountCountry });

console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry]);