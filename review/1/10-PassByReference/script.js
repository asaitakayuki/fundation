'use strict'
/**
 * 2.I want to hold your hands..
 */

//const theBeatles = {
//    bass: ["paul"],
//    drums: ["ringo"],
//    guitar: ["george", "john"],
//    vocal: ["goerge","john","paul","ringo"],
//}
//
//const theWananaes = theBeatles;
//theWananaes.bass.push("takayuki");
//
//console.log(theBeatles);
//console.log(theWananaes);


/**
 * 2.The best day of week.
 */

//const a = "Sunday";
//
//let b = a;
//
//a += " is the best day of week";
//
//console.log(a); //should be printed "Sunday is the best day of week."
//console.log(b); //should be printed "Sunday" 
//
//const a = "Sunday";
//
//let b = a;
//
//a += " is the best day of the week.";
//
//console.log(a); // ???
//console.log(b); // ???

/**
 * 5.Another slice.
 */

const x =[[1,2,3],[4,5,6]];
const y =x.slice(1);
y[0] = "pink";

console.log(x[1]);// [4,5,6]
console.log(y[0]);// pink??