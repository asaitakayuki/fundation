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

let yearElement = mydata.prizes[0].year;

// create h2 tag
let yeartagH4 = document.createElement("h4");

// add classname(year) to tagH4
yeartagH4.className = "year";

//console.log(tagH4)
// describe text year.
let yearText = document.createTextNode(yearElement);

//append year of text
yeartagH4.appendChild(yearText);

// attent year to html file.
document.getElementsByTagName("h1")[0].appendChild(yeartagH4);

// get category data from JSON.
let categoryElement = mydata.prizes[0].category;

let categorytagH5 = document.createElement("h5");

categorytagH5.className = "category";

document.getElementsByClassName("year")[0].appendChild(categorytagH5);

//// create text for html.
let categoryText = document.createTextNode(categoryElement);

categorytagH5.appendChild(categoryText);

// motivative lastnamee firstname

let motivative1 = mydata.prizes[0].laureates[0].motivation
let motivative2 = mydata.prizes[0].laureates[1].motivation
let motivative3 = mydata.prizes[0].laureates[2].motivation

let firstname1 = mydata.prizes[0].laureates[0].firstname
let firstname2 = mydata.prizes[0].laureates[1].firstname
let firstname3 = mydata.prizes[0].laureates[2].firstname

let surname1 = mydata.prizes[0].laureates[0].surname
let surname2 = mydata.prizes[0].laureates[1].surname
let surname3 = mydata.prizes[0].laureates[2].surname

//
let motivateText = document.createTextNode(motivative1 + " " + firstname1 + " " + surname1);

let motivatetagH5 = document.createElement("h5");

motivatetagH5.className = "motivateLine";

motivatetagH5.appendChild(motivateText);

document.getElementsByClassName("category")[0].appendChild(motivatetagH5);

for(let i =0; i < mydata.prizes.length;i++){
    let obj1 = mydata.prizes[i];
    let yearText = obj1.year;
    let yeartagH4 = document.createElement("h4");
    
    yeartagH4.appendChild(yearText);



    console.log(obj1);
    console.log(obj1.year);
    console.log(obj1.category);
    console.log(obj1.laureates[0].firstname);
    //let laureatesArray = obj1.category.laureates;
    //console.log(laureatesArray[0].id);
}