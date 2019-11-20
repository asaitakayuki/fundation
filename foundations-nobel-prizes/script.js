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
let tagH4 = document.createElement("h4");

// add classname(year) to tagH4
tagH4.className = "year";

//console.log(tagH4)
// describe text year.
let yearText = document.createTextNode(yearElement);

//append year of text
tagH4.appendChild(yearText);

// attent year to html file.
document.getElementsByTagName("h1")[0].appendChild(tagH4);

// get category data from JSON.
let categoryElement = mydata.prizes[0].category;

//// create text for html.
let categoryText = document.createTextNode(categoryElement);

let categorytagH4 = document.createElement("h4");

categorytagH4.className="category";

categorytagH4.appendChild(categoryText);

// append category to next year tag.
//document.getElementsByClassName("category")[0].appendChild(categroytagH4);
console.log(document.getElementsByClassName("year")[0].appendChild(categorytagH4));

//