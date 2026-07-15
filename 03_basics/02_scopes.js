/*    
    {
        This is a BLOCK SCOPE in curly brasis
        Out side Function is called GLOBAL SCOPE
    }
*/

const { forwardRef } = require("react");

let a = 100

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner: ", a);
}

console.log("Outer: ", a);

