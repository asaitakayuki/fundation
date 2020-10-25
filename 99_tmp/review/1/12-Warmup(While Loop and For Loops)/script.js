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

//1.Declare the function sayHelloToFriends.
function sayHelloToFriends(array){
    const result=[];
    let i=0;
    while(i < array.length){
        result.push("Hello, " + array[i] + "!");
        i++;
    }
    return result;
}

const friends=["Mario", "Luigi"];
console.log(sayHelloToFriends(friends));
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

