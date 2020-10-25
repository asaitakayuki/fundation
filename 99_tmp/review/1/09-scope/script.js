'use strict'
// Please don't delete the 'use strict' line above
//function sum(arrayOfNumbers){
//    //within local scope.
//    let total = 0;
//
//    for(const number of arrayOfNumbers){
//        //within block scope.
//        total += number;
//    }
//
//    return total;
//}
//
//
////TEST
//console.log(sum([1,2,3,4])); //should be 10

//let greeting="Hello!";
//
//function greet(name){
//    let greeting="Hi";
//    return greeting + "" + name;
//}
//
//console.log(greeting); //Hello!
//console.log(greet("Eri")); //should be Hi Eri
//console.log(greeting); //Hello!



//basic requirement

//1.


// let greeting = "Konnichiwa";

// function sayHello(name) {
//   let greeting = "Hi";
//   return greeting + " " + name;
// }

// console.log(sayHello("Rika"));



//TEST code
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//2.Fix the code to satisfy the test
let sum =143;

function sumArray(arrayOfNumbers){
    let sum=0;

    for(const number of arrayOfNumbers){
        sum += number;
    }

    return sum;
}

test(sumArray([1,2,3]),6);
test(sum,143);

