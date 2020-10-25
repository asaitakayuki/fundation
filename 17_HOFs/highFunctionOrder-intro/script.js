'use strict'
// Please don't delete the 'use strict' line above

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

//function doubleArray(array){
//  let result = [];
//  for(const element of array){
//     result.push(element * 2);
//  }
//  return result;
//}
//
//console.log(doubleArray([2,3,4,5,6]));

//square array
//function squareArray(array){
//  let result = [];
//  for(const element of array){
//    result.push(element * element);
//  }
//  return result;
//}
//console.log(squareArray([2,3,4,5,6]));


// function double with using map method..
//function double(element){
//  return element * 2;
//}
//
//const originalArray = [2,3,4,5];
//
//const newArray =originalArray.map(double);
//
//console.log(newArray);

// square function with using map method.
//function square(element){
//  return element * element;
//}
//
//const originalArray = [1,2,3,4];
//
//const newArray = originalArray.map(square);
//
//console.log(newArray);