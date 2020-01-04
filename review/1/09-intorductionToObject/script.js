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
 * check the lecture
 */
//
////declare the object
//const information = {name:'Hana',dog:'true',age:12}
//
////How do we access the values in the object?
//
//console.log(information.name) //should be Hana
//console.log(information['name']) //should be Hana
//
////How do we add value into the object?
////create a key(sex) and assign value.
//information['sex']="male"
//
//
////Can you add a value suing dot notation?
//information.weight=20
////Can you update a value suing dot notation?
//information.weight=200


//Basic Requirements

////1.
//const myinfo = {name:'takayuki asai',age:32,location:'japan',isCoder:true}
//
////console.log
//console.log(myinfo["isCoder"])


//2.Morse code was used to send messages through a series of dots and dashes before telephones existed.

//const tar = ["-", ".-", ".-."];
//const morseCode = {t:tar[0],a:tar[1],r:tar[2]}
//
//console.log(morseCode.t); //should be printed -
//console.log(morseCode.a); //should be printed .-
//console.log(morseCode.r); //should be printed .-.
//


//3.turn "tar" into "art"

//function morseCodeArt(letter){
//const tar = ["-",".-",".-.",".- .-. -"]; //array
//const morseCode = {t:tar[0],a:tar[1],r:tar[2],art:tar[3]} //object
//
//return morseCode[letter];
//}
//
//
//test(morseCodeArt("a"), ".-");
//test(morseCodeArt("r"), ".-.");
//test(morseCodeArt("t"), "-");
//test(morseCodeArt("art"), ".- .-. -");

//4.Declear a function select
//function select(object,array){
//  const result={};
//  for(const element of array){
//      result[element] = object[element];
//  }
//  return result;
//}
//
////TEST
//test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
//test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
//test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
//test(select({ a: 1, b: 2, c: 3 }, []), {});

//const object = { a: 1, b: 2, c: 3 };
//const array = ['a'];
//const result = { a: 1};
//
//console.log(object['a']);
//console.log(object['a']);
//
////5.Declare a function countCharacter.
//function countCharacters(string){
//  const result={};
//  let num=0;
//  
//  for(const character of string){
//    if(result[character] === undefined){
//      result[character] = 1;
//    }else if(result[character] !== undefined){
//      result[character] += 1;
//    }
//  }
//  return result;
//}
//
//// TEST code
//test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
//test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });