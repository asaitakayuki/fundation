'use strict'
// Please don't delete the 'use strict' line above
//function getOddNumbers(arrayOfNumber) {
//    // Your code here.
//    let oddArray = [];
//    
//    for(const element of arrayOfNumber){
//        if(element % 2 !==0){
//            oddArray.push(element);
//        }
//    }
//    return oddArray;
//}

let actual;
let expected;

 // actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
 // expected = [1, 3, 5, 7];
 // 
 // // Remember, we need to use JSON.stringify to compare arrays (for now)
 // if (JSON.stringify(actual) === JSON.stringify(expected)) {
 //   console.log("Yay! Test PASSED.");
 // } else {
 //   console.error("Test FAILED. Keep trying!");
 //   console.log("    actual: ", actual);
 //   console.log("  expected: ", expected);
 // }
 
//1
  
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

//  let greeting = "Konnichiwa";
//
//  function sayHello(name) {
//    // let greeting = "Hi";
//    return greeting + " " + name;
//  }
// 
//  console.log(sayHello("Rika"));

//2
//  let sum = 143;
//
//function sumArray(arrayOfNumbers) {
//        let sum = 0;
//  for (const number of arrayOfNumbers) {
//        sum += number;
//  }
//  return sum;
//}
//
//// The function should work as expected
//test(sumArray([1, 2, 3]), 6);
//
//// The global variable should not be touched
//test(sum, 143);


//3