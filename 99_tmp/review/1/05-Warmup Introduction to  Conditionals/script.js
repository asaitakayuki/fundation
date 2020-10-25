'use strict'
// Please don't delete the 'use strict' line above

/**
 * 1.Fix the code.
 */

//function isHot(temperature){
//    if(temperature > 30){
//        return "It's hot!";
//    }else{
//        return "It's not hot!.";
//    }
//}
//
////TEST
//console.log(isHot(31)); //should print It's hot!.
//console.log(isHot(2)); //should print It's not hot!.
//console.log(isHot(30)); //should print It's hot!.


/**
 * 2.This function too.
 */

function getTypeOfSchool(age){
    if(age < 6){
        return "kindergarten";
    }else if(age < 11){
        return "elementary school";
    }else if(age < 15){
        return "junior high school";
    }else if(age < 18){
        return "high school";
    }else{
        return "after high school";
    }
}

//TEST
console.log(getTypeOfSchool(3));
console.log(getTypeOfSchool(8));
console.log(getTypeOfSchool(12));
console.log(getTypeOfSchool(16));
console.log(getTypeOfSchool(30));