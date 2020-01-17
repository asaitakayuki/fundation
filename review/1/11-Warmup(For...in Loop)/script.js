'use strict'
// Please don't delete the 'use strict' line above


//test code
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

//declare the variables..
const obj1 ={ a:"A"};
const obj2 ={ a:"A", b:2};
const obj3 ={ a:"A", b:2, c:"C", d:true};
const obj4 ={ a:"A", c:"C" };


function filterObjectForStrings(){

}

test(filterObjectForStrings(obj1))