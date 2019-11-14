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

const myMathObject = {
    sum: function(...args) {
      /* body of function */
      let sum = 0;
      for(let arg of args){
        sum += arg;
      }
      return sum;
    },
    product: function(...args) {
      let mult = 1;
      for(let arg of args){
        mult = mult * arg;
      }
        return mult;
    },
    isEven: function(number) {
        if( number % 2 === 0 ){
            return true;
        } else {
            return false;
        }
    },
  };

test(myMathObject.sum(1), 1);
test(myMathObject.sum(1, 2, 3), 6);

//product
test(myMathObject.product(1,2,3),6);