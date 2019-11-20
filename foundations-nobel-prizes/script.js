'use strict'
// Please don't delete the 'use strict' line above

// describe Nobel prize Winners
// create tag
let element1 = document.createElement("h1");
// descirbe text
let text = document.createTextNode("Nobel Prize Winner");
// add ???
element1.appendChild(text);
//append text to html file.
document.getElementsByTagName("body")[0].appendChild(element1);

//read file(scripts.js)
let mydata = nobels;

// parse json file???
//let obj = JSON.parse(mydata);

//console.log(mydata[prizes].year);
console.log(mydata.prizes[0].year);
//console.log(obj);

let yearElement = mydata.prizes[0].year;

// create h2 tag
let elementh4 = document.createElement("h4");

// describe text year.
let yearText = document.createTextNode(yearElement);

//append year of text
elementh4.appendChild(yearText);

// attent year to html file.
document.getElementsByTagName("h1")[0].appendChild(elementh4);

//console.log(yearElement);


