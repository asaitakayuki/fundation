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

//const arrayOfObjects = [
//    { name: "alice", favoriteColor: "green" },
//    { name: "bob", favoriteColor: "blue" },
//  ];
//  
//  // Your code here
//function getNames(array){
//    return array.map(function(element){
//        return element.name;
//    })
//}
//
//
//function getFavoriteColors(array){
//    return array.map(function(elment){
//        return element.favoriteColor;
//    })
//}
//
//
////Loop
//function getNames(arr){
//    let outputArray = [];
//    for (let val of arr){
//        out
//    }
//}
//  test(getNames(arrayOfObjects), ["alice", "bob"]);
//  test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);
// Your code here
//function isMultipleOfTen(element){
//  if( element % 10 == 0){
//    return element;
//  }
//}


/**
 * 
 * 1.{Declare a function isMultipleOfTen. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.} element 
 */

//function isMultipleOfTen(element){
//  if( element % 10 === 0){
//    return element; 
//  }
//}
//
//const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
//
//arrayOfNumbers.filter(isMultipleOfTen);
//
//test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
//test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);


/**
 * Declare a function hasAVowel. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.
 */
//function hasAVowel(array){
//  let result = [];
//  // selecy each element.
//  for(let i = 0;i < array.length;i++){
//    var vowel_list = 'aeiou'
//    // check one vowel
//    if(){
//      result.push(array[i])
//    }
//
//  return result;
//  }
//}
//
//
//const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
//const arrayOfStrings2 = ["bhg", "waa", "cvb"];
//
//test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
//test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

/**
 * Declare a function getPositiveNumbers. This function should call .filter. You should use an arrow function for this. The arrow function will be used within getPositiveNumbers
 */

 function getPositiveNumbers(element){
    if(element > 0){
      
    }
 }

test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);