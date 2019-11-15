'use strict'
// Please don't delete the 'use strict' line above

//1.Get all  of the p elements using the correct method.
console.log(document.getElementsByTagName('p'))

//2.Get all of the p elements that have the class inner-paragraph using the correct method.
document.getElementsByTagName('p').getElementsByClassName('inner-paragraph');

//I have no idea why it does not works property.....
//console.log(paragraph.getElementsByClassName('inner-paragraph'))