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

//1.Declare a function called pluck

const arrayOfObjects =[
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
]

function pluck(arrayOfObjects,keyName){
    //declare the result array
    let result=[];
    //Get value of array with using index postion.
    for(const arrayOfValue of arrayOfObjects){
    //Next,get each value in objects with for..loop.
    //a,b,c
        for(const key in arrayOfValue ){
            if( key === keyName){
                result.push(arrayOfValue[key]);
            }
        }
    }
    //return arrays.
    return result;
}

console.log(pluck(arrayOfObjects,"b"));
test(pluck(arrayOfObjects,"b"),[2,5,8]);
