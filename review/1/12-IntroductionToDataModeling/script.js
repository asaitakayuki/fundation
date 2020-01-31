'use strict'
// Please don't delete the 'use strict' line above

/**
 * lecture
 */

 // Nested Obejct
 // I practice manipulate the nested Obejct...
//
// const pets = [
//     {
//         type: 'cat',
//         name: 'Meowze',
//         colors: [
//             'black',
//             'tan',
//             'whilte'
//         ]
//     },
//     {
//         type: 'cat',
//         name: 'Miwa',
//         owner: {
//             name: 'fleix'
//         }
//     },
//     {
//         type: 'dog',
//         name: 'Hana',
//         colors: [
//             'brown',
//             'black',
//             'white'
//         ]
//     }
// ]
//
////manipulate nested object and array
////Before executing your code,I should expect the result..
//
//console.log(typeof pets[2]);//typeof returns type of data...So,I think should be return object.
//console.log(pets[1]); //return the object data including owner key.....
//console.log(pets[1].type);//cat.indicate the posion in pets obejct.And,key value type return cat!!!
//console.log(pets[0]['name']);//Meowze.pets[0] get the object index position 0. Get the value from key ..
//console.log(pets[1].colors);//undefined??There is not such a key value.(colors)


/**
 * Basic requirement
 */

 //1.

// const movies = [
//     {
//         title: "Death & Rebirth",
//         releaseDate: 19970315,
//         Director: "Hideaki Anno"
//         lengthOfFileInMinutes: 180
//     },
//     {
//         title: "Death & Rebirth",
//         releaseDate: 19970619,
//         Director: "Hideaki Anno"
//         lengthOfFileInMinutes: 85
//     }     
// ]
//
// //2.Write a factory function makeMovie.
// function makeMovie(title,releaseDate,sales,lengthOfFileInMinutes){
//     return (
//        {
//            title: title,
//            releaseDate: releaseDate,
//            sales: sales,
//            lengthOfFileInMinutes: lengthOfFileInMinutes
//        }
//     )
// }
//
// //3.make more five object and store them in an array called movies
////movies.push(makeMovie("Biohazard",1985,1000000,360));
////movies.push(makeMovie("twenty four",2001,123456,360));
////console.log(movies);
////console.log(makeMovie("mononokehime",20181021,1000000,180));
//
//////4.Declare a function displayMovie.
////function displayMovie(array){
////        console.log(array);
////}
////
//////TEST
////displayMovie(movies);
//
//
///**
// * 5.
// */
//
//function averageLength(array){
//    return array.length;
//}
//
//
//console.log(averageLength(movies)) //should be 1??

//function test(actual, expected) {
//  if (JSON.stringify(actual) === JSON.stringify(expected)) {
//    console.log("Yay! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Keep trying!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//    console.trace();
//  }
//}
//
//
//function countWords(string) {
//  let result = {};
//  let key = string.split(" ");
//  
//  //check empty data
//  if(key[0] === "") {
//      return result;
//  }
//
//  //count each word
//  for (let element of key) {
//    if (element in result) {
//      result[element] += 1;
//    } else {
//      result[element] = 1;
//    }
//  }
//  console.log(result);
//  return result;
//}
//console.log(test(countWords("hello hello"), { hello: 2 }));
//console.log(test(countWords("hello Hello"), { hello: 1, Hello: 1 }));
//console.log(test(countWords(""), {}));