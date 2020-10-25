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

//Pair work
////What is wrong with the following function? Please fix the code.
//
//function addOne(number){
//    return number + 1;
//}
//
////TEST
//test(addOne(5), 6);
//test(addOne(50), 51);
//
//2.For the code below, which is correct, A or B?
//B


//function doSomething(value, action) {
//    return action(value);
//  }
//  
//  function greeting(name) {
//    return `Hello ${name}`;
//  }
//  
//  //test(doSomething("Alex", greeting()), "Hello Alex"); // A
//  test(doSomething("Alex", greeting), "Hello Alex"); // B
//1.invoke ation(value) like greeting("Alex")
//2.function greeeting returns "Hello Alex"

//3.What get printed?
//let x = "Outside x";
//function bar() {
//  let x = "Inside x";
//  return "This is bar!";
//}
//
//bar();
//console.log(x);
//


//Excesise
//Basic Requirement
//1.Take a look at the closure below. It’s already set up for you! Can you identify which variable lives in a SECRET closure scope?

function createPasswordProtectedAccount(userChosenPassword) {
    const savedPassword = userChosenPassword;
  
    function checkPassword(passwordEntered) {
      if (savedPassword === passwordEntered) {
        console.log("Correct password. Access granted!");
      } else {
        console.log("Wrong password. Access denied.");
      }
    }
  
    return checkPassword;
  }
  
   const account = createPasswordProtectedAccount("Test1234"); // Add your initial password in as an argument
   account("8skwob"); // Add the wrong password in as an argument! => "Wrong password. Access denied."
   account("Test1234"); // Now add the correct password in as an argument. => "Correct password. Access granted!"