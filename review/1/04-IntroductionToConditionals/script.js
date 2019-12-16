'use strict'
// Please don't delete the 'use strict' line above

/**
 * Exercise
 * Basic Requirement
 */

 /**
  * 1.Fix the bellow code.
  */

//function returnTrue(){
//    if(1 == 1){
//        return true;
//    }
//}
//
//console.log(returnTrue()); 
//console.log(returnTrue); //without paratheses.... what is going on??


/**
 * 2.Fix the code below.
 */

// function simplePasswordLock(password) {
//  if ((password === "password")) {
//    return "Correct! Welcome.";
//  }else {
//    return "Incorrect password, please try again.";
//  }
//}
//
////TEST
//console.log(simplePasswordLock("qwerty")); // should return "Incorrect password, please try again."
//console.log(simplePasswordLock("password")); // => "Correct! Welcome."


/**
 * 3.Do you remember .length property?...blahh,blha,,,,..
 * Yah.this property return value which is number of character...
 */

//console.log("Hello".length); 
//console.log("The length of this string is 31".length);
//console.log(" spaces! ".length);
//console.log("Hello World!!".length) 

/**
 * 4.Declare function called isitTooLong that take a string as input.
 * 
 */
//function isitTooLong(str){
//    if(str.length > 10){
//        return true;
//    }else {
//        return false;
//    }
//}
//
////TEST
//console.log(isitTooLong("Hello World!!")); //it return true...
//console.log(isitTooLong("Hellow")); //it return false...

/**
 * 5.Add conditionals to function below so that it returns whichever number is bigger. Look at the test cases below to see how it’s supposed to work.
 */
//function biggerNumber(numOne,numTwo){
//    if(numOne > numTwo){
//        return "The first argument is bigger.";
//    }else{
//        return "The second argument is bigger.";
//    }
//}

//TEST
//console.log(biggerNumber(4,3));
//console.log(biggerNumber(3,4));

/**
 * 6.Declare a function printDataType
 */

//function printDataType(data){
//    if(typeof data === "string"){
//        console.log("This is string");
//    }else if(typeof data === "boolean"){
//        console.log("This is a boolean");
//    }else if(typeof data === "number"){
//        console.log("This is a number");
//    }else if(typeof data === "undefined"){
//        console.log("This is not a string, boolean, or number");
//    }
//}
//
//printDataType("Hello world!!")
//printDataType("Hello!"); // should print "This is a string."
//printDataType(true); // => "This is a boolean."
//printDataType(42); // => "This is a number."
//printDataType(undefined); // should print "This is not a string, boolean, or number."

/**
 * 7.Create a function called greeting that takes in two parametes......blahh
 */

// function greeting(name,language){
//    if(language == "Japanese"){
//        return "Konnichiwa," + name + "!";
//    }else if(language == "English"){
//        return "Hello," + name + "!";
//    }else if(language == "German"){
//        return "Gutentag," + name + "!";
//    }else if(language == "Spanish"){
//        return "Hola," + name + "!";
//    }else{
//        return "I don't know your language.";
//    }
// }
//
// //TEST
//console.log(greeting("Harry Potter", "Japanese")); // should print "Konnichiwa, Harry Potter!"
//console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
//console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
//console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"
//

/**
 * 8.Create a function called isEven that returns true If the number is even
 */

// function isEven(number){
//    //check type of data.
//    if(typeof number == "number"){
//        if(number % 2 == 0){
//            return true;
//        }else{
//            return false;
//        }
//    }else{
//        return "input a number!"
//    }
// }
//
// //TEST
//console.log(isEven(4)); // should print true
//console.log(isEven(7)); // => false
//console.log(isEven("Hello")); // => should print "input a number!"