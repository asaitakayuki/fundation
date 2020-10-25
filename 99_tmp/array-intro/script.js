'use strict'
// Please don't delete the 'use strict' line above

//function describeTheWeather(currentSeason,currentTemperature){
// write in English.
//First test.currentSeason:String:Spring temperature:warm
//expected value:Teh temperautre is normal for the season.

//declare variables
let actual;
let expected;

//check Spring --> warm
//    if (currentSeason === "Spring" && currentTemperature === "warm"){
//       return "The temperature is normal for the season."
//    }
//}
//
////TEST
//actual = describeTheWeather("Spring", "warm");
//expected = "The temperature is normal for the season.";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//actual = describeTheWeather("Spring", "cold");
//expected = "The temperature is unusual for the season.";
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

// Write more tests to make sure your code is correct.
//excesise
//Basic Requirements
// Declare a function called numberOfPeople.

// Arguments

// ([string]): an array of people’s names
// Returns

// (number): the length of the given array of names.

//function numberOfPeople(array){
//    array.push("Dan","Javier","Kota").length;
//    return array.length;
//}
//
//actual = numberOfPeople(["Kimiko", "Yan", "Dustin", "Dylan"]);
//expected = 4;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//2
//Declare an array called students and fill it with five classmates sitting around you. Invoke numberOfPeople using the array of students as the input!
//}
// Your code here.

//const students = ["Dan","Kingsley","Yuki","Ryohei","Ashley"];

// actual = numberOfPeople(students);
// expected = 5;

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

//3
//Add three more values to your students array using the .push method.

// Your code here.
//function numberOfPeople(array){
//    array.push("Atlia","Masataka","")
//}
//
//
//actual = numberOfPeople(students);
//expected = 8;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//4
// Declare a function called returnLast.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the last item in the given array

//function returnLast(array) {
// //  Your code here
//    return array.pop();
//}
//
// //Write your own test
//console.log(returnLast([1,2,3,4]));
//console.log(returnLast([1,"Hello",3,true]));

//5
//Instead of using the built-in .push method, let’s write our own. Declare a function push. You are not allowed to use the built-in .push method!
//
//Arguments
//
//([*]): an array of elements
//(*): the value to add to the end of the array
//Returns
//
//(number): the new length of the given array. The given array should also have the new given element at the end of it.


//function push(array,number){
//    let indexPosition = array.length + 1;
//    return array[indexPosition + 1]=number;
//}
//
//let array = [1,2,3,4]
//actual = push(array,5);
//expected = 5;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//
//// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
//// More about that in a future lesson.
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  }
  
  // Write your own tests

// 6

// For ..of loop
// for example.
//const greetings = [
//    "hello","hola","konnichiwa" //there are three elements.s
//]
//
//function sayHello(name){
//    const greetingArray = []; //initilize Arrays
//
//    for(const greeting of greetings){
//        greetingArray.push(greeting + "" + name); //do somethings
//    }
//    return greetingArray; //return Arrays
//}
//
//console.log(sayHello("Jen"));