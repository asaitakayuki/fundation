'use strict'
// Please don't delete the 'use strict' line above

// Basic Requirements
// 1
//
//let a="June 6";
//
//const b=a;
//
//a +="is my mother's birthday.";
//
//console.log(a); //should print "June 6 is my mother's birthday."
//console.log(b); //should print "June 6"
//
//2.I want to hold your hand
// 
//
//const theBeatles ={
//    bass: ["paul"],
//    drum: ["ringo"],
//    guitar: ["george","john"],
//    vocals:["george","john","paul","ringo"]
//};
//
//const theWannabes = theBeatles;
//theWannabes.bass.push("someone else");
//
//console.log(theBeatles.bass); //should be print ["paul","someone else"]
//console.log(theWannabes.bass);//should be print ["paul","someone else"]
//
//3.The best day of the week...
//
//const a ="Sunday"; //this is primitive type
//let b = a; //primitive type
//
//a += " is the best day of the week.";
//
//console.log(a); //should be print "Sunday is the best of the week."
//console.log(b); //should be print "Sunday".Because this is passed by value.
//4.A rainbow.
//const x = ["red","orange","yellow","green","blue","purple"];
//const y = x.slice(3);
//y[2] = "pink";
//
//console.log(x); //should print ["red","orange","yellow"]
//console.log(y); //should print 

//5Another slice.



//11 Warm up
//1.What gets printed at the end?
//let four=4;
//let secondFour=four;
//
//four=3;
//
//console.log(secondFour);//shoud be printed 4!!!
//
////2.What get printed?
//const cities = ["Seattle","NYC","Tokyo","SF"];
//const myCities = cities;


//function test(actual, expected) {
//    if (JSON.stringify(actual) === JSON.stringify(expected)) {
//      console.log("Yay! Test PASSED.");
//    } else {
//      console.error("Test FAILED. Keep trying!");
//      console.log("    actual: ", actual);
//      console.log("  expected: ", expected);
//      console.trace();
//    }
//  }
//
//
//const obj1 = { a: "A" };
//const obj2 = { a: "A", b: 2 };
//const obj3 = { a: "A", b: 2, c: "C", d: true };
//const obj4 = { a: "A", c: "C" };
//
//
//function filterObjectForStrings(object){
//    const result = []; //declare a object.
//    
//    for ( const obj in arrayOfObjects){
//        const filterObject = filterObjectForStrings(obj);
//        }
//    }
//
//    return result;// return 
//}
//
//test(filterObjectForStrings(obj1), obj1); // no change
//test(filterObjectForStrings(obj2), obj1); // don't include "b"
//test(filterObjectForStrings(obj3), obj4); // don't include "b" or "d"

////2.
//function greeting() {
//    console.log("Hello!");
//  }
//  
//  function runSomething(func) {
//    //func();
//    func; //I think it dose not matter either...
//  }
//  
//runSomething(greeting);
//
//
////3.Why does the code below NOT work?
////Hint: What value does the greeting function return? nothing??
////Hint: What does runSomething do?retrun the function with paramater??
//runSomething(greeting());

//Excercise
//Basic Requirement
//1.Write returnAll as a function expression rather than a function declaration.

//console.log(returnAll(5));
//
//function returnAll(value){
//    return value;
//}

//noisting:can't execute function..
//console.log(returnAll(5));

//const returnAll = function(value){
//    return value;
//}


//2.What typeof are the following outputs when invoking returnAll?
// Example
//console.log(typeof returnAll(false)); // boolean
//
//console.log(typeof returnAll(5)); // ???
//console.log(typeof returnAll("5")); // ???
//console.log(typeof returnAll([])); // ???
//console.log(typeof returnAll({ a: 1 })); // ???
//
//function foo() {
//  return "hi";
//}
//
//console.log(typeof returnAll(foo)); // ???
//console.log(typeof returnAll(foo())); // ???

//While loops and For loops
let index = 0;

//while (index <= 4) {
//  console.log("hello!");
//  index++;
//}

//for(let index=0;index <= 4;index++){
//  console.log("hello!");
//}

//2
//const array = ["a","b","c","d","e"];
//for (let i = 0; i < array.length; i++) {
//  console.log("Value:" + array[i], "Index" + i);
//}

//3Declare a function sayFourHellos. sayFourHellos uses a for-loop to print "Hello!" four times.
//function sayFourHello(){
//    for(let i=1;i <=4;++i){
//        console.log("Hello");
//    }
//}
//
//sayFourHello();

//4.Declare a function called countDown that takes a start number and prints numbers counting down from the start to 0. Use a for-loop.
//function countDown(startNumber){
//    for(let i = startNumber; i >= 0 ;--i){
//        console.log("Value:" + i);
//    }
//}
////TEST
//countDown(100);

//Test function
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

//Excercise
// Basic Requiment
//1.Declare a function called sayHellos that takes a number n as an input and uses a for-loop to print "Hello!" n number of times.
//function sayHellos(countNumber){
//    for(let i = countNumber;i > 0;--i){
//        console.log("Hello!");
//    }
//}
//
////TEST
//sayHellos(10);
//

//2.Declare a countToTen function that prints the numbers up to ten, each on a new line.
//Hint: inside of the body of the for-loop, you will need to console.log your index!

//function countToTen(){
//    for(let i = 1;i <= 10;++i){
//        console.log(i);
//    }
//}
//
////TEST
//countToTen();

//13
//Warm up
//1.Declare a function called sayHelloToFriends
//function sayHelloToFriends(friends){
//    // init
//    let arrayHelloFriends =[];
//    
//    // retrive data
//    for(let i=0;i < friends.length;++i){
//        arrayHelloFriends.push("Hello, " + friends[i] + "!");
//    }
//    // return words
//    return arrayHelloFriends;    
//}
//
//const friends = ["Mario", "Luigi"];
//test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
//


//