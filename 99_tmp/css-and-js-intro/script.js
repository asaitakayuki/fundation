'use strict'
// Please don't delete the 'use strict' line above


//TEST for including script.js.
console.log("Hello");

/**
 * Basic Requriment
 */

 /**
  * Select the first .title element and change its font size to 20px
  */

let classElements =document.getElementsByClassName('title')

console.log(classElements[0]);
//.style.fontSize="20px";
//for (titleElement of titleArray){
//    console.log(titleElement);
//    titleElement.style.fontSize= "100px";
//}
//firstTitle.style.fontSize = "220px";

//console.log(classElements);
for (const element in classElements){
    //element.style.fontsize = "100px";
}