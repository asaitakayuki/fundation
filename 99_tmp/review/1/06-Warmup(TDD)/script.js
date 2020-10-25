'use strict'
// Please don't delete the 'use strict' line above

/**
 * 1.declare a function compareTwoNumbers.
 */

 function compareTwoNumbers(numOne,numTwo){
     if(numOne === numTwo){
        return numOne + " is equal to " + numTwo;
     }else if(numOne > numTwo){
        return numOne + " is greater than " + numTwo;
     }else if(numOne < numTwo){
        return numOne + " is less than " + numTwo;
     }
 }

 let actual = compareTwoNumbers(1, 1);
let expected = "1 is equal to 1";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 is less than 4";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write your own test for "X is greater than Y".
actual = compareTwoNumbers(4, 3);
expected = "4 is greater than 3";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
