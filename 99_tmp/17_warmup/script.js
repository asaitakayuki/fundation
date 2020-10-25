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

let refrigerator = [];

function getItemsInRefrigerator(){
    return refrigerator;
}

function putItemInRefrigerator(item){
   refrigerator.push(item) ;
   return refrigerator;
}

function removeItemFromRefrigerator(item){
    for(let i =0; i <= refrigerator.length; i++){
        if( refrigerator[i] === item){
            refrigerator.splice(i,1);
        }
    }
}

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);