'use strict'
// Please don't delete the 'use strict' line above

//create a ramdp, cp;pr strong.

function changeBackgroundColor(){
    let colorR = Math.floor(Math.random() * (255 - 9) + 9);
    let colorG = Math.floor(Math.random() * (255 - 9) + 9);
    let colorB = Math.floor(Math.random() * (255 - 9) + 9);
    let rgbValue = "rgb" + "(" + colorR + "," + colorG + "," + colorB + ")";
    console.log(rgbValue);
    console.log("colorR:",colorR);
    console.log("colorG:",colorG);
    console.log("colorB:",colorB);
    let rootElement = document.documentElement;
    rootElement.style.backgroundColor = rgbValue;
}

//2.assign the newly create color string to the root elmenet on the page.
const target = document.getElementById('button-change-color');
target.addEventListener('click',changeBackgroundColor);

//target.addEventListener('click',changeBackgroundColor()); It doesn't work property...why?