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


//const arrayOfNames = ["zeno", "yanis", "xander"];
//const newArray = arrayOfNames.map(getGreeting);

//console.log(newArray);

function getGreeting(array){
    let result = [];

    for(let element of array){
        result.push("Hello, " + element + ".");
    }
    return result;
}

//console.log(getGreeting(arrayOfNames));

// Your code here
//function getGreeting(element){
//    return "Hello, " + element + ".";
//}
//
const arrayOfNames = ["zeno", "yanis", "xander"];
//
const arrayOfGreetings = ["Hello, zeno.", "Hello, yanis.", "Hello, xander."];
test(arrayOfNames.map(getGreeting), arrayOfGreetings);