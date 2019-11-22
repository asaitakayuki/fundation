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

/**
 * 
 * 18.warmup
 */

 /**
 * 
 * This code is answer by teacher(elia)
 */

// Loop function 
//function getNamesLoop(arr) {
//  let outputArray = [];
//  for (let val of arr) {
//    outputArray.push(val['name']);
//  }
//  return outputArray;
//}
//  // Map function with anonymous function
//function getNamesMap(arr) {
//  return arr.map(function(element) {
//    return element.name;
//  })
//}
//  // Map function with arrow function
//function getNamesMapArrow(arr) {
//  return arr.map(element => element.name);
//}
//
//const arrayOfObjects =[
//    {name:"alice", favoriteColor:"green" },
//    {name:"bob", favoriteColor:"blue" },
//];
//
//console.log('warmup testA: ', test(getNamesLoop(arrayOfObjects), ["alice", "bob"]));
//console.log('warmup testB: ', test(getNamesMap(arrayOfObjects), ["alice", "bob"]));
//console.log('warmup testC: ', test(getNamesMapArrow(arrayOfObjects), ["alice", "bob"]));

/**
 * how to use Array.map
 */

/** 
 *for exmaple. I impliment doubleNumber funtion using Array.map.
*/

////declare function.
//function doubleNumber(element){
//  return element * 2;
//}
//
////declare arry
//const originalArray = [1,2,3,4,5];
//
//const newArray = originalArray.map(doubleNumber);
//
//console.log(newArray);

/**
 * for exmaple.I impliment squre function usging Array.map.
 */

 //declare square function
//function square(element){
//  return element * element;
//}
//
//let originalArray = [1,2,3,4,5]
//
////decleare new array using 
//let newArray = originalArray.map(square);
//
//console.log(newArray);

/**
 * Anoymous function.
 * 
 * If we are only using the doSomething function withnin map.
 * we do not need to declear function in advacne.
 */

 //just do it.samle

// let originalArray = [1,2,3,4,5]
//
// let newArray = originalArray.map(function(element){
//   return element * element;
// })
//
// console.log(newArray);


/**
 * Lecture
 */

 /**
  * why it is impormant?
  * Write evenArray function.
  * what do I decsribe??
  * 1.initilize array.
  * 2.check whether even or not.
  * 3.return the result array.
  * 
  * SO,LET US GET STARTED.
  */
//function evenCheck(array){
//  let result = [];
//
//  for(let element of array){
//    if(element % 2 === 0){
//      result.push(element);
//    }
//  }
//
//  return result;
//}
//
//console.log(evenCheck([2,3,4,5,6]))

/**
 * How about this one.
 */


 /**
  * what is going on?
  * 2,3,4,5,6
  * ↓
  * 4,5,6
  * And,Let's impliment this!!
  * 
  */

//function isGreaterThanThree(array){
//  //initialize result array
//  let result = [];
//  for(let element of array){
//    if(element > 3){
//      result.push(element);
//    }
//  }
//  return result;
//}
//
//console.log(isGreaterThanThree([2,3,4,5,6]));

/**
 * How to filter
 */
//function isEven(element){
//  return element % 2 === 0;
//}
//
//const originalArray = [2,3,4,5,6];
//
//const newArray = originalArray.filter(isEven);
//
//console.log(newArray);

/**
 * Arrow function
 * 
 * anoymous function.
 * 
 */
// const originalArray = [2,3,4,5];
//
// const filterArray =
//  originalArray
//  .filter(function(element){
//    return element > 3;
//  })
//  
//
//console.log(filterArray);

//declare array
//const originalArray = [1,2,3,4,5,6];

/**
 * I describe function with using arrow function...
 * syntax
 * .filter({paramter} => {condition})
 */
//const fileterArray = originalArray.filter(element => element > 3);

//console.log(fileterArray);

/**
 * HOFs + chain + arrow function
 */

// const originalArray = [2,3,4,5,6];
//
// const filterArray =
//  originalArray
//  .filter((x) => x % 2 === 0) //should be [2,4,6]
//  .filter((x) => x > 3) //should be [4,6]
//  .map((x) => x * 2) //should be [8,12]
//
//  console.log(filterArray);


/**
 * Basic Requirement
 */

/**
 * 1.Declare a function isMultipleOfTen. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.
 */

 // Your code here

//function isMultipleOfTen(element){
//    return element % 10 === 0;
//}
//
//const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
//
//test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
//test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);


/**
 * 2.Declare a function hasAVowel. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.
 */
//function hasAVowel(element){
//  console.log(element);
//  let result = [];
//  if(['a','e','i','o','u'].indexOf(element) !== -1){
//    result.push(element);
//  }
//  return result;
//}
//
//const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
//const arrayOfStrings2 = ["bhg", "waa", "cvb"];
//
//test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
//test(arrayOfStrings2.filter(hasAVowel), ["waa"]);


/**
 * 3.Declare a function getPositiveNumbers. This function should call .filter. You should use an arrow function for this. The arrow function will be used within getPositiveNumbers.
 */

//function getPositiveNumbers(array){
//  let result = [];
//
//  for(let i=0;i < array.length;i++){
//    if(array[i] > 0){
//      result.push(array[i]);
//    }
//  }
//    return result;
//}
// 
// Your code here


//function getPositiveNumbers(array){
//  const filteredArray = 
//  array
//  .filter(function(element){
//    return element > 0;
//  });
//
//  return filteredArray;
//}
//test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
//test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
//test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
//test(getPositiveNumbers([-2, -4]), []);

/**
 * 4.Declare a function getQuestions. This function should call .filter. You should use an arrow function for this. The arrow function will be used within getQuestions.
 */

 // Your code here
function getQuestions(array){
  const filteredArray =
  array
  .filter(function(element){
    if(element[0] === element[0].toUpperCase()){
      if(element[element.length -1] === "?"){
        return element;
        console.log("Uppsercase and question mark.");
      }
    };
  })
    return filteredArray;
}

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
];

test(getQuestions(arrayOfStrings3), [
  "What in the world?",
  "Do you want to know a secret?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
  "Do you want to know a secret?",
]);