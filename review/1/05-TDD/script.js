'use strict'
// Please don't delete the 'use strict' line above

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