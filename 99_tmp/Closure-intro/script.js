'use strict'

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

// Please don't delete the 'use strict' line above
/*
    Exercises
    Basic Requirements
*/

/*
Take a look at the closure below. It’s already set up for you! Can you identify which variable lives in a SECRET closure scope?

When you are ready, uncomment each line of code below the function. Make sure you understand what each line is doing. Ask if you are unsure!

*/

//function createPasswordProtectedAccount(userChosenPassword) {
//  const savedPassword = userChosenPassword;
//
//  function checkPassword(passwordEntered) {
//    if (savedPassword === passwordEntered) {
//      console.log("Correct password. Access granted!");
//    } else {
//      console.log("Wrong password. Access denied.");
//    }
//  }
//
//  return checkPassword;
//}
//
//const account = createPasswordProtectedAccount("Test1234"); // Add your initial password in as an argument
//account("8skwob"); // Add the wrong password in as an argument! => "Wrong password. Access denied."
//account("Test1234"); // Now add the correct password in as an argument. => "Correct password. Access granted!"

//3.We went over this in the lecture,....blaah.blaah....

//function add(x){
//    return function(y){
//        return  x + y;
//    }
//}
//const addFive = add(5);
//
////TEST
//test(addFive(1),6)



/**
 * 
 * 2.
 * Your turn! Take a look at the closure below.

Invoke createDonationAccount and assign its return value to a variable. If you do this correctly, you will see “The donation account has been created!” printed to your console.

Then, invoke it three times. If you do this correctly, you will see “2” printed to your console by the third time.
 * 
 */

//function createDonationAccount(){
//    let donations = 0;
//
//    function addDonation(){
//        ///console.log("call addDonation!");
//        console.log(donations);
//        donations += 1;
//    }
//    console.log("The donation account has been created!");
//    return addDonation;
//}
//
//const addDonation = createDonationAccount(); //should print 0?
//addDonation();
//addDonation();
//addDonation();


/**
 * 
 * 3
 * 
 * We went over this in the lecture, but try to write it by yourself without looking. Declare a function add that takes a input x. add returns a function that takes an input y. The inner function returns the value of x added to y.
 */

//I can not write programm...

//function add(x) {
//    function addFive(y){
//        return x + y;
//    }
//    return addFive;
//}
//
////console.log(add(6));
//const addFive = add(5);
//addFive(1);
////test(addFive(1),6);

/**
 * 
 * 4.
 * 
 * The below function works,but what has a major problem.What is it?
 * 
 */


//let counter = 0;
//function makeCounter(){
//    return function(){
//        counter += 1;
//        return counter;
//     };
//}
//
//const counterA = makeCounter();
//test(counterA(),1);
//test(counterA(),2);

//const counterB = makeCounter(); // This should get a NEW counter
//test(counterB(), 1);
//test(counterB(), 2);

/**
 * Q.what is major program?
 * A.
 * 1.declear variable as global scope.
 * It should be declear within makeCounter function.
 * block scope..
 *  
 * 2.return function.
 * (I feel something is wrong...But I don't make sure that.....)
 * 
 */


