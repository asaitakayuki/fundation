'use strict'
// Please don't delete the 'use strict' line above
/**
 * basic requirement
 */


//1.Write a function as function expression rather than function declaration.
const returnAll = function returnAll(value){
    return value;
}

 // Example
console.log(typeof returnAll(false)); // boolean
console.log(typeof returnAll(5)); // number
console.log(typeof returnAll("5")); // string
console.log(typeof returnAll([])); // object
console.log(typeof returnAll({ a: 1 })); // object

function foo() {
  return "hi";
}

console.log(typeof returnAll(foo)); // function
console.log(typeof returnAll(foo())); // string