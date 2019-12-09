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

const animal =["dog","cat","monkey"]; // Array

//console.log(animal[2]); //
const person = {name:"sam",city:"tokyo"}; //Object

////create filter condition function!!
////parameter names is ...number..
//function filterCondition(number){
    //return number.length < 6;
//};
//
//function squareNumber(number){
    //return number ** 2;
    ////return number * number;
//}
//
//function doTheThing(arrayOfNumber){
     //arrayOfNumber.filterCondition(number);
//}
//
//console.log(filterCondition([1,2,3]));
//
//// Your code here
//test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
//test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

/**
 * Basic requiment
 */

/**
 * Declare a function addOne.

Arguments

([number])
Returns

([*]): an array of all the numbers in the given array, with each number incremented by one

// Your code here
*/

//function addOne(array){
//  //initilize array;
//  let result = [];
//  //add one to each element.
//  //for(let i =0; i < array.length;i++){
//  // result.push(array[i]+1);
//  //}
//
//  //another for..loop.
//  for(const element of array){
//    result.push(element + 1);
//  }
//  //
//  return result;
//}
//
//test(addOne([1, 2, 3, 4]), [2, 3, 4, 5]);
//test(addOne([2, 3, 4]), [3, 4, 5]);

/**
 * 2.what type of value do the following function return?
 * 
 */

 //should return number(1000).
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
//console.log("foo4()", typeof foo4()); // undefined?? I takes
//
//function foo5() {
//  "false";
//}
//console.log("foo5()", typeof foo5()); // string..FUCK. I take a mistake!! This function has no return word....
//
//function foo6() {
//  return "true";
//}
//console.log("foo6()", typeof foo6()); // string
//
//function foo7() {
//  return 1 + "two";
//}
//console.log("foo7()", typeof foo7()); // it is wired..I guess that 1twwo??error??
//
//function foo8() {
//  return [];
//}
//console.log("foo8()", typeof foo8()); // object.I have no idea..It seems to be array....
//
//function foo9() {
//  return [[1], [2], [3]];
//}
//console.log("foo9()", typeof foo9()); // string??
//
//function foo10() {
//  return {
//    myArray: [],
//    myNumber: 5,
//    myString: "hello",
//  };
//}
//console.log("foo10()", typeof foo10()); // object!!
//
//function foo11() {
//  return function() {
//    return "this is a string!";
//  };
//}
//console.log("foo11()", typeof foo11()); // string...
//
//function foo12() {
//  return function() {
//    return undefined;
//  };
//}
//console.log("foo12()", typeof foo12()); // It is kind of trikky.


/**
 * 3.try to predict what happens without running the code. Explain it to your pair and see if you’re right!
 */


/**
 * what does makeCounter does?
 * 1.initilize variable(count)
 * 2.return no name function.
 * 3.increment count.
 * 4.return.
 */

//function makeCounter() {
//  let count = 0;
//  return function() {
//    count++;
//    return count;
//  };
//}
//
//// 
//const counter = makeCounter();
//
///* What do these print? */
//
//console.log(counter()); // should be 1
//console.log(counter()); // should be 2
//console.log(counter()); // should be 3


/**
 * 4.Debug the following code so that it prints each color of the rainbow to the console.
 */

// function rainbowColors(){
//   const colors = ["red","yellow","green","blue","purple"];
//   
//   for(let i=0;i < colors.length;i++){
//     console.log(colors[i]);
//    }
// }
//
// rainbowColors();


//const classDays = ["tuesday", "thursday", "saturday"];
//
//function getWeeklyCalendar(classDays) {
//  let classMeetingDays = {
//    monday: false,
//    tuesday: false,
//    wednesday: false,
//    thursday: false,
//    friday: false,
//    saturday: false,
//    sunday: false,
//  };
//
//  //display object
//  console.log(Object.entries(classMeetingDays));
//
// // for(const[key,value] of Object.enties[classMeetingDays]){
// //   console.log(`${key} ${value}`);
// //   console.log(classDays[0]);
// // }
//
//  for (let i = 0; i < classDays.length; i++) {
//    let day = i;
//  }
//  return classMeetingDays;
//}
//
//// Test case
//test(getWeeklyCalendar(classDays), {
//  monday: false,
//  tuesday: true,
//  wednesday: false,
//  thursday: true,
//  friday: false,
//  saturday: true,
//  sunday: false,
//});


/**
 * 6.Declare a function product (multiply) that takes a input x.

Arguments

(number): x
Returns

(function): a function that takes an input y and returns the product of x and y.
 */

// function product(x){
//   let number1 = x;
//  return function(y){
//    let number2 = y;
//    return number1 * number2;
//  }
// }
//
// // Your code here
//
//const multiplyFive = product(5);
//
//test(multiplyFive(2), 10);
//test(product(3)(2), 6);

/**
 * 7.Declare a function called pluck.
 * 
 * Arguments

([object])
(string): key
Returns

([*]): an array of all the values for the given property from the given array
 */


 function pluck(array,key){
  //initilize array
  let result = [];

  for(const object of array){
      result.push(object[key]);
  }
  return result;
 }

 const stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60, hair: "curly" },
];

test(pluck(stooges, "name"), ["moe", "larry", "curly"]);
test(pluck(stooges, "age"), [40, 50, 60]);
test(pluck(stooges, "hair"), ["curly"]);