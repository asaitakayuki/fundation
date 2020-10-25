'use strict'
// Please don't delete the 'use strict' line above

<<<<<<< HEAD

function isHotCold(temp){
    if ( temp > 20 && temp < 26) {
     	return "temperature is comfortable";
    } else if (temp < 20 || temp > 26){
     	return "temperature is too cold or hot";
    }else{
     	return "you may wrong temperautre"
    }
}

console.log(isHotCold(21)); //
console.log(isHotCold(19)); //
console.log(isHotCold(100)); //
console.log(isHotCold(20)); //
=======
// Declare the tdd variables to be used throughout the file.
let expected;
let actual;


/**
 * Basic Requirements
 */

 /**
  * 1.Declare a function isTeenager.
  */

//function isTeenager(number){
//    if(number >= 13 && number <= 19){
//        return true;
//    }else{
//        return false;
//    }
//}

//TEST
//actual = isTeenager(14)
//expected = true;
//
//// ... Some code here that you are going to test below.
//if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
///**
// * 2.For this task, update the function you created above. Let’s add another conditional. This conditional should check to see IF the argument passed into the function is a number. ELSE, the function should return "Invalid! The given age is not a number!".
// */
////write again and add another conditinal!!
//function isTeenager(number){
//    //check type of data.
//    if(typeof number !== "number"){
//        return "Invalid! The given age is not number";
//    }
//    //check whether the teeenager or not.
//    if(number >= 13 && number <= 19){
//        return true;
//    }else{
//        return false;
//    }
//}
//
////TEST
//actual = isTeenager("Hello");
//expected = "Invalid! The given age is not number";
//
//if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

/**
 * 3.Declare a function called anotherGreeting.
 */

//function anotherGreeting(name,isFormal,isGreeting){
//    if(isFormal === true){
//        if(isGreeting === true){
//            return "Hello, " + name + "-san.";
//        }else if(isGreeting === false){
//            return "Goodbye, " + name + "-san.";
//        }
//    }else if(isFormal === false){
//        if(isGreeting === true){
//            return "Hello, " + name + "!";
//        }else if(isGreeting === false){
//            return "goodbye, " + name + "!";
//        }
//    }
//}
//
//
////TEST
//actual = anotherGreeting("Mary", true, true);
//expected = "Hello, Mary-san.";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = anotherGreeting("Mary", false, true);
//expected = "Hello, Mary!";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = anotherGreeting("Felix", true, false);
//expected = "Goodbye, Felix-san.";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
>>>>>>> 89e21226eb4806bce31d2356caa43b92e74685cb
