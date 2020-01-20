'use strict'
// Please don't delete the 'use strict' line above
/**
 * lecture
 */

//Review two kind of for loop

//
//function loopByArray(){
//
//const colors = [
//  'red',
//  'green',
//  'blue'
//]
//
//for (const color of colors){
//    console.log(color);
//  }
//}
//
////invoking the function
//loopByArray();
//
//function loopByObject(){
//
//const cars = {
//  name: "skyline",
//  manufacturer: "nissan",
//  price: 400
//}
//
//for(const key in cars){
//  console.log(cars[key]);
//}
//console.log(cars.name);
//console.log(cars.manufacturer);
//}
//
////calling the function
//loopByObject();



//Imagine that you want to count to 10....

//let counter = 1;
//
//while(counter <= 100){
//  console.log(counter);
//  counter++;
//}


//what will happen?
//const cars =["TOYOTA" ,"BMW" ,"Honda" ,"Volvo"];
//
//for(let index=0; index<4; index++){
// //initilazation:condition:final-expression
//  console.log(cars[index]);
//} 
//


//use car length porptery...
//const cars = ["Volvo", "BMW", "TOYOTA", "Honda"]
//
//for(let index=0; index < cars.length; index++){
//  console.log(cars[index]);
//}
//




//Basic requriment
//The boilerate test
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

////1.declare the sayhello function.
//function sayHello(count){
//  let counter = 0;
//
//  while(counter < count){
//    console.log("Hello!");
//    counter++;
//  }
//}
//
//sayHello(4);


//2.Declare a countToTen function that prints the numbers up to ten, each on a new line.

//function countToTen(){
//  let counter = 1;
//
//  while(counter <=10){
//    console.log(counter);
//    counter++;
//  }
//}
//
//countToTen();
//


//3.Convert the while-loop inside ....
//function counter(num){
//  let i=0;
//  while(i <num){
//    console.log(i);
//    i++;
//  }
//}
//
//counter(10);

//I declare the function as a for-loop.

//function counter(num){
//  for(let i=0;i<num;i++){
//    console.log(i);
//  }
//}
//
//counter(10);


//4.Declare function ...
//const animalArrays = ["dog", "cat", "snake", "penguin", "koala"]
//const animalArrays = "dog"
//
//function printArrays(array){
//  for(let i=0;i< array.length;i++){
//    console.log(animalArrays[i]);
//  }
//}
//
//printArrays(animalArrays);

//6.declare the function addOne

//const array1 = [1,2,3,4];
//
//function addOne(array){
//  const result=[];
//
//  for(let i=0;i<array.length;i++){
//    result.push(array1[i]+1);
//  }
//
//  return result;
//}
////TEST
//test(addOne(array1),[2,3,4,5]);
////TEST that the original test is untouched.
//test(array1,[1,2,3,4]);