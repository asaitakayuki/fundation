'use strict'
// Please don't delete the 'use strict' line above
/**
 * declear the variable.
 */
let mydata = nobels; // read the nobels.js
let element1 = document.createElement("h1");
let text = document.createTextNode("Nobel Prize Winner");

/**
 * Append an desciption(Nobel prize winner).
 */
element1.appendChild(text);
document.getElementsByTagName("body")[0].appendChild(element1);

/**
 * Append Nobel prize winner using for ..loop.
 */

 for(let i =0; i < mydata.prizes.length;i++){
    /**
     * declear variables(object for nobels.js year category)
     */
    let obj1 = mydata.prizes[i];
    let yearText = document.createTextNode(obj1.year);
    let yeartagH4 = document.createElement("h4");
    let categoryText = document.createTextNode(obj1.category);
    let categoryTagH4 = document.createElement("h4");

    /**
     * create a tag and append text to it.
     */
    yeartagH4.appendChild(yearText);
    document.getElementsByTagName("body")[0].appendChild(yeartagH4);
    categoryTagH4.appendChild(categoryText);
    document.getElementsByTagName("body")[0].appendChild(categoryTagH4);

    /**
     * get nobel prize info(firstname,surname,motivation) using for loop.
     */
        for(let j = 0;j < mydata.prizes[i].laureates.length;j++){
            /**
             * get nobel prize values.
             */
            let firstNameText = document.createTextNode(obj1.laureates[j].firstname);
            let surNameText = document.createTextNode(obj1.laureates[j].surtname);
            let motivationText = document.createTextNode(obj1.laureates[j].motivation);
       
            /**
             * ceate tag and append nobel prize info to html file.
             */
            let tagH5 = document.createElement("h5")
            tagH5.appendChild(motivationText);
            document.getElementsByTagName("body")[0].appendChild(tagH5);
        }

        //just debugging.
        console.log(obj1);
}