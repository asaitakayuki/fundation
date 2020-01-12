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
 * Basic Requirement
 */

//const hellos={
//    English: "Hello",
//    Japanese: "konnichiwa",
//    German: "Holla",
//    Spanish: "Hola",
//    rabic: "Ahlan wa sahlan",
//    Chinese: "Nihao",
//};
//
//
//function sayHello(object){
//    for(const message in object){
//        console.log(message);
//    }
//}
//
////TEST
//console.log(sayHello(hellos));

/**
 * 2.Declare a function getKeys
 */

const object1 = {a:1,b:2,c:"hello"};
const object2 = {1:"a",2:"b","hello":"c"};

//function getKeys(object){
//    const result=[];
//
//    for(const key in object){
//        result.push(key);
//    }
//
//    return result;
//}
//
//test(getKeys(object1),["a","b","c"]);
//test(getKeys(object2),["1","2","hello"]);

///**
// * 3.Declare the getValue
// */
//
//function getValue(object){
//   const result=[];
//
////   for(const key in object){
////      result.push(objects[key]);
////   }
//
//
//    for(const value of Object.values(object)){
//        result.push(value);
//    }
//
//  return result;
//}
//
//test(getValue(object1),[1,2,"hello"]);

/**
 * 4.printAll.Fix the code!
 */
//const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
//function printAll(object) {
//  for (let key in object) {
//    console.log(object.key);
//  }
//}
//printAll(myObj);
//

/**
 * 5.Declare a function swapPairs
 */

//const object3 = { a: 1, b: 2, c: 3, d: 4 };
//const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };
//
//
//function swapPairs(object){
//    const result = {};
//
//    for(const key in object){
//        result[object[key]]=key;
//    }
//    return result;
//}
//
//test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
//test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });


//Review Array and Object

/**
 * 1.
 */


const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
///
///function getFirstObjectValues(array){
///    const result=[];
///
///    for(const key in array[0]){
///        result.push(array[0][key]);
///    };
///
///    return result;
///}
///console.log(getFirstObjectValues(collection));
///console.log(getFirstObjectValues(collection.slice(1)));


/**
 * 2.Declare a function getAllValues.
 */

//function getAllValues(array){
//    const result=[];
//
//    for(const element of array){
//        for(const key in element){
//            result.push(element[key]);
//        }
//    }
//
//    return result;
//}
//
//test(getAllValues(collection),[1,2,3,3,4,100]);
//test(getAllValues(collection.slice(1)),[3,3,4,100]);

/**
 * 3.Declare a function selectAllValues.
 */

// function selectAllValues(array,character){
//    const result=[];
//
//    for(const element of array){
//        for(const key in element){
//            if(key === character){
//                result.push(element[key]);
//            }
//        }
//    }
//
//    return result;
// };
//
//test(selectAllValues(collection, "a"), [1, 3, 100]);
//test(selectAllValues(collection, "b"), [2, 3, 4]);