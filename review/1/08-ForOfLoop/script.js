'use strict'
// Please don't delete the 'use strict' line above

//Basic Requirements
//declear variables for acutal and expected.
let actual;
let expected;

// lecture
// Use the pattern.Declare the function getDouble

//function getDouble(array){
//    //initilase result
//    let result=[];
//
//    //for Loop.Do something.
//    for(let element of array){
//        result.push(element * 2);
//    }
//
//    //return result
//    return result;
//}
//
////TEST code
//actual=getDouble([1,2,3]);//should be [2,4,6]
//expected=[2,4,6];
//
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

//const colors = ['blue','red','green'];
//
//for(const color of colors){
//    console.log(color);
//}


// pattern of for ..loop with a function.
// Declare a greeting function with a array.
// intilaize reult - do something - return the reuslt.

//const names = ["Ghen","Yan","Atlia"];
//
//function greeting(arrays){
//    const result =[];
//
//    for(const name of arrays){
//        result.push("Hello " + name + ".");
//    }
//    
//    return result;
//}
//
//console.log(greeting(names));




/**
 * 1.declare the sumArray.
 */
//function sumArray(numberOfArray){
//    let sumResult=0;
//
//    for(const number of numberOfArray){
//        sumResult = sumResult + number;
//    }
//
//    return sumResult;
//}
//
////TEST code
// actual=(sumArray([1,2,3,4]));
// expected=10;
//
// if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
//
////TEST code
// actual=(sumArray([0,-2,3,4]));
// expected=5
//
// if (actual === expected) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }


//2.declaer a function productArray
//const numberOfArrays=[1,2,3,4];
//
//function productArray(array){
//    let resultOfMuliplation=1;
//
//    for(const number of array){
//        resultOfMuliplation = resultOfMuliplation * number;
//    }
//
//    return resultOfMuliplation;
//}
//
////TEST code
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
//
/////TEST code
//actual = productArray([0, -2, 3, 4]);
//expected = 0;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//3.Declare a function hasFun
//function hasFun(array){
//    let resultOfBoolean=false;
//
//    for(const element of array){
//        if(element === "fun"){
//            resultOfBoolean=true;
//        }
//    }
//
//    return resultOfBoolean;
//}
//
//
//actual = hasFun(["whatever", 2, false, "fun", "hello"]);
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
//actual = hasFun(["whatever", 2, false, "run", "hello"]);
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

//4.Declare a function contianOnlyBoolean
//function containsOnlyBooleans(array){
//    let result=true;
//
//    for(const element of array){
//        if(typeof element !== "boolean"){
//            result=false;
//        }
//    }
//
//    return result;
//}
//
//actual = containsOnlyBooleans([true, false, true, false, false]);
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
//actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
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
 * 5.declear a function concatenate.
 */

//function concatenate(arraysOne,arraysTwo){
//        let result=[];
//
//        for(const element of arraysOne){
//            result.push(element);
//        }
//        for(const element of arraysTwo){
//            result.push(element);
//        }
//
//        return result;
//}
//
//console.log(concatenate(["one","two"],["three","four"]));


/**
 * 6.Declare a function getEvenNumber
 */

//function getEvenNumber(arrays){
//    let result=[];
//
//    for(let element of arrays){
//        if(element % 2 === 0){
//            result.push(element);
//        }        
//    }
//
//    return result;
//}
//
//actual=getEvenNumber([1,2,3,4,5,6,7,8]);
//expected=[2,4,6,8];
//
//// Remember, we need to use JSON.stringify to compare arrays (for now)
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
//


/**
 * 7.declare a function getMultipliedArray
 */

//function getMultipliedArray(arrays,multipliedNumber){
//    let result=[];
//
//    for(let element of arrays){
//        result.push(element * multipliedNumber);
//    }
//
//    return result;
//}
//
//actual=getMultipliedArray([1,2,3],6);
//expected=[6,12,18];
//
////// Remember, we need to use JSON.stringify to compare arrays (for now)
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//} else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//}


