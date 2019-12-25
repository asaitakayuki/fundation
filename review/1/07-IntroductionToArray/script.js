'use strict'
// Please don't delete the 'use strict' line above

//declare expetected actual
let expected;
let actual;
// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
//if (JSON.stringify(actual) === JSON.stringify(expected)) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

//function numberOfPeople(array){
//    return array.length;
//}
//
//actual = numberOfPeople(["Kimiko","Yan","Dustin","Dylan"]);
//expected = 4;
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


/**
 * Declare an array called students and fill it with five classmates sitting around you. Invoke numberOfPeople using the array of students as the input!
 */

//let students=["Bob","Kimiko","Stephon","Atila","Yan"]
//
// function numberOfPeople(students){
//    students.push("Jobs");
//    students.push("Bill")
//    students.push("TimCock")
//    return students.length;    
//}
//
// if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}
//

/**
 * 3.Add three more values to your students array using the .push method.
 */

//actual = numberOfPeople(students);
//expected = 8;
//
////TEST
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}


/**
 * 4.Declare a function called returnlast
 */


// function returnLast(array){
//     return array.pop();
// }
//
// //TEST
//actual = returnLast(students);
//expected = "Yan";
//
//
//if (actual === expected) {
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}

/**
 * 5.Instead of using the built-in .push method
 */

//let array=[1,2,3,4]
//
//function push(array,element){
//  array[array.length] = element;
//  return array.length;
//}
//
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
//// Test that the function modifies the given array correctly.
//actual = array;
//expected = [1,2,3,4,5];
//
//// test
//if(JSON.stringify(actual) === JSON.stringify(expected)){
//  console.log("Yay! Test PASSED.");
//} else {
//  console.error("Test FAILED. Keep trying!");
//  console.log("    actual: ", actual);
//  console.log("  expected: ", expected);
//}