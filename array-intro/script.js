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

const students = ["Dan","Kingsley","Yuki","Ryohei","Ashley"];

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
//


// For ..of loop
// for example.
const greetings = [
    "hello","hola","konnichiwa" //there are three elements.s
]

function sayHello(name){
    const greetingArray = []; //initilize Arrays

    for(const greeting of greetings){
        greetingArray.push(greeting + "" + name); //do somethings
    }
    return greetingArray; //return Arrays
}

console.log(sayHello("Jen"));