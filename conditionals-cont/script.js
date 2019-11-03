'use strict'
// Please don't delete the 'use strict' line above
//warm up
//1

//// Declare your function here.
//function compareTwoNumbers(number1,number2){
//    if ( number1 == number2 ){
//        return "1 is equal to 1";
//    } else if( number1 < number2 ){
//        return "3 is less than 4";
//    } else ( number1 > number2 ) 
//        return "4 is greater than 3";
//    }
//
//let actual = compareTwoNumbers(1, 1);
//let expected = "1 is equal to 1";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = compareTwoNumbers(3, 4);
//expected = "3 is less than 4";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//// Write your own test for "X is greater than Y".
//actual = compareTwoNumbers(4, 3);
//expected = "4 is greater than 3";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

// Declare the tdd variables to be used throughout the file.
let expected;
let actual;

// ... Some code here that you are going to test below.

//actual = "actual" 
//expected = "expected"
//
//if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//1
//isTeenager.

function isTeenager(age){
  // check age between thirteen and nineteen
  if (age > 12 && age < 18) {
      return true;
  } else if (typoef age === "string") {
      return "invalid! The given age is not number";
  } 
      return false;
}
// write codes here.


actual = isTeenager(3);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.
actual = isTeenager(12);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(19);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}