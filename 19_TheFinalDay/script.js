'use strict'
// Please don't delete the 'use strict' line above


/** 
 * Test Driven Development
*/
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

/**
 * Warmup 
 */

//function doTheThing(array){
//    let lessThan6 = [];
//
//    //filter less than 6
//    for(let i = 0;i < array.length;i++){
//        if(array[i] < 6 ){
//            lessThan6.push(array[i]);
//        }
//    }
//    let result = [];
//    for(let j =0;j < lessThan6.length;j++){
//        result.push(lessThan6[j] * lessThan6[j]);
//    }
//    return result;
//}
//console.log(doTheThing([1,2,3,4,5,6,7,8,9,10])) //should be [1,2,3,4,5]

/**
 * Basic Requirement
 */

 /**
  * 1,Declear a function addOne
  * 
  * Argument
  * eturns

  *([*]): an array of all the numbers in the given array, with each number incremented by one
  */

///  function addOne(array){
///    let resultArray =[];
///    for(const element of array){
///      resultArray.push(element + 1);
///    }
///    return resultArray;
///  }
///
/////TEST
///test(addOne([1,2,3,4,5]),[2,3,4,5,6]);
///test(addOne([2,3,4]),[3,4,5]);

/**
 * 2.What type of values do the following function return?
 */

//function foo1() {
//  return 1000;
//}
//console.log("foo1()", typeof foo1()); // number
//
//function foo2() {
//  return 9.99;
//}
//console.log("foo2()", typeof foo2()); // number
//
//function foo3(input) {
//  return input;
//}
//console.log("foo3()", typeof foo3()); // undefined
//
//function foo4() {
//  console.log("Hello!");
//}
//console.log("foo4()", typeof foo4()); // string
//
//function foo5() {
//  "false";
//}
//console.log("foo5()", typeof foo5()); // boolean
//
//function foo6() {
//  return "true";
//}
//console.log("foo6()", typeof foo6()); // string
//
//function foo7() {
//  return 1 + "two";
//}
//console.log("foo7()", typeof foo7()); // string.It is wired.
//
//function foo8() {
//  return [];
//}
//console.log("foo8()", typeof foo8()); // object
//
//function foo9() {
//  return [[1], [2], [3]];
//}
//console.log("foo9()", typeof foo9()); // 
//
//function foo10() {
//  return {
//    myArray: [],
//    myNumber: 5,
//    myString: "hello",
//  };
//}
//console.log("foo10()", typeof foo10()); // object
//
//function foo11() {
//  return function() {
//    return "this is a string!";
//  };
//}
//console.log("foo11()", typeof foo11()); // string
//
//function foo12() {
//  return function() {
//    return undefined;
//  };
//}
//console.log("foo12()", typeof foo12()); // undefined

/**
 * 3.Try to predict what happens without running the code.
 */
//
//function makeCounter(){
//  let count = 0;
//  return function(){
//    count++;
//    return count;
//  };
//}
//
//const counter = makeCounter();
//
////TEST
//console.log(counter());
//console.log(counter());
//console.log(counter());


/**
 * 4.Debug the following code so that it print each color of the rainbow to the console.
 */

//function rainbowColors() {
//  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
//  for (let i = 0; i < colors.length; i++) {
//    console.log(colors[i]);
//  }
//}
//
//// Test case
//rainbowColors();
//// 'red' 'orange' 'yellow' 'green' 'blue' 'purple'

/**
 * 5.Debug the following code so that it returns an object with the days that Code Chrysalis meets for class turned to “true”.
 */
const classDays = ["tuesday", "thursday", "saturday"];

function getWeeklyCalendar(classDays) {
  let classMeetingDays = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };

  for (let i = 3; i < classDays.length; i++) {
    let day = i;
    classMeetingDays[day] = true;
  }
  return classMeetingDays;
}

// Test case
test(getWeeklyCalendar(classDays), {
  monday: false,
  tuesday: true,
  wednesday: false,
  thursday: true,
  friday: false,
  saturday: true,
  sunday: false,
});
