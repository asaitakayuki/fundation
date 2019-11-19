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


// Basic Requirements
//const myMathObject = {
//    sum: function(...args) {
//      /* body of function */
//      let sum = 0;
//      for(let arg of args){
//        sum += arg;
//      }
//      return sum;
//    },
//    product: function(...args) {
//      let mult = 1;
//      for(let arg of args){
//        mult = mult * arg;
//      }
//        return mult;
//    },
//    isEven: function(number) {
//        if( number % 2 === 0 ){
//            return true;
//        } else {
//            return false;
//        }
//    },
//  };
//sum
//test(myMathObject.sum(1), 1);
//test(myMathObject.sum(1, 2, 3), 6);
////product
//test(myMathObject.product(1,2,3),6);
////isEven
//test(myMathObject.isEven(2),true);
//test(myMathObject.isEven(3),false);

/**
 * 2.Invoke each of the above methods.
 * 
 */
 //find the sum of the numbers 19283, 18475, and 19999
 //I can not understand what you said.



 /**
  * 3.In the above object,create a method called getNumbers.
  */

//  const myMathObject = {
//    getNumbers: function(...arrays){
//      let numObj=[];
//
//      for(let element of arrays ){
//        if(typeof element === "number"){
//          numObj.push(element);
//        }
//      }
//      
//      return numObj;
//    }
//  }
//
//
////TEST
////test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
//console.log(myMathObject.getNumbers(1, 2, 3, 4));
//test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);