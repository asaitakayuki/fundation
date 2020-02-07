'use strict'
// Please don't delete the 'use strict' line above

//declare a array
//const names = ["ichi","ni","san","yon"];
//
//
////for .. loop
//for (let i=0; i<4; i++){
//    for (let j=0; j>names.length;j++){
//        for(let k = 1; k < 3;K++){
//            console.log(names[j]);
//        }
//    }
//}

//const names = ["ichi", "ni", "san", "yon"];
//
//for (let i = 0; i < 4; i++) {
//  for (let j = 0; j < names.length; j++) {
//    for (let k = 1; k < 3; k++) {
//      console.log(names[j]);
//    }
//  }
//}

//My guesss
/**
 * line9
 * this is first loop.. 
 * conditioin:from zero to 3..
 * final ...:incriment
 * 
 *you should make a count table... 
 * Following print dispay 4 times....
 * ichi,ichi,ni,ni,san,san,yon,yon,....
 */

//2.Can you explan why?
 for (let i = 0; i < 2; i++) {
  console.log("a: " + i);
  for (let i = 0; i < 2; i++) {
    console.log("b: " + i);
    for (let i = 0; i < 2; i++) {
      console.log("c: " + i);
    }
  }
}

/**
 * predict what you expect will happen.
 * a:0
 * b:0
 * c:0
 * c:1
 * b:1
 * c:0
 * c:1
 * a:1
 * b:0
 * c:0
 * c:1
 * b:1
 * c:0
 * c:1
 */