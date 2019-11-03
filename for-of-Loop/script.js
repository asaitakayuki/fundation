'use strict'
// Please don't delete the 'use strict' line above
//Declare a function sumArray.
//
//Arguments
//
//([number]): the numbers to add together.
//NOTE: [number] means an array of numbers.
//
//Returns
//
//(number): all of the numbers in the given array, added together.

let actual;
let expected;

//1
//function sumArray(array) {
//    // let sum; undefined.sum you should be decleared as number. 
//    let sum = 0;
//
//    //loop
//    for(const number of array){ 
//        sum = number + sum;
//    }
//
//    //return result
//    return sum;
//}
//  
//  actual = sumArray([1, 2, 3, 4]);
//  expected = 10;
//  
//  if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
//  
//  //TEST
//  actual = sumArray([1, 2, 3, 4, 10, 9, 234]);
//  expected = 263;
//  
//  if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }

//2
//   Declare a function productArray.

// Arguments

// ([number]): the numbers to multiply together.
// Returns

// (number): all of the numbers in the given array, multiplied together.

//function productArray(array){
//    //initirase array
//    let multipiedTogher = 0; 
//
//    for (const number of array){
//        multipiedTogther = number;
//    }
//
//    return multipiedTogher;
//}
//
////TEST
//actual = productArray([1, 2, 3, 4]);
//expected = 24;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//3
//Declare a function hasFun.
//
//Arguments
//
//([*])
//Returns
//
//(boolean): whether or not the given array has the string “fun” in it.

//function hasFun(array) {
//
//    let isBoolean = false;
//
//    for( const element of array ){
//        if (element === "fun"){
//            isBoolean = true;
//        }
//    }
//
//    return isBoolean;
//}
//  
//  actual = hasFun(["whatever", 2, false, "fun", "hello"]);
//  expected = true;
//  
//  if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
//  
//  actual = hasFun(["whatever", 2, false, "run", "hello"]);
//  expected = false;
//  
//  if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
  
//function concatenate(firstArray,secondArray) {
//    let concatanateTwoArrays = firstArray;
//
//    for(const secondArrayElement of secondArray ){
//        concatanateTwoArrays.push(secondArrayElement);
//    }
//        return concatanateTwoArrays;   
//}
//  
//  actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
//  expected = ["eeny", "meeny", "miny", "moe"];
//  
//  // Remember, we need to use JSON.stringify to compare arrays (for now)
//  if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
//  
//  // Write more tests
//  
//  actual = concatenate(["eeny", "meeny","meeeny"], ["miny", "moe","lol"]);
//  expected = ["eeny", "meeny", "meeeny", "miny", "moe","lol"];
//  
//  // Remember, we need to use JSON.stringify to compare arrays (for now)
//  if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }


//6.Declare a function getEvenNumbers.
//
//Arguments
//
//([number]): an array of numbers
//Returns
//
//([number]): an array of all the even numbers in the given array

//function getEvenNumbers(array) {
//    let EvenNumbers = [];
//
//    for(const element of array){
//        if ( element % 0) {
//            EvenNumbers.push(element);
//        }
//    }
//    return EvenNumbers;
//}
//
//actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
//expected = [2, 4, 6, 8];
//
//// Remember, we need to use JSON.stringify to compare arrays (for now)
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//// Write more tests

// I console log number with usging array.
function displayNumberWithArray(num1){
    let numbersArray = []

    for(let number of num1){
        numbersArray.push(number);
    }
    return numbersArray;
}

console.log(displayNumberWithArray([1,2,3,4]))