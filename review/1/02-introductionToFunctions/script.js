'use strict'
// Please don't delete the 'use strict' line above

/**
 * Basic Requirements
 */

 /**
  * 1.Enter the following two lines into your script.js file. Open the index.html file in your browser and open the developer tools. What do you see in your developer console?
  */

//5 + 6;
//console.log(5+6);


/**
 * 1.Use the function below to return the sum of two numbers. Enter the following code in your script.js file:
 */

 function add(numOne,numTwo){
     return numOne + numTwo;
 }
//
//
// //TEST
// console.log(add(4,3)) //should print 7
// console.log(add(100,42)) //should print 142

/**
 * For the above function, what happens if you give only one input? What happens if you give more than the specified number of inputs?
 */

//console.log(add(100)); //What happens? it returns undefined..
//console.log(add(1,4,5));//What happens? I guess that three argument is ignored.So return value 5.

/**
 * 3.What do you think gets printed when you run the following code? Try to predict what happens and then see if you can figure out why. The extra sentence that we are printing out in the two console.log statements at the end will help you figure out what is happening where. Scroll to the explanation below to find the answer.
 */

//function simpleFunctionA(){
//  return "Hello simple function A";
//}
//
//function simpleFunctionB(){
//  console.log("Hello simple function B");
//}
//
//console.log(simpleFunctionA(),"--> From running Simple FunctionA");
//console.log(simpleFunctionB(),"--> From running Simple FunctionB");


/**
 * 4.Declare a function named subtract that subtracts the second argument from the first argument. Remember to try the test cases to see if your function works.
 */

// function substract(num1,num2){
//   return num1 - num2;
// }
//
//
// //TEST
// console.log(substract(4,3));
// console.log(substract(100,42));

/**
 * 5.Declare a function named greeting that takes a name string as an argument and returns a hello!
 */


// function greeting(name){
//   return "Hello, " + name;
// }
//
//
// console.log(greeting("Alex"));
// console.log(greeting("Beau"));


/**
 * Declare a function called average that takes two numbers as inputs and returns the average of those numbers. This time, write two tests for your function by yourself!
 */

// function average(num1,num2){
//   return (num1 + num2 ) / 2;
// }
//
// console.log(average(1,1)) //should be 1
// console.log(average(10,5)) //should be 2

/**
 * 7.What is wrong with the following functions?
 */


/**
 * parameter is a number.Parameter should be variable
 *
 *  */
//function square(5){
//  return 5 * 5;
//}
//
//
///**
// * parameter is expected a number.But This prameter is string.
// * So,This function can not square the number.
// */
//
//function square("x"){
//  return "x" * "x";
//}
//

/**
 * 8.Write a function called cube that returns the cube of x
 */

// function cube(x){
//   return x * x * x;
// }


//Why are we printing an undefined in the below code?

//function simpleFunctionA() {
//  return "Hello simple function A";
//}
//
//function simpleFunctionB() {
//  console.log("Hello simple function B");
//}
//
//console.log(simpleFunctionA(), "--> From running Simple Function A");
//console.log(simpleFunctionB(), "--> From running Simple Function B");