'use strict'
// Please don't delete the 'use strict' line above


//1
//function getFullName(firstName, lastName){
//    return firstName + " " + lastName;
//}

//declear acutual and expected variable
//let actual = getFullName("Ken", "Watanabe");
//let expected = "Ken Watanabe";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


//2
// Declare your function here.
function simpleGreeting(firstName, turefalse){
    return "Helo, " + "-san.";
}

let actual = simpleGreeting("Amy", true);
let expected = "Hello, Amy-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}