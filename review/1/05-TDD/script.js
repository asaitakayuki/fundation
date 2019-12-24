'use strict'
// Please don't delete the 'use strict' line above

<<<<<<< HEAD
/**
 * TDD.
 * test code.
 */

 function test(actualValue,expectedValue){
     let expected=expectedValue;
     let actual=actualValue;

     if(expected === actual){
         console.log("Test PASSED!");
     }else{
         console.log("Test FAILED.keep trying.")
         console.log("expected:",expected);
         console.log("actual:",actual);
     }
 }

// function addTen(number){
//     return number + 10;
// }
//
// //Test code.
// test(addTen(5),15);
// test(addTen(-5),5);
// test(addTen(-100),-90);

 /**
  * 1.Declare a function getFullName.
  */

//function getFullName(firstName,lastName){
//    return firstName + " " + lastName;
//}
//
////TEST
//test(getFullName("Ken","Watanabe"),"Ken Watanabe");
//test(getFullName("Takayuki","Asai"),"Takayuki Asai");
//

/**
 * 3.Declare a fucntion simpleGreeting.
 */


 // Declare your function here.
function simpleGreeting(firstname,isFormal){
    if( isFormal === true){
        return "Hello, " + firstname + "-san.";
    }else{
        return "Hello, " + firstname + ".";
    }
}

 //TEST1
let actual = simpleGreeting("Amy", true);
let expected = "Hello, Amy-san.";
test(actual,expected);
//TEST2
actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";
test(actual,expected);
=======
//declareation of variable
let actual;
let expected;

///**
// * 1.Declare a function getFullName
// */
//
// function getFullName(firstName,lastName){
//     return firstName + lastName;
// }
//
// //TEST code
//actual = getFullName("Ken ","Watanabe");
//expected = "Ken Watanabe";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

/**
 * 2.Declare a funtion simpleGreeting
 */

// function simpleGreeting(name,isFormal){
//     if(isFormal === true){
//         return "Hello, " + name + "-san.";
//     }else if(isFormal === false){
//         return "Hello, " + name + ".";
//     }
// }
//
// //TEST code
// actual = simpleGreeting("Matt", false);
// expected = "Hello, Matt."
//
// if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = simpleGreeting("Amy", true);
//expected = "Hello, Amy-san."
//
// if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

/**
 * 3.Declare a function isGreterThan
 */

// function isGreaterThan(firstNumber,secondNumber){
//    if(firstNumber > secondNumber){
//        return true;
//    }else{
//        return false;
//    }
// }
//
// actual = isGreaterThan(5,4);
// expected = true;
//
// if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = isGreaterThan(3, 4);
//expected = false;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


/**
 * 4.Choose at least 5 of the exercises from previous lessons and convert their test cases (OLD style) to the TDD test case style. You will need to re-write the code from the previous exercises again. Don’t worry, it’s good practice to re-write code.
 */

// function add(numOne,numTwo){
//     return numOne + numTwo;
// }
//
// //OLD style
// console.log(add(1,2)); //should print 3.
//
// //TDD style
// actual = add(4, 3);
//expected = 7;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = add(100, 42);
//expected = 142;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//

/**
 * 5.declare a function called oerate.
 */

//function operate(arthmeticOperator,numOne,numTwo){
//    if(arthmeticOperator === "+"){
//        return numOne + numTwo;
//    }else if(arthmeticOperator === "-"){
//        return numOne - numTwo;
//    }else if(arthmeticOperator === "*"){
//        return numOne * numTwo;
//    }else if(arthmeticOperator === "/"){
//        return numOne / numTwo;
//    }else if(arthmeticOperator === "%"){
//        return numOne % numTwo;
//    }else {
//        return "you should property arthmeticOperator"
//    }
//}
//
//actual = operate("+", 1, 2);
//expected = 3;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = operate("-", 100, 33);
//expected = 67;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//// Write your own tests for "*", "/", and "%"
//actual = operate("*", 100, 33);
//expected = 3300;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = operate("/", 99, 33);
//expected = 3;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = operate("%", 33, 33);
//expected = 0;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


/**
 * 6.In English,the color of rainbow are sometimes listed as:
 */

 // Declare your function here.
//function isRainbowColor(color){
//    let lowerCaseColor = color.toLowerCase();
//    if(lowerCaseColor === "red" || lowerCaseColor === "orange"){
//        return true;
//    }else{
//        return false;
//    }
//}
//
//
//actual = isRainbowColor("red");
//expected = true;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = isRainbowColor("rEd");
//expected = true;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = isRainbowColor("Fred");
//expected = false;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//// Write more tests for the other rainbow colors
//
>>>>>>> 0b3e5a0cbaa0b85c91dd0c13030049e30bc575a5
