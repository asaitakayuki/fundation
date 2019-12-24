'use strict'
// Please don't delete the 'use strict' line above

// Declare the tdd variables to be used throughout the file.
let expected;
let actual;

/**
 * Basic Requirements
 */

/**
 * 1.Declare a function isLongerThan
 */

//function isLongerThan(character,lengthOfCharacter){
//    if(typeof character !== "string"){
//        return "Invalid input.";
//    }
//    if(character.length > lengthOfCharacter){
//        return true;
//    }else{
//        return false;
//    }
//}
//
////TEST
//actual = isLongerThan("three", 3);
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
//actual = isLongerThan("three", 5);
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
//actual = isLongerThan(3, 5);
//expected = "Invalid input.";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


/**
 * 2.Declare a function isOddWithoutIf. You are not allowed to use the if keyword. (You may have already done this. If so, do it again without looking at your previous code.) Be sure to validate the input
 */

// function isOddWithoutIf(number){
//     if(number % 2 === 0){
//         return false;
//     }else{
//         return true;
//     }
// }
//
//actual = isOddWithoutIf(3);
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
//actual = isOddWithoutIf(4);
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
 * 3.Declare a function getSimpleNumberName.
 */

// function getSimpleNumberName(number){
//    const oneToTenObject = {
//        one: 1,
//        two: 2,
//        three: 3,
//        four: 4,
//        five: 5,
//        six: 6,
//        seven: 7,
//        eight: 8,
//        nine: 9,
//        ten: 10
//    }
//    for(const [key,value] of Object.entries(oneToTenObject)){
//        if(number == `${value}`){
//            console.log(`${key}`);
//        }        
//    }
// }
//
// getSimpleNumberName(10);